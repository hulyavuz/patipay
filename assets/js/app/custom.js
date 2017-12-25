

$(function(){
	var headerHeight =  $(window).height();
	console.log(headerHeight);
	$('.search-result-detail').hide();
	$('#list1').show();
	$('#search-list > li > a').click(function () {

			var $this = $(this);
			var target = $this.attr('href');
			$('.search-result-detail').hide();

			//$( "#search-result-lists").not(target).hide();
			 $(target).show();
	});

});
