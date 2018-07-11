// ==UserScript==
// @name         Teambition tools
// @namespace    https://gist.github.com/libook
// @version      0.1.6
// @description  Tools for teambition
// @author       libook7@gmail.com
// @match        https://www.teambition.com/project/5281ab64984dc73f1d002415/tasks/scrum/591575f1bff1d5669446550a
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function install() {

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
                "display": "none",
                "boxShadow": "0 2px 12px 0 rgba(0,0,0,.12)",
                "borderRadius": "4px",
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
                // 列表
                const list = document.createElement('ul');
                const style = {
                    "display": "flex",
                    "flexDirection": "column",
                    "paddingBottom": "8px",
                };
                Object.assign(list.style, style);
                menu.appendChild(list);

                const appendJumpButton = function (text, selector) {
                    const a = document.createElement('a');
                    a.text = text;
                    a.addEventListener('click', () => {
                        document.querySelector(selector).scrollIntoView();
                    });
                    const style = {
                        "color": "gray",
                        "backgroundColor": "white",
                        "lineHeight": "14px",
                        "fontSize": "14px",
                        "fontFamily": "Helvetica Neue,PingFang SC,Microsoft Yahei,微软雅黑,STXihei,华文细黑,sans-serif",
                        "left": "50%",
                        "margin": "8px 8px 0 8px",
                        "padding": "8px 8px 8px 8px",
                        "textAlign": "center",
                        "borderRadius": "4px",
                    };
                    a.addEventListener('mouseover', () => {
                        a.style.backgroundColor = '#eee';
                    });
                    a.addEventListener('mouseleave', () => {
                        a.style.backgroundColor = 'white';
                    });
                    Object.assign(a.style, style);
                    list.appendChild(a);
                };

                appendJumpButton('跳转到耻辱柱3次', '[data-id="5abaf81d17cf3f0012a79fce"]');
                appendJumpButton('跳转到拆分后', '[data-id="59ffe71302727b70ae2a2880"]');
            }
        }
    }

    const interval = setInterval(() => {
        if (document.querySelector('span[class^="logo"]')) {
            window.clearInterval(interval);
            install();
        }
    }, 1000);
})();
