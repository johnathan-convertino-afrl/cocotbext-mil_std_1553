#******************************************************************************
# file:    mil_std_1553.py
#
# author:  JAY CONVERTINO
#
# date:    2025/03/06
#
# about:   Brief
# MIL-STD-1553 cocotb
#
# license: License MIT
# Copyright 2025 Jay Convertino
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to
# deal in the Software without restriction, including without limitation the
# rights to use, copy, modify, merge, publish, distribute, sublicense, and/or
# sell copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
# FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
# IN THE SOFTWARE.
#
#******************************************************************************
#"""
#
# Copyright (c) 2020 Alex Forencich
#
# Permission is hereby granted, free of charge, to any person obtaining a copy
# of this software and associated documentation files (the "Software"), to deal
# in the Software without restriction, including without limitation the rights
# to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
# copies of the Software, and to permit persons to whom the Software is
# furnished to do so, subject to the following conditions:
#
# The above copyright notice and this permission notice shall be included in
# all copies or substantial portions of the Software.
#
# THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
# IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY
# FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
# AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
# LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
# OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
# THE SOFTWARE.
#
# """

import logging

import cocotb
from cocotb.queue import Queue
from cocotb.binary import BinaryValue
from cocotb.triggers import FallingEdge, RisingEdge, Timer, First, Event, Edge

from manchester_code import encode, decode, decode_bits

from .version import __version__

# Class: MILSTD1553Source
# A mil-std-1553 transmit test routine.
class MILSTD1553Source:
    # Constructor: __init__
    # Initialize the object
    def __init__(self, data, rstn, *args, **kwargs):
        self.log = logging.getLogger(f"cocotb.{data._path}")
        # Variable: self._data
        # Set internal data connection to 1553 differential bus
        self._data = data
        #reset
        self._rstn = rstn

        self.log.info("MIL-STD-1553 source")
        self.log.info("cocotbext-mil_std_1553 version %s", __version__)
        self.log.info("Copyright (c) 2025 Jay Convertino")
        self.log.info("https://github.com/johnathan-convertino-afrl/cocotbext-mil_std_1553")

        super().__init__(*args, **kwargs)

        self.active = False
        self.queue = Queue()

        # Variable: self._base_delay
        # 1 MHz is 1000 nano seconds need half that due to manchester encoding method
        self._base_delay = Timer(1e3/2, 'ns')

        # Variable: self._idle
        # Event trigger for cocotb
        self._idle = Event()
        self._idle.clear()

        # Variable: self._data
        # Event trigger for cocotb
        self._data.setimmediatevalue(0)

        # Variable: self._run_cr
        # Thread instance of _run method
        self._run_cr = None
        self._restart()

    # Function: _restart
    # kill and restart _run thread.
    def _restart(self):
        if self._run_cr is not None:
            self._run_cr.kill()
        self._run_cr = cocotb.start_soon(self._run(self._data))

    # Function: write_cmdSYNTH_PARITY_BITS_PER_TRANS
    # Write data to send that uses the command sync
    async def write_cmd(self, data):
        if(self._check_type(data)):
            self.queue.put_nowait(self._cmd_sync)
            await self.queue.put(data)
            await self._idle.wait()
            self._idle.clear()

    # Function: write_data
    # Write data to send that uses the data sync
    async def write_data(self, data):
        if(self._check_type(data)):
            self.queue.put_nowait(self._data_sync)
            await self.queue.put(data)
            await self._idle.wait()
            self._idle.clear()

    # Function: write_nowait_cmd
    # Write data to send that uses command sync but do not wait after writting.
    def write_nowait_cmd(self, data):
        if(self._check_type(data)):
            self.queue.put_nowait(self._cmd_sync)
            self.queue.put_nowait(data)
            self._idle.clear()

    # Function: write_nowait_data
    # Write data to send that uses data sync but do not wait after writting.
    def write_nowait_data(self, data):
        if(self._check_type(data)):
            self.queue.put_nowait(self._data_sync)
            self.queue.put_nowait(data)
            self._idle.clear()

    # Function: count
    # How many items in the queue
    def count(self):
        return self.queue.qsize()

    # Function: empty
    # Is the quene empty?
    def empty(self):
        return self.queue.empty()

    # Function: idle
    # Is the queue empty and the _run is not active processing data.
    def idle(self):
        return self.empty() and not self.active

    # Function: clear
    # Remove all items from queue
    def clear(self):
        while not self.queue.empty():
            frame = self.queue.get_nowait()

    # Function: _check_type
    # Check and make sure we are only sending 2 bytes at a time and that it is a bytes/bytearray
    def _check_type(self, data):
        if isinstance(data, (bytes, bytearray)):
            if(len(data) == 2):
                return True
            else:
                print(f'DATA: {data} must be 2 bytes of byte bytes')
        else:
            self.log.error(f'DATA must be bytes or bytearray')

        return False

    # Function: _cmd_sync
    # Generate a command sync on the diff output
    async def _cmd_sync(self, data):
        data.value = 1
        await self._base_delay
        await self._base_delay
        await self._base_delay

        data.value = 2
        await self._base_delay
        await self._base_delay
        await self._base_delay

    # Function: _data_sync
    # Generate a data sync on the diff output
    async def _data_sync(self, data):
        data.value = 2
        await self._base_delay
        await self._base_delay
        await self._base_delay

        data.value = 1
        await self._base_delay
        await self._base_delay
        await self._base_delay

    # Function: wait
    # Wait for the run thread to become idle.
    async def wait(self):
        await self._idle.wait()

    # Function: _run
    # Thread that processing queue and outputs data in mil-std-1553 format.
    async def _run(self, data):
        self.active = False

        while True:
            if not self._rstn.value:
                await RisingEdge(self._rstn)
                continue
                
            sync = await self.queue.get()

            out_data = await self.queue.get()

            parity = 1

            encode_out_data = encode(out_data[::-1])

            for byte in out_data:
                for x in range(8):
                    parity ^= (byte >> x) & 1

            self.active = True

            self.log.info(f'Send {sync.__name__.upper()[1:]} : original word {out_data} : encoded word {encode_out_data} : parity bit {parity}.')

            await sync(data)

            # data bits
            for byte in encode_out_data:
                for x in reversed(range(8)):
                    bit = ((byte >> x) & 1)
                    data.value = ((~bit & 1) << 1) | (bit & 1)
                    await self._base_delay

            data.value = (parity & 1)  | ((~parity & 1) << 1)
            await self._base_delay
            data.value = (~parity & 1) | ((parity & 1) << 1)
            await self._base_delay
            data.value = 0

            self._idle.set()

            self.active = False

