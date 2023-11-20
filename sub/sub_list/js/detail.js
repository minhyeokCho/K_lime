$(document).ready(function(){
	$('.image_map_wrap').length && mapRes(); //이미지맵
	$('.cs_form').length && csDatePick(); // 상담신청란 달력
	$('.off_tab').length && officeTab(); // 교육청리스트 목록 노출
	$('.cs_form').length && csTab(); //지사선택탭
	$('.cs_form').length && csBtnPolicy(); //상담신청 보기 닫기 버튼
	$('.cs_form').length && csTabPolicy(); //개인정보 tab
	$('.pro_btn_wrap').length && proBtn(); //캐나다 조기유학탭
	$('.rec_tab').length && recBtn(); //프로그램 탭
	$('.rec_pro').length && recSlide(); //추천프로그램 슬라이드
	$('.tw_chg').length && twIntro(); //미국 주요도시소개
	$('.acad_tab').length && popIntro(); //학교소개 모달팝업
	$('.acad_pop_btn').length && popCur(); //커리큘럼상세 모달팝업
});

function csDatePick() {// 상담신청란 달력
	$('.cs_form .datepick').datepicker({
		dateFormat: "yy-mm-dd",
		minDate:0,
		dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
		beforeShow: function(input) {
			setTimeout(function(){
				$('#ui-datepicker-div').css({'top':'7000px', 'left':'300px'}); // top / left 값으로 강제 위치 수정
			})
		}
	});
}

function officeTab() {// 교육청리스트 목록 노출
	var off_list = $('.office_list .group')
	$('.off_tab').on('click', function(){
		if($(this).hasClass('ont')){
			off_list.css('display','none')
			off_list.filter('.ontario').css('display','block');
			return false;
		}else if ($(this).hasClass('brt')){
			off_list.css('display','none')
			off_list.filter('.british').css('display','block')
			return false;
		}else {
			off_list.css('display','block')
			return false;
		}
	})
}

function csTab() { //지사선택탭
	$('.cs_form .tap_wrap > a').on('click', function(){
		if(!$(this).hasClass('off')){
			$(this).addClass('on').siblings().removeClass('on');
		}
	});
}

function csBtnPolicy() { //상담신청 보기 닫기 버튼
	$('.cs_form .btn_policy').on('click', function(){
		if($(this).hasClass('on')){
			$(this).text('[보기]');
			$('.cs_form .policy_cotn').stop().slideUp(600);
			$(this).removeClass('on');
		}else{
			$(this).text('[닫기]');
			$('.cs_form .policy_cotn').stop().slideDown(600);
			$(this).addClass('on');
		}
	});
}

function csTabPolicy() { //개인정보 tab
	$('.cs_form .policy_tab > a').on('click', function(){
		var tabCnt = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.cs_form .txt_list > div').hide().eq(tabCnt).stop().show();
	});
}

function mapRes(){ //이미지맵
	if($('img[usemap]').length){
		$('img[usemap]').rwdImageMaps();
	}
}

function proBtn() { //캐나다 조기유학탭
	$('.pro_btn_wrap .pro_group').on('click', function(){
		if(!$(this).hasClass('on')){
			$('.pro_btn_wrap .pro_group').removeClass('on')
			$(this).addClass('on')
		}else {
			return false
		}
	})
}

function recBtn() { //프로그램 탭
	$('.tab_wrap .rec_tab').on('click', function(){
		var tabCnt = $(this).index();
		$(this).addClass('on').siblings().removeClass('on');
		$('.tab_list_wrap > div').hide().eq(tabCnt).stop().show();

		if($(this).hasClass('bg_on')){
			$('#container').css('padding-bottom','0')
		}else{
			$('#container').css('padding-bottom','27rem')
		}
	})
}

function recSlide() { //추천프로그램 슬라이드
	var recSlide = new Swiper('.rec_pro_slide', {
		slidesPerView:3,
		spaceBetween: 15,
		loop: true,
		loopAdditionalSlides : 1,
		navigation: {
			nextEl: '.btn_arrow.next',
			prevEl: '.btn_arrow.prev',
		},
		breakpoints:{
			720: {
				slidesPerView:2,
			},
		}
	});
}

function twIntro(){ //미국 주요도시소개
	$('.tw_chg').on('click', function(e){
		if($(this).hasClass('none')){
			return false;
		}else{
			e.preventDefault();
			var target = $(this).attr('open-layer') || e;
			$('.tw_intro').fadeOut(0);
			$('.tw_intro' + '.' + target).fadeIn(0);
		}
	});
}

function dimShow(){ /* 딤드 show */
		$('body').addClass('dimed');
	}
	function dimHide(){ /* 딤드 hide */
		$('body').removeClass('dimed');
	}


function popIntro(){ //학교소개 모달팝업
	$('.acad_tab').on('click', function(e){
		$('.pop_intro').fadeIn(200);
		dimShow();
	});
}

function popCur(){ //커리큘럼상세 모달팝업
	$('.acad_pop_btn').on('click', function(e){
		$('.pop_cur').fadeIn(200);
		dimShow();
	});
}

