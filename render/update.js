function updateForm(event){
  id = event.target.id
  Request.find(id)
  .then((result) =>{
    document.querySelector("#view").innerHTML = formTemplate('PATCH', result.data)
    selectOptions(result.data.frequency, "#frequency")
    selectOptions(result.data.type, "#type")
    document.querySelector(`#event-form${id}`).addEventListener('submit', updateEvent)
    document.querySelector('#cancel').addEventListener('click', allEvents)
  })
}

function updateEvent(event){
  event.preventDefault()
  body = findEvent.values()
  const id = event.target.id.replace('event-form', '')
  Request.update(id, body)
    .then(() =>
  allEvents()
    )
    .catch(error => {
      console.error(error.response.data.error)
    })
}

function selectOptions(item, selector){
  const element = document.querySelector(selector).children
  for (var i = 0; i < element.length; i++) {
    if(element[i].value === item){
      element[i].outerHTML = `<option value="${item}" selected>${item}</option>`
    }
  }
}
