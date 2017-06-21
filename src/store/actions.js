import http from 'axios'
import { BASE_URL } from '@root/webconfig'

http.defaults.baseURL = BASE_URL

export default {
  getPosts: ({ commit, state }) => {
    return http.get('posts').then((response) => {
      if (response.statusText === 'OK') {
        commit('setPosts', response.data)
      }
    }).catch((error) => {
      console.log(error)
    })
  }
}
