FROM ubuntu

RUN apt-get update && \
    apt-get install -y build-essential gdb

WORKDIR /program
CMD gcc main.c -o main && ./main
