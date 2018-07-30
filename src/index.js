/**
 * 列表想加跳转只需要在列表名中加※符号
 */

'use strict';

import install from './install';
import getParams from './getParams';

let paramsCache = {};
setInterval(() => {
    const nowParams = getParams();
    if (
        document.querySelector('span[class^="logo"]') &&// logo出现
        document.querySelector('.task-card-mode') &&// 卡片加载出来意味着绝大多数元素已经加载完毕
        (paramsCache.projectId !== nowParams.projectId || paramsCache.scrumId !== nowParams.scrumId)// 当前项目和任务分组没变
    ) {
        paramsCache = nowParams;
        install();
    }
}, 1000);
