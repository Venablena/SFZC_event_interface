function allEvents() {
    Request.displayAll()
      .then(({ data: eventsArray}) => {
        let content = eventsArray.map(item => {
          return eventTemplate(item)
        })
        content = content.join(' ')
        document.querySelector('#view').innerHTML = content
    })
  }
