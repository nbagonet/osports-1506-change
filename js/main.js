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
      cur = this.current,
      p0 = $('#p0'),
      p1 = $('#p1');

    if (cur == 0) {
      pw.freeze(false);
      p0.find('.bg:eq(0)').removeClass('none').addClass('fadeIn').one(as, function() {
        p0.find('.content > .bg').removeClass('none').addClass('fadeIn').one(as, function() {
          p0.find('.content > .logo').removeClass('none').addClass('fadeInDown').one(as, function() {
            p0.find('.content > .txt').removeClass('none').addClass('fadeInUp').one(as, function() {
              p0.find('.content > .plus').removeClass('none').addClass('zoomIn').one(as, function() {
                p0.find('.arr-up').removeClass('none').addClass('fadeIn');
              });
            });
          });
        });
      });
    } else if (cur == 1) {
      // pw.freeze(true);
      // var conH = p1.find('.con > .timeline').height(),
      //   conOH = p1.find('.con').height();
      // p1.find('.con').scroll(function(event) {
      //   var p1st = p1.find('.con').scrollTop();
      //   if (p1st <= 0 || (p1st + conOH + 5) >= conH) {
      //     pw.freeze(false);
      //   }
      // });
      p1.find('.con > .timeline').on('touchstart', function(e) {
        pw.freeze(true);
      }).on('touchend', function(e) {
        pw.freeze(false);
      });
      // p1.find('.con > .bg, .con > .title, .com > .arr-up').on('touchstart', function(e) {
      //   pw.freeze(false);
      // });
      p1.find('.con > .timeline > li').eq(0).removeClass('none').addClass('flipInX').one(as, function() {
        p1.find('.con > .timeline > li').eq(1).removeClass('none').addClass('flipInX').one(as, function() {
          p1.find('.con > .timeline > li').eq(2).removeClass('none').addClass('flipInX').one(as, function() {
            p1.find('.con > .timeline > li').eq(3).removeClass('none').addClass('flipInX').one(as, function() {
              p1.find('.con > .timeline > li').eq(4).removeClass('none').addClass('flipInX').one(as, function() {
                p1.find('.con > .timeline > li').eq(5).removeClass('none').addClass('flipInX').one(as, function() {
                  p1.find('.con > .timeline > li').eq(6).removeClass('none').addClass('flipInX').one(as, function() {
                    p1.find('.con > .timeline > li').eq(7).removeClass('none').addClass('flipInX').one(as, function() {
                      p1.find('.con > .timeline > li').eq(8).removeClass('none').addClass('flipInX').one(as, function() {
                        p1.find('.con > .timeline > li').eq(9).removeClass('none').addClass('flipInX');
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    }
  });

  Pace.on('hide', function() {
    $('#wrap').removeClass('hide').addClass('zoomIn');
    pw.slide(1);
  });



});