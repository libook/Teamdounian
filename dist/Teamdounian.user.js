// ==UserScript==
// @name         Teamdounian
// @namespace    https://github.com/libook
// @version      0.4.0
// @description  Tools for teambition
// @author       libook7@gmail.com
// @match        https://www.teambition.com/project/*/tasks/scrum/*
// @grant        none
// ==/UserScript==

/**
 * 列表想加跳转只需要在列表名中加※符号
 */

(function () {
    'use strict';

    let scanTimer;

    function install() {

        let menu, entrance, projectId, scrumId;

        {
            // 从URL中拿取参数
            const url = window.location.href;
            const urlParts = url.split('/');
            for (let urlPartsIndex = 0; urlPartsIndex < urlParts.length; urlPartsIndex++) {
                switch (urlParts[urlPartsIndex]) {
                    case 'project':
                        projectId = urlParts[urlPartsIndex + 1];
                        break;
                    case 'scrum':
                        scrumId = urlParts[urlPartsIndex + 1];
                        break;
                }
            }
        }

        {
            // 入口按钮
            entrance = document.createElement('span');
            entrance.id = 'toolb-entrance';
            entrance.className = 'logo';
            entrance.textContent = '¯\\_(ツ)_/¯逗年TB工具箱';
            entrance.addEventListener('mouseover', () => {
                menu.style.display = 'block';
            });
            entrance.addEventListener('click', (event) => {
                // 拦截点击事件
                event.stopPropagation();
            });
            const style = {
                "fontWeight": 900,
            };
            Object.assign(entrance.style, style);
            let logoElement = document.querySelector('span[class^="logo"]');
            logoElement.parentElement.replaceChild(entrance, logoElement);
            try {
                document.querySelector('div[class^="trigger"]').remove();
            } catch (error) {
            }
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

                const Button = class {
                    constructor() {
                        this.element = document.createElement('a');
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
                        this.element.addEventListener('mouseover', () => {
                            this.element.style.backgroundColor = '#eee';
                        });
                        this.element.addEventListener('mouseleave', () => {
                            this.element.style.backgroundColor = 'white';
                        });
                        Object.assign(this.element.style, style);
                        list.appendChild(this.element);

                        return this.element;
                    }
                };

                // 我自己的logo style，用于定位和我有关的东西
                const myAvatarStyle = document.querySelector('div[class^="user-info-trigger"]>span').attributes.style.value;

                {
                    // 跳转展示List
                    const appendJumpButton = function (text, selector) {
                        const a = new Button();
                        a.text = text;
                        a.addEventListener('click', () => {
                            document.querySelector(selector).scrollIntoView();
                        });
                    };

                    fetch(`https://www.teambition.com/api/stages?_tasklistId=${scrumId}&_=${Date.now()}`)
                        .then((response) => response.json())
                        .then((taskList) => {
                            for (let task of taskList) {
                                if (task.name.indexOf('※') >= 0) {
                                    appendJumpButton(task.name.replace(/※/, ''), `[data-id="${task._id}"]`);
                                }
                            }
                        });
                }

                {
                    // 只看我自己的
                    for (let t = 0; t < 2; t++) {// 强行触发加载视图菜单
                        document.querySelector('a.nav-menu-handler[data-menu=filter]').click();
                    }
                    const mySelf = document.querySelector(`div.filter-category>ul.list>li.member-wrap>span[style='${myAvatarStyle}']`);

                    const showMine = new Button();
                    showMine.text = '只看我自己';
                    showMine.addEventListener('click', () => {
                        mySelf.click();
                    });
                }

                {
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
                            span[style='${myAvatarStyle}']
                            `);
                        for (let myCardAvatar of myCardAvatarList) {
                            myCardAvatar.parentElement.parentElement.parentElement.style.backgroundColor = 'yellow';
                        }
                    };

                    window.setInterval(heighLightMyCards, 2000);
                }
            }
        }
    }

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
})();