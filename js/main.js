$(function(){
			

		var nav = $('#header');
    var navoffset = $('#header').offset();  
    

  $(window).scroll(function () {
        if ($(document).scrollTop() >= navoffset.top) {  
            nav.css('position','fixed').css('top',0); 
        }else {
            nav.css('position','absolute').css('top',920); 
        }
    });//header
	
	
	$('.ham').hover(
			function(){$('#contact').stop().animate({'right':0})},
			function(){$('#contact').stop().animate({'right':'-300px'})}
		)//
	
		$('#contact').hover(
			function(){$('#contact').stop().animate({'right':0})},
			function(){$('#contact').stop().animate({'right':'-300px'})}
		)//프로필 박스오버
	
	

		$('#design .design_box .aa').each(function(){
		
		
		var popUp = $(this).attr('rel');
			
		
		$(this).click(function(){
			
			$('#'+popUp).show();
			$('#header').hide();
			//$('#wrap').css('-ms-overflow-style','none');
			$('#top').hide();
			
	
			$('.close').click(function(){
		
					$('#'+popUp).hide();
					$('#header').show();
					$('#top').show();
	})
			
		})
		
	})//popup
	
	
	$('#design .design_box .aa').each(function(){
		
			var Bg = $(this).find('.thumb');
		
		$(this).hover(function(){
						
			Bg.show();
			
		}, function(){
			
			 Bg.hide();
		})
		
	})//design 화면
	
	
		$('#web .web_box .article').each(function(){
			
			var Img = $(this).find('img');
			var Sha = $(this).find('.shadow');
			var Bnt = $(this).find('.bnt_box');
			
			$(this).hover(function(){
				Img.animate({'top':'-20px'});
				
				//Bnt.stop().animate({'top':'-50px'},500);	
				
			},function(){
				Img.animate({'top':'0'});
				
				//Bnt.stop().animate({'top':'-200px'});
			})
			
		})//web
	
		
		$(window).scroll(function(){
			
			$('#main').animate({'main_pic':''})
			
		})//
	
	
			$('.nav a').each(function(){
				
				var href = $(this).attr('href');
				
				$(this).click(function(){
					$('.nav a').css('font-weight','100');
					$(this).css('font-weight','bold');		
					
				})
				
			})// header
	


$( '.nav .design' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 960 }, 400 );
	return false;
} );
	
	$( '.nav .web' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 2500 }, 400 );
	return false;
		
} );$( '.nav .contact' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 4000 }, 400 );
	return false;
} );//버튼 슬라이드이동
	
	
	
		 $(window).scroll(function () {
        if ($(document).scrollTop() >= 3400) {  
            $('.logo2').fadeOut(); 
        }else {
           $('.logo2').fadeIn(); 
        }
    });//mouse
	
	
	
	$('#main2 .type4 .ch-item').hover(function(){
		
		var a = $(this).find('.ch-info-wrap');
		var b = $(this).find('.ch-info');
		
		a.css('box-shadow','0 0 0 0 rgba(255,255,255,0.8)', 
		'inset 0 0 3px rgba(115,114, 23, 0.8)');
		b.css('transform','rotate3d(0,1,0,-180deg)');
	},function(){
		
	})//전화번호 메뉴호버

	
	$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 900 ) {
		$( '#top' ).fadeIn();
	} else {
		$( '#top' ).fadeOut();
	}
} );//탑나타남
	
	$( '#top' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );//탑 이동
	
		$( '#header .logo' ).click( function() {
	$( 'html, body' ).animate( { scrollTop : 0 }, 400 );
	return false;
} );//탑 이동

/*
	$('#main2 #skill > div').each(function(){
		
		var img = $(this).find('img');
		var Src = img.attr('src');
		var Replace = Src.replace('contact','contactbg');
		
		$(this).hover(
			function(){$(this).css('background-image',Replace)},function(){})
			
	})//
	
*/
	

	$('#main2 #skill > div').each(function(){
		
		var Img80 = $(this).find('.bar1');
		var Img70 = $(this).find('.bar2');
		var Img60 = $(this).find('.bar3');
		var Img50 = $(this).find('.bar4');
		
		
		$(this).hover(
			function(){Img80.animate({'height':'140px'})},function(){})
		$(this).hover(
			function(){Img70.animate({'height':'120px'})},function(){})
		$(this).hover(
			function(){Img60.animate({'height':'100px'})},function(){})
		$(this).hover(
			function(){Img50.animate({'height':'80px'})},function(){})
		
	})//
	
	
	

      
/*
	 $(window).scroll(function () {
        if ($(document).scrollTop() >= 900) {  
            $('#header .logo p').css('display','block'); 
        }else {
            $('#header .logo p').css('display','none'); 
        }
    });//header
	
	*/
	
	

	
	
	$('#web .bx_bnt').each(function(){
		
		var BX = $(this).attr('rel');
	
		$(this).click(function(){
			
			$('#'+BX).show();
			$('#top').hide();
			
		})
		
				$('.close').click(function(){
		
					$('#'+BX).hide();
					$('#header').show();
					$('#top').show();
	})
		
	})//web bx
	
	
	
			
	})//제이쿼리끝




















