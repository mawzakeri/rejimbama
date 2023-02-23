const showMenuIcon = document.querySelector("#show-mobile__menu")
const closeMenuIcon = document.querySelector("#close-mobile__menu")
const mobileMenu = document.querySelector("#mobile-menu")
const backdrop = document.querySelector(".backdrop")
const playVideoIcon = document.querySelector("#play-video__icon")
const videoBox = document.querySelector(".video-box")
const videoCover = document.querySelector(".video-cover")
const stopVideoIcon = document.querySelector("#stop-video__icon")
const toggleSelectBoxIcon = document.querySelectorAll(".toggle-select__box")
const selectBoxContainers = document.querySelectorAll(".select-box")
const selectBoxs = document.querySelectorAll(".select-items__container")
const planBox = document.querySelector("#plan-box")
const planBoxClass = document.querySelectorAll(".test")
const payCartValue = document.querySelector("#paycart-value")
const toggleCartBtn = document.querySelectorAll(".toggle-cart__btn")
const cartBtnSelection = document.querySelector(".cart-btn__selection")
const rangeItems = document.querySelectorAll(".range-items")
const calcBmiBtn = document.querySelector("#calc-bmi-btn")
const supoortCheckBox = document.querySelector("#support-check")
const sportCheckBox = document.querySelector("#sport-check")
const webPlansItem = document.querySelectorAll(".web-plans__item")
const femailSex = document.querySelector("#femail-sex")
const mailSex = document.querySelector("#mail-sex")
const stickyMenus = document.querySelectorAll(".sticky-menu")
const numberInput = document.querySelector("#number-input")
const resDietBtn = document.querySelector(".show-w__scroll")

numberInput.addEventListener("keypress" , e => {
    e.preventDefault()
    if(e.target.value.length < 11){
        if(!isNaN(e.key)){
            e.target.value += e.key
        }
    }
})

supoortCheckBox.addEventListener("change" , e => showMore(e))
sportCheckBox.addEventListener("change" , e => showMore(e))

window.addEventListener( "scroll" , e => activeStickyMenu(e))

function activeStickyMenu(target){
    if(window.scrollY > 150){
        stickyMenus.forEach(menu => {
            menu.classList.add("menu-scroll__sticky")
            resDietBtn.classList.add("active")
        })
    }
    else{
        stickyMenus.forEach(menu => {
            menu.classList.remove("menu-scroll__sticky")
            resDietBtn.classList.remove("active")
        })
    }
}

femailSex.addEventListener("click" , e => vibrateAnimation(e.target , "woman"))
mailSex.addEventListener("click" , e => vibrateAnimation(e.target , "man"))

function vibrateAnimation(target , type){
    if(type === "woman"){
        if(target.checked){
            target.parentElement.parentElement.children[0].classList.add("vibrite-animate")
            setTimeout(() => {
                target.parentElement.parentElement.children[0].classList.remove("vibrite-animate")
            } , 500)
        }
        else{
            target.parentElement.parentElement.children[0].classList.remove("vibrite-animate")
        }
    }
    else{
        if(target.checked){
            target.parentElement.parentElement.children[2].classList.add("vibrite-animate")
            setTimeout(() => {
                target.parentElement.parentElement.children[2].classList.remove("vibrite-animate")
            } , 500)
        }
        else{
            target.parentElement.parentElement.children[2].classList.remove("vibrite-animate")
        }
    }
}


webPlansItem.forEach(plan => {
    plan.addEventListener("mouseover" , () => hoverSVG(plan))
    plan.addEventListener("mouseout" , () => disableHoverSVG(plan))
    plan.addEventListener("click" , () => activePlan(plan))
})


function activePlan(target){
    let svgIcon = target.children[1].children[0];
    webPlansItem.forEach(plan => {
        plan.classList.remove("active")
        plan.classList.remove("active-plan__box")
        plan.children[1].children[0].classList.remove("svg-click__plans")
    })
    target.classList.add("active")
    target.classList.add("active-plan__box")
    svgIcon.classList.add("svg-click__plans")
}

