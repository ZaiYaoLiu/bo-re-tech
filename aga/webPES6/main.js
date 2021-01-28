var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});

let webpShow = true

const hasWebp = () => {
    if(document.querySelector('html').classList.contains('webp')){
        webpShow = true
    } else {
        webpShow = false
    }
}

const removeWebp = () => {
    if(webpShow === true) {
        var array = [...document.querySelectorAll('.nowebp')]
        array.forEach(function(e) {
            document.querySelector('body').removeChild(e)
        })
        
    }else{
        var array = [...document.querySelectorAll('.haswebp')]
        array.forEach(function(e) {
            document.querySelector('body').removeChild(e)
        })
    }
}

function* hasWebpStar() {
    yield hasWebp()
    yield removeWebp()
}

const gen = hasWebpStar()
gen.next()
gen.next()