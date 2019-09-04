/**
 * @description 从URL中拿取参数
 */

'use strict';

export default function getParams() {
    let projectId, scrumId, taskId;
    const url = window.location.href;
    const urlParts = url.split('/');
    for (let urlPartsIndex = 0; urlPartsIndex < urlParts.length; urlPartsIndex++) {
        switch (urlParts[urlPartsIndex]) {
            case 'project':
                projectId = urlParts[urlPartsIndex + 1];
                break;
            case 'scrum':
                scrumId = urlParts[urlPartsIndex + 1];
                break;
        }
    }
    return { projectId, scrumId, taskId };
};
