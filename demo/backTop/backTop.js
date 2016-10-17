//backTop插件, 调用方式, $target.backTop(100), 传入的是当scrollTop为多少时滚动条显示, 数据类型为number

function BackTop($target, top) {
    this.$target = $target
    this.top = top
    this.timer = 0
    this.bindEvent()
}

BackTop.prototype.bindEvent = function() {
    var _this = this
    this.$target.on('click', function(){
        $(document).scrollTop(0)
    })
    $(document).on('scroll', function(){
        clearTimeout(_this.timer)
        _this.timer = setTimeout(function(){
            _this.backTop()
        }, 150)
    })
}

BackTop.prototype.backTop = function() {
    var scrollT = $(document).scrollTop()
    scrollT > this.top ? this.$target.show():this.$target.hide()
}


$.fn.backTop = function(top) {
    new BackTop(this, top)
}