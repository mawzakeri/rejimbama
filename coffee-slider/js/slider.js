$(".slider-btn").hover(function () {
    $(this).css({
        "outline": "4px solid #FFFFFF"
    })
}, function () {
    $(this).css({
        "outline": "4px solid #e8e1d9"
    })
})
function hideAll() {
    $(".slider-description-parent div").removeClass("animate").fadeOut()
    $(".coffee-main-png").addClass("animate-cup-2")
    $(".upper-leaf").addClass("animate-upper-leaf")
    $(".upper-bean").addClass("animate-upper-bean")
    $(".coffee-shadow-png").addClass("animate-shadow")
    $(".coffee-spoon-png").addClass("animate-spoon")
    $(".coffee-png-1").addClass("animate-bean-1")
    $(".coffee-png-2").addClass("animate-bean-2")
    $(".coffee-png-3").addClass("animate-bean-3")
    $(".coffee-png-4").addClass("animate-bean-4")
    $(".coffee-png-5").addClass("animate-bean-5")
    $(".coffee-png-6").addClass("animate-bean-6")
    $(".back-face").addClass("animate-backface")
    $(".img-slide").hide()
    $(".slider-btn").css({
        "outline": "4px solid #e8e1d9",
        "transform": "scale(1)",
        "transition": ".1s"
    }).removeClass("showed")
}
function slider() {
    const a = document.querySelectorAll(".slider-main-btns img").length
    for (let i = 1; i <= a;) {
        var x = "slider" + "" + i
        var y = "slide" + "" + i
        $(".slider-btn:nth-of-type(" + i + ")").attr({"id": i})
        $(".slider-description-parent div:nth-of-type(" + i + ")").attr({"id": x})
        $(".coffee-img-section > div:nth-of-type(" + i + ")").attr({"id": y})
        i++
    }
}
function nextSlide() {
    var s = $(".showed").attr("id")
    $(".showed").removeClass("showed").css({
        "outline": "4px solid #e8e1d9",
        "transform": "scale(1)",
        "transition": ".1s"
    })
    s++
    const a = document.querySelectorAll(".slider-main-btns img").length
    if (s > a) {
        s = 1
    }
    var d = "#" + "" + s
    $(".img-slide").hide()
    $(".slider-description-parent div").removeClass("animate").fadeOut(500)
    $(d).addClass("showed").css({
        "outline": "4px solid #FFFFFF",
        "transform": "scale(1.2)",
    })
    var g = "#" + "slider" + "" + s
    var f = "#" + "slide" + "" + s
    $(g).show().addClass("animate")
    $(f).show()
}
function prevSlide() {
    var s = $(".showed").attr("id")
    $(".showed").removeClass("showed").css({
        "outline": "4px solid #e8e1d9",
        "transform": "scale(1)",
        "transition": ".1s"
    })
    s--
    if (s < 1) {
        const a = document.querySelectorAll(".slider-main-btns img").length
        s = a
    }
    var d = "#" + "" + s
    $(".img-slide").hide()
    $(".slider-description-parent div").removeClass("animate").fadeOut(500)
    $(d).addClass("showed").css({
        "outline": "4px solid #FFFFFF",
        "transform": "scale(1.2)",
    })
    var g = "#" + "slider" + "" + s
    var f = "#" + "slide" + "" + s
    $(g).show().addClass("animate")
    $(f).show()
}
slider()
hideAll()

let sliderTimer = setInterval(() => {
    nextSlide()
} , 5000);

$(".slider-btn").click(function () {
    hideAll()
    let s = $(this).attr("id")
    $(this).addClass("showed")
    let g = "#" + "slider" + "" + s
    let f = "#" + "slide" + "" + s
    $(g).show().addClass("animate")
    $(f).show()
    $(".coffee-shadow-png").addClass("animate-shadow-2")
    $(this).css({
        "transform": "scale(1.2)"
    })
})
$(".next").click(function () {
    nextSlide();
    clearInterval(sliderTimer)
    sliderTimer = setInterval(() => {
        nextSlide()
    } , 5000);
})
$(".prev").click(function () {
    prevSlide();
    clearInterval(sliderTimer)
    sliderTimer = setInterval(() => {
        nextSlide()
    } , 5000);
})
function slideCount() {
    const a = document.querySelectorAll(".slider-main-btns img").length;
    let x = a - 7;
    if (x > 0) {
        for (x; x >= 0; x--) {
            let r = x + 8;
            $(".slider-btn:nth-of-type(" + r + ")").hide();
        }
    }
}
$("#slider1").addClass("animate").fadeIn()
$(".img-slide:first").show()
$(".coffee-shadow-png").removeClass("animate-shadow")
$(".slider-btn:first").css({
    "outline": "4px solid #FFFFFF"
}).addClass("showed")
slideCount()
function keyBoardFunc() {
    document.addEventListener('keyup', (event) => {
        let name = event.key;
        // Alert the key name and key code on keydown
        if (name === "ArrowDown") {
            nextSlide()
        }
        if (name === "ArrowUp") {
            prevSlide()
        }
        if (name === "ArrowRight") {
            prevSlide()
        }
        if (name === "ArrowLeft") {
            nextSlide()
        }
        if (name === "Enter") {
            nextSlide()
        }
    }, false);
}
keyBoardFunc()

const sliderDrag = document.querySelector('.parent');
let isDone = false;
let y1;
let y2;
sliderDrag.addEventListener('mousedown', (e) => {
    isDone = true;
     y1 = e.clientY;
});
sliderDrag.addEventListener('mouseup', () => {
    isDone = false;
});
sliderDrag.addEventListener('mousemove', (moveEvent) => {
    y2 = moveEvent.clientY;
    if (isDone && y1 < y2) {
        nextSlide();
        isDone = false;
    }
    if (isDone && y1 > y2) {
        prevSlide();
        isDone = false;
    }
});
const sliderTouch = document.querySelector('.parent');
let isDone2 = false;
let y12;
let y22;
sliderTouch.addEventListener('touchstart', (e) => {
    isDone2 = true;
     y12 = e.clientY
});
sliderTouch.addEventListener('touchend', () => {
    isDone2 = false;
});
sliderTouch.addEventListener('touchmove', (moveEvent) => {
    y22 = moveEvent.clientY;
    if (isDone2 && y12 > y22) {
        nextSlide();
        isDone2 = false;
    }
    if (isDone2 && y12 < y22) {
        prevSlide();
        isDone2 = false;
    }
});