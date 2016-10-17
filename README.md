# jQueryPlugin
一个jQuery插件集合, 包括回到顶部插件, 懒加载插件, 轮播插件, stickUp插件, 瀑布流布局插件
## backTop
[Demo](https://guoqichen.github.io/jQueryPlugin/demo/backTop/)
### 简介
点击回到顶部插件, 可以设置滚到哪个部位回到顶部
### 用法
选中作为backTop的元素, 调用backTop方法, backTop接受一个参数, 参数类型为number, 表示scrollTop的距离为多少时, backTop的按钮才显示出来, 例如
```
$('.backtop').backTop(200)
```

## lazyLoad
[Demo](https://guoqichen.github.io/jQueryPlugin/demo/lazyLoad/)
### 简介
实现图片懒加载的插件
### 用法
在需要lazyload的img元素中, src使用占位图片的url, data-src使用真实图片的url, 然后选中需要懒加载的图片元素, 调用lazyLoad()方法
```
$('.wrapper').find('img').lazyLoad()
```

## slide
[Demo](https://guoqichen.github.io/jQueryPlugin/demo/slide/)
### 简介
无限滚动的轮播插件, 支持跳转到任意一页, 自动滚动, 鼠标悬浮停止
### 用法
需要使用和Demo同样的HTML结构, 和一些必要的CSS

- HTML
```
<div class="slide-wrapper">
    <div class="viewport">
        <ul class="slide">
            <li class="slide-item"><a href="#!"><img src="img/1.jpg" alt=""></a></li>
            <li class="slide-item"><a href="#!"><img src="img/2.jpg" alt=""></a></li>
            <li class="slide-item"><a href="#!"><img src="img/3.jpg" alt=""></a></li>
            <li class="slide-item"><a href="#!"><img src="img/4.jpg" alt=""></a></li>
        </ul>
    </div>
    <a href="#!" class="slide-btn btn-prev">&lt;</a>
    <a href="#!" class="slide-btn btn-next">&gt;</a>
    <ul class="btn-bullet">
        <li class="bullet-item selected"><div class="item-contain"></div></li>
        <li class="bullet-item"><div class="item-contain"></div></li>
        <li class="bullet-item"><div class="item-contain"></div></li>
        <li class="bullet-item"><div class="item-contain"></div></li>
    </ul>
</div>
```

- CSS
```
.slide-wrapper {
    float: left;
    position: relative;
}
.viewport {
    position: relative;
    /*图片的宽高*/
    width: 1080px;
    height: 432px;
    overflow: hidden;
}
.slide {
    position: absolute;
}

.slide > li {
    float: left;
}
.slide img {
    width: 100%;
    vertical-align: bottom;
}
/*button的样式需要另外设置*/
```

HTML和CSS设置好以后, 只需要获取.slide-wrapper, 使用slide方法就可以
```
$('.slide-wrapper').slide()
```

## stickUp
[Demo](https://guoqichen.github.io/jQueryPlugin/demo/stickUp/)
### 简介
当页面滚动时, 不同栏目的导航栏可以始终在浏览器窗口顶端
### 用法
必要的CSS
```
.stick-up {
    position: fixed;
    top: 0;
    /*z-index层级可以自由设置*/
    z-index: 99;
}
```
对需要stickUp的导航栏使用stickUp方法即可
```
$('.nav').stickUp()
```

## waterFall
[Demo](https://guoqichen.github.io/jQueryPlugin/demo/waterFall/)
### 简介
实现瀑布流布局的插件
### 用法
获取需要瀑布流布局的元素, 使用waterFall方法, 需要传入容器, 不传默认是window
```
$('.item').waterFall($('.content'))
```
如果需要窗口大小改变时自适应可以加上
```
$(window).on('resize', function(){
    $('.item').waterFall($('.content'))
})
```

