#!/usr/bin/env python
"""

Copyright (c) 2020 Alex Forencich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

"""

import itertools
import logging
import os
import random

import cocotb_test.simulator

import cocotb
from cocotb.triggers import Timer
from cocotb.regression import TestFactory

import sys
sys.path.append("../../")

from cocotbext.mil_std_1553 import MILSTD1553Source, MILSTD1553Sink


class TB:
    def __init__(self, dut):
        self.dut = dut

        self.log = logging.getLogger("cocotb.tb")
        self.log.setLevel(logging.DEBUG)

        self.source  = MILSTD1553Source(dut.data)
        self.sink = MILSTD1553Sink(dut.data)


async def run_test(dut, payload_data=None):

    tb = TB(dut)

    await Timer(10, 'us')

    for test_data in payload_data():

        data = test_data.to_bytes(2, byteorder="little")

        tb.log.info(f'TEST VALUE : {data}')

        await tb.source.write_cmd(data)

        await tb.source.write_data(data)

        rx_data = await tb.sink.read_cmd()

        assert data == rx_data, "RECEIVED DATA DOES NOT MATCH"

        rx_data = await tb.sink.read_data()

        assert data == rx_data, "RECEIVED DATA DOES NOT MATCH"

        await Timer(100, 'us')


def incrementing_payload():
    return list(range(2**16))

def random_payload():
    return random.sample(range(2**16), 2**16)


if cocotb.SIM_NAME:

    factory = TestFactory(run_test)
    factory.add_option("payload_data", [incrementing_payload, random_payload])
    factory.generate_tests()


# cocotb-test

tests_dir = os.path.dirname(__file__)


def test_mil_std_1553(request):
    dut = "test_mil_std_1553"
    module = os.path.splitext(os.path.basename(__file__))[0]
    toplevel = dut

    verilog_sources = [
        os.path.join(tests_dir, f"{dut}.v"),
    ]

    parameters = {}

    extra_env = {f'PARAM_{k}': str(v) for k, v in parameters.items()}

    sim_build = os.path.join(tests_dir, "sim_build",
        request.node.name.replace('[', '-').replace(']', ''))

    cocotb_test.simulator.run(
        python_search=[tests_dir],
        verilog_sources=verilog_sources,
        toplevel=toplevel,
        module=module,
        parameters=parameters,
        sim_build=sim_build,
        extra_env=extra_env,
    )
