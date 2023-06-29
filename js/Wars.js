const personage = document.getElementById("personage")
const luas = document.getElementById("luas")
const planets = document.getElementById("planet")
const naves = document.getElementById("naves")

starw()
// starTabl()


function starw () {
    Promise.all([
        swapiGet("people/"),
        swapiGet("vehicles/"),
        swapiGet("planets/"),
        swapiGet("starships/"),
    ]).then(function (res){
        personage.innerHTML = res[0].data.count
        luas.innerHTML = res[1].data.count
        planets.innerHTML = res[2].data.count
        naves.innerHTML = res[3].data.count
    })
}

// async function starTabl() {
//    const res = await swapiGet("films/")
//    const data = res.data.results;
//    console.log(data);
//    data.forEach(film => {
//     $('#filmsTable').append(`<tr>
//     <td>${film.title}</td>
//     <td>${film.release_data}</td>
//     <td>${film.director}</td>
//     <td>${film.episode_id}</td>
//     </tr>`)
//    });
   
// }

function swapiGet(parm) {
    return axios.get(`https://swapi.dev/api/${parm}`)
}



// _________________________________________-

// const getSwapi= async () => {
//     let res = await fetch(`https://swapi.dev/api/people/`)
//     let data = await res.json()
//     foreachData(data.results)
//     // console.log(data.results);
// }
// getSwapi()

// const foreachData = (arr) => {
//     arr.results[0].data.count

//         const personId = document.getElementById("personage")
//         const menId = document.createElement("p")
//         menId.classList.add("")
//         personId.appendChild(menId)

//         // menId.innerHTML = `<h2 id="personage">${el.results[0].data.count}</h2>`

// }

// {/* <tr>
//                             <td>Filme 1</td>
//                             <td>Filme 2</td>
//                             <td>Filme 3</td>
//                         </tr>
//                          <tr>
//                             <td>Filme 1</td>
//                         </tr> */}


                        