/*!
 * ������ daodao.com
 * zhangyanping
 */

/*ѡ�Ч��*/
$(function(){
	$('.s-taber-head a').hover(function(){
		$('.s-taber-body').hide();
		$('.s-taber #'+$(this).attr('lang')).show();	
		
		$('.s-taber-head a').removeClass('selected');
		$(this).addClass('selected');
	})		   
})

/*�ص�����*/
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

/*ie6 �������������*/
$(function(){
	if($.browser.msie&&($.browser.version == "6.0")&&!$.support.style){
		$('<div class="s-spring"><div class="s-wrapper">��~������ʹ��ʮ����ǰ�������IE6�����ܸ����ĳ������齨�������� <a href="http://se.360.cn" target="_blank">�ȸ������</a></div><del>��</del></div>').prependTo('body').fadeIn();	
	}		   
})



