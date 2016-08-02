$(document).ready(function () {
	var $navContents = $('.navbar__contents');
	$('.navbar__menu-btn').click(function(){
		$navContents.toggleClass('navbar__contents--show');
	});
});