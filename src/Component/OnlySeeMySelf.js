/**
 * @description 只看我自己的卡片
 */

'use strict';

import Button from "../Button";
import getMyAvatarStyle from '../getMyAvatarStyle';

export default class OnlySeeMySelf {
    constructor(list) {
        for (let t = 0; t < 2; t++) {// 强行触发加载视图菜单
            document.querySelector('a.nav-menu-handler[data-menu=filter]').click();
        }
        const mySelf = document.querySelector(`div.filter-category>ul.list>li.member-wrap>span[style='${getMyAvatarStyle()}']`);

        const showMine = new Button(list);
        showMine.text = '只看我自己';
        showMine.addEventListener('click', () => {
            mySelf.click();
        });
    }
};
