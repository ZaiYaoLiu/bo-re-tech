var lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy"
    // ... more custom settings?
});

function hasWebp(){
    if(document.querySelector('html').classList.contains('webp')){
        return true
    } else {
        return false
    }
}

function removeWebp() {

    setTimeout(function() {
        var webpShow = hasWebp()
    
        if(webpShow === true) {
            document.querySelectorAll('.nowebp').forEach(function(e) {
                document.querySelector('body').removeChild(e)
            })
            
        }else{
            if(typeof NodeList.prototype.forEach !== 'function') {
                NodeList.prototype.forEach = Array.prototype.forEach;
                document.querySelectorAll('.haswebp').forEach(function(e) {
                    document.querySelector('body').removeChild(e)
                })
            }
        }
    })
}

removeWebp()