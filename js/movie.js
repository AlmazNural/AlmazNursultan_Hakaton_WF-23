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
        release.innerText = el.release_date

        let overview = document.querySelector(".modal__movie-overview")
        let text = document.createElement('p')
        overview.appendChild(text)
        overview.innerText = el.overview


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
        <div class="movie__category">${el.genre_ids}</div>
        <div class="movie__average movie__average-${getColor(el.vote_average)}">${el.vote_average}</div>
    </div>`
        movieEl.addEventListener("click", () => openModal(el.id))
    })
}


// _____MODAL______


const modalEl = document.querySelector(".modal")

const openModal = async () => {
    const res = await fetch("https://api.themoviedb.org/3/discover/movie?language=ru-RUS&api_key=baacee587b52679e93f67d12424c4cb3")
    const respData = await res.json()

    modalEl.classList.add("modal--show")
    document.body.classList.add("stop-scrolling")

    respData.innerHTML

    const btnClose = document.querySelector(".modal__button-close");
    btnClose.addEventListener("click", () => closeModal());
}

function closeModal() {
    modalEl.classList.remove("modal--show")
    document.body.classList.remove("stop-scrolling")
}

window.addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target === modalEl) {
        closeModal()
    }
})

window.addEventListener("keydown", (e) => {
    if (e.keyCode === 27) {
        closeModal()
    }
})