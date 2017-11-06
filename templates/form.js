function formTemplate (method, item={ id: '', name: '', date: '', timeStart: '', timeEnd: '', center: '', brief: '', type: '' }) {
  const btnTxt = method === 'POST' ? 'Create New Post' : 'Update Post'
  return `
    <form id="event-form" action="/events/${item.id}">
      <div class="form-group">
        <label for="title">Event Title</label>
        <input type="text" class="form-control" id="event_title" value="${item.name}">
      </div>
      <div class="form-group">
        <label for="date">Date</label>
        <input type="text" class="form-control" id="date" value="${item.date}">
        <label for="timeStart">Start time</label>
        <input type="text" class="form-control" id="timeStart" value="${item.timeStart}">
        <label for="timeEnd">End time</label>
        <input type="text" class="form-control" id="timeEnd" value="${item.timeEnd}">
      </div>
      <div class="form-group">
        <label for="title">Center</label>
        <input type="text" class="form-control" id="center" value="${item.center}">
        <label for="title">Type of Event</label>
        <input type="text" class="form-control" id="type" value="${item.type}">
      </div>
      <div class="form-group">
        <label for="title">Description</label>
        <textarea type="text" rows="6" class="form-control" id="brief">${item.brief}</textarea>
      </div>
      <button type="submit" class="btn btn-info btn-large">${btnTxt}</button>
    </form>
  `
}
