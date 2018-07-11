// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://www.teambition.com/project/5281ab64984dc73f1d002415/tasks/scrum/591575f1bff1d5669446550a
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    {
        // 移除旧工具
        const oldElements = document.getElementsByClassName('toolb');
        if (oldElements.length > 0) {
            for (let element of oldElements) {
                element.remove();
            }
        }
    }

    let menu;

    {
        // 主体
        const body = document.createElement('div');
        body.id = "toolb-id";
        body.className = "toolb";
        const style = {
            "position": "fixed",
            "zIndex": 1000,
            "color": "gray",
            "backgroundColor": "white",
            "left": "50%",
            "padding": "14px 16px 14px 16px",
        };
        Object.assign(body.style, style);
        document.body.appendChild(body);
        body.addEventListener('mouseleave', () => {
            menu.style.display = 'none';
        });

        {
            // 入口按钮
            const flag = document.createElement('a');
            flag.className = "toolb";
            flag.text = '逗年TB工具箱';
            flag.addEventListener('mouseover', () => {
                menu.style.display = 'block';
            });
            const style = {
                "zIndex": 1000,
                "color": "gray",
                "backgroundColor": "white",
                "height": "48px",
                "lineHeight": "20px",
                "fontSize": "14px",
                "fontFamily": "Helvetica Neue,PingFang SC,Microsoft Yahei,微软雅黑,STXihei,华文细黑,sans-serif",
                "left": "50%",
                "padding": "14px 16px 14px 16px",
            };
            Object.assign(flag.style, style);
            body.appendChild(flag);
        }

        {
            // 菜单体
            menu = document.createElement('div');
            menu.id = "toolb-menu";
            menu.className = "toolb";
            const style = {
                "zIndex": 1000,
                "color": "gray",
                "backgroundColor": "white",
                "left": "50%",
                "padding": "14px 16px 14px 16px",
                "display": "none",
            };
            Object.assign(menu.style, style);
            body.appendChild(menu);

            {
                const a = document.createElement('a');
                a.text = '跳转到耻辱柱3次';
                a.addEventListener('click', () => {
                    document.querySelector('[data-id="5abaf81d17cf3f0012a79fce"]').scrollIntoView();
                });
                const style = {
                    "zIndex": 1000,
                    "color": "gray",
                    "backgroundColor": "white",
                    "height": "48px",
                    "lineHeight": "20px",
                    "fontSize": "14px",
                    "fontFamily": "Helvetica Neue,PingFang SC,Microsoft Yahei,微软雅黑,STXihei,华文细黑,sans-serif",
                    "left": "50%",
                    "padding": "14px 16px 14px 16px",
                };
                Object.assign(a.style, style);
                menu.appendChild(a);
            }
        }
    }
})();
