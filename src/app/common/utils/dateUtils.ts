import { formatDistance } from "date-fns";

export enum DaysSinceTodayType {
    JOB_ITEM,
    JOB_DETAIL,
}

export function toDaysSinceToday(stringDate: string, type: DaysSinceTodayType) {
    const date1 = new Date(stringDate);
    const dateNow = new Date();

    const distance = formatDistance(date1, dateNow);
    if (distance.includes('hours')) {
        return type === DaysSinceTodayType.JOB_ITEM ? `${distance.replace('hours', 'hrs').replace('about', '')} ago` : `${distance} ago`;
    } else if (distance.includes('days')) {
        return getDayDifference(dateNow, date1) <= 7 ? `${distance} ago` : '';
    } else if (distance.includes('day')) {
        return `${distance} ago`;
    } else {
        return '';
    }
}

function getDayDifference(date1: Date, date2: Date) {
    date1 = setHoursToZero(date1);
    date2 = setHoursToZero(date2);
    return Math.round((date1.getTime() - date2.getTime()) / 86400000);
}

function setHoursToZero(date: Date) {
    const tmp = new Date(date);
    tmp.setHours(0, 0, 0, 0);
    return tmp;
}