var as = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$(function() {

  var pw = new pageSwitch('wrap', {
    duration: 600, //int 页面过渡时间
    direction: 1, //int 页面切换方向，0横向，1纵向
    start: 0, //int 默认显示页面
    loop: false, //bool 是否循环切换
    ease: 'ease', //string|function 过渡曲线动画，详见下方说明
    transition: 'flow', //string|function转场方式，详见下方说明
    freeze: false, //bool 是否冻结页面（冻结后不可响应用户操作，可以通过 `.freeze(false)` 方法来解冻）
    mouse: true, //bool 是否启用鼠标拖拽
    arrowkey: true, //bool 是否启用键盘方向切换
  });

  /* 事件绑定
   * event可选值:
   * before 页面切换前
   * after 页面切换后
   * update 页面切换中
   * dragStart 开始拖拽
   * dragMove 拖拽中
   * dragEnd 结束拖拽
   */
  pw.on('after', function() {
    var p = this,
      p0 = $('#p0'),
      p1 = $('#p1');

    if (this.current == 0) {
      p0.find('.bg:eq(0)').removeClass('none').addClass('animated fadeIn').one(as, function() {
        p0.find('.con > .bg').removeClass('none').addClass('animated fadeIn').one(as, function() {
          p0.find('.con > .logo').removeClass('none').addClass('animated fadeInDown').one(as, function() {
            p0.find('.con > .txt').removeClass('none').addClass('animated fadeInUp').one(as, function() {
              p0.find('.con > .plus').removeClass('none').addClass('animated zoomIn').one(as, function() {
                p0.find('.arr-up').removeClass('none').addClass('animated fadeIn');
              });
            });
          });
        });
      });
    }
  });

  Pace.on('hide', function() {
    $('#wrap').removeClass('hide').addClass('animated zoomIn');
    pw.slide(0);
  });



});