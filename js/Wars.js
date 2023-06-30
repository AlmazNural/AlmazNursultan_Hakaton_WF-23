const personage = document.getElementById("personage")
const luas = document.getElementById("stars")
const planets = document.getElementById("planet")
const naves = document.getElementById("fighter")

// _________________________________________-

const getSwapi= async () => {
    let res = await fetch(`https://swapi.dev/api/people/`)
    let data = await res.json()
    foreachData(data.results)
    // console.log(data.results);
}
getSwapi()

const foreachData = (arr) => {
    arr.results[0].data.count

        const personId = document.getElementById("personage")
        const menId = document.createElement("p")
        menId.classList.add("")
        personId.appendChild(menId)

        // menId.innerHTML = `<h2 id="personage">${el.results[0].data.count}</h2>`

}



                        