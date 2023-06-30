 let header = document.querySelector("header");
  let menu = document.querySelector("#menu-icon")
  let navbar = document.querySelector(".navbar")


  window.addEventListener("scroll", () =>{
    header.classList.toggle('shadow', window.scrollY > 0)
  });

  menu.onclick = () =>{
    menu.classList.toggle("bx-x")
    navbar.classList.toggle("active")
  }

  window.onscroll = () =>{
    menu.classList.remove("bx-x")
    navbar.classList.remove("active")
  }

// ________section movies___________

const getMovies = async () => {
    let res = await fetch("https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3")
    let data = await res.json()
    foreachData(data.results)
}
getMovies()

const foreachData = (arr) => {
    arr.forEach((el) => {
        const moviesEl = document.querySelector(".movies")
        const movieEl = document.createElement("div")
        movieEl.classList.add("movie")
        moviesEl.appendChild(movieEl)

        let backdrop = document.querySelector(".modal__movie-backdrop")
        let film = document.createElement('div')
        backdrop.appendChild(film)
        backdrop.innerText = el.poster_path

        let title = document.querySelector(".modal__movie-title")
        let name = document.createElement('div')
        title.appendChild(name)
        title.innerText = el.title

        let release = document.querySelector(".modal__movie-release_date")
        let data = document.createElement('p')
        release.appendChild(data)
        release.innerText = el.original_title

        let overview = document.querySelector(".modal__movie-overview")
        let text = document.createElement('p')
        overview.appendChild(text)
        overview.innerText = el.overview

        let card = Array.from(document.querySelectorAll('.movie'))

card.forEach((a) => {
    a.addEventListener("click", () => openModal(el.id))
}) 

        const getColor = (color) => {
            if (color >= 7.7) {
                return "green"
            } else if (color > 6.5) {
                return "orange"
            } else {
                return "red"
            }
        }

        movieEl.innerHTML = ` <div class="movie__cover-inner">
        <img src="https://image.tmdb.org/t/p/w500/${el.poster_path}" 
        class="movie__cover">
        <div class="movie__dark"></div>
    </div>
    <div class="movie__info">
        <div class="movie__title">${el.title}</div>
        <div class="movie__category">${el.release_date}</div>
        <div class="movie__average movie__average-${getColor(el.vote_average)}">${el.vote_average}</div>
    </div>`

    })
}

// _____modal open______

const modalEl = document.querySelector(".modal")
console.log(modalEl);
const openModal = async () => {
    modalEl.classList.add("modal--show")
    document.body.classList.add("stop-scrolling")
    const btnClose = document.querySelector(".modal__button-close");
    btnClose.addEventListener("click", () => closeModal());
}

function closeModal() {
    modalEl.classList.remove("modal--show")
    document.body.classList.remove("stop-scrolling")
}

window.addEventListener("click", (el) => {
    console.log(el.target);
    if (el.target === modalEl) {
        closeModal()
    }
})

