/**
 * ----------------------------------------
 * 計算視窗 scrollBar
 * ----------------------------------------
 */
function scrollBarW() {
    /*算出scrollBar寬度*/
    var a = window.innerWidth,
        b = document.documentElement.clientWidth;

    return a - b;
};

/**
 * ----------------------------------------
 * 計算視窗寬度 
 * ----------------------------------------
 */
function deviceWidth() {
    var width = $(window).width();

    return width;
}

/**
 * ----------------------------------------
 * click 
 * ----------------------------------------
 */

/*
開啟光箱
*/
function lightboxOpen() {
    $('.js-lightbox-open').on('click', function() {
        const lName = '.' + $(this).attr('data-open'),
              checkBar = scrollBarW(),
              distance = - ($('html').scrollTop())
        
        $('html').css({
            'overflow-y': 'hidden',
            'width': '100%',
            'height': '100%',
            'position': 'fixed',
            'top': distance,
            'padding-right': checkBar
        })

        $('.navbar').css({
            'padding-right': checkBar,
        })

        if(distance !== 0 ){
            $('.navbar').css({
                'box-shadow': '0 0 10px rgba(51, 51, 51, 0.5)'
            })
        }
        
        $(lName).fadeIn()

        $('.lightboxRoot').scrollTop(0);
    })
};

/*
關閉光箱
*/
function lightboxClose() {
    $('.js-lightbox-close').on('click', function() {
        const top = $('html').css('top').replace(/px/g, '')
        
        $('.lightboxRoot').fadeOut()

        setTimeout(function() {
            $('html').css({
                'overflow-y': '',
                'width': '',
                'height': '',
                'position': '',
                'top': '',
                'padding-right': ''
            })
            $('.navbar').css({
                'padding-right': '',
                'box-shadow': ''
            })
            $('html').scrollTop(-top)
        }, 400)

        if($('.js-lightbox-Quotation').css('display') === 'block') {
            resetForm()
        }
    })
};

var timelineWidth = $('.timeline-li').width()
var timelineWidthInit = $('.timeline-li').width()
var lastTimeLineScrollLeft = document.querySelector('.timeline-li') && $('.timeline-li:last-child').position().left + 430
var timelineLength = $('.timeline-li').length

// console.log(lastTimeLineScrollLeft)

function timelinePrev() {
    $('.js-timelinePrev').on('click', function() {

        $('.timeline-container').stop().animate({scrollLeft: 0}, 500)
        timelineWidth -= timelineWidth
        
    })
}

function timelineNext() {
    
    // let lastTimeLineScrollLeft = $('.timeline-li:last-child').position().left + 430
    $('.js-timelineNext').on('click', function() {
        if(timelineWidth == 0){
            timelineWidth = timelineWidthInit
        }
        $('.timeline-container').stop().animate({scrollLeft: timelineWidth}, timelineLength * 100)
        timelineWidth += timelineWidth
    })
}

function mediaLightOpen() {
    $('.js-media-open').on('click', function() {
        let channel = $(this).attr('data-media-channel');

        const target = $('.mediaLight-container');

        switch(channel) {
            case 'youtube':
                let id = $(this).attr('data-media-id');
                let combineYoutube = `<iframe src="https://www.youtube.com/embed/${id}"/>`
                target.html(combineYoutube)
                break;
            case 'img':
                let img = $(this).css('background-image').slice(5, -2)
                let combineImg = `<img src="${img}" alt="">`
                target.html(combineImg)
                setTimeout(() => {
                    let imgWidth = $('.mediaLight-container img').width()
                    $('.mediaLight').css('max-width', imgWidth)
                })
                
                break;
            default:
                return;      
        }

        $('.mediaLightRoot').addClass('mediaLightRoot--in')
        
    })
}

function mediaLightClose() {

    const close = document.querySelector('.js-media-close'),
          mediaLightRoot = document.querySelector('.mediaLightRoot'),
          target = document.querySelector('.mediaLight-container')

    close.addEventListener('click', handleClose);

    function handleClose() {

        mediaLightRoot.classList.add('mediaLightRoot--out')

        const delectClass = (callback) => {
            setTimeout(() => {
                mediaLightRoot.classList.remove('mediaLightRoot--in', 'mediaLightRoot--out');
                callback()
            },800)
        }
        const delectContainer = () => {
            target.innerHTML = ''
        }

        delectClass(delectContainer)
    }


    // $('.js-media-close').on('click', function() {
    //     const $this = $(this)

    //     $('.mediaLightRoot').addClass('mediaLightRoot--out');
        
    //     // var delectClass = function(callback) {
    //     //     setTimeout(function() {
    //     //         $('.mediaLightRoot').removeClass('mediaLightRoot--in mediaLightRoot--out');
    //     //         callback()
    //     //     },800)
    //     // }

    //     const delectClass = (callback) => {
    //         setTimeout(() => {
    //             $('.mediaLightRoot').removeClass('mediaLightRoot--in mediaLightRoot--out');
    //             callback()
    //         }, 800)
    //     }

    //     const delectContainer = () => {
    //         $this.find('.mediaLight-container').children().remove()
    //     }

    //     delectClass(delectContainer)
    // })
}