function disableHoverSVG(target){
    target.children[1].classList.remove("scale-radius__animate")
    target.children[1].classList.add("disable-radius__animate")
    let svgIcon = target.children[2].children[0].children[0].children[0];
    svgIcon.classList.remove("svg-active__plans")
    target.classList.remove("updown-animate")
}

function hoverSVG(target){
    target.classList.add("updown-animate")
    target.children[1].classList.remove("disable-radius__animate")
    target.children[1].classList.add("scale-radius__animate")
    let svgIcon = target.children[2].children[0].children[0].children[0];
    svgIcon.classList.add("svg-active__plans")
}

function showMore(e){
    let mainContainer = e.target.parentElement.parentElement;
    if(e.target.checked){
        mainContainer.querySelector(".check-need").classList.add("active")
        mainContainer.classList.add("active")
    }
    else{
        mainContainer.querySelector(".check-need").classList.remove("active")
        mainContainer.classList.remove("active")
    }
}

let selectedPlans = {planPrice : 0 , sportPrice : 0 , supportPrice : 0};
let totalPayCart = 0;

calcBmiBtn.addEventListener("click" , e => {
    calcBMI();
})

const planBoxItems = [
    {id: 1 , icon: "https://www.ghafaridiet.com/upload/thumb2/product/1656831831.png" , title: "برنامه 1 ماهه رژیمی" , price:4500000},
    {id: 2 , icon: "https://www.ghafaridiet.com/upload/thumb2/product/1656831865.png" , title: "برنامه 2 ماهه رژیمی" , price:2000000},
    {id: 3 , icon: "https://www.ghafaridiet.com/upload/thumb2/product/1656831890.png" , title: "برنامه 3 ماهه رژیمی" , price:2850000},
    {id: 4 , icon: "https://www.ghafaridiet.com/upload/thumb2/product/1656831912.png" , title: "برنامه 4 ماهه رژیمی" , price:2000000},
    {id: 5 , icon: "https://www.ghafaridiet.com/upload/thumb2/product/1656831931.png" , title: "برنامه 5 ماهه رژیمی" , price:1200000},
    {id: 6 , icon: "https://www.ghafaridiet.com/upload/thumb2/product/1656831950.png" , title: "برنامه 6 ماهه رژیمی" , price:2500000}
]

window.addEventListener("load" , setupRangeItemPosition)

function setupRangeItemPosition(){
    rangeItems.forEach(range => {
        range.scrollLeft = range.clientWidth / 2
    })
}

toggleCartBtn.forEach(btn => {
    btn.addEventListener("click" , e => {
        if(e.target.nodeName === "DIV"){
                e.target.dataset.selected = "true";
                selectCartBtn(e.target)
        }
        else{
                e.target.parentElement.dataset.selected = "true"
                selectCartBtn(e.target.parentElement)
        }
    })
})

function selectCartBtn(btn , status){
    if(status === "toggle"){
        if(btn.dataset.select == "false"){
            btn.dataset.select = "true"
            btn.classList.add("active")
        }
        else{
            btn.dataset.select = "false"
            btn.classList.remove("active")
        }
    }
    else{
        toggleCartBtn.forEach(otherBtn => {
            otherBtn.classList.remove("active")
        })
        btn.classList.add("active")
    }
}

toggleSelectBoxIcon.forEach(icon => {
    icon.addEventListener("click" , e => {
        toggleSelectBox(e.target)
    })
});


window.addEventListener("load" , insertPlanBoxs)

