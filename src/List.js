/**
 * @description 菜单列表
 */

'use strict';

import JumpButton from "./JumpButton";
import OnlySeeMySelf from "./OnlySeeMySelf";
import HighlightMyCards from "./HighlightMyCards";
import SetStartDateToNow from "./SetStartDateToNow";

export default class List {
    constructor(menu) {
        // 列表
        const list = document.createElement('ul');
        const style = {
            "display": "flex",
            "flexDirection": "column",
            "paddingBottom": "8px",
        };
        Object.assign(list.style, style);
        menu.appendChild(list);

        new JumpButton(list);

        // new OnlySeeMySelf(list);

        new SetStartDateToNow(list);

        new HighlightMyCards();
    }
};