/**
 * ----------------------------------------
 * form
 * ----------------------------------------
 */
function resetForm() {
    $('.form')[0].reset()
}

/**
 * ----------------------------------------
 * swiper
 * ----------------------------------------
 */
let exhibit_swiper,
    banner_swiper

var swiper = {
    exhibit() {
        exhibit_swiper = new Swiper('.exhibit-swiper', {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 30,
            lazy: true,
            pagination: {
              el: '.exhibit-swiper .swiper-pagination',
              clickable: true,
            },
            breakpoints: {
                960: {
                    slidesPerView: 3,
                    slidesPerGroup: 3
                },
                560: {
                    slidesPerView: 2,
                    slidesPerGroup: 2
                }
            },
          });
    },
    banner_page() {
        banner_swiper = new Swiper('.bannerPage', {
            slidesPerView: 1,
            lazy: {
                loadPrevNext: true
            },
            pagination: {
              el: '.bannerPage .swiper-pagination',
              clickable: true,
            }
          });
    }
}

/**
 * ----------------------------------------
 * lazyload
 * ----------------------------------------
 */
var lazyLoadInstance

function img_lazyload() {
    lazyLoadInstance = new LazyLoad({
        elements_selector: ".lazy",
        threshold: 0,
        callback_enter: (el)=>{

        }
    });
}

/**
 * ----------------------------------------
 * webP
 * ----------------------------------------
 */
function hasWebp(){
    if($('html').hasClass('webp')){
        return true
    } else {
        return false
    }
}

function removeWebp() {

    setTimeout(function() {
        var webpShow = hasWebp()

        if(webpShow === true) {
            $('.nowebp').each(function() {
                $(this).remove()
            })
            
        }else{
            $('.haswebp').each(function() {
                $(this).remove()
            })
        }
    })
}

/**
 * ----------------------------------------
 * tags
 * ----------------------------------------
 */
function tags_page() {
    $('.js-tags').on('click', function() {
        const $this = $(this),
              length = $this.attr('data-length')

        console.log($this.attr('data-length'))
        if(length == 0){
            $('.product').fadeOut(0);
            $('.product--none').fadeIn();
        } else {
            $('.product--none').fadeOut(0);
            $('.product').fadeIn();
        }
    })
}

function tags_active() {
    $('.js-tags').on('click', function() {
        const $this = $(this)

        $('.js-tags').removeClass('tags__href--active')
        $this.addClass('tags__href--active')
    })
}

function tags_select() {
    $('.js-tags-select').on('click', function() {
        const $this = $(this),
              title = $this.text(),
              all = $('.tags-titleRoot__title').eq(0).text()

        $this.closest('.tags-dropDown-content').siblings('.tags-dropDown-title').find('.tags-dropDown__title').text(title)

        $('.tags-titleRoot__title').removeClass('tags-titleRoot__title--active');
        $this.addClass('tags-titleRoot__title--active');

        $('.tags-content__p').each(function() {
            if(title == all) {
                $(this).show()
            }else if($(this).attr('data-local') !== title){
                $(this).hide()
            }else{
                $(this).show()
            }
        })
    })
}

function tags_dropDown() {
    const device_w = deviceWidth() - scrollBarW()

    if(device_w <= 767) {
        $('.js-tags-dropDown').off().on('click', function() {
            $(this).siblings('.tags-dropDown-content').slideToggle()
            $(this).find('.tags-dropDown__button').toggleClass('tags-dropDown__button--active')
        })

        $('.js-tags-select').on('click', function() {
            $(this).closest('.tags-dropDown-content').slideUp()
            $(this).closest('.tags-dropDown').find('.tags-dropDown__button').removeClass('tags-dropDown__button--active')
        })
    }else{
        $('.js-tags-dropDown').off()
        $('.js-tags-select').off()
        tags_select()
        $('.tags-dropDown-content').css({
            'display': ''
        })
    }
}


/**
 * ----------------------------------------
 * dropDown
 * ----------------------------------------
 */
function dropDown() {
    $('.navbar__li').find('.twoList').parent('.navbar__li').addClass('navbar__li--hasFloor')

    $('.navbar__li--hasFloor').each(function() {
        let length = $(this).find('.twoList-li').length
        if(length > 1){
            $(this).addClass('navbar__li--unJust1')
        }
    })
}

function selectDropDown() {
    $('.js-dropDown').on('click', function() {
        const $this = $(this)

        $this.siblings('.tags-dropDown-content').slideToggle();
        $this.find('.tags-dropDown__button').toggleClass('tags-dropDown__button--active')
    })

    $('.js-dropDown-select').on('click', function() {
        const $this = $(this),
              text = $this.text()

        $this.closest('.tags-dropDown').find('.tags-dropDown__title').text(text)
        $this.closest('.tags-dropDown').find('.tags-dropDown__button').removeClass('tags-dropDown__button--active')
        $this.closest('.tags-dropDown-content').slideUp();
    })
}

