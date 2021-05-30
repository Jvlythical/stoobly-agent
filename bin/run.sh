#!/bin/bash

SCRIPT_PATH=$(realpath "$BASH_SOURCE")
SCRIPT_DIR=$(dirname "$SCRIPT_PATH")
RAILS_ROOT=$(dirname "$SCRIPT_DIR")
SETTINGS_PATH="$RAILS_ROOT/config/settings.yml"

# Check if config/settings.yml is empty
if [ ! -s "$SETTINGS_PATH" ]; then
    echo "Initializing config/settings.yml"
    cp "$SETTINGS_PATH.sample" "$SETTINGS_PATH"
fi

echo "Starting agent UI..."
rails s -d -b 0.0.0.0 -p 4200

echo ""
echo "Starting agent proxy..."
mitmdump -k -s record.py --flow-detail 1 --anticache
