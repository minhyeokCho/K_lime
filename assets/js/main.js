/* 《 공통 스크립트 》 */

$(document).ready(function(){
	$('.main_slide').length && mainSlide(); //메인 슬라이드
	$('.intro_01').length && introSlide(); //인트로 슬라이드
	$('.tab_wrap').length && Tab(); //탭
	$('.edu_slide').length && eduSlide(); //추천 대학교 슬라이드

	$(window).on('resize load',function(){//로그인 페이지 placeholder 변경
		var ww = $(window).width();
		if(ww < 768){
			$('.login_box input[type="text"]').attr('placeholder','아이디')
			$('.login_box input[type="Password"]').attr('placeholder','비밀번호')
		}else{
			$('.login_box input[type="text"]').attr('placeholder','ID')
			$('.login_box input[type="Password"]').attr('placeholder','Password')
		}
	})
});


function dimShow(){ /* 딤드 show */
	$('body').addClass('dim');
}
function dimHide(){ /* 딤드 hide */
	$('body').removeClass('dim');
}

function mainSlide() { //메인 슬라이드
	var paging = $('.slide_paging');
	var mainSlide = new Swiper('.main_slide', {
		slidesPerView : '1',
		loop:true,
		loopAdditionalSlides : 1,
		speed:2000,
		autoplay:{
			delay:1000,
			disableOnInteraction:false
		},
		navigation : {
			prevEl : '.arr_prev', // 이번 버튼 클래스명
			nextEl : '.arr_next', // 다음 버튼 클래스명
		},
		pagination: {
			el: ".paging_progress",
			type: "progressbar",
		},
		on: {
			beforeInit: function (){
				var tot = $('.main_slide .main_item').length;
				paging.find('.tot').text(tot);
			},
			activeIndexChange: function (){
				paging.find('.active').text(this.realIndex + 1);
			}
		}
	});

	var num = 0;
	$('.pause').on('click',function(){ //정지&재생 버튼
		if(num == 0){
			$('.pause').addClass('on');
			mainSlide.autoplay.stop();
			num = 1;
		}else{
			$('.pause').removeClass('on');
			mainSlide.autoplay.start();
			num = 0;
		}
		return false;
	});
}

function introSlide() { //인트로 슬라이드
	var peopleSlide = new Swiper('.people_slide', {
		slidesPerView : '1',
		spaceBetween : 30,
		loop:true,
		loopAdditionalSlides : 1,
		observer: true, // display:none 오류
		observeParents: true,
		speed:500,
		pagination: {
			el: ".paging_bullet",
			type : 'bullets',
			clickable: true,
		},
		breakpoints:{
			1200: {
				slidesPerView : '3',
			},
			768: {
				slidesPerView : '2',
			},
		},
	});
	var columnSlide = new Swiper('.column_slide', {
		slidesPerView : '1',
		spaceBetween : 30,
		loop:true,
		loopAdditionalSlides : 1,
		observer: true, // display:none 오류
		observeParents: true,
		speed:500,
		navigation : {
			prevEl : '.column_arr_prev', // 이번 버튼 클래스명
			nextEl : '.column_arr_next', // 다음 버튼 클래스명
		},
		breakpoints:{
			1200: {
				slidesPerView : '4',
			},
			768: {
				slidesPerView : '3',
			},
			500: {
				slidesPerView : '2',
			},
		},
	});
}

function Tab() { //탭
	$('.tab_wrap a').on('click', function(e){
		e.preventDefault();
		var name_data = $(this).attr('data-intro');
		$('.tab_wrap a').removeClass('on');
		$(this).addClass('on')
		$('.cont_wrap .group').removeClass('on');
		$(".cont_wrap").find("[data-intro='" + name_data + "']").addClass('on')
	})
	$('.center_tab a').on('click', function(e){
		e.preventDefault();
		var name_data = $(this).attr('data-center');
		$('.center_tab a').removeClass('on');
		$(this).addClass('on')
		$('.loc .group').removeClass('on');
		$(".loc").find("[data-center='" + name_data + "']").addClass('on')
	})
}

function eduSlide() { //추천 대학교 슬라이드
	var eduSlide = new Swiper('.edu_slide', {
		slidesPerView : 'auto',
		spaceBetween : 40,
		loop:true,
		loopAdditionalSlides : 1,
		speed:5000,
		centeredSlides: true,
		autoplay:{
			delay:0,
			disableOnInteraction:false
		},
	});
}