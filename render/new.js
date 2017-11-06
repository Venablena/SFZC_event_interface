function createEvent (item) {
  event.preventDefault()
  const title = document.querySelector('#title').value
  const content = document.querySelector('#content').value

  Post.create({ title, content })
  .then(({ data: { post } }) => {
    window.location.hash = `#/posts/${post.id}`
    homeView.init()
  })
  .catch(error => {
    console.error(error.response.data.error)
  })
}

window.newPostView = {
  init (post) {
    document.querySelector('#view').innerHTML = formTemplate('POST')
    document.querySelector('#post-form').addEventListener('submit', createPost)
  }
}
