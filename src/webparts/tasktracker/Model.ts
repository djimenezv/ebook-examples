import { SPHttpClient, SPHttpClientResponse } from '@microsoft/sp-http';
import * as pnp from 'sp-pnp-js';
export const getMyTasks = (context: any): Promise < any[] > => {
    return pnp.sp.web.currentUser.get().then((response) => {
        return context.spHttpClient.get(context.pageContext.web.absoluteUrl + `/_api/lists/getbytitle('My Tasks')/items?assignedId eq '` + response.Id + '`', SPHttpClient.configurations.v1).then((response: SPHttpClientResponse) => {
            return response.json().then((jsonObject) => {
                return jsonObject.value.map((task) => {
                    return {
                        'title': task.Title,
                        'daysleft': getDaysBetween(new Date(task.DueDate), new Date()),
                        'duedate': new Date(task.DueDate),
                        'percentcomplete': task.PercentComplete * 100
                    }
                });
            });
        });
    });
}
const getDaysBetween = (startDate, dueDate) => {
    const oneDay = 24 * 60 * 60 * 1000;
    const daysLeft = Math.floor((startDate.getTime() - dueDate.getTime()) / oneDay);
    return daysLeft;
}
