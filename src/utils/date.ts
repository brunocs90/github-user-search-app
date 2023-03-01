export class date {
    static convertDate(dateString: string) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'short', day: 'numeric' } as const;
        return date.toLocaleDateString('en-US', options);
    }
}
