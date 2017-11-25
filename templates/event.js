function eventTemplate (item) {
  return `
    <section>
      <header>
        <h3>${item.name}</h3>
        <h5>${item.date} // ${item.timeStart} - ${item.timeEnd} //  ${item.center}</h5>
        <hr>
      </header>
      <article>${item.brief}</article>
      <aside class="my-4">
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link edit" id="${item.id}" href="#/posts/${item.id}/edit">Edit</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-danger delete" id="${item.id}" href="#">Delete</a>
          </li>
        </ul>
      </aside>
    </section>
  `
}
