var as = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

$(function() {

  // 禁用默认touch事件
  // $('body').on('touchmove', function(e) {
  //   e.preventDefault();
  // });

  /**
   * 页面切换效果
   */
  var pw = new pageSwitch('wrap', {
    duration: 1000, //int 页面过渡时间
    direction: 1, //int 页面切换方向，0横向，1纵向
    start: 1, //int 默认显示页面
    loop: false, //bool 是否循环切换
    ease: 'ease', //string|function 过渡曲线动画，详见下方说明
    transition: 'scroll', //string|function转场方式，详见下方说明
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
      cur = this.current + 1;

    // p1
    if (cur == 1) {
      p1.init();
    } else {
      p1.reset();
    }

    // p2
    if (cur == 2) {
      p2.init();
    } else {
      p2.reset();
    }
  });


  /**
   * p1
   */
  var p1 = {};

  // p1初始化
  p1.init = function() {
    var _p1 = $('#p1');

    // 冻结pw
    // pw.freeze(true);

    // p1动画
    // _p1.find('div').addClass('animated');
    _p1.find('.logo-ost1').removeClass('hide').addClass('zoomIn').one(as, function() {
      _p1.find('.txt1').removeClass('hide').addClass('fadeInUp').one(as, function() {
        _p1.find('.line').removeClass('hide').addClass('zoomIn').one(as, function() {
          _p1.find('.logo-t2').addClass('fadeOut');
          _p1.find('.txt1').addClass('stu2');
          // _p1.find('.logo-t1').addClass('stu2').one(as, function() {
          _p1.find('.logo-t1').addClass('stu2');
          $('body').oneTime('1s', function() {
            _p1.find('.logo-t3').removeClass('hide').addClass('fadeIn');
            _p1.find('.logo-t4').removeClass('hide').addClass('fadeIn').one(as, function() {
              _p1.find('.logo-t5').removeClass('hide').addClass('fadeInUp').one(as, function() {
                _p1.find('.logo-t6').removeClass('hide').addClass('fadeInRight').one(as, function() {
                  _p1.find('.btn').removeClass('hide').addClass('fadeInDown').one(as, function() {
                    _p1.find('.btn').addClass('animate');
                    _p1.find('.btn').on('click', function() {
                      pw.pw.slide(1);
                    });
                    // 解冻pw
                    // pw.freeze(false);
                  });
                });
              });
              _p1.find('.logo-t1').addClass('hide');
            });
          });
          // });
        });
      });
    });
  };

  // p1重置
  p1.reset = function() {
    var _p1 = $('#p1');
    // _p1.find('div').removeClass('animated');
    _p1.find('.logo-ost1,.line').addClass('hide').removeClass('zoomIn');
    _p1.find('.txt1,.logo-t5').addClass('hide').removeClass('fadeInUp');
    _p1.find('.logo-t2').removeClass('fadeOut');
    _p1.find('.txt1').removeClass('stu2');
    _p1.find('.logo-t1').removeClass('hide stu2');
    _p1.find('.logo-t3,.logo-t4').addClass('hide').removeClass('fadeIn');
    _p1.find('.logo-t6').addClass('hide').removeClass('fadeInRight');
    _p1.find('.btn').addClass('hide').removeClass('fadeInDown animate');
  };

  /**
   * p2
   */
  var p2 = {};

  // p1初始化
  p2.init = function() {
    var p = $('#p2');

    // 冻结pw
    // pw.freeze(true);

    // 初始化中国地图
    p2MapData = ['BEJ', 'LIA', 'SHD', 'JSU', 'SHH', 'ZHJ', 'GUD', 'HKG', 'SCH', 'HUB', 'HEN', 'SHX'];
    $('#map-10-china').vectorMap({
      map: 'map_format_cn',
      backgroundColor: 'rgba(0,0,0,0)',
      zoomOnScroll: false,
      panOnDrag: false,
      regionsSelectable: false,
      regionStyle: {
        initial: {
          fill: '#88b8ad',
          "fill-opacity": 1,
          stroke: 'none',
          "stroke-width": 0,
          "stroke-opacity": 1
        },
        hover: {},
        selected: {
          fill: '#e35e5d'
        },
        selectedHover: {}
      }
    });
    // var mapObject = $('#map-10-china').vectorMap('get', 'mapObject');
    // mapObject.setSelectedRegions(p2MapData);

    // p.find('div,span').addClass('animated');

    p.find('.tit').removeClass('hide').addClass('slideInLeft').one(as, function() {
      p.find('.map').removeClass('hide').addClass('zoomInDown').one(as, function() {
        p.find('.num1 > .num,.num1>.txt').removeClass('hide').addClass('fadeInDown').one(as, function() {
          // 点亮分社所在省市
          var mapObject = $('#map-10-china').vectorMap('get', 'mapObject'),
            p2MapQue = function(time, regions) {
              $('#map-10-china').oneTime(time + 's', regions, function() {
                mapObject.setSelectedRegions(regions);
              });
            };
          for (var i = 1; i <= p2MapData.length; i++) {
            p2MapQue(i / 16, p2MapData[i - 1]);
          }
          // 分社数字自增
          p.find('.num1>.num').countTo({
            from: 0,
            to: 12,
            speed: 500,
            refreshInterval: 5
          });
        });
        $('.num2').oneTime('1s', 'p1Num2', function() {
          p.find('.num2 > .num, .num2 > .txt').removeClass('hide').addClass('fadeInUp').one(as, function() {
            // 摄影师数字自增
            p.find('.num2 > .plus').removeClass('hide').addClass('fadeIn');
            p.find('.num2 > .num').countTo({
              from: 0,
              to: 1000,
              speed: 2000,
              refreshInterval: 50,
              formatter: function(value, options) {
                return (value.toFixed(0) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
              },
            });
            // 摄影师icon动画
            p.find('.people > span').removeClass('hide').addClass('bounceInUp');
            // 解冻pw
            // pw.freeze(false);
          });
        });
      });
    });

  };

  // p2重置
  p2.reset = function() {
    var p = $('#p2');

    // 销毁中国地图
    p.find('.map').empty();

    // 清除动画
    // p.find('div,span').removeClass('animated');
    p.find('.tit').addClass('hide').removeClass('slideInLeft');
    p.find('.map').addClass('hide').removeClass('zoomInDown');
    p.find('.num1 > .num,.num1>.txt').addClass('hide').removeClass('fadeInDown');
    p.find('.num1>.num,.num2>.num').empty();
    p.find('.num2 > .num, .num2 > .txt').addClass('hide').removeClass('fadeInUp');
    p.find('.people > span').addClass('hide').removeClass('bounceInUp');
    p.find('.num2 > .plus').addClass('hide').removeClass('fadeIn');
  };

  // 初始化p1
  Pace.on('hide', function() {
    p2.init();
  });

});