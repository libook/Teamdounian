/**
 * @description 按钮类
 */

'use strict';

export default class Button {
    constructor(list) {
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
