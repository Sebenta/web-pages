
const spans = document.querySelectorAll('h1 span')
spans.forEach(span => span.addEventListener('mouseover', function (e) {
    span.classList.add('animated', 'rubberBand')
}))
spans.forEach(span => span.addEventListener('mouseout', function (e) {
    span.classList.remove('animated', 'rubberBand')
}))

// SKILLS
const htmlBar = document.querySelector('.bar-html')
const cssBar = document.querySelector('.bar-css')
const jsBar = document.querySelector('.bar-javascript')
const reactBar = document.querySelector('.bar-react')


const showSckills = _ => {
    const skills_bar = document.querySelectorAll('div[class ^= "bar-"]')
    const myskills = { 'bar-html': 75, 'bar-css': 70, 'bar-javascript': 70, 'bar-react': 30 }
    skills_bar.forEach(skill => {
        var width = 1
        var id = setInterval(frame, 50);
        function frame() {
            if (width >= myskills[skill.className]) {
                clearInterval(id);
            } else {
                width++;
                skill.style.width = width + '%';
            }
        }
    }
    )
}
const hideSckills = _ => {
    const skills_bar = document.querySelectorAll('div[class ^= "bar-"]')
    skills_bar.forEach(skill => skill.style.width = "0%")
}


const controller = new ScrollMagic.Controller()
const scene = new ScrollMagic.Scene({
    triggerElement: '.skills',
    triggerHook: 0
})
    .on("enter", showSckills)
    .on("leave", hideSckills)
    .addTo(controller)



// WORK
const showRequiredCategory = event => {
    const button = document.querySelector(`#${event.id}`)
    const getId = event.id
    const links = document.querySelectorAll('.work-category button')
    for (i = 0; i < links.length; i++) {
        if (links[i].hasAttribute('class')) {
            links[i].classList.remove('active')
        }
    }
    button.classList.add('active')

    const getCategory = document.querySelector(`.category-${getId}`)
    const category = document.querySelectorAll('div[class ^= "category-"]')
    for (i = 0; i < category.length; i++) {
        if (category[i].hasAttribute('class')) {
            category[i].classList.remove('show-category')
            category[i].classList.add('hide-category')
        }
    }

    getCategory.classList.remove('hide-category')
    getCategory.classList.add('show-category')
} 
