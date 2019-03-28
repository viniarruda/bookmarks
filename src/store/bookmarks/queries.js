import axios from 'axios'
import url from '../../api/api'

export const searchBookmarks = (user) => {
  return axios.get(url.prod + '/bookmarks')
  .then(res => res.data)
  .catch(err => err.response.data)
}

export const createBookmarks = ({title, url, tags}) => {
  return axios.post('https://api-bookmarks.herokuapp.com/bookmarks', {
    title: title,
    url: url,
    tags: tags
  })
  .then(res => res.data)
  .catch(err => err.response.data)
}