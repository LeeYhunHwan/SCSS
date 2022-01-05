// #nav
    var depth3=$('.depth3')
    depth3.on('mouseover focus', function(){
        $(this).css('width','600px')
        $(this).find('.depth3_box').css('display','block');
        $('.brand_table').css('display','none');
    });
    depth3.on('mouseout blur', function(){
        $(this).css('width','150px')
        $(this).find('.depth3_box').css('display','none');
        $('.brand_table').css('display','block');
    });

// 이미지 슬라이드
    var slide=$('.banner_slide .slide');
    var current=0;
    var slide_current=0;
    var progress;
    var progress_bar=$('.slide_bar');

    function setTimer(){
        progress=setInterval(function(){
            var prev=slide.eq(current);
            move(prev, 1, 0);
    
            current++;
            if(current==slide.length){current=0};
    
            var next=slide.eq(current);
            move(next, 0, 1);
            slide.removeClass('slide-title')
            slide.eq(current).addClass('slide-title')

            var slide_tit=$('.banner_slide').children('div.slide-title').index()
            var slide_tith3=$('.slide_title h3').eq(slide_tit)
            var slide_tith3a=slide_tith3.children('a')
            function cur_slide_title(){
            slide_title.removeClass('active')
            slide_tith3a.addClass('active')
            }
            cur_slide_title()
        
            var cur_slide_title=$('.slide_title>h3');
            var prev=$(cur_slide_title).eq(slide_current);
            if($(window).innerWidth()<701){
                function move1(){
                    prev.css('display','none');
                }
                move1();
                slide_current++;
                if(slide_current==cur_slide_title.length){slide_current=0}
    
                var prevv=$(cur_slide_title).eq(slide_current);
                function move2(){
                    prevv.css('display','block');
                }
                move2();
            }
            function move3(){
                var windowW=$(window).innerWidth()
                if(windowW > 700){
                $('.slide_title h3').css('display','block');
                }else if(windowW < 700){
                $('.slide_title h3').css('display','none');
                $('.active').parent('h3').css('display','block')
            }
            move3();
            }
    }, 10000)};
    setTimer();
    
    $(window).resize(function(){
        var windowW=$(window).innerWidth()
        if(windowW > 700){
            $('.slide_title h3').css('display','block');
        }else if(windowW < 700){
            $('.slide_title h3').css('display','none');
            $('.active').parent('h3').css('display','block')
        }
    });
    $('.left_btn').click(function(){
        var prev=slide.eq(current);
        move(prev, 1, 0);

        current--;
        if(current==-1){current=2};
        var slide_tith3=$('.slide_title h3').eq(current)
        var slide_tith3a=slide_tith3.children('a')
        function cur_slide_title(){
            slide_title.removeClass('active')
            slide_tith3a.addClass('active')
        }
        cur_slide_title()
        
        var next=slide.eq(current);
            move(next, 0, 1);
        clearInterval(progress);
        setTimer();

        progress_bar.toggleClass('pro-ani').delay(10).queue(function(){
            progress_bar.addClass('pro-ani').dequeue()
        });
        slide.removeClass('slide-title')
        slide.eq(current).addClass('slide-title')
    });
    
    $('.right_btn').click(function(){
        var prev=slide.eq(current);
        move(prev, 1, 0);

        current++;
        if(current==slide.length){current=0};

        var slide_tith3=$('.slide_title h3').eq(current)
        var slide_tith3a=slide_tith3.children('a')
        function cur_slide_title(){
            slide_title.removeClass('active')
            slide_tith3a.addClass('active')
        }
        cur_slide_title()

        var next=slide.eq(current);
            move(next, 0, 1);
        clearInterval(progress);
        setTimer();
        progress_bar.toggleClass('pro-ani').delay(10).queue(function(){
            progress_bar.addClass('pro-ani').dequeue()
        });
        slide.removeClass('slide-title')
        slide.eq(current).addClass('slide-title')
    });

    function move(tg, start, end){
        tg.css('opacity',start).stop().animate({opacity:end}, 500);
    };
    
    var slide_title=$('.slide_title a');

    slide_title.click(function(){
        var num_slide_title=$(this).parent().index();
        var slide_tith3=$('.slide_title h3').eq(num_slide_title)
        var slide_tith3a=slide_tith3.children('a')

        function cur_slide_title(){
            slide_title.removeClass('active')
            slide_tith3a.addClass('active')
        }

        cur_slide_title()
        // console.log(num_slide_title)

        slide.stop().animate({opacity:0},300);
        slide.eq(num_slide_title).stop().animate({opacity:1},300);
        
        function setTimer(){
            progress=setInterval(function(){
                var prev=slide.eq(num_slide_title);
                move(prev, 1, 0);
        
                num_slide_title++;
                if(num_slide_title==slide.length){num_slide_title=0};
        
                var next=slide.eq(num_slide_title);
                move(next, 0, 1);
        }, 10000)};

        clearInterval(progress);
        setTimer();
        
        progress_bar.removeClass('pro-ani').delay(100).queue(function(){
            progress_bar.addClass('pro-ani').dequeue()
        });

        slide.removeClass('slide-title')
        slide.eq(num_slide_title).addClass('slide-title');
    });
    $('.slide_title .left_btn').click(function(){
        var cur_slide_title=$('.slide_title>h3');
        var prev=$(cur_slide_title).eq(slide_current);
        function move1(){
            prev.css('display','none');
        }
        move1();
        slide_current--;
        if(slide_current==-1){slide_current=2}

        var prevv=$(cur_slide_title).eq(slide_current);
        function move2(){
            prevv.css('display','block');
        }
        move2();
    });
    $('.slide_title .right_btn').click(function(){
        var cur_slide_title=$('.slide_title>h3');
        var prev=$(cur_slide_title).eq(slide_current);
        function move1(){
            prev.css('display','none');
        }
        move1();
        slide_current++;
        if(slide_current==cur_slide_title.length){slide_current=0}

        var prevv=$(cur_slide_title).eq(slide_current);
        function move2(){
            prevv.css('display','block');
        }
        move2();
    });

