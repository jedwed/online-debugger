from typing import TypedDict, List, Optional
import gdb
import json
import re


class SymbolInfo(TypedDict):
    name: str
    type: str
    value: str


class FrameInfo(TypedDict):
    line: int
    args: List[SymbolInfo]
    locals: List[SymbolInfo]


def is_program_running():
    return len(gdb.selected_inferior().threads()) > 0


def get_line_number():
    info_line = gdb.execute("info line", to_string=True)
    if info_line is None:
        return -1
    line_match = re.match(r"Line (\d+)", info_line)
    if line_match is None:
        return -1
    line = int(line_match.group(1))
    return line


def get_frame_info():
    frame_info: FrameInfo = {"line": get_line_number(), "args": [], "locals": []}
    frame = gdb.selected_frame()
    for symbol in frame.block():
        symbol_info: SymbolInfo = {
            "name": symbol.name,
            "type": str(symbol.type),
            "value": symbol.value(frame).format_string(),
        }
        if symbol.is_argument:
            frame_info["args"].append(symbol_info)
        elif symbol.is_variable:
            frame_info["locals"].append(symbol_info)

    return frame_info


def debug():
    states = []
    gdb.execute("start")
    while is_program_running():
        states.append(get_frame_info())
        gdb.execute("next", to_string=True)
    return states


def main():
    with open("debug.json", "w") as f:
        f.write(json.dumps(debug()))


main()
