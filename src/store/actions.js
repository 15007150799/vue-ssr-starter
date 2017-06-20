import http from 'axios'

http.defaults.baseURL = 'http://jsonplaceholder.typicode.com/'

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
