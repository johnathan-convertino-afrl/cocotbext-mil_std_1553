﻿NDSummary.OnToolTipsLoaded("File:mil_std_1553.py",{14:"<div class=\"NDToolTip TInformation LPython\"><div class=\"TTSummary\">MIL-STD-1553 cocotb</div></div>",15:"<div class=\"NDToolTip TInformation LPython\"><div class=\"TTSummary\">Copyright 2025 Jay Convertino</div></div>",16:"<div class=\"NDToolTip TClass LPython\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype16\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MILSTD1553Source</div></div></div><div class=\"TTSummary\">A mil-std-1553 transmit test routine.</div></div>",18:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype18\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/5/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/5/2\"><span class=\"SHKeyword\">def</span> __init__(</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">self,</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">data,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\">*</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">args,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\">**</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">kwargs</div><div class=\"PAfterParameters\" data-WideGridArea=\"4/4/5/5\" data-NarrowGridArea=\"6/1/7/4\" style=\"grid-area:4/4/5/5\">)</div></div></div></div><div class=\"TTSummary\">Initialize the object</div></div>",20:"<div class=\"NDToolTip TVariable LPython\"><div id=\"NDPrototype20\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">self._data</div></div><div class=\"TTSummary\">Set internal data connection to 1553 differential bus</div></div>",21:"<div class=\"NDToolTip TVariable LPython\"><div id=\"NDPrototype21\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">self._base_delay</div></div><div class=\"TTSummary\">1 MHz is 1000 nano seconds need half that due to manchester encoding method</div></div>",22:"<div class=\"NDToolTip TVariable LPython\"><div id=\"NDPrototype22\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">self._idle</div></div><div class=\"TTSummary\">Event trigger for cocotb</div></div>",23:"<div class=\"NDToolTip TVariable LPython\"><div class=\"TTSummary\">Event trigger for cocotb</div></div>",24:"<div class=\"NDToolTip TVariable LPython\"><div id=\"NDPrototype24\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">self._run_cr</div></div><div class=\"TTSummary\">Thread instance of _run method</div></div>",26:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype26\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> _restart(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">kill and restart _run thread.</div></div>",27:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype27\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">async def</span> write_cmd(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self,</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">data</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"4/1/5/3\" style=\"grid-area:2/3/3/4\">)</div></div></div></div><div class=\"TTSummary\">Write data to send that uses the command sync</div></div>",28:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype28\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">async def</span> write_data(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self,</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">data</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"4/1/5/3\" style=\"grid-area:2/3/3/4\">)</div></div></div></div><div class=\"TTSummary\">Write data to send that uses the data sync</div></div>",29:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype29\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">def</span> write_nowait_cmd(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self,</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">data</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"4/1/5/3\" style=\"grid-area:2/3/3/4\">)</div></div></div></div><div class=\"TTSummary\">Write data to send that uses command sync but do not wait after writting.</div></div>",30:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype30\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">def</span> write_nowait_data(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self,</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">data</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"4/1/5/3\" style=\"grid-area:2/3/3/4\">)</div></div></div></div><div class=\"TTSummary\">Write data to send that uses data sync but do not wait after writting.</div></div>",31:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype31\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> count(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">How many items in the queue</div></div>",32:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype32\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> empty(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Is the quene empty?</div></div>",33:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype33\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> idle(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Is the queue empty and the _run is not active processing data.</div></div>",34:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype34\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> clear(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Remove all items from queue</div></div>",35:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype35\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">def</span> _check_type(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self,</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">data</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"4/1/5/3\" style=\"grid-area:2/3/3/4\">)</div></div></div></div><div class=\"TTSummary\">Check and make sure we are only sending 2 bytes at a time and that it is a bytes/bytearray</div></div>",36:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype36\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">async def</span> _cmd_sync(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self,</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">data</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"4/1/5/3\" style=\"grid-area:2/3/3/4\">)</div></div></div></div><div class=\"TTSummary\">Generate a command sync on the diff output</div></div>",37:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype37\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">async def</span> _data_sync(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self,</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">data</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"4/1/5/3\" style=\"grid-area:2/3/3/4\">)</div></div></div></div><div class=\"TTSummary\">Generate a data sync on the diff output</div></div>",38:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype38\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> wait(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Wait for the run thread to become idle.</div></div>",39:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype39\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">async def</span> _run(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self,</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">data</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"4/1/5/3\" style=\"grid-area:2/3/3/4\">)</div></div></div></div><div class=\"TTSummary\">Thread that processing queue and outputs data in mil-std-1553 format.</div></div>",40:"<div class=\"NDToolTip TClass LPython\"><div class=\"NDClassPrototype\" id=\"NDClassPrototype40\"><div class=\"CPEntry TClass Current\"><div class=\"CPName\">MILSTD1553Sink</div></div></div><div class=\"TTSummary\">A mil-std-1553 transmit test routine.</div></div>",42:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype42\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"4\" data-NarrowColumnCount=\"3\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/5/2\" data-NarrowGridArea=\"1/1/2/4\" style=\"grid-area:1/1/5/2\"><span class=\"SHKeyword\">def</span> __init__(</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"2/2/3/3\" style=\"grid-area:1/3/2/4\">self,</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">data,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\">*</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">args,</div><div class=\"PModifierQualifier InFirstParameterColumn\" data-WideGridArea=\"4/2/5/3\" data-NarrowGridArea=\"5/1/6/2\" style=\"grid-area:4/2/5/3\">**</div><div class=\"PName InLastParameterColumn\" data-WideGridArea=\"4/3/5/4\" data-NarrowGridArea=\"5/2/6/3\" style=\"grid-area:4/3/5/4\">kwargs</div><div class=\"PAfterParameters\" data-WideGridArea=\"4/4/5/5\" data-NarrowGridArea=\"6/1/7/4\" style=\"grid-area:4/4/5/5\">)</div></div></div></div><div class=\"TTSummary\">Initialize the object</div></div>",44:"<div class=\"NDToolTip TVariable LPython\"><div id=\"NDPrototype44\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">self._data</div></div><div class=\"TTSummary\">Set internal data connection to 1553 differential bus</div></div>",45:"<div class=\"NDToolTip TVariable LPython\"><div id=\"NDPrototype45\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">self._base_delay</div></div><div class=\"TTSummary\">1 MHz is 1000 nano seconds need half that due to manchester decoding method</div></div>",46:"<div class=\"NDToolTip TVariable LPython\"><div id=\"NDPrototype46\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">self._base_delay_half</div></div><div class=\"TTSummary\">1 MHz is 1000 nano seconds need half of half that due to manchester decoding method</div></div>",47:"<div class=\"NDToolTip TVariable LPython\"><div id=\"NDPrototype47\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">self._cmd_sync</div></div><div class=\"TTSummary\">command sync array value</div></div>",48:"<div class=\"NDToolTip TVariable LPython\"><div id=\"NDPrototype48\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">self._data_sync</div></div><div class=\"TTSummary\">data sync array value</div></div>",49:"<div class=\"NDToolTip TVariable LPython\"><div id=\"NDPrototype49\" class=\"NDPrototype\"><div class=\"PSection PPlainSection\">self._run_cr</div></div><div class=\"TTSummary\">Thread instance of _run method</div></div>",51:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype51\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> _restart(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Kill and restart run function</div></div>",52:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype52\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> read_cmd(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Read any data that was identified with a command sync</div></div>",53:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype53\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> read_nowait_cmd(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Read any data that was identified with a command sync, and do not wait for data to become available.</div></div>",54:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype54\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">async def</span> read_data(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Read any data that was identified with a data sync.</div></div>",55:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype55\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> read_nowait_data(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Read any data that was identified with a data sync, and do not wait for data to become available.</div></div>",56:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype56\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> count_cmd(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">How many elements are in the command queue?</div></div>",57:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype57\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> count_data(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">How many elements are in the data queue?</div></div>",58:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype58\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> empty_cmd(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Is the queue empty?</div></div>",59:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype59\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> empty_data(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Is the queue empty?</div></div>",60:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype60\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> idle(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Is _run waiting to process data?</div></div>",61:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype61\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> clear_cmd(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Clear the command queue</div></div>",62:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype62\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/2/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/2/2\"><span class=\"SHKeyword\">def</span> clear_data(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self</div><div class=\"PAfterParameters\" data-WideGridArea=\"1/3/2/4\" data-NarrowGridArea=\"3/1/4/3\" style=\"grid-area:1/3/2/4\">)</div></div></div></div><div class=\"TTSummary\">Clear the data queue</div></div>",63:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype63\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/4/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/4/2\"><span class=\"SHKeyword\">async def</span> wait_cmd(</div><div class=\"PName InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self,</div><div class=\"PName InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">timeout</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\"><span class=\"SHNumber\">0</span>,</div><div class=\"PName InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\">timeout_unit</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\"><span class=\"SHString\">\'nsreg_data\'</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"5/1/6/5\" style=\"grid-area:3/5/4/6\">)</div></div></div></div><div class=\"TTSummary\">Wait for command data</div></div>",64:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype64\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"5\" data-NarrowColumnCount=\"4\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/4/2\" data-NarrowGridArea=\"1/1/2/5\" style=\"grid-area:1/1/4/2\"><span class=\"SHKeyword\">async def</span> wait_data(</div><div class=\"PName InFirstParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self,</div><div class=\"PName InFirstParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">timeout</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"3/2/4/3\" style=\"grid-area:2/3/3/4\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"2/4/3/5\" data-NarrowGridArea=\"3/3/4/4\" style=\"grid-area:2/4/3/5\"><span class=\"SHNumber\">0</span>,</div><div class=\"PName InFirstParameterColumn\" data-WideGridArea=\"3/2/4/3\" data-NarrowGridArea=\"4/1/5/2\" style=\"grid-area:3/2/4/3\">timeout_unit</div><div class=\"PDefaultValueSeparator\" data-WideGridArea=\"3/3/4/4\" data-NarrowGridArea=\"4/2/5/3\" style=\"grid-area:3/3/4/4\">&nbsp=&nbsp;</div><div class=\"PDefaultValue InLastParameterColumn\" data-WideGridArea=\"3/4/4/5\" data-NarrowGridArea=\"4/3/5/4\" style=\"grid-area:3/4/4/5\"><span class=\"SHString\">\'nsreg_data\'</span></div><div class=\"PAfterParameters\" data-WideGridArea=\"3/5/4/6\" data-NarrowGridArea=\"5/1/6/5\" style=\"grid-area:3/5/4/6\">)</div></div></div></div><div class=\"TTSummary\">Wait for data data.</div></div>",65:"<div class=\"NDToolTip TFunction LPython\"><div id=\"NDPrototype65\" class=\"NDPrototype WideForm\"><div class=\"PSection PParameterSection PascalStyle\"><div class=\"PParameterCells\" data-WideColumnCount=\"3\" data-NarrowColumnCount=\"2\"><div class=\"PBeforeParameters\" data-WideGridArea=\"1/1/3/2\" data-NarrowGridArea=\"1/1/2/3\" style=\"grid-area:1/1/3/2\"><span class=\"SHKeyword\">async def</span> _run(</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"1/2/2/3\" data-NarrowGridArea=\"2/1/3/2\" style=\"grid-area:1/2/2/3\">self,</div><div class=\"PName InFirstParameterColumn InLastParameterColumn\" data-WideGridArea=\"2/2/3/3\" data-NarrowGridArea=\"3/1/4/2\" style=\"grid-area:2/2/3/3\">data</div><div class=\"PAfterParameters NegativeLeftSpaceOnWide\" data-WideGridArea=\"2/3/3/4\" data-NarrowGridArea=\"4/1/5/3\" style=\"grid-area:2/3/3/4\">)</div></div></div></div><div class=\"TTSummary\">Thread that takes input data in mil-std-1553 format and puts it in the proper command or data queue.</div></div>"});