$(".js-phone-mask").mask("+7 (999) 999-99-99");

$('.form__select').each(function () {
    var $cont = $(this).closest('.form__select-wrap');

    $(this).select2({
        placeholder: 'Не выбран',
        dropdownParent: $cont,
        minimumResultsForSearch: Infinity
    });
});

$('#popupClose2').on('click', function(){
    $('#ajaxPopupCallBack').fadeOut(200);
    //$('#popupBg').fadeOut(200);
});

$('.btn-callback-header').on('click', function(){
    //$('#ajaxPopups').fadeOut(200);
    $('#ajaxPopupCallBack').fadeIn(200);
    var action="callbackSimple";
    $('#callbackForm').attr('action', action);
    //$('#popupBg').fadeIn(200);
    return false;
});

//
//$("[data-fancybox-group]").fancybox({
//    helpers: {
//        overlay: {
//            locked: false
//        }
//    }
//});

(function() {
    $(".header-link-choose").on("click", function(){
        var anchor = $(this).attr("href");
        $("html, body").stop().animate({
            scrollTop: $(anchor).offset().top
        }, 300);
        return false;
    });
})();

(function() {
    var headerHeight = $(".header").outerHeight();

    $(".choose-mobile").on("click", function(){
        var anchor = $(this).attr("href");
        $("html, body").stop().animate({
            scrollTop: $(anchor).offset().top - headerHeight
        }, 300);
        return false;
    });
})();