// 모바일 메뉴 1depth
var mobile_menu=$('.mobile_menu');
var mobile_btn=$('.mobile_menu_btn');
var mobile_close_btn=$('.mobile_menu_header .close_btn');

mobile_btn.click(function(){
    mobile_menu.animate({right:0},500)
    $('.menu_hover_back').stop().fadeIn(300)
});
mobile_close_btn.click(function(){
    mobile_menu.animate({right:-288},500)
    $('.menu_hover_back').stop().fadeOut(300)
});

// 모바일 메뉴 2depth

var one_depth=$('.mobile_depth1>li');
var two_depth=$('.mobile_depth2_bundle .mobile_depth2');
var depth2_close_btn=$('.mobile_depth2 .close_btn');

one_depth.click(function(){
    var cur_depth2=$(this).index()
    two_depth.eq(cur_depth2).animate({right:243},500);
    two_depth.eq(cur_depth2).find('.shadow_box').css('display','block');
});

depth2_close_btn.click(function(){
    var cur_depth2=$(this).parent('.depth2_header').parent('.mobile_depth2').index()
    two_depth.eq(cur_depth2).animate({right:0},500);
    two_depth.eq(cur_depth2).find('.shadow_box').css('display','none')
});

// header scroll
$(window).scroll(function(){
    var sct=$(window).scrollTop();
    var pc_header=$('.header_fixed');
    var mob_header=$('.mobile_header');
    // var my_scroll=$('.slide_text>h2').offset();
    
    if(sct>126){
        pc_header.css('background','#0464b3');
        mob_header.css('background','#0464b3');
    }else{
        pc_header.css('background','transparent');
        mob_header.css('background','transparent');}
    }
 );

 $('#header').hover(function(){
    var pc_header=$('.header_fixed');
    var mob_header=$('.mobile_header');
    pc_header.css('background','#0464b3');
    mob_header.css('background','#0464b3');
 },function(){
    var pc_header=$('.header_fixed');
    var mob_header=$('.mobile_header');
    pc_header.css('background','transparent');
    mob_header.css('background','transparent');
 });

//  .menu_hover_back
$('#gnb>ul').hover(function(){
    $('.menu_hover_back').stop().fadeIn(300)
},function(){
    $('.menu_hover_back').stop().fadeOut(300)
});

// // story
// for(x=0; x<$('.story_wrap li').length; x++){
//     $('.story_wrap li')[x].style.height=$('.story_wrap li').innerWidth()+"px"
// }