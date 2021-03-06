function createEvent (event) {
  event.preventDefault()
  const item = findEvent.values()
  Request.create(item)
  .then(() => {
    allEvents()
  })
  .catch(error => {
    console.error(error.response.data.error)
  })
}

window.newEventView = {
  init (item) {
    document.querySelector('#view').innerHTML = formTemplate('POST', item={ id: '', name: '', date: '', timeStart: '', timeEnd: '', center: 'CC', brief: '', type: '', frequency: '' })
    document.querySelector('#event-form').addEventListener('submit', createEvent)
    document.querySelector('#cancel').addEventListener('click', allEvents)
  }
}

window.findEvent = {
  values (){
    const name = document.querySelector('#event_title').value
    const date = document.querySelector('#date').value
    const timeStart = document.querySelector('#timeStart').value
    const timeEnd = document.querySelector('#timeEnd').value
    const center = document.querySelector('#center').value
    const type = document.querySelector('#type').value
    const brief = document.querySelector('#brief').value
    const frequency = document.querySelector('#frequency').value
    return { name, date, timeStart, timeEnd, center, brief, type, frequency }
  }
}
