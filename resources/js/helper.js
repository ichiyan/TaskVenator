import { moment } from './index';

export function getCurrentTime() {
    return moment().tz("Asia/Manila").format('h:mm A');
}

export function getCurrentDateTime() {
    return moment().tz("Asia/Manila").format('MM/DD/YY h:mm A');
}

export function dateFormat(datetime) {
    return moment(datetime, 'YYYY-MM-DD HH:mm:ss').tz("Asia/Manila").format('MM/DD/YY h:mm A');
}

export function timeFormat(datetime) {
    return moment(datetime, 'YYYY-MM-DD HH:mm:ss').tz("Asia/Manila").format('h:mm A');
}
