#!/usr/bin/env bash
set -e

function infinite_curl()
{
    while true
    do
        curl -sS http://localhost >> /dev/null &

        sleep $(shuf -i 1-1200 -n 1)
    done
}

for i in {1..200}
do
    infinite_curl &
done