function insertPlanBoxs(){
            planBox.innerHTML = ""
            planBoxItems.forEach(planBoxItem => {
                const priceShowed = planBoxItem.price.toLocaleString('en-US');
                planBox.innerHTML += `
                    <div class="box-redius test" id='plan-`+planBoxItem.id+`'>
                            <div class="box-redius__content">
                                <img src="${planBoxItem.icon}" alt="pelan">
                                <p class="bold-text">${planBoxItem.title}</p>
                                <div class="justify-box">
                                    <span class="bold-text">${priceShowed}</span>
                                    <span class="reg-text">تومان</span>
                                </div>
                            </div>
                        </div>
                    `

                    document.querySelectorAll(".test").forEach(plan => {
                        plan.addEventListener("click" , e => {
                            if(e.target.className.includes("box-redius__content")){
                                selectPlan(e.target , e.target.parentElement.id)
                            }
                            else if(e.target.className.includes("box-redius")){
                                selectPlan(e.target.children[0] , e.target.id)
                            }
                            else if(e.target.nodeName === "IMG" || e.target.nodeName === "DIV" || e.target.nodeName === "P"){
                                selectPlan(e.target.parentElement , e.target.parentElement.parentElement.id)
                            }
                            else{
                                selectPlan(e.target.parentElement.parentElement , e.target.parentElement.parentElement.parentElement.id)
                            }
                        })
                      });
                      
                   
            })
            
}


function selectPlan(target , id){
    let allPlanBoxItems = planBox.querySelectorAll(".box-redius__content")
    allPlanBoxItems.forEach(planBoxItem => {
        planBoxItem.classList.remove("active-plan__box")
        planBoxItem.parentElement.classList.remove("active")
    })
    target.parentElement.classList.add("active")
    target.classList.add("active-plan__box")
    let planTarget = planBoxItems.find( planBoxItem => {
        return id === `plan-${planBoxItem.id}`
    })
    selectedPlans.planPrice = planTarget.price
    payCartValue.innerHTML = calcPayCart().toLocaleString('en-US')// re calc
}



showMenuIcon.addEventListener("click" , showMobileMenu)
backdrop.addEventListener("click" , closeMobileMenu)
closeMenuIcon.addEventListener("click" , closeMobileMenu)
videoBox.addEventListener("click" , showVideoControls)
playVideoIcon.addEventListener("click" , showVideo)
stopVideoIcon.addEventListener("click" , stopVideo)


function toggleSelectBox(target){
    let toggleStatus = target.dataset.collapse
    let selectBox = target.parentElement.querySelector(".select-items__container")
    if(toggleStatus == "collapse"){
        closeSelectBox(target , selectBox)
    }
    else{
        showSelectBox(target , selectBox)
        let selectBoxItems = target.parentElement.querySelectorAll(".select-box__item")
        let selectBoxContainer = target.parentElement.querySelector(".select-items__container")
        selectBoxItems.forEach(item => {
            item.addEventListener("click" , e => {
                if(e.target.nodeName === "P"){
                    insertSelectBoxValue(target , selectBox , e.target , target.parentElement.children[0] , selectBoxContainer.dataset.type)
                }
                else{
                    insertSelectBoxValue(target , selectBox , e.target.children[0] , target.parentElement.children[0] , selectBoxContainer.dataset.type)
                }
            })
        })
    }
}

window.addEventListener("load" , setupSelectBoxPosition)

function setupSelectBoxPosition(){
    selectBoxContainers.forEach(selectBoxContainer => {
        let selectBox = selectBoxContainer.querySelector(".select-items__container")
        selectBox.style.width = selectBoxContainer.offsetWidth - ((selectBoxContainer.offsetWidth * 20) / 100)
    })
}

function showSelectBox(target , selectBox ){
    target.dataset.collapse = "collapse"
    selectBox.parentElement.style.width = "100%"
    selectBox.classList.add("select-box__active")
    target.classList.remove("fa-angle-down")
    target.classList.add("fa-angle-up")
    target.parentElement.children[0].style.display = "none"
    let selectBoxItems = selectBox.querySelectorAll(".select-box__item")
    
    selectBoxItems.forEach(item => {
        let selectBoxItem = item.querySelector("p").innerHTML
        let selectedItem = selectBox.parentElement.parentElement.querySelector("p").innerHTML;
        if(selectBoxItem === selectedItem){
            item.classList.add("active-select__item")
        }
        else{
            item.classList.remove("active-select__item")
        }
        
    });
    
}


function calcPayCart(){
    return selectedPlans.sportPrice + selectedPlans.supportPrice + selectedPlans.planPrice
}

