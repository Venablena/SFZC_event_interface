console.log('requests running');
const url = 'http://localhost:3000/events'

window.Request = {
  displayAll () {
    return axios.get(`${url}`)
  },
  find (id) {
    return axios.get(`${url}/${id}`)
  },
  create (body) {
    return axios.post(`${url}`, body)
  },
  destroy (id) {
    return axios.delete(`${url}/${id}`)
  },
  update (id, body) {
    return axios.put(`${url}/${id}`, body)
  }
}
