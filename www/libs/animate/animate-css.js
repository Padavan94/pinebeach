
(function($) {
		$.fn.animated = function(inEffect, outEffect) {
				$(this).css("opacity", "0").addClass("animated").waypoint(function(dir) {
						if (dir === "down") {
								$(this).addClass(inEffect).css("opacity", "1");
						} else {
								
						};
				}, {
						offset: "80%"
				}).waypoint(function(dir) {
						if (dir === "down") {
								$(this).removeClass(inEffect).css("opacity", "1");
						} else {
								$(this).removeClass(outEffect).css("opacity", "1");
						};
				}, {
						offset: -$(window).height()
				});
		};
})(jQuery);