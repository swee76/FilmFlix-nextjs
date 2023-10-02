export const topics = [
    {id: '1', name: 'Action & Adventure Movies'},
    {id: '2', name: 'Anime Stories'},
    {id: '3', name: 'Horror Movies'},
    {id: '4', name: 'Comedy Movies'},
    {id: '5', name: 'Romantic Movies'},
    {id: '6', name: 'Kids Special'},
    {id: '7', name: 'Sci-Fi Movies'},
    {id: '8', name: 'International Dramas'},
];

export function getTopicIdByName(topicName: string) {
    const topic = topics.find((topic) => topic.name === topicName);
    return topic ? topic.id : null; // Return the id if found, or null if not found
}