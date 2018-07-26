/**
 * @description Add header.template on the top of dist file.
 */

'use strict';

const HEADER_PATH = './config/header.template';
const DIST_PATH = './dist/Teamdounian.user.js';

const fs = require('fs');
const packageInfo = require('../package.json');

const headerTemplate = fs.readFileSync(HEADER_PATH, {
    "encoding": "utf-8",
});

let header;

{
    const { version, name, description, author } = packageInfo;
    const { email, url } = author;
    header = eval('\`' + headerTemplate + '\`')
}

const dist = fs.readFileSync(DIST_PATH, {
    "encoding": "utf-8",
});

const fullFile = header + dist;
fs.writeFileSync(DIST_PATH, fullFile);
