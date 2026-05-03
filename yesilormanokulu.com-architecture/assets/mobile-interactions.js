   1 $(document).ready(function () {
    2     // 1. HAMBURGER MENÜ AÇMA / KAPAMA
    3     $(".slide-menu-toggle").on("click", function () {
    4         $("body").toggleClass("nav-active"); // Menüyü açar/kapatır
    5         $(".overlay").fadeToggle(170);      // Arka plan karartmasını açar/kapatır
    6     });
    7
    8     // 2. MOBİL ALT MENÜLER (Accordion)
    9     // Menüdeki ok işaretlerine tıklandığında alt menüleri açar
   10     $(".mobile-menu ul li .submenu-toggle").on("click", function (e) {
   11         if ($(this).parent().hasClass("has-sub")) {
   12             e.preventDefault();
   13             if (!$(this).parent().hasClass("show")) {
   14                 $(this).parent().addClass("show").children(".m-sub").slideToggle(170);
   15             } else {
   16                 $(this).parent().removeClass("show").find("> .m-sub").slideToggle(170);
   17             }
   18         }
   19     });
   20
   21     // 3. MOBİL ARAMA KUTUSU ETKİLEŞİMİ
   22     $(".show-mobile-search").on("click", function () {
   23         $(".mobile-search-form").fadeIn(250).find("input").focus();
   24     });
   25
   26     $(".hide-mobile-search").on("click", function () {
   27         $(".mobile-search-form").fadeOut(250).find("input").blur();
   28     });
   29
   30     // 4. UÇUR BENİ (BACK TO TOP) BUTONU
   31     $(window).on("scroll", function () {
   32         // 100px aşağı inince butonu göster
   33         if ($(this).scrollTop() >= 100) {
   34             $(".back-top").fadeIn(250);
   35         } else {
   36             $(".back-top").fadeOut(250);
   37         }
   38     });
   39
   40     $(".back-top").click(function () {
   41         // Tıklandığında en üste yumuşak geçiş yap
   42         $("html, body").animate({ scrollTop: 0 }, 500);
   43     });
   44
   45     // 5. DIŞARI TIKLANDIĞINDA MENÜYÜ KAPAT
   46     $(".overlay").on("click", function () {
   47         $("body").removeClass("nav-active");
   48         $(this).fadeOut(170);
   49     });
   50 });