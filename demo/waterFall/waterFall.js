// 瀑布流插件, 调用方法, $img.waterFall($contain), 其中$img是要布局的图片, $contain是包裹的容器

function WaterFall($img, $contain) {
    this.$contain = $contain
    this.$img = $img
    this.init()
    this.layout()
}

WaterFall.prototype.init = function() {
    this.screenWidth = this.$contain.width()
    this.itemWidth = this.$img.outerWidth(true)
    this.column = Math.floor(this.screenWidth/this.itemWidth)
    this.columnHeight = []
    for (var i = 0; i < this.column; i++) {
        this.columnHeight.push(0)
    }
}

WaterFall.prototype.layout = function() {
    var _this = this
    this.$img.each(function(index, item) {
        var $item = $(item)
        var height = $item.outerHeight(true)
        var minHeight = Math.min.apply(null, _this.columnHeight)
        var minIndex = _this.columnHeight.indexOf(minHeight)
        _this.columnHeight[minIndex] += height
        $item.css({
            top: minHeight,
            left: minIndex*_this.itemWidth
        })
    })
}


$.fn.waterFall = function($contain){
    new WaterFall(this, $contain)
}