// ==UserScript==
// @name         Teambition tools
// @namespace    https://gist.github.com/libook
// @version      0.1.1
// @description  Tools for teambition
// @author       libook7@gmail.com
// @match        https://www.teambition.com/project/5281ab64984dc73f1d002415/tasks/scrum/591575f1bff1d5669446550a
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    let menu, entrance;

    {
        // 入口按钮
        entrance = document.createElement('span');
        entrance.id = 'toolb-entrance';
        entrance.className = 'logo';
        entrance.textContent = '¯\\_(ツ)_/¯逗年TB工具箱';
        entrance.addEventListener('mouseover', () => {
            menu.style.display = 'block';
        });
        const style = {};
        Object.assign(entrance.style, style);
        let logoElement = document.querySelector('span[class^="logo"]');
        logoElement.parentElement.replaceChild(entrance, logoElement);
    }

    {
        // 移除旧菜单体
        const oldElement = document.getElementById('toolb-menu');
        if (oldElement) {
            oldElement.remove();
        }

        // 菜单体
        menu = document.createElement('div');
        menu.id = "toolb-menu";
        menu.className = "toolb";
        const entrancePosition = entrance.getBoundingClientRect();
        const style = {
            "zIndex": 1000,
            "position": "fixed",
            "color": "gray",
            "backgroundColor": "white",
            "top": entrancePosition.bottom + 'px',
            "left": entrancePosition.left + 'px',
            "padding": "14px 16px 14px 16px",
            "display": "none",
        };
        Object.assign(menu.style, style);
        menu.addEventListener('mouseleave', () => {
            menu.style.display = 'none';
        });
        window.addEventListener("resize", () => {
            const entrancePosition = entrance.getBoundingClientRect();
            menu.style.top = entrancePosition.bottom + 'px';
            menu.style.left = entrancePosition.left + 'px';
        });
        document.body.appendChild(menu);

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
})();
