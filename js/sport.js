var tags = ["Công nghệ", "Sản phẩm", "Ứng dụng", "Bên lề", "Thể thao", 
"Bóng đá", "Bóng rổ", "Esports"]

$(document).ready(function () {

    // loading animation all - set time out

   var count = 0;
   var counter = setInterval(function() {
       if(count < 101) {
           $('.count').text(count + '%');
           $('.loader').css('width', count + '%');
           count++;
       }
       else {
           clearInterval(counter);
       }
   }, 10)

   $("#loadPage").fadeTo(2000, 1)
   setTimeout(function() {
      $(".all").show()
      document.getElementById("marquee").start()
   }, 2000)

  // back to top body 

 $(window).scroll(function () {
   if ($(this).scrollTop()) {
     $(".back-to-top").fadeIn();
   } else $(".back-to-top").fadeOut();
 });
 $(".back-to-top").click(function () {
   $("html, body").animate({ scrollTop: 0 }, 1500);
 });

 // set time

 const weekdays = [
   "Chủ nhật",
   "Thứ hai",
   "Thứ ba",
   "Thứ tư",
   "Thứ năm",
   "Thứ sáu",
   "Thứ bảy",
 ];
 let d = new Date();
 $("#real-time").html(
   `${weekdays[d.getDay()]}, ${d.getDate()}/${
     d.getMonth() + 1
   }/${d.getFullYear()}`
 );
 $("#mobile-time").html(
   `${weekdays[d.getDay()]}, ${d.getDate()}/${
     d.getMonth() + 1
   }/${d.getFullYear()}`
 );

 // click menu hide list

 var idx = 1;
 $(".list-icon i").click(function () {
   idx++;
   if (idx % 2 == 0) {
     $(".nav-bar, .menu .search").slideDown(500);
   } else {
     $(".nav-bar, .menu .search").hide(500);
   }
   var width = $(".mobile-css").width();
   $(".nav-bar li a, .mobile-icon, .menu .search > div, #recommend li a").animate({
     width: `${width}px`,
   });
 });

 var count = 1;
 $(".mobile-icon")
   .children("i")
   .each(function () {
     $(this).click(function () {
       count++;
       if (count % 2 == 0) {
         $(this)
           .parent(".mobile-icon")
           .parent("li")
           .find(".sub-nav ul")
           .slideDown(300);
         $(this)
           .removeClass("fa-chevron-down")
           .addClass("fa-angle-up")
           .animate({ "font-size": "1.25rem" });
       } else {
         $(this)
           .parent(".mobile-icon")
           .parent("li")
           .find(".sub-nav ul")
           .hide(300);
         $(this)
           .removeClass("fa-angle-up")
           .addClass("fa-chevron-down")
           .animate({ "font-size": "1.1rem" });
       }
     });
   });

   // gợi ý tìm kiếm
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
  }
})

$(document).click(function(event) {
  let focus = $("#recommend")
  if (!focus.is(event.target) && focus.has(event.target).length === 0)
      focus.hide()
})

   // mở ứng dụng mail
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
});

window.addEventListener("scroll", reveal);

function reveal() {
 var reveals = document.querySelectorAll(".reveal");
 for (var i = 0; i < reveals.length; i++) {
   var windowheight = window.innerHeight;
   var revealtop = reveals[i].getBoundingClientRect().top;
   var revealpoint = 150;
   if (revealtop < windowheight - revealpoint) {
     reveals[i].classList.add("active");
   } else {
     reveals[i].classList.remove("active");
   }
 }
}

// scroll xuống menu sẽ không mất

$(window).scroll(function () {
 if ($(this).scrollTop()) {
   $(".back-to-top").fadeIn();
   $(".sticky").addClass("sticky-parent");
   $(".sticky > div").addClass("sticky-child");
   $(".sticky-mobile").addClass("sticky-parent-mobile");
   $(".menu").addClass("sticky-nav");
   $("header .width-main:nth-child(4)").removeClass("width-main");
   $(".sticky-mobile > div").addClass("sticky-child-mobile");
 } else {
   $(".back-to-top").fadeOut();
   $(".sticky").removeClass("sticky-parent");
   $(".sticky > div").removeClass("sticky-child");
   $(".sticky-mobile").removeClass("sticky-parent-mobile");
   $(".menu").removeClass("sticky-nav").addClass("width-main");
   $("header .width-main:nth-child(4)").addClass("width-main");
   $(".sticky-mobile > div").removeClass("sticky-child-mobile");
 }
});