const bar = document.getElementById('bar')
const closse = document.getElementById('close')
const nav = document.getElementById('navbar')
if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}
if (closse) {
    closse.addEventListener('click', () => {
        nav.classList.remove('active')
    })
}
const non = document.getElementById('sam')
const lon = document.getElementById('sem')
lon.onclick = function () {
    non.remove()
}