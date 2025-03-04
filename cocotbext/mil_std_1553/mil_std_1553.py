#******************************************************************************
# file:    milstd1553.py
#
# author:  JAY CONVERTINO
#
# date:    2025/01/28
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
from cocotb.triggers import FallingEdge, Timer, First, Event, Edge

from manchester_code import encode, decode, decode_bits

from .version import __version__


class MILSTD1553Source:
    def __init__(self, data, *args, **kwargs):
        self.log = logging.getLogger(f"cocotb.{data._path}")
        self._data = data

        self.log.info("MIL-STD-1553 source")
        self.log.info("cocotbext-mil_std_1553 version %s", __version__)
        self.log.info("Copyright (c) 2025 Jay Convertino")
        self.log.info("https://github.com/johnathan-convertino-afrl/cocotbext-mil_std_1553")

        super().__init__(*args, **kwargs)

        self.active = False
        self.queue = Queue()

        # 1 MHz is 1000 nano seconds
        # need half that due to manchester encoding method
        self._base_delay = Timer(1e3/2, 'ns')

        self._idle = Event()
        self._idle.set()

        self._data.setimmediatevalue(0)

        self._run_cr = None
        self._restart()

    def _restart(self):
        if self._run_cr is not None:
            self._run_cr.kill()
        self._run_cr = cocotb.start_soon(self._run(self._data))

    # need a write_cmd... and a write_data
    async def write_cmd(self, data):
        if(self._check_type(data)):
            self.queue.put_nowait(self._cmd_sync)
            await self.queue.put(data)
            self._idle.clear()

    async def write_data(self, data):
        if(self._check_type(data)):
            self.queue.put_nowait(self._data_sync)
            await self.queue.put(data)
            self._idle.clear()

    def write_nowait_cmd(self, data):
        if(self._check_type(data)):
            self.queue.put_nowait(self._cmd_sync)
            self.queue.put_nowait(data)
            self._idle.clear()

    def write_nowait_data(self, data):
        if(self._check_type(data)):
            self.queue.put_nowait(self._data_sync)
            self.queue.put_nowait(data)
            self._idle.clear()

    def count(self):
        return self.queue.qsize()

    def empty(self):
        return self.queue.empty()

    def idle(self):
        return self.empty() and not self.active

    def clear(self):
        while not self.queue.empty():
            frame = self.queue.get_nowait()

    def _check_type(self, data):
        if isinstance(data, (bytes, bytearray)):
            if(len(data) == 2):
                return True
            else:
                print(f'DATA: {data} must be 2 bytes of byte bytes')
        else:
            self.log.error(f'DATA must be bytes or bytearray')

        return False

    async def _cmd_sync(self, data):
        data.value = 2
        await self._base_delay
        await self._base_delay
        await self._base_delay

        data.value = 1
        await self._base_delay
        await self._base_delay
        await self._base_delay

    async def _data_sync(self, data):
        data.value = 1
        await self._base_delay
        await self._base_delay
        await self._base_delay

        data.value = 2
        await self._base_delay
        await self._base_delay
        await self._base_delay

    async def wait(self):
        await self._idle.wait()

    async def _run(self, data):
        self.active = False

        while True:
            if self.empty():
                self.active = False
                self._idle.set()

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
                    data.value = (bit << 1) | (~bit & 1)
                    await self._base_delay

            data.value = (~parity & 1) | ((parity & 1) << 1)
            await self._base_delay
            data.value = parity | ((~parity & 1) << 1)
            await self._base_delay
            data.value = 0

            self.active = False

class MILSTD1553Sink:

    def __init__(self, data, *args, **kwargs):
        self.log = logging.getLogger(f"cocotb.{data._path}")
        self._data = data

        self.log.info("MIL-STD-1553 sink")
        self.log.info("cocotbext-mil_std_1553 version %s", __version__)
        self.log.info("Copyright (c) 2025 Jay Convertino")
        self.log.info("https://github.com/johnathan-convertino-afrl/cocotbext-mil_std_1553")

        super().__init__(*args, **kwargs)

        self.active = False
        self.cmd_queue = Queue()
        self.data_queue = Queue()
        self.sync = Event()

        # 1 MHz is 1000 nano seconds
        # need half that due to manchester encoding method
        self._base_delay = Timer(1e3/2, 'ns')

        # 1 MHz is 1000 nano seconds
        # need half of half that due to manchester encoding method
        self._base_delay_half = Timer(1e3/4, 'ns')

        #command sync array value
        self._cmd_sync = [BinaryValue("10"), BinaryValue("01")]

        #data sync array value
        self._data_sync = [BinaryValue("01"), BinaryValue("10")]

        self._run_cr = None
        self._restart()

    def _restart(self):
        if self._run_cr is not None:
            self._run_cr.kill()
        self._run_cr = cocotb.start_soon(self._run(self._data))

    async def read_cmd(self):
        while self.empty_cmd():
            self.sync.clear()
            await self.sync.wait()
        return self.read_nowait_cmd()

    def read_nowait_cmd(self):
        data = self.cmd_queue.get_nowait()
        return data

    async def read_data(self):
        while self.empty_data():
            self.sync.clear()
            await self.sync.wait()
        return self.read_nowait_data()

    def read_nowait_data(self):
        data = self.data_queue.get_nowait()
        return data

    def count_cmd(self):
        return self.cmd_queue.qsize()

    def count_data(self):
        return self.data_queue.qsize()

    def empty_cmd(self):
        return self.cmd_queue.empty()

    def empty_data(self):
        return self.data_queue.empty()

    def idle(self):
        return not self.active

    def clear_cmd(self):
        while not self.cmd_queue.empty():
            frame = self.cmd_queue.get_nowait()

    def clear_data(self):
        while not self.data_queue.empty():
            frame = self.data_queue.get_nowait()

    async def wait_cmd(self, timeout=0, timeout_unit='nsreg_data'):
        if not self.empty_cmd():
            return
        self.sync.clear()
        if timeout:
            await First(self.sync.wait(), Timer(timeout, timeout_unit))
        else:
            await self.sync.wait()

    async def wait_data(self, timeout=0, timeout_unit='nsreg_data'):
        if not self.empty_data():
            return
        self.sync.clear()
        if timeout:
            await First(self.sync.wait(), Timer(timeout, timeout_unit))
        else:
            await self.sync.wait()

    async def _run(self, data):
        self.active = False

        while True:
            sync_value = []

            decode_in_data = bytearray(4)

            parity = 0

            if(data.value[0] == data.value[1]):
                await Edge(data)

            if(data.value[0] == data.value[1]):
                self.log.info("false trigger, data values equal")
                continue

            self.active = True

            await self._base_delay_half

            sync_value.append(data.value)

            await Edge(data)

            await self._base_delay_half

            sync_value.append(data.value)

            await self._base_delay_half

            await self._base_delay
            await self._base_delay
            await self._base_delay_half

            for i in range(len(decode_in_data)):
                for x in reversed(range(8)):
                    decode_in_data[i] |= ((~data.value.integer & 1) << x)
                    await self._base_delay

            parity = ~data.value.integer & 1

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
