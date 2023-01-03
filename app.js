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

let currSlide = 0;
setInterval(() => {
    if (currSlide <= 3) {
        hideTabContent()
        showTabContent(currSlide)
        currSlide++
    } else {
        currSlide = 0
        hideTabContent()
        showTabContent(currSlide)
    }
},2000);

const modal = document.querySelector(".modal")
const modalTrigger = document.querySelector(".btn_white")
const modalTrigger2 = document.querySelector(".btn_dark")
const closeModalBtn = document.querySelector(".modal__close")

const openModal = () => {
    modal.classList.add("show")
    modal.classList.remove("hide")
    document.body.style.overflow = "hidden"

}
modalTrigger.addEventListener("click", openModal)
modalTrigger2.addEventListener("click", openModal)


const closeModal = () => {
    modal.classList.add("hide")
    modal.classList.remove("show")
    document.body.style.overflow = ""
}
let modalOpened = false
window.onscroll = () => {
    if (document.documentElement.scrollTop >= 3400 && modalOpened === false) {
        modalOpened = true
        openModal();
    }
}
document.body.addEventListener('click', (e) => {
   if (e.target.classList.contains('show')) {
       closeModal();
   }
});

const message = {
    loading: "Идет загрузка...",
    success:"Спасибо, скоро свяжемся",
    fail:"Что-то пошло не так"
}

const forms = document.querySelectorAll("form")

const postData = (form) => {
    form.addEventListener("submit", (e) =>{
        e.preventDefault()
        setTimeout(()=>{
            alert(message.loading)
        }),1000
        const request = new XMLHttpRequest()
        request.open("POST","server.php")
        request.setRequestHeader("Content-type","application/json")

        const formData = new FormData(form)
        const object ={}

        formData.forEach((item,i) => {
            const arr = [item,i]
            console.log(arr)
            object[i] = item
        })
        console.log(object)
        const json = JSON.stringify(object)
        request.send(json)
        request.addEventListener("load", ()=>{
            if (request.status === 200) {
                console.log("ok")
                setTimeout(()=>{
                    alert(message.success)
                }),1000
            }else {
                console.log("not ok")
                setTimeout(()=>{
                    alert(message.fail)
                }),1000
            }
        })
    })
}
forms.forEach((item) => {
    postData(item)
})