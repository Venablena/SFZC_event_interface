const localhostURL = 'http://localhost:3000/events'
const herokuURL = 'https://SFZC-calendar.herokuapp.com/events'
const baseURL = window.location.href.includes('herokuapp') ? herokuURL : localhostURL

document.querySelector("#create-event").addEventListener('click', createEvent)
allEvents()
