const header = document.querySelector("h1")
console.log(header.getBoundingClientRect().x);

let x =  header.getBoundingClientRect().x
let y =  header.getBoundingClientRect().y

const test = (e) => {
    header.getBoundingClientRect().x = e.clientY
    header.getBoundingClientRect().y = e.clientX
console.log(header)
}

window.addEventListener("mousemove", test)

