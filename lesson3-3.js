const tabs = document.querySelectorAll(".tabheader__item")
const tabsParent = document.querySelector(".tabheader__items")
const tabContent = document.querySelectorAll(".tabcontent")

const hideTabContent = () => {
    tabContent.forEach((item) => {
        item.style.display = "none"
    })
    tabs.forEach((item) => {
        item.classList.remove("tabheader__item_active")
    })
}

const showTabContent = (i = 3) => {
    tabContent[i].style.display = "block"
    tabs[i].classList.add("tabheader__item_active")
}

hideTabContent()
showTabContent()

hideTabContent()
showTabContent()

tabsParent.addEventListener("click", (event) => {
    const target = event.target
    if(target.classList.contains("tabheader__item")){
        tabs.forEach((item, i) => {
            if(target === item){
                console.log(i)
                hideTabContent()
                showTabContent(i)
            }
        })
    }
})

let imgSlider = 0;
setInterval(() => {
    if (imgSlider < 3) {
        imgSlider++
        hideTabContent()
        showTabContent(imgSlider)
    } else {
        imgSlider = 0
        hideTabContent()
        showTabContent(imgSlider)
    }
},1000);

const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"

}

modalTrigger.addEventListener("click", openModal)

const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}

let modalOpened = false
window.onscroll = () => {
    if (document.documentElement.scrollTop >= 4000 && modalOpened === false) {
        modalOpened = true
        openModal();
    }
}

document.body.addEventListener('click', (e) => {
   if (e.target.classList.contains('show')) {
       closeModal();
   }
});