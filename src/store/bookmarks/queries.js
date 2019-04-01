import axios from 'axios'
import urlApi from '../../api/api'

export const searchBookmarks = (user) => {
  return axios.get(urlApi.dev + '/bookmarks')
  .then(res => res.data)
  .catch(err => err.response.data)
}

export const createBookmarks = ({title, url, newTags}) => {
  return axios.post(urlApi.dev + '/bookmarks', {
    bookmark: {
      title: title,
      url: url,
      tags: newTags
    }
  })
  .then(res => res.data)
  .catch(err => err.response.data)
}

export const deleteBookmark = (id) => {
  return axios.delete(urlApi.dev + '/bookmarks/' + id)
  .then(res => res.data)
  .catch(err => err.response.data)
}

export const deleteTagging = (idBookmark, idTag) => {
  return axios.delete(urlApi.dev + '/bookmarks/' + idBookmark + '/tag/' + idTag)
  .then(res => res.data)
  .catch(err => err.response.data)
}