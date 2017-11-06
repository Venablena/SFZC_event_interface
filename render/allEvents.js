function render () {
  // display(){
    Events.index()
      .then(({ data: { item } }) => {
        document.querySelector("#view").innerHTML = item
        // errorsView.hide()
        //
        // let id = determinePost()
        //
        // if (!id && posts[0]) {
        //   goToPost(posts[0])
        //   id = determinePost()
        // }
        //
        // if (Number.isNaN(parseInt(id))) return false
        //
        // if (id) {
        //   const selected = posts.find(post => post.id == id)
        //   sidebarView.init(posts, id)
        //   postView.init(selected)
        // }
        //
        // if (!posts.length) {
        //   document.querySelector('#sidebar').innerHTML = ''
        //   document.querySelector('#view').innerHTML = welcomeTemplate()
        // }
      })
    }
  //}
