function openPage() {
    $("#header").load("header+footer/header.html");
    $("#footer").load("header+footer/footer.html");
}

var tags = ["Công nghệ", "Sản phẩm", "Ứng dụng", "Bên lề", "Thể thao", 
"Bóng đá", "Bóng rổ", "Esports"]

$(document).ready(function() {
    $(".loading").fadeOut(2500)
    setTimeout(function() {
        $(".container").show()
        document.getElementById("marquee").start()
    }, 2000)

    $(".container-load").fadeOut(5000)
    setTimeout(function() {
        $(".page2").show()
        document.getElementById("marquee").start()
    }, 3700)

    $(window).scroll(function() {
        if ($(this).scrollTop()) {
            $(".go, .back-to-top").fadeIn()
            $(".sticky").addClass("sticky-parent")
            $(".sticky > div").addClass("sticky-child")
            $(".sticky-mobile").addClass("sticky-parent-mobile")
            $(".menu").addClass("sticky-nav")
            $("header .width-main:nth-child(4)").removeClass("width-main")
            $(".sticky-mobile > div").addClass("sticky-child-mobile")
        }
        else {
            $(".go, .back-to-top").fadeOut()
            $(".sticky").removeClass("sticky-parent")
            $(".sticky > div").removeClass("sticky-child")
            $(".sticky-mobile").removeClass("sticky-parent-mobile")
            $(".menu").removeClass("sticky-nav").addClass("width-main")
            $("header .width-main:nth-child(4)").addClass("width-main")
            $(".sticky-mobile > div").removeClass("sticky-child-mobile")
        }
    })

    $("#find").keyup(function() {
        let txt = $(this).val()
        let h = ""
        for (let t of tags)
            if (t.toLowerCase().indexOf(txt.toLowerCase()) >= 0)
                h += `<li><a href="Javascript:;">${t}</a></li>`

        if (h != "") {
            $("#recommend").html(h)
            $("#recommend").show("350")
        }

        $("#recommend").on("click", "a", function() {
            let txt = $(this).text()
            $("#find").val(txt)
            $("#recommend").hide("350")
        })
    })

    $("#to").click(function() {
        let c = $("#find").val()
        switch(c) {
            case "Công nghệ":
            case "Sản phẩm":
            case "Ứng dụng":
            case "Bên lề":    
                $(this).attr("href", "tech.html")
                break;
            case "Thể thao":
            case "Bóng đá":
            case "Bóng rổ":
            case "Esports":
                $(this).attr("href", "sport.html")
                break;
            default:
                break;
        }
    })

    $(document).click(function(event) {
        let focus = $("#recommend")
        if (!focus.is(event.target) && focus.has(event.target).length === 0)
            focus.hide()
    })

    $(".go, .back-to-top").click(function() {
        $("html").animate({
            scrollTop: 0
        }, 2000);
    })

    $(".tech-more").click(function() {
        var t = $(".topic-bonus").offset()
        $("html").animate({
            scrollTop: t.top
        }, 2000)
    })

    $(".down").click(function() {
        var footer = $("#footer").offset()
        $("html").animate({
            scrollTop: footer.top
        }, 2000);
        if(screen.width <= 740) {
            $(".nav-bar").hide(500)
            $(".menu .search").hide(500)
        }
    })

    const weekdays = ["Chủ nhật", "Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm", "Thứ sáu", "Thứ bảy"];
    let d = new Date();
    $("#real-time").html(`${weekdays[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`)
    $("#mobile-time").html(`${weekdays[d.getDay()]}, ${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`)

    var idx = 1;
    $(".list-icon i").click(function() {
        idx++;
        if (idx % 2 == 0) {
            $(".nav-bar, .menu .search").slideDown(500)
        }
        else {
            $(".nav-bar, .menu .search").hide(500)
        }
        var width = $(".mobile-css").width()
            $(".nav-bar li a, .mobile-icon, .menu .search > div, #recommend").animate({"width": `${width}px`})
    })

    var count = 1;
    $(".mobile-icon").children("i").each(function() {
        $(this).click(function() {
            count++;
            if (count % 2 == 0) {
                $(this).parent(".mobile-icon").parent("li").find(".sub-nav ul").slideDown(300)
                $(this).removeClass("fa-chevron-down").addClass("fa-angle-up")
                .animate({"font-size": "1.25rem"});
            }
            else {
                $(this).parent(".mobile-icon").parent("li").find(".sub-nav ul").hide(300)
                $(this).removeClass("fa-angle-up").addClass("fa-chevron-down")
                .animate({"font-size": "1.1rem"});
            }
        })  
    })

    var titleBanners = [
        "Việt Nam hạ Malaysia ở chung kết U19 Quốc tế",
        "Giá 'trừ quà' Galaxy Z Flip4 dưới 20 triệu đồng", 
        "Hoàng Thùy Linh ra album đón tuổi 34"];

    var images = [
        "img-main/slider1.jpg",
        "img-main/slider2.jpg",
        "img-main/slider3.jpg"];

    var num = 0;
    var slide = document.querySelector(".mini-slider");
    var tb = document.getElementById("tb-main");

    function change_Slide() {
        num++;
        if(num >= images.length) {
            num = 0;
        }
        slide.src = images[num];
        tb.innerHTML = titleBanners[num];
        tb.href = "article.html";
    }

    $(".btn-prev").click(function(){
        num--;
        if(num < 0) {
            num = images.length - 1;
        }
        slide.src = images[num];
        tb.innerHTML = titleBanners[num];
    })

    $(".btn-next").click(function (){
       change_Slide()
    })

    setInterval(function(){
        change_Slide()
    }, 4000);

    var co = 1
    $("#continue").click(function() {
        co++
        if (co % 2 == 0) {
            $(".ar-more").fadeIn(200)
            $("#continue p").text("thu gọn")
            $(".no-need > img").hide()
        }
        else {
            $(".ar-more").fadeOut(200)
            $("#continue p").text("xem tiếp")
            $(".no-need > img").show()
        }
    })

    function sendMail() {
        alert("Đang mở ứng dụng mail");
        let g = $("#body-mail").val()
        let link = `mailto:2151050224liem@ou.edu.vn?subject=PHẢN HỒI Ý
        KIẾN&body=${g}`
        window.location.href = link
    }

    $("#mailTo").click(function() {
        sendMail()
    })

    $("#body-mail").keypress(function(event) {
        if (event.keyCode == 13)
            sendMail();
    })
})