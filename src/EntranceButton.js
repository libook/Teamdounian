/**
 * @description 入口按钮
 */

'use strict';

export default class EntranceButton {
    constructor() {
        this.element = document.createElement('span');
        this.element.id = 'toolb-entrance';
        this.element.className = 'logo';
        this.element.textContent = '¯\\_(ツ)_/¯逗年TB工具箱';
        this.element.addEventListener('click', (event) => {
            // 拦截点击事件
            event.stopPropagation();
        });
        const style = {
            "fontWeight": 900,
        };
        Object.assign(this.element.style, style);
        let logoElement = document.querySelector('span[class^="logo"]');
        logoElement.parentElement.replaceChild(this.element, logoElement);
        try {
            document.querySelector('div[class^="trigger"]').remove();
        } catch (error) {
        }
        return this.element;
    }
};
