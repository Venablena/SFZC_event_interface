const localhostURL = 'http://localhost:3000/events'
const herokuURL = 'https://SFZC-calendar.herokuapp.com/events'
const baseURL = window.location.href.includes('herokuapp') ? herokuURL : localhostURL

render()
//const baseURL = window.location.href.includes('127.0.0.1') ? localhostURL : herokuURL

//homeView.init()

//window.onhashchange = () => homeView.init()

 //document.querySelector('#create-event').addEventListener('click', newEventView.init)
