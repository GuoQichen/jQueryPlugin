// 判断目标元素是否可视
$.fn.isVisible = function() {
    var nodeT = $(this).offset().top,
        nodeH = $(this).innerHeight(),
        screenH = $(window).height(),
        scrollT = $(document).scrollTop()
    if(nodeT+nodeH > scrollT&&nodeT<screenH+scrollT){
        return true
    }
    return false
}

// 调用的对象需要是$img, 需要把真正的图片保存在data-src里

 function LazyLoad($img) {
    this.$img = $img
    this.timer = 0
    this.bindEvent()
    this.loadImg()
 }

LazyLoad.prototype.loadImg = function() {
    var _this = this
    this.$img.each(function(){
        var $this = $(this)
        if ($this.isVisible()) {
            _this.isLoad($this)
        }
    })
}

LazyLoad.prototype.isLoad = function($node) {
    if (!$node.data('load')) {
        $node.attr('src',$node.data('src'))
        $node.data('load',true)
    }
}

LazyLoad.prototype.bindEvent = function() {
    var timer = this.timer
    var _this = this
    $(document).on('scroll',function(){
        clearTimeout(timer)
        timer = setTimeout(function(){
            _this.loadImg()
        },100)

    })
}


$.fn.lazyLoad = function() {
    new LazyLoad(this)
}
