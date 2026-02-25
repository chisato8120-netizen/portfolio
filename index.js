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
