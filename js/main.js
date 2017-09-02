$(document).ready(function($) {
	$('.tabs__item-link').on('click' , function(e) {
		e.preventDefault();	
		var item = $(this).closest('.tabs__item');	
			contentItem = $('.content__item');
			itemPosition = item.index();
			console.log(itemPosition)
			
			contentItem.eq(itemPosition)
			.addClass('active')
			.siblings()
			.removeClass('active')
			
			item.addClass('tabs__item--active')
			.siblings()
			.removeClass('tabs__item--active')

});

	});
		
