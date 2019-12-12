/**
 * @description 高亮我的卡片
 */

'use strict';

import getMyAvatarStyle from '../getMyAvatarStyle';

let scanTimer;

export default class HighlightMyCards {
    constructor() {
        // 高亮我的卡片
        if (scanTimer) {
            window.clearInterval(scanTimer);
        }
        const heighLightMyCards = function () {
            const myCardAvatarList = document.querySelectorAll(`
                            html >
                            body >
                            div#teambition-web-content.clearfix >
                            div.project-app-view >
                            div.board-view >
                            div.board-flex-view >
                            div.board-right-view >
                            div.kanban-view >
                            div.kanban-contents-wrapper >
                            div.kanban-root >
                            div.kanban-scroll-container.kanban-single-lane-scroll >
                            div.kanban-single-lane-body >
                            div.kanban-single-lane-body-wrapper >
                            div.kanban-single-list >
                            div.kanban-single-list-contents >
                            div.kanban-bucket >
                            div.kanban-droppable-bucket.kanban-droppable-bucket-single-list >
                            div.kanban-droppable-bucket-cards >
                            div.kanban-dnd-card >
                            div.task-card >
                            div.task-card-body >
                            div.task-content-set >
                            header.task-content-wrapper >
                            span.flex-static.hinted[style='${getMyAvatarStyle()}']
                            `);
            for (let myCardAvatar of myCardAvatarList) {
                myCardAvatar.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = '#3da8f5';
            }
        };

        scanTimer = window.setInterval(heighLightMyCards, 2000);
    }
};
