const photo1 = document.getElementById("img-1")
const selectImg = document.getElementById("select-img")
const selectText = document.getElementById("select-text")
photo1.classList.add("selected")


selectImg.src = photo1.src
selectText.textContent = photo1.dataset.text

photo1.addEventListener("click", () => {
    selectImg.src = photo1.src
    photo1.classList.add("selected")
    photo2.classList.remove("selected")
    photo3.classList.remove("selected")
    photo4.classList.remove("selected")
    photo5.classList.remove("selected")
    photo6.classList.remove("selected")
    selectText.textContent = photo1.dataset.text
})

const photo2 = document.getElementById("img-2")
photo2.addEventListener("click", () => {
    photo1.classList.remove("selected")
    photo2.classList.add("selected")
    photo3.classList.remove("selected")
    photo4.classList.remove("selected")
    photo5.classList.remove("selected")
    photo6.classList.remove("selected")
    selectImg.src = photo2.src
    selectText.textContent = photo2.dataset.text
})

const photo3 = document.getElementById("img-3")
photo3.addEventListener("click", () => {
    photo1.classList.remove("selected")
    photo2.classList.remove("selected")
    photo3.classList.add("selected")
    photo4.classList.remove("selected")
    photo5.classList.remove("selected")
    photo6.classList.remove("selected")
    selectImg.src = photo3.src
    selectText.textContent = photo3.dataset.text
})

const photo4 = document.getElementById("img-4")
photo4.addEventListener("click", () => {
    photo1.classList.remove("selected")
    photo2.classList.remove("selected")
    photo3.classList.remove("selected")
    photo4.classList.add("selected")
    photo5.classList.remove("selected")
    photo6.classList.remove("selected")
    selectImg.src = photo4.src
    selectText.textContent = photo4.dataset.text
})

const photo5 = document.getElementById("img-5")
photo5.addEventListener("click", () => {
    photo1.classList.remove("selected")
    photo2.classList.remove("selected")
    photo3.classList.remove("selected")
    photo4.classList.remove("selected")
    photo5.classList.add("selected")
    photo6.classList.remove("selected")
    selectImg.src = photo5.src
    selectText.textContent = photo5.dataset.text
})

const photo6 = document.getElementById("img-6")
photo6.addEventListener("click", () => {
    photo1.classList.remove("selected")
    photo2.classList.remove("selected")
    photo3.classList.remove("selected")
    photo4.classList.remove("selected")
    photo5.classList.remove("selected")
    photo6.classList.add("selected")
    selectImg.src = photo6.src
    selectText.textContent = photo6.dataset.text
})


function setAnimation(id) {

    let animation = document.getElementById(id)
    animation.classList.add("animation")
    console.log(id + ";" + animation.offsetTop);
    window.addEventListener("scroll", (e) => {
        // console.log(window.scrollY)
        if (window.scrollY > animation.offsetTop - 815) {
            animation.classList.add("inited")
        } else {
            animation.classList.remove("inited")
        }
    })
}




setAnimation("title1");
setAnimation("title2");
setAnimation("title3");

