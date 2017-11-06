const url = 'http://localhost:3000/events'

// axios.get(`${url}`)
//   .then(result => {
//     document.querySelector('#event-container').innerHTML = result
//   })

window.Events = {
  index () {
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