function closeSelectBox(target , selectBox){
    target.dataset.collapse = "unCollapse"
    selectBox.parentElement.style.width = "0%"
    selectBox.classList.remove("select-box__active")
    target.classList.add("fa-angle-down")
    target.classList.remove("fa-angle-up")
    target.parentElement.children[0].style.display = "block"
}

function insertSelectBoxValue(target , selectBox , item , textPlace , selectedItemType){
    selectBox.parentElement.style.width = "0%"
    textPlace.innerHTML = item.innerHTML
    if(selectedItemType === "sport"){
        selectedPlans.sportPrice = +item.parentElement.dataset.price
    }
    else if(selectedItemType === "support"){
        selectedPlans.supportPrice = +item.parentElement.dataset.price
    }
    payCartValue.innerHTML = calcPayCart().toLocaleString('en-US')
    closeSelectBox(target , selectBox)
}


function showVideoControls(){
    stopVideoIcon.classList.remove("hide-control")
    setTimeout(() => {
        stopVideoIcon.classList.add("hide-control") 
    } , 3000)
}

function stopVideo(){
    videoBox.pause();
    playVideoIcon.classList.remove("hide-control")
    stopVideoIcon.classList.add("hide-control")
}

function showVideo(){
    videoBox.play();
    playVideoIcon.classList.add("hide-control")
    stopVideoIcon.classList.remove("hide-control")
    videoCover.style.display = "none";
    videoBox.style.display = "block"
    setTimeout(() => {
        stopVideoIcon.classList.add("hide-control") 
    } , 1000)
}

function showMobileMenu (){
    mobileMenu.classList.add("active-main__menu")
    backdrop.classList.add("active-backdrop")
}

function closeMobileMenu(){
    mobileMenu.classList.remove("active-main__menu")
    backdrop.classList.remove("active-backdrop")
}


function makeRangeElem(startRange , endRange , parent , container){
    let htmlCode = ``;
    let counter = 0
    for(let i = startRange; i <= endRange ; i++){
        htmlCode += `
                            <div class="range-item" data-selected="${counter*50}">
                                <p draggable="false">${i}</p>
                                <span draggable="false" class="hor-blue__line"></span>
                            </div>
        `
        counter++
    }
    parent.innerHTML = htmlCode
    let scrollValue = container.offsetWidth / 2
    parent.scrollRight = scrollValue
}


makeRangeElem(80 , 250 , document.querySelector(".height-range") , document.querySelector(".user-height") ) // for height range
makeRangeElem(30 , 200 , document.querySelector(".wieght-range") , document.querySelector(".user-weight") ) // for Wieght range
makeRangeElem(10 , 90 , document.querySelector(".age-range") , document.querySelector(".user-weight") ) // for age range
let heightRnageClick = 0
let wieghtRnageClick = 0
let ageRnageClick = 0
let startXHeight = 0;
let startXWieght = 0;
let startXAge = 0;
    /// for touching scroll !
