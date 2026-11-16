//Bu fonksiyonun görevi, ISO tarihini alıp İngilizce relative time metnine dönüştürmek.

export function formatDate(date: string): string {
    const now = new Date();
    const past = new Date(date);

    const difference = now.getTime() - past.getTime();

    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const formatter = new Intl.RelativeTimeFormat('en', {
        numeric: 'auto'
    });

    if (seconds < 60) {
        return 'Just now';
    }

    if (minutes < 60) {
        return formatter.format(-minutes, 'minute');
    }

    if (hours < 24) {
        return formatter.format(-hours, 'hour');
    }

    if (days < 30) {
        return formatter.format(-days, 'day');
    }

    const months = Math.floor(days / 30);

    if (months < 12) {
        return formatter.format(-months, 'month');
    }

    const years = Math.floor(days / 365);

    return formatter.format(-years, 'year');
}