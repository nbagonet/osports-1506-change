提供了三个方法
1. everyTime(时间间隔, [计时器名称], 函式名称, [次数限制], [等待函式程序完成])
2. oneTime(时间间隔, [计时器名称], 呼叫的函式)
3. stopTime ([计时器名称], [函式名称])

//每1秒执行函式test()

function test(){
   //do something...
}
$('body').everyTime('1s',test);
 

//每1秒执行

$('body').everyTime('1s',function(){
//do something...
});
 

//每1秒执行，并命名计时器名称为A

$('body').everyTime('1s','A',function(){
//do something...
});
 

//每20秒执行，最多5次，并命名计时器名称为B

$('body').everyTime('2das','B',function(){
//do something...
},5);
 

//每20秒执行，无限次，并命名计时器名称为C
//若时间间隔抵到，但函式程序仍未完成则需等待执行函式完成后再继续计时

$('body').everyTime('2das','C',function(){
    //执行一个会超过20秒以上的程式
},0,true);
 

//倒数10秒后执行

$('body').oneTime('1das',function(){
//do something...
});
 

//倒数100秒后执行，并命名计时器名称为D

$('body').oneTime('1hs','D',function(){
//do something...
});
 

//停止所有的在$('body')上计时器

$('body').stopTime ();
//停止$('body')上名称为A的计时器
$('body').stopTime ('A');
 

//停止$('body')上所有呼叫test()的计时器

$('body').stopTime (test);
 

自定义时间单位
打开源代码
找到

复制代码
powers: {
   // Yeah this is major overkill...
   'ms': 1,
   'cs': 10,
   'ds': 100,
   's': 1000,
   'das': 10000,
   'hs': 100000,
   'ks': 1000000
}
复制代码
可以定制自己想要的单位。
