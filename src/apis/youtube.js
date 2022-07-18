import axios from 'axios';

const KEY =  'AIzaSyD18TbzbA3Nkt_5lcB4HaIPL8DchO7wXzY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})