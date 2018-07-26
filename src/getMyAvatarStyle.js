/**
 * @description 获取我的头像的style字符串，用于在页面中定位关于我的元素
 */

'use strict';

export default function getMyAvatarStyle() {
    return document.querySelector('div[class^="user-info-trigger"]>span').attributes.style.value;
};
