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
                document.querySelector(selector).scrollIntoView();
            });
        };

        fetch(`https://www.teambition.com/api/stages?_tasklistId=${getParams().scrumId}&_=${Date.now()}`)
            .then((response) => response.json())
            .then((taskList) => {
                for (let task of taskList) {
                    if (task.name.indexOf('※') >= 0) {
                        appendJumpButton(task.name.replace(/※/, ''), `[data-id="${task._id}"]`);
                    }
                }
            });
    }
};