# Class: MILSTD1553Sink
# A mil-std-1553 transmit test routine.
class MILSTD1553Sink:

    # Constructor: __init__
    # Initialize the object
    def __init__(self, data, rstn, *args, **kwargs):
        self.log = logging.getLogger(f"cocotb.{data._path}")
        # Variable: self._data
        # Set internal data connection to 1553 differential bus
        self._data = data
        
        self._rstn = rstn

        self.log.info("MIL-STD-1553 sink")
        self.log.info("cocotbext-mil_std_1553 version %s", __version__)
        self.log.info("Copyright (c) 2025 Jay Convertino")
        self.log.info("https://github.com/johnathan-convertino-afrl/cocotbext-mil_std_1553")

        super().__init__(*args, **kwargs)

        self.active = False
        self.cmd_queue = Queue()
        self.data_queue = Queue()
        self.sync = Event()

        # Variable: self._base_delay
        # 1 MHz is 1000 nano seconds need half that due to manchester decoding method
        self._base_delay = Timer(1e3/2, 'ns')

        # Variable: self._base_delay
        # 1 MHz is 1000 nano seconds need half of half that due to manchester decoding method
        self._base_delay_half = Timer(1e3/4, 'ns')

        # Variable: _cmd_sync
        # command sync array value
        self._cmd_sync = [BinaryValue("01"), BinaryValue("10")]

        # Variable: _data_sync
        # data sync array value
        self._data_sync = [BinaryValue("10"), BinaryValue("01")]

        # Variable: self._run_cr
        # Thread instance of _run method
        self._run_cr = None
        self._restart()

    # Function: _restart
    # Kill and restart run function
    def _restart(self):
        if self._run_cr is not None:
            self._run_cr.kill()
        self._run_cr = cocotb.start_soon(self._run(self._data))

    # Function: read_cmd
    # Read any data that was identified with a command sync
    async def read_cmd(self):
        while self.empty_cmd():
            self.sync.clear()
            await self.sync.wait()
        return self.read_nowait_cmd()

    # Function: read_nowait_cmd
    # Read any data that was identified with a command sync, and do not wait for data to become available.
    def read_nowait_cmd(self):
        data = self.cmd_queue.get_nowait()
        return data

    # Function: read_data
    # Read any data that was identified with a data sync.
    async def read_data(self):
        while self.empty_data():
            self.sync.clear()
            await self.sync.wait()
        return self.read_nowait_data()

    # Function: read_nowait_data
    # Read any data that was identified with a data sync, and do not wait for data to become available.
    def read_nowait_data(self):
        data = self.data_queue.get_nowait()
        return data

    # Function: count_cmd10
    # How many elements are in the command queue?
    def count_cmd(self):
        return self.cmd_queue.qsize()

    # Function: count_data
    # How many elements are in the data queue?
    def count_data(self):
        return self.data_queue.qsize()

    # Function: empty_cmd
    # Is the queue empty?
    def empty_cmd(self):
        return self.cmd_queue.empty()

    # Function: empty_data
    # Is the queue empty?
    def empty_data(self):
        return self.data_queue.empty()

    # Function: idle
    # Is _run waiting to process data?
    def idle(self):
        return not self.active

    # Function: clear_cmd
    # Clear the command queue
    def clear_cmd(self):
        while not self.cmd_queue.empty():
            frame = self.cmd_queue.get_nowait()

    # Function: clear_data
    # Clear the data queue
    def clear_data(self):
        while not self.data_queue.empty():
            frame = self.data_queue.get_nowait()

    # Function: wait_cmd
    # Wait for command data
    async def wait_cmd(self, timeout=0, timeout_unit='nsreg_data'):
        if not self.empty_cmd():
            return
        self.sync.clear()
        if timeout:
            await First(self.sync.wait(), Timer(timeout, timeout_unit))
        else:
            await self.sync.wait()

    # Function: wait_data
    # Wait for data data.
    async def wait_data(self, timeout=0, timeout_unit='nsreg_data'):
        if not self.empty_data():
            return
        self.sync.clear()
        if timeout:
            await First(self.sync.wait(), Timer(timeout, timeout_unit))
        else:
            await self.sync.wait()

    # Function: _run
    # Thread that takes input data in mil-std-1553 format and puts it in the proper command or data queue.
    async def _run(self, data):
        self.active = False

        while True:
            invalid_logic = ["z", "x"]
            sync_value = []

            decode_in_data = bytearray(4)

            parity = 0
            
            if not self._rstn.value:
                await RisingEdge(self._rstn)

            if(data.value[0] == data.value[1]):
                await Edge(data)

            if(data.value[0] == data.value[1]):
                self.log.info("false trigger, data values equal")
                continue
            
            if any(x in data.value.binstr for x in invalid_logic):
                self.log.info("Invalid data bit")
                continue

            self.active = True

            await self._base_delay

            sync_value.append(data.value)

            await Edge(data)

            await self._base_delay

            sync_value.append(data.value)

            await self._base_delay
            await self._base_delay
            await self._base_delay
            
            for i in range(len(decode_in_data)):
                for x in reversed(range(8)):
                    decode_in_data[i] |= ((data.value.integer & 1) << x)
                    await self._base_delay

            parity = data.value.integer & 1

            org_parity = parity

            await self._base_delay

            await self._base_delay

            in_data = decode(decode_in_data)[::-1]

            for byte in in_data:
                for x in range(8):
                    parity ^= (byte >> x) & 1

            if(parity != 1):
                self.log.error(f'Parity Check Failed')

            if(sync_value == self._cmd_sync):
                sync_value = "CMD_SYNC"
                self.cmd_queue.put_nowait(in_data)
            elif(sync_value == self._data_sync):
                sync_value = "DATA_SYNC"
                self.data_queue.put_nowait(in_data)
            else:
                sync_value = "INVALID"

            self.log.info(f'Recv {sync_value}, original word {decode_in_data} : decoded word {in_data} : parity bit {org_parity}.')

            self.sync.set()

            self.active = False
