/**
 * @description 跳转到列表的按钮
 */

'use strict';

import Button from "./Button";
import getParams from './getParams';

export default class JumpButton {
    constructor(list) {
        // 跳转展示List
        const appendJumpButton = function (text, selector) {
            const a = new Button(list);
            a.text = text;
            a.addEventListener('click', () => {
                const element = document.querySelector(selector);
                // 滚动到列表
                element.scrollIntoView({ "behavior": "smooth", "block": "center", "inline": "start" });

                // 标黄易于辨认
                {
                    element.style.backgroundColor = "#3da8f5";
                    window.setTimeout(function () {
                        element.style.backgroundColor = "";
                    }, 3000);// 一段时间后恢复正常
                }
            });
        };

        fetch(`https://www.teambition.com/api/stages?_tasklistId=${getParams().scrumId}&_=${Date.now()}`)
            .then((response) => response.json())
            .then((taskList) => {
                console.log(taskList);
                for (let taskIndex in taskList) {
                    const task = taskList[taskIndex];
                    if (task.name.indexOf('※') >= 0) {
                        appendJumpButton(task.name.replace(/※/, ''), `div.kanban-single-lane-body-wrapper>div:nth-child(0n+${Number(taskIndex) + 1})`);
                    }
                }
            });
    }
};
