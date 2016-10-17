function Slide($node) {
    this.$node = $node
    this.$slide = $node.find('.slide')
    this.current = 1
    this.width = $node.width()
    this.timer = 0
    this.init()
    this.bindEvent()
    this.autoPlay()
}

Slide.prototype.init = function() {
    var $node = this.$node
    var $slide = this.$slide
    var width = this.width
    var $slideItem = this.$node.find('.slide-item')
    $slideItem.first().clone().appendTo($slide)
    $slideItem.last().clone().prependTo($slide)
    $slide.css({
        left: -width
    })
    this.slideLength = this.$node.find('.slide-item').length
    this.$slide.width(width*this.slideLength)
}

Slide.prototype.go = function(index) {
    var _this = this
    var $slide = this.$slide
    var width = this.width
    $slide.animate({
        left: -index*width
    }, 150, function(){
        _this.current = index
        if (_this.current === _this.slideLength - 1) {
            _this.current = 1
        } else if (_this.current === 0) {
            _this.current = _this.slideLength - 2
        }
        $slide.css('left', -width*_this.current)
        _this.selected()
    })
}

Slide.prototype.bindEvent = function() {
    var _this = this
    var $node = this.$node
    var $slide = this.$slide
    var $prev = $node.find('.btn-prev')
    var $next = $node.find('.btn-next')
    var $bullet = $node.find('.bullet-item')
    $prev.on('click', function(){
        clearInterval(_this.timer)
        _this.go(_this.current - 1)
        _this.autoPlay()
    })
    $next.on('click', function(){
        clearInterval(_this.timer)
        _this.go(_this.current + 1)
        _this.autoPlay()
    })
    $slide.on('mouseenter', function(){
        clearInterval(_this.timer)
    }).on('mouseleave', function(){
        _this.autoPlay()
    })
    $bullet.on('click',function(){
        var index = $(this).index()
        clearInterval(_this.timer)
        _this.go(index + 1)
        _this.autoPlay()
    })

}

Slide.prototype.autoPlay = function() {
    var _this = this
    _this.timer = setInterval(function(){
        _this.go(_this.current + 1)
    },5000)
}

Slide.prototype.selected = function() {
        var $node = this.$node
        $node
        .find('.bullet-item')
        .eq(this.current - 1)
        .addClass('selected')
        .siblings()
        .removeClass('selected')
}


$.fn.slide = function(){
    this.each(function(index, item){
        new Slide($(this))
    })
}