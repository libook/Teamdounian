/**
 * @description 在页面上安装功能
 */

'use strict';

import EntranceButton from './EntranceButton';
import MenuBody from './MenuBody';
import List from './List';

export default function install() {

    const entrance = new EntranceButton();
    const menu = new MenuBody(entrance);

    new List(menu);
};
