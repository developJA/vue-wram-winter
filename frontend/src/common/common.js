export default class Common {
    static resizeContents = () => {
        //컨텐츠 영역 min-height 지정
        const headerHeight = document.querySelector("header") ? document.querySelector("header").offsetHeight : 0;
        const footerHeight = document.querySelector("footer") ? document.querySelector("footer").offsetHeight : 0;
        const layoutHei = window.outerHeight - (headerHeight + footerHeight);
    
        document.querySelector('.container').style.minHeight = layoutHei + "px";
    
        // var container = document.querySelector(".container").offsetHeight;
        // document.querySelector(".container").css({"height" : container});
        // $(".content").css({"height" : container});
        // $(".cont-wrap").css({"height" : container});
        // $(".cont-wrap.ht .scroll-wrap").css({"height" : container});
        
        // if($(".content .cont-wrap").length == 1){
        //     $(".content .cont-wrap").css('display', 'flex');
        //     $(".content .cont-wrap").css('flex-direction', 'column');
        //     $(".content .cont-wrap").css('flex', '1');
        // }
        
        // var $wrap = $(".wrapper");
        // if ($wrap.find('.footer').length > 0) {
        //     $wrap.find('.content').css('height', $wrap.outerHeight()-$wrap.find('.header').outerHeight() - $wrap.find('.footer').outerHeight());
        // } else {
        //     $wrap.find('.content').css('height', $wrap.outerHeight()-$wrap.find('.header').outerHeight());
        // }
    }
}