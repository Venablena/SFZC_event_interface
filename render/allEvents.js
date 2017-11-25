function allEvents() {
  activateBtn(document.querySelector('#create-event'))
    Request.displayAll()
      .then(({ data: eventsArray}) => {
        let content = eventsArray.map(item => {
          return eventTemplate(item)
        })
        content = content.join(' ')
        document.querySelector('#view').innerHTML = content
        document.querySelectorAll('.edit').forEach(link => {
          link.addEventListener('click', updateForm)
        })
        document.querySelectorAll('.delete').forEach(link => {
          link.addEventListener('click',(event) => deleteEvent(event.target.id))
        })
    })
  }

  function activateBtn(button){
    button.classList.remove('invisible')
    button.addEventListener('click', newEventView.init)
  }

  function deleteEvent(id){
    Request.destroy (id)
      .then(() => allEvents())
  }
