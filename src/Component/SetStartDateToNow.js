/**
 * @description 设置卡片的开始时间为当前时间
 */

'use strict';

import Button from "../Button";
import getParams from '../getParams';

export default class SetStartDateToNow {
    constructor(list) {
        const setStartDateToNow = new Button(list);
        setStartDateToNow.text = '设置开始时间为现在';
        setStartDateToNow.addEventListener('click', () => {
            const { taskId } = getParams();
            if (!taskId) {
                alert('请先打开一个任务。');
            } else {
                fetch(`https://www.teambition.com/api/tasks/${taskId}`, {
                    method: 'PUT',
                    body: JSON.stringify({ "startDate": (new Date()).toISOString() }),
                    headers: new Headers({
                        'Content-Type': 'application/json'
                    })
                }).then(res => res.json())
                    .catch(error => console.error('Error:', error))
                    .then(response => console.log('Success:', response));
            }
        });
    }
};