function activeTouchScroll(range , type){
    let rangeItemWidth
    if(type != "click"){
        rangeItemWidth = range.querySelector(".range-item").offsetWidth
    }
    let pressed = false;
    let maxScrollHeight = range.offsetWidth / 2;
    let xWieght = 0;// prev ClientX
    let maxScrollWieght = range.offsetWidth / 2;
    let xAge = 0;// prev ClientX
    let maxScrollAge = range.offsetWidth / 2;
    let scrollWieght;
    let scrollHeight;
    let scrollAge;
    if(document.documentElement.clientWidth < 768){
        scrollHeight = (range.offsetWidth / 2) - 150 ;
        scrollWieght = (range.offsetWidth / 2) - 150 ;
        scrollAge = (range.offsetWidth / 2) - 150 ;
    }
    else if(document.documentElement.clientWidth >= 768 && document.documentElement.clientWidth < 992){
        scrollHeight = (range.offsetWidth / 2) - 300 ;
        scrollWieght = (range.offsetWidth / 2) - 300 ;
        scrollAge = (range.offsetWidth / 2) - 300 ;
    }
    else {
        scrollHeight = (range.offsetWidth / 2) - 200 ;
        scrollWieght = (range.offsetWidth / 2) - 200 ;
        scrollAge = (range.offsetWidth / 2) - 200 ;
    }
    let xHeight = 0;// prev ClientX
    
    if(type === "height"){
        let allItems
        range.addEventListener("mousedown" , e => {
            allItems = range.querySelectorAll(".range-item")
            pressed = true;
            xHeight = e.clientX
        })
        range.addEventListener("mouseleave" , () => {
            pressed = false;
            range.style.transform = `translateX(${Math.floor(startXHeight/(rangeItemWidth + 10)) * (rangeItemWidth + 10)}px)`
            startXHeight = Math.floor(startXHeight/(rangeItemWidth + 10)) * (rangeItemWidth + 10)
        })
        range.addEventListener("mouseup" , e => {
            pressed = false;
            range.style.transform = `translateX(${Math.floor(startXHeight/(rangeItemWidth + 10)) * (rangeItemWidth + 10)}px)`
            startXHeight = Math.floor(startXHeight/(rangeItemWidth + 10)) * (rangeItemWidth + 10)
        })
        range.addEventListener("mousemove" , e => {
            if(!pressed){
                return 
            }
            else{
                if(e.clientX > xHeight){
                    if(scrollHeight > startXHeight){
                        startXHeight += 7
                        range.style.transform = `translateX(${startXHeight}px)`
                        let centerItem = Math.floor(startXHeight/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollHeight) - (rangeItemWidth - 5)
                        activeTargetRangeItem(centerItem , allItems)
                    }
                }
                else {
                    if(-scrollHeight < startXHeight){
                        startXHeight -= 7
                        range.style.transform = `translateX(${startXHeight}px)`
                        let centerItem = Math.floor(startXHeight/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollHeight) - (rangeItemWidth - 5)
                        activeTargetRangeItem(centerItem , allItems)
                    }
                }
                xHeight = e.clientX
            }
        })
        range.addEventListener("touchstart" , () => {
            allItems = range.querySelectorAll(".range-item")
        })
        range.addEventListener("touchmove" , e => {
            if(e.touches[0].clientX > xHeight){
                if(scrollHeight > startXHeight){
                    startXHeight += 7
                    range.style.transform = `translateX(${startXHeight}px)`
                    let centerItem = Math.floor(startXHeight/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollHeight) - (rangeItemWidth - 5)
                    activeTargetRangeItem(centerItem , allItems)
                }
            }
            else {
                if(-scrollHeight < startXHeight){
                    startXHeight -= 7
                    range.style.transform = `translateX(${startXHeight}px)`
                    let centerItem = Math.floor(startXHeight/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollHeight) - (rangeItemWidth - 5)
                    activeTargetRangeItem(centerItem , allItems)
                }
            }
            xHeight = e.touches[0].clientX
        })
        range.addEventListener("touchend" , () => {
            range.style.transform = `translateX(${Math.floor(startXHeight/(rangeItemWidth + 10)) * (rangeItemWidth + 10)}px)`
            startXHeight = Math.floor(startXHeight/(rangeItemWidth + 10)) * (rangeItemWidth + 10)
        })
    }
    else if(type === "wieght"){
        let allItems
        range.addEventListener("mousedown" , e => {
            allItems = range.querySelectorAll(".range-item")
            pressed = true;
            xWieght = e.clientX
        })
        range.addEventListener("mouseup" , e => {
            pressed = false;
            range.style.transform = `translateX(${Math.floor(startXWieght/ (rangeItemWidth + 10)) *  (rangeItemWidth + 10)}px)`
            startXWieght = Math.floor(startXWieght/ (rangeItemWidth + 10)) *  (rangeItemWidth + 10)
        })
        range.addEventListener("mouseleave" , () => {
            pressed = false;
            range.style.transform = `translateX(${Math.floor(startXWieght/ (rangeItemWidth + 10)) *  (rangeItemWidth + 10)}px)`
            startXWieght = Math.floor(startXWieght/ (rangeItemWidth + 10)) *  (rangeItemWidth + 10)
        })
        range.addEventListener("mousemove" , e => {
            if(!pressed){
                return 
            }
            else{
                if(e.clientX > xWieght){
                    if(scrollWieght > startXWieght){
                        startXWieght += 7
                        range.style.transform = `translateX(${startXWieght}px)`
                        let centerItem = Math.floor(startXWieght/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollWieght) - (rangeItemWidth - 5)
                        activeTargetRangeItem(centerItem , allItems)
                    }
                }
                else {
                    if(-scrollWieght < startXWieght){
                        startXWieght -= 7
                        range.style.transform = `translateX(${startXWieght}px)`
                        let centerItem = Math.floor(startXWieght/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollWieght) - (rangeItemWidth - 5)
                        activeTargetRangeItem(centerItem , allItems)
                    }
                }
                xWieght = e.clientX
            }
        })
        range.addEventListener("touchstart" , () => {
            allItems = range.querySelectorAll(".range-item")
        })
        range.addEventListener("touchend" , () => {
            range.style.transform = `translateX(${Math.floor(startXWieght/(rangeItemWidth + 10)) * (rangeItemWidth + 10)}px)`
            startXWieght = Math.floor(startXWieght/(rangeItemWidth + 10)) * (rangeItemWidth + 10)
        })
        range.addEventListener("touchmove" , e => {
            if(e.touches[0].clientX > xHeight){
                if(scrollHeight > startXWieght){
                    startXWieght += 7
                    range.style.transform = `translateX(${startXWieght}px)`
                    let centerItem = Math.floor(startXWieght/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollHeight) - (rangeItemWidth - 5)
                    activeTargetRangeItem(centerItem , allItems)
                }
            }
            else {
                if(-scrollHeight < startXWieght){
                    startXWieght -= 7
                    range.style.transform = `translateX(${startXWieght}px)`
                    let centerItem = Math.floor(startXWieght/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollHeight) - (rangeItemWidth - 5)
                    activeTargetRangeItem(centerItem , allItems)
                }
            }
            xHeight = e.touches[0].clientX
        })
    }
    else if(type === "age"){
        let allItems
        range.addEventListener("mousedown" , e => {
            allItems = range.querySelectorAll(".range-item")
            pressed = true;
            xAge = e.clientX
        })
        range.addEventListener("mouseup" , e => {
            pressed = false;
            range.style.transform = `translateX(${Math.floor(startXAge/ (rangeItemWidth + 10) ) *  (rangeItemWidth + 10) }px)`
            startXAge = Math.floor(startXAge/ (rangeItemWidth + 10) ) *  (rangeItemWidth + 10)
        })
        range.addEventListener("mouseleave" , () => {
            pressed = false;
            range.style.transform = `translateX(${Math.floor(startXAge/ (rangeItemWidth + 10) ) *  (rangeItemWidth + 10) }px)`
            startXAge = Math.floor(startXAge/ (rangeItemWidth + 10) ) *  (rangeItemWidth + 10)
        })
        range.addEventListener("mousemove" , e => {
            if(!pressed){
                return 
            }
            else{
                if(scrollAge > startXAge){
                    if(scrollWieght > startXWieght){
                        startXAge += 7
                        range.style.transform = `translateX(${startXAge}px)`
                        let centerItem = Math.floor(startXAge/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollAge) - (rangeItemWidth - 5)
                        activeTargetRangeItem(centerItem , allItems)
                    }
                }
                else {
                    if(-scrollAge > startXAge){
                        startXAge -= 7
                        range.style.transform = `translateX(${startXAge}px)`
                        let centerItem = Math.floor(startXHeight/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollAge) - (rangeItemWidth - 5)
                        activeTargetRangeItem(centerItem , allItems)
                    }
                }
                xAge = e.clientX
            }
    
        })
        range.addEventListener("touchstart" , () => {
            allItems = range.querySelectorAll(".range-item")
        })
        range.addEventListener("touchend" , () => {
            range.style.transform = `translateX(${Math.floor(startXAge/(rangeItemWidth + 10)) * (rangeItemWidth + 10)}px)`
            startXAge = Math.floor(startXAge/(rangeItemWidth + 10)) * (rangeItemWidth + 10)
        })
        range.addEventListener("touchmove" , e => {
            if(e.touches[0].clientX > xHeight){
                if(scrollHeight > startXAge){
                    startXAge += 7
                    range.style.transform = `translateX(${startXAge}px)`
                    let centerItem = Math.floor(startXAge/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollHeight) - (rangeItemWidth - 5)
                    activeTargetRangeItem(centerItem , allItems)
                }
            }
            else {
                if(-scrollHeight < startXAge){
                    startXAge -= 7
                    range.style.transform = `translateX(${startXAge}px)`
                    let centerItem = Math.floor(startXAge/(rangeItemWidth + 10)) * (rangeItemWidth + 10) + (maxScrollHeight) - (rangeItemWidth - 5)
                    activeTargetRangeItem(centerItem , allItems)
                }
            }
            xHeight = e.touches[0].clientX
        })
    }
    else if(type === "click"){
        let allItems = range.parentElement.querySelectorAll(".range-item")
        if(range.parentElement.className.includes("height-range")){
            heightRnageClick = selectRangeItem(range , allItems)
            startXHeight = heightRnageClick
        }
        else if(range.parentElement.className.includes("wieght-range")){
            wieghtRnageClick = selectRangeItem(range , allItems)
            startXWieght = wieghtRnageClick
        }
        else if(range.parentElement.className.includes("age-range")){
            ageRnageClick = selectRangeItem(range , allItems)
            startXAge = ageRnageClick
        }
    }
}


