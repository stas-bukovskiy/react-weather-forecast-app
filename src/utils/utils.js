const defaultValue = '-';

export function getOrDefaultWithSuffix(value, suffix = '') {
    return !value ? defaultValue : value + suffix;
}

export function removeSecondsFromTime(time) {
    if (!time) {
        return time

    }
    return time.split(":").slice(0, 2).join(":");
}

export function localizeDate(dateString) {
    const inputDate = new Date(dateString);
    const today = new Date();

    if (inputDate.toDateString() === today.toDateString()) {
        return 'Today';
    }

    const startOfWeek = new Date(today);
    startOfWeek.setDate(today.getDate() - today.getDay());

    const endOfWeek = new Date(today);
    endOfWeek.setDate(today.getDate() + (6 - today.getDay()));

    if (inputDate >= startOfWeek && inputDate <= endOfWeek) {
        return inputDate.toLocaleDateString('en-US', { weekday: 'long' });
    }

    return inputDate.toLocaleDateString('en-US', { weekday: 'long', day: 'numeric' });
}
