// Add hovered class on list item 

let list = document.querySelectorAll(".navigation li")

function activeLink() {
    list.forEach((item) =>
        item.classList.remove("hovered"))
    this.classList.add("hovered")
}
list.forEach((item) => item.addEventListener("mouseover", activeLink))

// Meubar Toggle

const menubar = document.querySelector(".menubar i")
const navigation = document.querySelector(".navigation")

const toggleMenu = () => {
    navigation.classList.toggle("active")

}

const menuBarRotate = () => {
    menubar.classList.toggle("rotate")
}

menubar.addEventListener("click", toggleMenu)
menubar.addEventListener("click", menuBarRotate)

// Dark Theme

const containerMain = document.querySelector(".container-main")
const sideBar = document.querySelector(".navigation")


const ball = document.querySelector("#ball")

ball.addEventListener("click", () => {
    ball.classList.toggle("movBall")
    containerMain.classList.toggle("dark")
    sideBar.classList.toggle("dark")
})

