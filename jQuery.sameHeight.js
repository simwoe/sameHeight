/* jQuery.sameHeight.js */

(function($){
	$.fn.sameHeight = function() {
		var selector = $(this).selector;
		
		this.each(function() {
			var targetHeight = 0;
			
			if ($(this).height() > targetHeight) targetHeight = $(this).height();
			
			$(this).siblings(selector).each(function(){
				if ($(this).height() > targetHeight) targetHeight = $(this).height();
			});
			$(this).height(targetHeight);
			$(this).siblings(selector).each(function(){
				$(this).height(targetHeight).removeClass(selector);
			});
		});
		return this;
	};
})(jQuery);