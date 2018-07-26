'use strict';

const path = require('path');

module.exports = {
    "mode": "production",
    "entry": "./src/index.js",
    "output": {
        "filename": "Teamdounian.user.js",
        "path": path.resolve(__dirname, '../dist'),
    },
};
