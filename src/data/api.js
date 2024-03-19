// data/api.js

export async function fetchLinksData() {
    try {
        const response = await fetch('/api/links');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
