/* 《 공통 스크립트 》 */

$(document).ready(function(){
	$('.cs_pop').length && alertPop(); //팝업
	$('.go_top').length && goTop(); //페이지 상단 이동
	$('.clock').length && clockTab(); //시계 탭
	$('.tab_li').length && mainTab(); //메인 탭
	$('.site_menu').length && siteMenu(); //사이트맵
	$('#header').length && gnbMenu(); //GNB
	$('.btn_more').length && moreLinkTab(); //탭
	$('.camp_slide').length && campSlide(); //캠프슬라이드
	$('.ni_select').niceSelect(); //select 커스텀


	$('.datepicker').datepicker({
		minDate: 0,
		changeMonth: true, // 월을 바꿀수 있는 셀렉트 박스를 표시한다.
		changeYear: true,
		dayNamesMin: [ '일', '월', '화', '수', '목', '금', '토'],
		monthNamesShort: ['01','02','03','04','05','06','07','08','09','10','11','12'] ,
		firstDay: 0,
		showMonthAfterYear: true,
	});

	$(window).on('resize load',function(){//로그인 페이지 placeholder 변경
		var ww = $(window).width();
		if(ww < 768){
			$('.popup .cs_box').removeClass("mCustomScrollbar");
			$('.popup .cs_box').css('-webkit-overflow-scrolling', 'touch');

		}else{
			$(".popup .cs_box").mCustomScrollbar({
				theme:"rounded-dark",
				mouseWheelPixels: 250,
				mouseWheel:{ preventDefault: false }

			}); //popup 스크롭

			// select박스 선택시 스크롤 삭제
			// $('.select_btn').on('click', function(){//form selectbox
			// 	$('.popup .cs_box').mCustomScrollbar('disable');
			// })
			// $('.select_list li a').on('click', function(){
			// 	$('.popup .cs_box').mCustomScrollbar('update');
			// })
			// $('body').on('click', function(e){
			// 	if($('.select_menu').has(e.target).length == 0){
			// 		$('.popup .cs_box').mCustomScrollbar('update');
			// 	}
			// });

		}
	})
});

function dimShow(){ /* 딤드 show */
	$('body').addClass('dim');
}
function dimHide(){ /* 딤드 hide */
	$('body').removeClass('dim');
}

function alertPop(){ //팝업
	$('.cs_res').on('click', function(e){ /* 팝업열기 */
		e.preventDefault();
		$('.cs_pop').fadeIn(200);
		dimShow();
	});

	$('.btn_close').on('click', function(e){ /* 팝업닫기 */
		e.preventDefault();
		var target= $(this).closest('.popup');
		target.fadeOut(200);
		setTimeout(dimHide, 150);
	});

	$(document).mouseup(function (e){ /* 닫기 */
		var popArea = $('.cs_pop');
		if(popArea.has(e.target).length === 0 && $('body').hasClass('dim')){
			popArea.fadeOut(200);
			setTimeout(dimHide, 150);
		}
	});
}

function goTop(){ //페이지상단이동
	$('.go_top').on('click', function() {
		$('html, body').animate({
			scrollTop: 0
		}, 400);
		return false;
	});
}

function clockTab() { //탭
	$('.cs_box .list li').on('click', function(e){
		e.preventDefault();
		var name_data = $(this).attr('data-value');
		$('.clock li').removeClass('on');
		$(".clock").find("[data-value='" + name_data + "']").addClass('on')
		$('.ni_select').niceSelect('update');
	})
}

function mainTab() { //탭
	$('.tab_li a').on('click', function(e){
		e.preventDefault();
		$(this).parent().siblings().find('a.on').removeClass('on')
		$(this).addClass('on')
	})
}

function siteMenu() { //탭
	$('.site_menu').on('click', function(e){

		if($('#wrap').hasClass('site_open')){
			$('#wrap').removeClass('site_open')
			$('body').css('overflow','')
		}else{
			$('#wrap').addClass('site_open')
			$('body').css('overflow','hidden')
		}

	})

}

function gnbMenu(){ //gnb메뉴
	$('.menu_01').on('mouseover', function(){

		if($('.menu_01').hasClass('on')){
			$('.menu_01').removeClass('on')
			$(this).addClass('on')
			$(this).next().stop().slideDown()
		}else{
			$('.menu_01').removeClass('on')
			$(this).addClass('on')
			$(this).next().slideDown()
		}
	})
	$('.depth01').on('mouseleave', function(){
		$('nav .depth_wrap').slideUp(0)
		$('.menu_01').removeClass('on')
	})

	$('.site_mo .menu_li a').on('click',function(e){
		e.preventDefault();
		var name_data = $(this).attr('data-menu');
		$('.menu_li').addClass('active')
		$('.sub_menu_li ').addClass('active')
		$('.site_mo .menu_li a').removeClass('on')
		$(this).addClass('on')
		$('.sub_menu_li li').removeClass('on');
		$(".sub_menu_li").find("[data-menu='" + name_data + "']").addClass('on')
	})
}

function moreLinkTab() { //탭
	$('.more_wrap .btn_more').on('click', function(e){
		e.preventDefault();
		$(this).parent().toggleClass('on')
	})
}

function campSlide() { //캠프 슬라이드
	var text = [
		'가족연수',
		'캠프',
		'스쿨링'
	]
	var campSlide = new Swiper('.camp_slide', {
		slidesPerView : '1',
		spaceBetween:3,
		loop:true,
		loopAdditionalSlides : 1,
		speed:1000,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
			renderBullet: function (index, className) {
				return '<div class="' + className + '"><span></span><p>' + (text[index]) + '</p><i></i></div>';
			}
		},
		navigation: {
			nextEl: '.arr.camp_next',
			prevEl: '.arr.camp_prev',
		},
	});
}