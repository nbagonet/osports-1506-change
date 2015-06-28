var as = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$(function() {

  var pw = new pageSwitch('wrap', {
    duration: 600, //int 页面过渡时间
    direction: 1, //int 页面切换方向，0横向，1纵向
    start: 0, //int 默认显示页面
    loop: true, //bool 是否循环切换
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
      p1 = $('#p1'),
      p2 = $('#p2'),
      p3 = $('#p3'),
      p4 = $('#p4'),
      p5 = $('#p5'),
      p6 = $('#p6'),
      p7 = $('#p7'),
      p8 = $('#p8'),
      p9 = $('#p9'),
      p10 = $('#p10'),
      p11 = $('#p11'),
      p12 = $('#p12'),
      p13 = $('#p13'),
      p14 = $('#p14'),
      p15 = $('#p15');

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
      p1.find('.con > .timeline').on('touchstart', function(e) {
        pw.freeze(true);
      }).on('touchend', function(e) {
        pw.freeze(false);
      });
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
    } else if (cur == 2) {
      p2.find('.con img').eq(0).removeClass('none').addClass('flipInY').one(as, function() {
        p2.find('.con img').eq(1).removeClass('none').addClass('flipInY').one(as, function() {
          p2.find('.con img').eq(2).removeClass('none').addClass('flipInY').one(as, function() {
            p2.find('.con img').eq(3).removeClass('none').addClass('flipInY').one(as, function() {
              p2.find('.arr-up').removeClass('none').addClass('fadeIn');
            });
          });
        });
      });
    } else if (cur == 3) {
      p3.find('.con').removeClass('hide').addClass('fadeInUp').one(as, function() {
        p3.find('.arr-up').removeClass('none').addClass('fadeIn');
      });
    } else if (cur == 4) {
      p4.find('.con > .tree').removeClass('none').addClass('fadeInUp').one(as, function() {
        p4.find('.con > .item-2').removeClass('none').addClass('fadeIn').one(as, function() {
          p4.find('.con > .item-3, .con > .item-4').removeClass('none').addClass('fadeIn').one(as, function() {
            p4.find('.con > .item-5, .con > .item-6').removeClass('none').addClass('fadeIn').one(as, function() {

            });
          });
        });
      });
    } else if (cur == 5) {
      p5.find('.con').removeClass('hide').addClass('fadeInUp').one(as, function() {
        p5.find('.arr-up').removeClass('none').addClass('fadeIn');
      });
    } else if (cur == 6) {
      p6.find('.con').removeClass('hide').addClass('zoomIn').one(as, function() {
        p6.find('.arr-up').removeClass('none').addClass('fadeIn');
      });
    } else if (cur == 7) {
      p7.find('.con').removeClass('none').addClass('fadeInUp').one(as, function() {
        p7.find('.arr-up').removeClass('none').addClass('fadeIn');
      });
    } else if (cur == 8) {
      p8.find('.con').on('touchstart', function(e) {
        pw.freeze(true);
      }).on('touchend', function(e) {
        pw.freeze(false);
      }).removeClass('none').addClass('zoomIn').one(as, function() {
        p8.find('.arr-up').removeClass('none').addClass('fadeIn');
      });
    } else if (cur == 9) {
      p9.find('.con > img').removeClass('none').addClass('rotateIn').one(as, function() {
        p9.find('.arr-up').removeClass('none').addClass('fadeIn');
      });
    } else if (cur == 10) {
      p10.find('.con > img').removeClass('none').addClass('zoomIn').one(as, function() {
        p10.find('.arr-up').removeClass('none').addClass('fadeIn');
      });
    } else if (cur == 11) {
      p11.find('.con > .phone').removeClass('hide').addClass('fadeInUp').one(as, function() {
        p11.find('.con > ul img').removeClass('hide').addClass('flipInY').one(as, function() {
          p11.find('.arr-up').removeClass('none').addClass('fadeIn');
        });
      });
    } else if (cur == 12) {
      p12.find('.con > img').removeClass('none').addClass('bounceIn').one(as, function() {
        p12.find('.arr-up').removeClass('none').addClass('fadeIn');
      });
    } else if (cur == 13) {
      p13.find('.con > img').removeClass('none').addClass('fadeInUp').one(as, function() {
        p13.find('.arr-up').removeClass('none').addClass('fadeIn');
      });
    } else if (cur == 14) {
      p14.find('.con > img').eq(0).removeClass('none').addClass('zoomIn').one(as, function() {
        p14.find('.con > img').eq(1).removeClass('none').addClass('fadeIn').one(as, function() {
          p14.find('.arr-up').removeClass('none').addClass('fadeIn');
        });
      });
    } else if (cur == 15) {
      p15.find('.con > img').eq(0).removeClass('none').addClass('fadeInDown').one(as, function() {
        p15.find('.con > img').eq(1).removeClass('none').addClass('fadeInDown');
      });
    }
  });

  Pace.on('hide', function() {
    $('#wrap').removeClass('hide').addClass('zoomIn');
    pw.slide(0);
  });

  // 合作伙伴轮播
  $('#p3slider').owlCarousel({
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true
  });

  // 商业价值轮播
  $('#p5slider').owlCarousel({
    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true
  });

  // 背景音乐
  $('#audio-control').on('click', function(e) {
    var tp = $(this).hasClass('playing');
    if (tp) {
      $('#bgmusic')[0].pause();
      $(this).removeClass('playing');
    } else {
      $('#bgmusic')[0].play();
      $(this).addClass('playing');
    }
  });

});