import axios from 'axios'
import url from '../../api/api'

export const searchRepos = (user) => {
  return axios.get(url.dev + 'users/' + user + '/repos?per_page=100')
  .then(res => res.data)
  .catch(err => err.response.data)
}

export const searchCommits = (user, repo) => {
  return axios.get(url.dev + 'repos/' + user + '/' + repo + '/commits')
  .then(res => res.data)
  .catch(err => err.response.data)
}