function activeTargetRangeItem(centerItem , allItems){
    allItems.forEach(item => {
        if(item.dataset.selected == centerItem){
            item.classList.add("active")
        }
        else{
            item.classList.remove("active")
        }
    })
}


rangeItems.forEach(range => {

    if(range.className.includes("height-range"))
        activeTouchScroll(range , "height")

    else if(range.className.includes("wieght-range"))
        activeTouchScroll(range , "wieght")

    else if(range.className.includes("age-range"))
        activeTouchScroll(range , "age")

    let rangeItems = range.querySelectorAll(".range-item");

    rangeItems.forEach(rangeItem => {
            rangeItem.addEventListener("click" , e => {
                if(e.target.className.includes("range-item")){
                    activeTouchScroll(e.target , "click")
                }
                else{
                    activeTouchScroll(e.target.parentElement , "click")
                }
            })
    })
})

window.addEventListener("mouseup" , e => {
    pressed = false;
})

function selectRangeItem(target , allItems){
    let pertScroll = target.parentElement.offsetWidth / 2 - 40
    scrollValueToTarget = target.dataset.selected - pertScroll
        target.parentElement.style.transition = "0.2s"
        setTimeout(() => {
            target.parentElement.style.transition = ""
        } , 200)
        target.parentElement.style.transform = `translateX(${scrollValueToTarget}px)`
        activeTargetRangeItem(target.dataset.selected , allItems)
        return scrollValueToTarget
}
    /// for touching scroll !


function calcBMI(){
    let params = document.querySelectorAll(".range-item.active")
    if(params[0] != undefined && params[1] != undefined && params[2] != undefined){
        let height = params[0].children[0].innerHTML;
        let weight = params[1].children[0].innerHTML;
        let BMIValue = Math.floor(weight / ((height / 100) ** 2 ))
        document.querySelector("#result-bmi").innerHTML = `نتیجه BMI شما : ${BMIValue}`
        document.querySelector("#result-bmi").classList.add("active-plan__box")
        setTimeout(() => {
            document.querySelector("#result-bmi").classList.remove("active-plan__box")
        } , 1000)// for remove animation 
    }
    else{
        document.querySelector("#result-bmi").innerHTML = `لطفا اطلاعات را به درستی وارد کنید`
        document.querySelector("#result-bmi").classList.add("active-plan__box")
        setTimeout(() => {
            document.querySelector("#result-bmi").classList.remove("active-plan__box")
        } , 1000)// for remove animation 
    }
}

///
