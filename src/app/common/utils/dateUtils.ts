import { formatDistance } from "date-fns";

export function toDaysSinceToday(stringDate: string) {
    const distance = formatDistance(new Date(stringDate), new Date());
    if (distance.includes('days')) {
        return Number(distance.split(' days')[0]) <= 7 ? `${distance} ago` : '';
    } else if (distance.includes('day')) {
        return `${distance} ago`;
    } else {
        return '';
    }
}