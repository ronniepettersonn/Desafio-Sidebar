const buttonMenu = document.getElementById("button-menu")

const aside = document.querySelector("aside")

const header = document.querySelector("header")

const link = document.querySelector("header a")

const search = document.querySelector(".search")

const inputSearch = document.querySelector("#input-search")

const span = document.querySelectorAll("span")

const infoFooter = document.querySelector(".info-footer")

const infoProfile = document.querySelector(".info-profile")

const footerImg = document.querySelector("#footer-img")



buttonMenu.onclick = function() {
    if (aside.classList.value === 'short-aside') {
        aside.classList.remove('short-aside')
        header.classList.remove('short-header')
        link.classList.remove('short-logo')
        search.classList.remove('short-button-search')
        inputSearch.classList.remove('short-search')
        span.forEach.call(span, function(e) {
            e.classList.remove('short-menu')
        })
        infoFooter.classList.remove('short-info-footer')
        infoProfile.classList.remove('short-footer')
        footerImg.classList.remove('short-footer')

    } else {
        aside.classList.add('short-aside')
        header.classList.add('short-header')
        link.classList.add('short-logo')
        search.classList.add('short-button-search')
        inputSearch.classList.add('short-search')
        span.forEach.call(span, function(e) {
            e.classList.add('short-menu')
        })
        infoFooter.classList.add('short-info-footer')
        infoProfile.classList.add('short-footer')
        footerImg.classList.add('short-footer')
        
    }
}