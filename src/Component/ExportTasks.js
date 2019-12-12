/**
 * @description 导出任务
 */

'use strict';

import Button from "../Button";

export default class ExportTasks {
    constructor(list) {
        const setStartDateToNow = new Button(list);
        setStartDateToNow.text = '导出6个月已完成';
        setStartDateToNow.addEventListener('click', async () => {
            let taskList = [];
            let pageToken = '';
            const now = new Date();
            const endDate = new Date((new Date(now)).setMonth(now.getMonth() - 6));
            do {
                const response = await this.request(pageToken);
                pageToken = response.nextPageToken;
                taskList = taskList.concat(response.result);
                if (
                    response.result.findIndex(
                        task => (
                            new Date(task.accomplished) < endDate
                        ),
                    ) >= 0
                ) {
                    break;
                }
            } while (true);
            //展示出来
            console.log(taskList);
        });
    }

    /**
     * @private
     * @param pageToken
     * @returns {Promise<any>}
     */
    async request(pageToken) {
        return await fetch(`https://www.teambition.com/api/tasks/me:execute?isDone=true&orderBy=accomplished&pageToken=${pageToken}&pageSize=30`, {
            "credentials": "include",
            "headers": {
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:70.0) Gecko/20100101 Firefox/70.0",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Language": "zh-CN,zh;q=0.8,zh-TW;q=0.7,zh-HK;q=0.5,en-US;q=0.3,en;q=0.2",
                "Upgrade-Insecure-Requests": "1",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache",
            },
            "method": "GET",
            "mode": "cors",
        }).then(function (response) {
            return response.json();
        });
    };
};
