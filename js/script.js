window.addEventListener("scroll", e => {
    document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})

let lists = document.querySelectorAll(".item");

document.getElementById("next").onclick = function(){
    let lists = document.querySelectorAll(".item");
    document.getElementById("slide").appendChild(lists[0]);
}

document.getElementById("prev").onclick = function(){
    document.getElementById("slide").appendChild(lists[0]);
}


