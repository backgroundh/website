$(function(){
	
	 //퀵
	 			$(window).scroll(function(){
         if($(document).scrollTop()>=200){
        $('#quick').stop().animate({top:100})} 
         else {
        $('#quick').stop().animate({top:200})
         }
     })//퀵끝
	
	//sec1슬라이드
	$('.bxslider').bxSlider({
            captions:false,
            //slideWidth:600,  //수정
            auto:true,
            autoControls:false,
            stopAutoOnclick:true,
		
   });//sec1슬라이드 끝
	
	
	//sec5 슬라이드
	  var mySlider=$("#slide_banner").bxSlider({
      mode:"horizontal",   // 가로 수평으로 슬라이드 됩니다.
      speed:500,              // 이동 속도를 설정합니다.
      pager:true,            // 현재 위치 페이징 표시 여부 설정.
      moveSlides:1,         // 슬라이드 이동시 갯수 설정.
      slideWidth:150,        // 슬라이드 마다 너비 설정.
      minSlides:6,           // 최소 노출 개수를 설정합니다.
      maxSlides:6,          // 최대 노출 개수를 설정합니다.
      slideMargin:10,      // 슬라이드간의 간격을 설정합니다.
      auto:true,             // 자동으로 흐를지 설정합니다.
      autoHover:true,    // 마우스 오버시 정시킬지 설정합니다.
      controls:false        // 이전 다음 버튼 노출 여부 설정합니다.
   });
//이전 버튼을 클릭하면 이전 슬라이드로 전환됩니다.
   $("#prevBtn").on("click",function(){
    mySlider.goToPrevSlide();  //이전 슬라이드 배너로 이동됩니다.
    return false; //<a>에 링크를 차단합니다.
   });
//다음 버튼을 클릭하면 다음 슬라이드로 전환됩니다.
   $("#nextBtn").on("click",function(){
    mySlider.goToNextSlide();  //다음 슬라이드 배너로 이동됩니다.
    return false;
   });// sec5슬라이드 끝
	
	
	//네비게이션
	
	$('#nav > ul').hover(
		function(){$('#nav').stop().animate({'height':300})},
		function(){
			$('#nav').stop().animate({'height':'2.9em'})
		})//네비게이션 끝
	
	//찾기

	/*
	$('#header .header_find').click(function(){

		$('#header .header_top').stop().animate({'height':100});
												})//찾기 끝*/
	
	
	//찾기

	
	 var a = 1;
	$('#header .header_find').click(function(){
		if(a == 1){$('#header .header_top').stop().animate({'height':100}); a = 2;}	;
	
		if(a == 2){$('#header .header_top').stop().animate({'height':50}); a = 1;}

	
	});
	
	
		
	  //팝업창 닫기
    $('.pop_close').click(function(){
        $('#popup').hide();
    /*  팝업창 닫기를 페이드로 바꿔보세요 
      $('.pop').fadeOut();    //사라짐
      $('.pop').fadeIn();  //나타남
    */
    })

	  $(".modal .btn_close").click(function () {
        setCookieMobile( "todayCookie", "done" , 1);
        $("#popup").hide();
    });//팝업창 닫기 끝
	
	/*//사이트맵더보기
	
	$('.line2').click(function(){
		$('#footer .totalmenu').stop().animate({'height':200});
	})//더보기끝*/
	
	
	//더보기

var a = 1;
	
	
	
	$('.sitemap').click(function(){
		
		if(a == 1)$('#footer .totalmenu').stop().animate({'height':200});
		a = 2;
		
		if(a == 2)$('#footer .totalmenu').stop().animate({'height':50});
		a = 1;
		
		
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
	
	
	

		
	
})//제이쿼리끝