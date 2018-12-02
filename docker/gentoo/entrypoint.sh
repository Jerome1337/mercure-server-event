#!/usr/bin/env bash
set -e

start-stop-daemon --start -- apache2 -f /etc/apache2/httpd.conf -D DEFAULT_VHOST -D INFO -D LANGUAGE -D STATUS -k start
start-stop-daemon --start -- /usr/sbin/sshd
start-stop-daemon --start -- /infinite_curl.sh

exec "$@"
