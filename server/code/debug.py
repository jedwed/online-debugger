import gdb
import json
import re


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


def get_variables(info):
    return info.rstrip().split("\n") if not info is None else []


def debug():
    res = []
    gdb.execute("start")
    while is_program_running():
        res.append(
            {
                "line": get_line_number(),
                "locals": get_variables(gdb.execute("info locals", to_string=True)),
                "args": get_variables(gdb.execute("info args", to_string=True)),
            }
        )
        gdb.execute("next")
    return res


def main():
    with open("debug.json", "w") as f:
        f.write(json.dumps(debug()))


main()
