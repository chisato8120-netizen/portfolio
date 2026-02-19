let animation = document.getElementById("animation")
window.addEventListener("scroll", (e) => {
    console.log(window.scrollY)
    if (window.scrollY > 1000) {
        animation.classList.add("inited")
    }
})