#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

exec < /dev/tty && node_modules/.bin/cz --hook || true
