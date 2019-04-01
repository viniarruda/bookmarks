import axios from 'axios'
import url from '../../api/api'

export const searchBookmarks = (user) => {
  return axios.get(url.dev + '/favoritos')
  .then(res => res.data)
  .catch(err => err.response.data)
}

export const createBookmarks = ({title, url, newTags}) => {
	console.log(url)
  return axios.post('http://localhost:3004/favoritos', {
    title: title,
    url: url,
    tags: newTags
  })
  .then(res => res.data)
  .catch(err => err.response.data)
}