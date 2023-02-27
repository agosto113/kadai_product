jQuery(function ($) {

    $('.bg-slider').bgSwitcher({
        images: ["images/background1.jpg", "images/background2.jpg", "images/background3.jpg", "images/background4.jpg"], // 切替背景画像を指定
        interval: 3000, // 背景画像を切り替える間隔を指定 3000=3秒
        loop: true, // 切り替えを繰り返すか指定 true=繰り返す　false=繰り返さない
        shuffle: true, // 背景画像の順番をシャッフルするか指定 true=する　false=しない
        effect: "fade", // エフェクトの種類をfade,blind,clip,slide,drop,hideから指定
        duration: 500, // エフェクトの時間を指定します。
        easing: "swing" // エフェクトのイージングをlinear,swingから指定
    });

    $(".slider").slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: "30px",
        dots: true,
        // fade: true,
        slidesToShow: 3,
        speed: 400,
    });
});