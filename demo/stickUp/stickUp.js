/*
简单的stickUp插件,使用需要在CSS加上.stick-up
.stick-up {
    position: fixed;
    top: 0;
    z-index: 99;
}
*/
$.fn.stickUp = function() {
    this.each(function(index, item){
        var $nav = $(this),
            $navHeight = $nav.outerHeight(),
            $navOffset = $nav.offset()
        $nav.wrap('<div class="nav-wrapper" />').parent().css({
            height: $navHeight
        })


        $(document).on('scroll',function(){
            var currentScrollTop = $(this).scrollTop(),
                $navWrapWidth = $nav.parent().innerWidth()
            if (currentScrollTop >= $navOffset.top) {
                $nav.addClass('stick-up').css({
                    width: $navWrapWidth
                })
            } else {
                $nav.removeClass('stick-up')
            }
        })
    })
}