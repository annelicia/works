export function getCompanySizeString(num: number | null | undefined) {
    if (num == null) return '51-250';
    if (num <= 10) {
        return '1-10';
    } else if (num <= 50) {
        return '11-50';
    } else if (num <= 250) {
        return '51-250';
    } else if (num <= 10000) {
        return '251-10K';
    } else {
        return '10K+';
    }
}