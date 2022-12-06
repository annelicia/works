import { formatDistance } from "date-fns";

export enum DaysSinceTodayType {
    JOB_ITEM,
    JOB_DETAIL,
}

export function toDaysSinceToday(stringDate: string, type: DaysSinceTodayType) {
    const distance = formatDistance(new Date(stringDate), new Date());
    if (distance.includes('hours')) {
        return type === DaysSinceTodayType.JOB_ITEM ? `${distance.replace('hours', 'hrs').replace('about', '')} ago` : `${distance} ago`;
    } else if (distance.includes('days')) {
        return Number(distance.split(' days')[0]) <= 7 ? `${distance} ago` : '';
    } else if (distance.includes('day')) {
        return `${distance} ago`;
    } else {
        return '';
    }
}