/**
 * @description 高亮我的卡片
 */

'use strict';

import getMyAvatarStyle from './getMyAvatarStyle';

let scanTimer;

export default class HighlightMyCards {
    constructor() {
        // 高亮我的卡片
        if (scanTimer) {
            window.clearInterval(scanTimer);
        }
        const heighLightMyCards = function () {
            const myCardAvatarList = document.querySelectorAll(`
                            #content > 
                            div.project-app-view > 
                            div > 
                            div > 
                            ul > 
                            li > 
                            div > 
                            section > 
                            ul.scrum-stage-tasks > 
                            li > 
                            div > 
                            div.task-content-set > 
                            header > 
                            span[style='${getMyAvatarStyle()}']
                            `);
            for (let myCardAvatar of myCardAvatarList) {
                myCardAvatar.parentElement.parentElement.parentElement.style.backgroundColor = '#3da8f5';
            }
        };

        scanTimer = window.setInterval(heighLightMyCards, 2000);
    }
};
