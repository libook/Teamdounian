/**
 * @description 菜单列表
 */

'use strict';

import ExportTasks from "./Component/ExportTasks";
import JumpButton from "./Component/JumpButton";
import OnlySeeMySelf from "./Component/OnlySeeMySelf";
import HighlightMyCards from "./Component/HighlightMyCards";
import SetStartDateToNow from "./Component/SetStartDateToNow";

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

        new ExportTasks(list);
    }
};
