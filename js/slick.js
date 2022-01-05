// section#story
$('#story .story_wrap').slick({
    slide: 'div',		//슬라이드 되어야 할 태그 ex) div, li 
    infinite : true, 	//무한 반복 옵션	 
    slidesToShow : 1,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    fade: true,
    cssEase: 'linear',
    arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
    dots : true,
    dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    draggable : true 	//드래그 가능 여부 
});

$('#story .slick-dots li:first-child button').addClass('active')

$('#story .slick-dots button').on('click',function(){
    $('#story .slick-dots button').removeClass('active');
    $(this).addClass('active');

});

// 스와이프 할 때 버튼 이동 이벤트
$('#story .slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('#story .slick-dots button.active').removeClass('active');
    $('#story .slick-dots button').eq(nextSlide).addClass('active');
});

// section#brand
$('#brand .brand_wrap').slick({
    centerMode: true,
    centerPadding: '19%',
    slide: 'li',		//슬라이드 되어야 할 태그 ex) div, li 
    infinite : true, 	//무한 반복 옵션	 
    slidesToShow : 3,		// 한 화면에 보여질 컨텐츠 개수
    slidesToScroll : 1,		//스크롤 한번에 움직일 컨텐츠 개수
    speed : 500,	 // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
    cssEase: 'linear',
    arrows : false, 		// 옆으로 이동하는 화살표 표시 여부
    dots : true,
    dotsClass : "slick-dots", 	//아래 나오는 페이지네이션(점) css class 지정
    draggable : true, 	//드래그 가능 여부 
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            centerPadding: '2%',
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
            breakpoint: 810,
            settings: {
                centerPadding: '17%',
              slidesToShow: 1,
              slidesToScroll: 1
            }
        },
        {
            breakpoint: 400,
            settings: {
                centerPadding: '5%',
              slidesToShow: 1,
              slidesToScroll: 1
            }
        }
      ]
});

$('#brand .slick-slider').on('beforeChange', function(event, slick, currentSlide, nextSlide){
    $('#brand .slick-dots button.active').removeClass('active');
    $('#brand .slick-dots button').eq(nextSlide).addClass('active');
});

$('#brand .slick-dots li:first-child button').addClass('active')

$('#brand .slick-dots button').on('click',function(){
    $('#brand .slick-dots button').removeClass('active');
    $(this).addClass('#brand active');
});
