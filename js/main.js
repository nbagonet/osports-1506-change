var as = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend',
  tobj = $('body'),
  rndN = function(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  };

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
    start: 0, //int 默认显示页面
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

    // p3
    if (cur == 3) {
      p3.init();
    } else {
      p3.reset();
    }

    // p4
    if (cur == 4) {
      p4.init();
    } else {
      p4.reset();
    }

    // p5
    if (cur == 5) {
      p5.init();
    } else {
      p5.reset();
    }

    // p6
    if (cur == 6) {
      p6.init();
    } else {
      p6.reset();
    }

    // p7
    if (cur == 7) {
      p7.init();
    } else {
      p7.reset();
    }

    // p8
    if (cur == 8) {
      p8.init();
    } else {
      p8.reset();
    }

    // p9
    if (cur == 9) {
      p9.init();
    } else {
      p9.reset();
    }

    // p10
    if (cur == 10) {
      p10.init();
    } else {
      p10.reset();
    }

    // p11
    if (cur == 11) {
      p11.init();
    } else {
      p11.reset();
    }

    // p12
    if (cur == 12) {
      p12.init();
    } else {
      p12.reset();
    }

    // p13
    if (cur == 13) {
      p13.init();
    } else {
      p13.reset();
    }
  });


  /**
   * p1
   */
  var p1 = {};

  // p1初始化
  p1.init = function() {
    var _p1 = $('#p1');

    // p1动画
    _p1.find('.ball').removeClass('hide').addClass('fadeIn');
    _p1.find('.logo-ost1').removeClass('hide').addClass('zoomIn').one(as, function() {
      _p1.find('.txt1').removeClass('hide').addClass('fadeInUp').one(as, function() {
        _p1.find('.line').removeClass('hide').addClass('zoomIn').one(as, function() {
          _p1.find('.logo-t2').addClass('fadeOut');
          _p1.find('.txt1').addClass('stu2');
          _p1.find('.logo-t1').addClass('stu2');
          tobj.oneTime('1s', function() {
            _p1.find('.logo-t3').removeClass('hide').addClass('fadeIn');
            _p1.find('.logo-t4').removeClass('hide').addClass('fadeIn').one(as, function() {
              _p1.find('.logo-t5').removeClass('hide').addClass('fadeInUp').one(as, function() {
                _p1.find('.logo-t6').removeClass('hide').addClass('fadeInRight').one(as, function() {
                  _p1.find('.btn').removeClass('hide').addClass('fadeInDown').one(as, function() {
                    _p1.find('.btn').addClass('animate');
                  });
                });
              });
              _p1.find('.logo-t1').addClass('hide');
            });
          });
        });
      });
    });
  };

  // p1重置
  p1.reset = function() {
    var _p1 = $('#p1');
    // 清除计时器
    tobj.stopTime();
    // 清除动画
    _p1.find('.ball').addClass('hide').removeClass('fadeIn');
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

  // p2初始化
  p2.init = function() {
    var p = $('#p2'),
      map = $('#map-10-china');

    // 需要选中的省市数据
    // p2MapData = ['BEJ', 'LIA', 'SHD', 'JSU', 'SHH', 'ZHJ', 'GUD', 'HKG', 'SCH', 'HUB', 'HEN', 'SHX'];
    p2MapData = ['HAI', 'GUD', 'YUN', 'GXI', 'TAI', 'FUJ', 'GUI', 'HUN', 'JXI', 'SCH', 'TIB', 'ZHJ', 'CHQ', 'HUB', 'ANH', 'JSU', 'HEN', 'SHA', 'QIH', 'SHX', 'SHD', 'HXA', 'HEB', 'XIN', 'NMG', 'TAJ', 'LIA', 'JIL', 'HLJ', 'GAN', 'MAC', 'HKG', 'SHH', 'BEJ', 'NXA'];

    // 如果已经存在中国地图，则需要先取消选中，但不需要重新初始化地图
    if (map.html() != '') {
      var mapObject = map.vectorMap('get', 'mapObject');
      for (var i = 0; i < p2MapData.length; i++) {
        mapObject.setSelectedRegions(p2MapData[i], false);
      }
    } else {
      // 初始化中国地图
      map.vectorMap({
        map: 'map_format_cn',
        backgroundColor: 'rgba(0,0,0,0)',
        zoomOnScroll: false,
        panOnDrag: false,
        zoomMin: 1,
        zoomMax: 1,
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
    }

    p.find('.tit').removeClass('hide').addClass('slideInLeft').one(as, function() {
      p.find('.map').removeClass('hide').addClass('zoomInDown').one(as, function() {
        p.find('.num1 > .num,.num1>.txt').removeClass('hide').addClass('fadeInDown').one(as, function() {
          // 点亮分社所在省市
          var mapObject = map.vectorMap('get', 'mapObject'),
            p2MapQue = function(time, regions) {
              tobj.oneTime(time + 's', regions, function() {
                mapObject.setSelectedRegions(regions);
              });
            };
          for (var i = 1; i <= p2MapData.length; i++) {
            p2MapQue(i / p2MapData.length, p2MapData[i - 1]);
          }
          // 分社数字自增
          p.find('.num1>.num').countTo({
            from: 0,
            to: 12,
            speed: 1000,
            refreshInterval: 5
          });
        });
        tobj.oneTime('1s', 'p1Num2', function() {
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
          });
        });
      });
    });

  };

  // p2重置
  p2.reset = function() {
    var p = $('#p2'),
      map = $('#map-10-china');

    // 销毁中国地图
    map.empty();

    // 清除计时器
    tobj.stopTime();

    // 清除动画
    p.find('.tit').addClass('hide').removeClass('slideInLeft');
    map.addClass('hide').removeClass('zoomInDown');
    p.find('.num1 > .num,.num1>.txt').addClass('hide').removeClass('fadeInDown');
    p.find('.num1>.num,.num2>.num').empty();
    p.find('.num2 > .num, .num2 > .txt').addClass('hide').removeClass('fadeInUp');
    p.find('.people > span').addClass('hide').removeClass('bounceInUp');
    p.find('.num2 > .plus').addClass('hide').removeClass('fadeIn');
  };


  /**
   * p3
   */
  var p3 = {};

  // p3初始化
  p3.init = function() {
    var p = $('#p3'),
      map = $('#map-world');

    // 需要选中的国家数据
    p3MapData = ['JP', 'KR', 'MY', 'AT', 'US', 'CA', 'ES', 'GB', 'DE', 'FR', 'NL', 'CH', 'AR', 'TW', 'CN'];

    // 如果已经存在世界地图，则需要先取消选中，但不需要重新初始化地图
    if (map.html() != '') {
      var mapObject = map.vectorMap('get', 'mapObject');
      for (var i = 0; i < p3MapData.length; i++) {
        mapObject.setSelectedRegions(p3MapData[i], false);
      }
    } else {
      // 初始化世界地图
      map.vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'rgba(0,0,0,0)',
        zoomOnScroll: false,
        panOnDrag: false,
        zoomMin: 1,
        zoomMax: 1,
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
    }

    // 动效
    p.find('.tit').removeClass('hide').addClass('fadeInRight').one(as, function() {
      map.removeClass('hide').addClass('tinDownIn');
      p.find('.num1>.num,.num1>.txt,.num2>.num,.num2>.txt').removeClass('hide').addClass('fadeInDown').one(as, function() {
        // 点亮国家
        var mapObject = map.vectorMap('get', 'mapObject'),
          p3MapQue = function(time, regions) {
            tobj.oneTime(time + 's', regions, function() {
              mapObject.setSelectedRegions(regions);
            });
          };
        for (var i = 1; i <= p3MapData.length; i++) {
          p3MapQue(i / p3MapData.length, p3MapData[i - 1]);
        }
        // 国家及合作伙伴数字自增
        p.find('.num1>.num').countTo({
          from: 0,
          to: 14,
          speed: 1200,
          refreshInterval: 5
        });
        p.find('.num2>.num').countTo({
          from: 0,
          to: 31,
          speed: 1200,
          refreshInterval: 5
        });
        // 显示图片数量自增
        tobj.oneTime('1s', function() {
          p.find('.num3>.num,.num3>.txt').removeClass('hide').addClass('fadeInDownBig');
          p.find('.num3>.num').countTo({
            from: 0,
            to: 10000000,
            speed: 2000,
            refreshInterval: 5,
            formatter: function(value, options) {
              return (value.toFixed(0) + '').replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, '$&,');
            }
          });
        });
        // 显示向下大括号
        tobj.oneTime('4s', function() {
          p.find('.arrow').removeClass('hide').addClass('animate').one(as, function() {
            // 显示媒体数自增
            p.find('.num4').removeClass('hide').addClass('fadeInDown');
            p.find('.num4>.num').countTo({
              from: 0,
              to: 275,
              speed: 1000,
              refreshInterval: 5
            });
          });
        });
      });
    });

  };

  // p3重置
  p3.reset = function() {
    var p = $('#p3'),
      map = $('#map-world');

    // 销毁世界地图
    map.empty();

    // 清除计时器
    tobj.stopTime();

    // 清除动画
    p.find('.tit').addClass('hide').removeClass('fadeInRight');
    map.addClass('hide').removeClass('tinDownIn');
    p.find('.num1>.num,.num1>.txt,.num2>.num,.num2>.txt,.num4').addClass('hide').removeClass('fadeInDown');
    p.find('.num1>.num,.num2>.num,.num3>.num,.num4>.num').empty();
    p.find('.arrow').addClass('hide').removeClass('animate');
    p.find('.num3>.num,.num3>.txt').addClass('hide').removeClass('fadeInDownBig');
  };


  /**
   * p4
   */
  var p4 = {};

  // p4初始化
  p4.init = function() {
    var p = $('#p4');

    p.find('.tit').removeClass('hide').addClass('fadeInDown').one(as, function() {
      p.find('#partnerCloud').removeClass('hide');
      cloudInit();
    });

    // 初始化logo云
    var cloudInit = function() {
      $('#partnerCloudCanvas').attr({
        "width": $(window).width(),
        "height": $(window).height()
      });
      if (!$('#partnerCloudCanvas').tagcanvas({
          imageScale: .7,
          outlineColour: 'rgba(0,0,0,0)',
          shuffleTags: true,
          depth: 1,
          minBrightness: 0.05,
          pulsateTo: 0.6,
          // initial: [rndN(-5, 5) / 100, rndN(-5, 5) / 100],
          initial: [0.1, -0.1],
          decel: 0.98,
          wheelZoom: false,
          fadeIn: 1000,
          reverse: true,
          weight: false,
          shape: 'sphere',
          imageMode: null,
          imagePadding: 0,
          centreImage: '../img/logo-b.png'
        })) {
        // something went wrong, hide the canvas container
        $('#partnerCloudCanvas').hide();
      }
    };
  };

  // p4重置
  p4.reset = function() {
    var p = $('#p4');
    p.find('.tit').addClass('hide').removeClass('fadeInDown');
    p.find('#partnerCloud').addClass('hide');
  };

  /**
   * p5
   */
  var p5 = {};

  // p5初始化
  p5.init = function() {
    var p = $('#p5');

    p.find('.tit').removeClass('hide').addClass('fadeInDown').one(as, function() {
      cloudInit();
      p.find('#clientCloud').removeClass('hide');
    });

    // 初始化logo云
    var cloudInit = function() {
      $('#clientCloudCanvas').attr({
        "width": $(window).width(),
        "height": $(window).height()
      });
      if (!$('#clientCloudCanvas').tagcanvas({
          imageScale: .35,
          outlineColour: 'rgba(0,0,0,0)',
          shuffleTags: true,
          depth: 1,
          minBrightness: 0.05,
          initial: [-0.1, 0],
          wheelZoom: false,
          fadeIn: 1000,
          centreImage: '../img/logo-b.png',
          shape: "vcylinder"
        })) {
        // something went wrong, hide the canvas container
        $('#clientCloudCanvas').hide();
      }
    };
  };

  // p5重置
  p5.reset = function() {
    var p = $('#p5');
    p.find('.tit').addClass('hide').removeClass('fadeInDown');
    p.find('#clientCloud').addClass('hide');
  };

  /**
   * p6
   */
  var p6 = {};

  // p6初始化
  p6.init = function() {
    var p = $('#p6'),
      galleryShow = function(src) {
        var _pic = '<img src="' + src + '" >';
        p.find('.gallery-show > .gallery-pic').html(_pic);
        p.find('.gallery-show').removeClass('none');
      };

    p.find('.gallery-show').unbind('click').on('click', function() {
      $(this).addClass('none');
    });

    p.find('.tit').removeClass('hide').addClass('fadeInLeft');
    p.find('.tit-sub').removeClass('hide').addClass('fadeInRight').one(as, function() {
      // 相册
      p.find('.gallery-item').removeClass('none').addClass('flipInX');
      // 点击缩略图查看大图
      tobj.oneTime('2.2s', function() {
        p.find('.gallery-item > a').unbind('click').on('click', function(e) {
          e.preventDefault();
          galleryShow($(this).data('pic'));
        });
      });
      // 底部图标
      tobj.oneTime('2.2s', function() {
        p.find('.ilist > li').removeClass('hide').addClass('spaceInDown');
      });
    });
  };

  // p6重置
  p6.reset = function() {
    var p = $('#p6');
    p.find('.gallery-show').addClass('none');
    p.find('.gallery-show > .gallery-pic').empty();
    p.find('.tit').addClass('hide').removeClass('fadeInLeft');
    p.find('.tit-sub').addClass('hide').removeClass('fadeInRight');
    p.find('.gallery-item').addClass('none').removeClass('flipInX');
    p.find('.gallery-item > a').unbind('click');
    p.find('.ilist > li').addClass('hide').removeClass('spaceInDown');
    tobj.stopTime();
  };

  /**
   * p7
   */
  var p7 = {};

  // p7初始化
  p7.init = function() {
    var p = $('#p7');

    // 初始化饼图
    var chartPieInit = function() {
      require.config({
        paths: {
          echarts: '../bower_components/echarts/build/dist'
        }
      });
      require(
        [
          'echarts',
          'echarts/chart/pie'
        ],
        function(ec) {
          var myChart = ec.init(document.getElementById('pie1'));
          var option = {
            color: [
              '#e35d5d', '#87b8ad', '#dea156'
            ],
            series: [{
              name: '收入模式',
              type: 'pie',
              radius: [0, '73%'],
              startAngle: 30,
              itemStyle: {
                normal: {
                  labelLine: {
                    show: true
                  },
                  label: {
                    textStyle: {
                      fontFamily: 'yuehei',
                      fontSize: 16
                    }
                  }
                }
              },
              data: [{
                value: 85,
                name: '媒体'
              }, {
                value: 13,
                name: '商业客户'
              }, {
                value: 2,
                name: '盗版'
              }]
            }, {
              name: '收入模式',
              type: 'pie',
              radius: [0, '73%'],
              startAngle: 30,
              itemStyle: {
                normal: {
                  labelLine: {
                    show: false
                  },
                  label: {
                    position: 'inner',
                    formatter: function(params) {
                      return (params.percent - 0).toFixed(0) + '%'
                    },
                    textStyle: {
                      fontFamily: 'langqian',
                      fontSize: 16,
                      fontWeight: 100
                    }
                  }
                }
              },
              data: [{
                value: 85,
                name: '媒体'
              }, {
                value: 13,
                name: '商业客户'
              }, {
                value: 2,
                name: '盗版'
              }]
            }]
          };
          myChart.setOption(option);
        }
      );
    };

    // 标题
    p.find('.tit').removeClass('hide').addClass('fadeInLeft');
    p.find('.tit-sub').removeClass('hide').addClass('fadeInRight').one(as, function() {
      // 初始化饼图
      chartPieInit();
      // 收入模式介绍
      tobj.oneTime('2s', function() {
        p.find('.info > h5').removeClass('hide').addClass('tinLeftIn').one(as, function() {
          p.find('.info > .brackets > em').removeClass('hide').addClass('animate').one(as, function() {
            p.find('.info > p').removeClass('hide').addClass('fadeInRight');
          });
        });
      });
    });

  };

  // p7重置
  p7.reset = function() {
    var p = $('#p7');
    tobj.stopTime();
    p.find('.tit').addClass('hide').removeClass('fadeInLeft');
    p.find('.tit-sub').addClass('hide').removeClass('fadeInRight');
    p.find('#pie1').empty();
    p.find('.info > h5').addClass('hide').removeClass('tinLeftIn');
    p.find('.info > .brackets > em').addClass('hide').removeClass('animate');
    p.find('.info > p').addClass('hide').removeClass('fadeInRight');
  };

  /**
   * p8
   */
  var p8 = {};

  // p8初始化
  p8.init = function() {
    var p = $('#p8');
    p.find('.tit').removeClass('hide').addClass('fadeInLeft');
    p.find('.tit-sub').removeClass('hide').addClass('fadeInRight').one(as, function() {
      p.find('.con').removeClass('hide').addClass('foolishIn');
    });
  };

  // p8重置
  p8.reset = function() {
    var p = $('#p8');
    p.find('.tit').addClass('hide').removeClass('fadeInLeft');
    p.find('.tit-sub').addClass('hide').removeClass('fadeInRight');
    p.find('.con').addClass('hide').removeClass('foolishIn');
  };

  /**
   * p9
   */
  var p9 = {};

  // p9初始化
  p9.init = function() {
    var p = $('#p9');
    p.find('.tit').removeClass('hide').addClass('fadeInDown').one(as, function() {
      p.find('.con').removeClass('hide').addClass('openDownLeftRetourn');
    });
  };

  // p9重置
  p9.reset = function() {
    var p = $('#p9');
    p.find('.tit').addClass('hide').removeClass('fadeInDown');
    p.find('.con').addClass('hide').removeClass('openDownLeftRetourn');
  };

  /**
   * p10
   */
  var p10 = {};

  // p10初始化
  p10.init = function() {
    var p = $('#p10');

    p.find('.tit').removeClass('hide').addClass('fadeInDown').one(as, function() {
      p.find('.blub > .b1').removeClass('hide').addClass('zoomIn').one(as, function() {
        p.find('.blub > .b2').removeClass('hide').addClass('fadeIn').one(as, function() {
          p.find('.tit-sub').removeClass('hide').addClass('lightSpeedIn').one(as, function() {
            p.find('.txt > p:eq(0)').removeClass('hide').addClass('fadeInRight').one(as, function() {
              p.find('.txt > p:eq(1)').removeClass('hide').addClass('fadeInRight').one(as, function() {
                p.find('.txt > p:eq(2)').removeClass('hide').addClass('fadeInUp').one(as, function() {
                  p.find('.txt > p:eq(3)').removeClass('hide').addClass('fadeInLeft').one(as, function() {
                    p.find('.txt > p:eq(4)').removeClass('hide').addClass('fadeInLeft');
                  });
                });
              });
            });
          });
        });
      });
    });
  };

  // p10重置
  p10.reset = function() {
    var p = $('#p10');
    p.find('.tit').addClass('hide').removeClass('fadeInDown');
    p.find('.blub > .b1').addClass('hide').removeClass('zoomIn');
    p.find('.blub > .b2').addClass('hide').removeClass('fadeIn');
    p.find('.tit-sub').addClass('hide').removeClass('lightSpeedIn');
    p.find('.txt > p').addClass('hide').removeClass('fadeInRight fadeInLeft fadeInUp');
  };

  /**
   * p11
   */
  var p11 = {};

  // p11初始化
  p11.init = function() {
    var p = $('#p11');

    p.find('.tit-sub').removeClass('hide').addClass('fadeInDown');
    p.find('.tit').removeClass('hide').addClass('fadeInUp').one(as, function() {
      p.find('.con > li:eq(3) img').removeClass('hide').addClass('fadeInDown').one(as, function() {
        p.find('.con > li:eq(3) i').removeClass('hide').addClass('zoomIn').one(as, function() {
          p.find('.con > li:eq(3) strong').removeClass('hide').addClass('lightSpeedIn');
          p.find('.con > li:eq(3) em').removeClass('hide').addClass('zoomIn').one(as, function() {
            p.find('.con > li:eq(2) img').removeClass('hide').addClass('fadeInDown').one(as, function() {
              p.find('.con > li:eq(2) i').removeClass('hide').addClass('zoomIn').one(as, function() {
                p.find('.con > li:eq(2) strong').removeClass('hide').addClass('lightSpeedIn');
                p.find('.con > li:eq(2) em').removeClass('hide').addClass('zoomIn').one(as, function() {
                  p.find('.con > li:eq(1) img').removeClass('hide').addClass('fadeInDown').one(as, function() {
                    p.find('.con > li:eq(1) i').removeClass('hide').addClass('zoomIn').one(as, function() {
                      p.find('.con > li:eq(1) strong').removeClass('hide').addClass('lightSpeedIn');
                      p.find('.con > li:eq(1) em').removeClass('hide').addClass('zoomIn').one(as, function() {
                        p.find('.con > li:eq(0) img').removeClass('hide').addClass('fadeInDown').one(as, function() {
                          p.find('.con > li:eq(0) i').removeClass('hide').addClass('zoomIn').one(as, function() {
                            p.find('.con > li:eq(0) strong').removeClass('hide').addClass('lightSpeedIn');
                            p.find('.con > li:eq(0) em').removeClass('hide').addClass('zoomIn').one(as, function() {

                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  };

  // p11重置
  p11.reset = function() {
    var p = $('#p11');

    p.find('.tit-sub').addClass('hide').removeClass('fadeInDown');
    p.find('.tit').addClass('hide').removeClass('fadeInUp');
    p.find('.con > li img, .con > li i, .con > li strong, .con > li em').addClass('hide').removeClass('fadeInDown zoomIn lightSpeedIn');
  };

  /**
   * p12
   */
  var p12 = {};

  // p12初始化
  p12.init = function() {
    var p = $('#p12');

    p.find('.tit').removeClass('hide').addClass('fadeInRight').one(as, function() {
      p.find('.pics > .item:eq(0)').removeClass('hide').addClass('animate').one(as, function() {
        p.find('.pics > .item:eq(1)').removeClass('hide').addClass('animate').one(as, function() {
          p.find('.pics > .item:eq(2)').removeClass('hide').addClass('animate').one(as, function() {
            p.find('.pics > .item:eq(3)').removeClass('hide').addClass('animate').one(as, function() {
              p.find('.pics > .item:eq(4)').removeClass('hide').addClass('animate').one(as, function() {
                p.find('.txt > p:eq(0),.txt > p:eq(2)').removeClass('hide').addClass('fadeInLeft');
                p.find('.txt > p:eq(1)').removeClass('hide').addClass('fadeInRight');
              });
            });
          });
        });
      });
    });
  };

  // 重置p12
  p12.reset = function() {
    var p = $('#p12');

    p.find('.tit').addClass('hide').removeClass('fadeInRight');
    p.find('.pics > .item').addClass('hide').removeClass('animate');
    p.find('.txt > p').addClass('hide').removeClass('fadeInRight fadeInLeft');
  };

  /**
   * p13
   */
  var p13 = {};

  // p13初始化
  p13.init = function() {
    var p = $('#p13');

    p.find('.logo').removeClass('hide').addClass('fadeInDown').one(as, function() {
      p.find('.txt > p:eq(0)').removeClass('hide').addClass('spaceInDown').one(as, function() {
        p.find('.txt > p:eq(1)').removeClass('hide').addClass('spaceInDown').one(as, function() {
          p.find('.txt > p:eq(2)').removeClass('hide').addClass('spaceInDown');
        });
      });
    });
  };

  // p13重置
  p13.reset = function() {
    var p = $('#p13');

    p.find('.logo').addClass('hide').removeClass('fadeInDown');
    p.find('.txt > p').addClass('hide').removeClass('spaceInDown');
  };

  // 初始化p1
  Pace.on('hide', function() {
    p1.init();
  });

});