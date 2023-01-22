var nav = document.querySelector('nav');
var button = document.querySelector('.hamburger-menu')
button.addEventListener('click', (event) => {
    nav.classList.toggle('open')
})

document.querySelector('.botao__cor__perseguida').onmousemove = (e) => {

    const x = e.pageX - e.target.offsetLeft
    const y = e.pageY - e.target.offsetTop

    e.target.style.setProperty('--x', `${x}px`)
    e.target.style.setProperty('--y', `${y}px`)

}

function reveal() {
    var reveals = document.querySelectorAll('.reveal');

    reveals.forEach((reveal) => {
        var windowHeight = window.innerHeight;
        var elementTop = reveal.getBoundingClientRect().top;
        var elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
            reveal.classList.add('active');
        } else {
            reveal.classList.remove("active");
        }
    });
}
window.addEventListener("scroll", reveal)

let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volte aqui :( "
})
window.addEventListener("focus", () => {
    document.title = docTitle
})

let urlcalculador = "https://calculadora-pink.vercel.app/"
let urlemunah = "https://formulario-emunah.vercel.app/"
let urlsemaforo = "https://projeto-semaforo.vercel.app/"
let urlcifra = "https://codificar-cifracesar-base-64.vercel.app/"
function entrarcalculadora() {
    let win = window.open(urlcalculador, '_blank')
    win.focus()
}
function entraremunah() {
    let win = window.open(urlemunah, '_blank')
    win.focus()
}
function entrasemaforo() {
    let win = window.open(urlsemaforo, '_blank')
    win.focus()
}
function entrarcifra() {
    let win = window.open(urlcifra, '_blank')
    win.focus()
}
function sobre() {
    window.scrollTo(0, 0)
}

function skills() {
    document.querySelector(".container-skills").scrollIntoView(-100, { behavior: 'smooth' })
}

function projetos() {
    document.querySelector(".projetos").scrollIntoView(-100, { behavior: 'smooth' })
}

function contatos() {
    document.querySelector("footer").scrollIntoView(-100, { behavior: 'smooth' })
}

let urlcv = "https://drive.google.com/file/d/14_4_FIXbxw1orCsqKujPJS6-U3jzJEty/view?usp=share_link"
function dowloadcv() {
    let win = window.open(urlcv, '_blank')
    win.focus()
}
