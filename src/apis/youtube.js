import axios from 'axios';

const KEY = 'AIzaSyCH5n9oRedDbQD8UWIWEGAaEr60oN-8O6M';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
      part: 'snippet', 
      type: 'video',
      maxResults: 5,
      key: `${KEY}`
  }
})