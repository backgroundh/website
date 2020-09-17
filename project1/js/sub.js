$(function(){

	/*
	
	// sec3 오버
	var box = $('.sec3_box1').find('a');
	var Img = box.find('img')
	var txt2 = box.find('.txt2,.txt1')
	
	
$('.sec3_box1').hover(function(){Img.attr('src','../images2/sec3_off.jpg');
																txt2.show();},
											function(){Img.attr('src','../images2/sec3_on.jpg');
																txt2.hide();});
	// sec3 오버 끝
	*/

	//sec3 오버
	
	$('#sec3 .inner > div').each(function(){
		var txt = $(this).find('p');
		var Img = $(this).find('img');
		var Src_on = Img.attr('src')
		var Src_off = Src_on.replace('on','off');
		
		$(this).hover(function(){
			txt.show();
			Img.attr('src',Src_off);
			
		},
									function(){
			txt.hide();
			Img.attr('src',Src_on);
		})
		
		
	})// sec3 오버끝
	
	
	
	
	 //퀵
	 			$(window).scroll(function(){
         if($(document).scrollTop()>=200){
        $('#quick').stop().animate({top:100})} 
         else {
        $('#quick').stop().animate({top:200})
         }
     })
	 
	$('.menu .more').click(function(){
				
		$('.menu > ul').slideDown();
		$('.more').hide();
		$('.less').show();
		
	})
	
	$('.menu .less').click(function(){
				
		$('.menu > ul').slideUp();
		$('.less').hide();
		$('.more').show();
		
	})
	
	
	
	
	
	
	
	/*
	//네비게이션
	
	$('#nav .inner > ul').hover(
		function(){$('#nav').stop().animate({'height':490})},
		function(){
			$('#nav').stop().animate({'height':'3em'})
		})//네비게이션 끝
		*/

	
})//제이쿼리 끝