/**
 * @description 菜单体
 */

'use strict';

export default class MenuBody {
    constructor(entrance) {
        // 移除旧菜单体
        const oldElement = document.getElementById('toolb-menu');
        if (oldElement) {
            oldElement.remove();
        }

        // 菜单体
        this.element = document.createElement('div');
        this.element.id = "toolb-menu";
        this.element.className = "toolb";
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
        Object.assign(this.element.style, style);
        entrance.addEventListener('mouseover', () => {
            this.element.style.display = 'block';
        });
        this.element.addEventListener('mouseleave', () => {
            this.element.style.display = 'none';
        });
        window.addEventListener("resize", () => {
            const entrancePosition = entrance.getBoundingClientRect();
            this.element.style.top = entrancePosition.bottom + 'px';
            this.element.style.left = entrancePosition.left + 'px';
        });
        document.body.appendChild(this.element);

        return this.element;
    }
};
