function createEvent (event) {
  event.preventDefault()
  const name = document.querySelector('#event_title').value
  const date = document.querySelector('#date').value
  const timeStart = document.querySelector('#timeStart').value
  const timeEnd = document.querySelector('#timeEnd').value
  const center = document.querySelector('#center').value
  const type = document.querySelector('#type').value
  const brief = document.querySelector('#brief').value
  const frequency = document.querySelector('#frequency').value

  console.log(name, date, timeStart, timeEnd, center, brief, type);
  Request.create('body')
  // Request.create(name, date, timeStart, timeEnd, center, brief, type, frequency )
  .then(({ data: item}) => {
    console.log(item);
    // window.location.hash = `#/posts/${post.id}`
    allEvents()
  })
  .catch(error => {
    console.error(error.response.data.error)
  })
}

window.newEventView = {
  init (item) {
    window.location.hash = '#/events/new'
    document.querySelector('#view').innerHTML = formTemplate('POST', item={ id: 'test', name: 'test', date: 'test', timeStart: 'test', timeEnd: 'test', center: 'test', brief: 'test', type: 'test', frequency: 'test' })
    document.querySelector('#event-form').addEventListener('submit', createEvent)
  }
}

// console.error(error.response.data.error)
