/*!
 * 道道网 daodao.com
 * zhangyanping
 */

/*选项卡效果*/
$(function(){
	$('.s-taber-head a').hover(function(){
		$('.s-taber-body').hide();
		$('.s-taber #'+$(this).attr('lang')).show();	
		
		$('.s-taber-head a').removeClass('selected');
		$(this).addClass('selected');
	})		   
})

/*回到顶部*/
$(document).ready(function(){
	
	if($.browser.msie&&($.browser.version == "6.0")&&!$.support.style){
		
	}
	else{
		$(window).bind('scroll',function() {
			if(Math.abs($(window).scrollTop())>200)
				{
					$('.totop').fadeIn();
					
				}
				else
				{
					$('.totop').fadeOut();	
				}
		});	
	}
	
});

/*ie6 浏览器更新提醒*/
$(function(){
	if($.browser.msie&&($.browser.version == "6.0")&&!$.support.style){
		$('<div class="s-spring"><div class="s-wrapper">亲~您还在使用十几年前的浏览器IE6，享受更棒的冲浪体验建议您更新 <a href="http://se.360.cn" target="_blank">谷歌浏览器</a></div><del>×</del></div>').prependTo('body').fadeIn();	
	}		   
})