function dropDownZindex() {
    const length = $('.tags-dropDownRoot').length
    let total = $('.tags-content__p').length
        

    for(let i=0; i<=length; i++){
        $('.tags-dropDown-content').eq(i).css({
            'z-index': total
        })
        total = total - 1
    }
}

function navbar_DropDown() {
    $('.js-openDropDown').on('click', function(e) {
        e.stopPropagation();
        const $this = $(this)
        let val = $this.attr('data-dropDown')

        $('.dropDown--earth, .dropDown--menu').not(val).slideUp()
        
        $('.'+ val +'').stop().slideToggle()
    })

    $('body').on('click', function(e) {
        $('.dropDown--earth, .dropDown--menu').slideUp()
    })
}

function navbar_close_DropDown() {
    $('.js-closeDropDown').on('click', function() {
        $(this).parent().slideUp()
    })
}

/**
 * ----------------------------------------
 * local number
 * ----------------------------------------
 */
function localNumber() {
    const total = $('.js-tags-num li').length

    let i = 1

    function num(i) {
        if(i<=total) {
            $('.all-local-num').text(i)
            i = i + 1
            if(i<=total/4) {
                setTimeout(() => {
                    num(i)
                },90)
            }else if(i<=total/3){
                setTimeout(() => {
                    num(i)
                },70)
            }else if(i< total - 3){
                setTimeout(() => {
                    num(i)
                },80)
            }else{
                setTimeout(() => {
                    num(i)
                },200)
            }
        }
    }
    num(i)
}

/**
 * ----------------------------------------
 * navbar
 * ----------------------------------------
 */
function navbar_scroll() {
    $(window).scroll(function() {
        let scrollNum = $(this).scrollTop()
        
        if(scrollNum > 1){
            $('.navbar').addClass('navbar--scroll')
        }else{
            $('.navbar').removeClass('navbar--scroll')
        }
    })
}

/**
 * ----------------------------------------
 * resize
 * ----------------------------------------
 */
function resize() {
    $(window).resize(function () {

        if($('.tags-dropDown')) {
            tags_dropDown()
        }
    });
}

/**
 * ----------------------------------------
 * 呼叫
 * ----------------------------------------
 */
var readyFunction = {
    checkFunction() {
        //共用函數呼叫
        readyFunction.common();

        //擷取body id
        var functionName = $('body').attr('id');

        if (functionName !== undefined) {
            //呼叫函數( 如果 id = home 輸出的結果為 readyFunction.home(); )
            eval("readyFunction." + functionName + "();");
        }
    },
    common() {

        dropDown();

        navbar_scroll();

        navbar_DropDown();

        navbar_close_DropDown();

        resize();

    },
    home() {

        swiper.exhibit();

        removeWebp();

        img_lazyload();

    },
    solutions() {

        img_lazyload();

    },
    solutions_detail() {

        swiper.banner_page()

        lightboxOpen();

        lightboxClose();

        mediaLightOpen();

        mediaLightClose();

    },
    products() {

        img_lazyload();

        tags_page();

        tags_active();

    },
    products_detail() {

        swiper.banner_page()

        lightboxOpen();

        lightboxClose();

        mediaLightOpen();

        mediaLightClose();
        
    },
    projects() {

        img_lazyload();

        tags_select();

        tags_dropDown();

        selectDropDown();

        dropDownZindex();

        localNumber();

    },
    projects_detail() {

        img_lazyload();

        mediaLightOpen();

        mediaLightClose();

    },
    projects_service() {

        img_lazyload();

        tags_select();

        tags_dropDown();

        selectDropDown();

    },
    news() {

        img_lazyload();

    },
    news_exhibitions() {

        img_lazyload();

    },
    news_detail() {

        img_lazyload();

        mediaLightOpen();

        mediaLightClose();

    },
    contact() {

        img_lazyload();

    },
    contact_inquiry() {

        img_lazyload();

    },
    download() {

        img_lazyload();

    },
    videos() {

        img_lazyload();

        $(".js-video-button").modalVideo();

    },
    about() {

        img_lazyload();

        timelinePrev();

        timelineNext();

    },
};

$(document).ready(function() {
    readyFunction.checkFunction();
    console.log("ready loaded")
});

// function changeImg() {
//     const imgLength1 = $('.lazy').length

//     for(let i=0; i < imgLength1; i++){
//         var target = $('.lazy').eq(i)
//         var tagName = target[0].tagName
//         console.log(tagName)
//         switch (tagName){
//             case 'DIV':
//                 let beforeImg = target.attr('data-bg')
//                 let afterImg = beforeImg.replace('webp', 'jpg')
//                 console.log(target.css('background-image', afterImg))
//                 setTimeout(function() {
//                     target.css('background-image', afterImg)
//                 })
//                 break;
//             case 'IMG':

//                 break;
//             default:
//                 return
//         }
//     }
// }

// $(window).on('load',function() {
//     console.log("window loaded")
//     setTimeout(function() {
//         changeImg()
//     },2000)
// })