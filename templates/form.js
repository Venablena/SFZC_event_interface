function formTemplate (method, item) {
  const btnTxt = method === 'POST' ? 'Create New Event' : 'Update Event'
  document.querySelector('#create-event').classList.add('invisible')

  function defineCenter(otherCenter){
    if(otherCenter === "CC") return "GG"
    return "CC"
  }

  return `
    <form id="event-form${item.id}">

      <div class="form-group">
        <label for="title">Event Title</label>
        <input type="text" class="form-control" id="event_title" value="${item.name}">
      </div>

      <div class="form-group">
        <div class="form-row">
          <div class="col">
            <label for="date">Date</label>
            <input type="date" class="form-control" id="date" value="${item.date}">
          </div>
          <div class="col">
            <label for="timeStart">Start time</label>
            <input type="time" class="form-control" id="timeStart" value="${item.timeStart}">
          </div>
          <div class="col">
            <label for="timeEnd">End time</label>
            <input type="time" class="form-control" id="timeEnd" value="${item.timeEnd}">
          </div>
        </div>
      </div>

      <div class="form-group">
        <div class="form-row">

          <div class="col">
            <label for="center">Center:</label>
            <select class="form-control" id="center">
              <option>${item.center}</option>
              <option>${defineCenter(item.center)}</option>
            </select>
          </div>

          <div class="col">
            <label for="frequency">How often is this event held?</label>
            <select class="form-control" id="frequency">
              <option value="monthly">monthly</option>
              <option value="weekly">weekly</option>
              <option value="once">once</option>
            </select>
          </div>

          <div class="col">
            <label for="frequency">Event type</label>
            <select class="form-control" id="type">
              <option value="teaching">teaching</option>
              <option value="ceremony">ceremony</option>
              <option value="practice">practice</option>
              <option value="group">group</option>
            </select>
          </div>

        </div>
      </div>

      <div class="form-group">
        <label for="brief">Description</label>
        <textarea type="text" rows="12" class="form-control" id="brief">${item.brief}</textarea>
      </div>

      <div class="form-group">
        <button type="submit" class="btn btn-info btn-large">${btnTxt}</button>
        <button type="button" class="btn btn-link" id="cancel">Cancel</button>
      </div>
    </form>
  `
}
