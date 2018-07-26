/**
 * 列表想加跳转只需要在列表名中加※符号
 */

'use strict';

import install from './install';

let urlCache;
setInterval(() => {
    if (
        document.querySelector('span[class^="logo"]') &&// logo出现
        document.querySelector('.task-card-mode') &&// 卡片加载出来意味着绝大多数元素已经加载完毕
        (urlCache !== window.location.href)// 当前页面地址没变
    ) {
        urlCache = window.location.href;
        install();
    }
}, 1000);
