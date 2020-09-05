$(document).ready(function(){
	function videoheight() {
		var video_widht = $('.review__video__frame').width();
		var height = video_widht * 56 / 100;
		$('.review__video__frame').height(height);
	}
	
	videoheight();
	$(window).resize(function(){
		videoheight();
	});



	var header = new Headhesive(".header__bottom", {
	    offset: 500,
	  });



	$("a[data-role='scroll']").mPageScroll2id({
		offset: 81,
		onStart:function(){
			$('.head__nav').removeClass('head__nav__active');
			$('.head__hamburger').removeClass('head__hamburger__active');
		}
	});
});
