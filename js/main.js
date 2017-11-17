$( document ).ready(function() {
	var carOffset = $(".car").offset();
	// var manOffset = $(".man").offset();
	// var metalOffset = $(".metal").offset();
	// var mobileOffset = $(".mobile").offset();
	// console.log(carOffset);
	// console.log(carOffset.top);

	// $(".btn-faq").on("click", function () {
	// 	$(this).find("i").toggleClass("expanded");
	// });

	$(window).scroll(function () {
		if ($(document).scrollTop() > (parseInt(carOffset.top) - document.documentElement.clientHeight/1.1)) {
			$(".car").find(".img-action").addClass("on");
		}
		// if ($(document).scrollTop() > (parseInt(manOffset.top) - document.documentElement.clientHeight/1.1)) {
		// 	$(".man").find(".img-action").addClass("on");
		// }
		// if ($(document).scrollTop() > (parseInt(metalOffset.top) - document.documentElement.clientHeight/1.1)) {
		// 	$(".metal").find(".img-action").addClass("on");
		// }
		// if ($(document).scrollTop() > (parseInt(mobileOffset.top) - document.documentElement.clientHeight/1.1)) {
		// 	$(".mobile").find(".img-action").addClass("on");
		// }
	});
	
	$('[data-toggle="tooltip"]').tooltip();
	// $('[data-toggle="tooltip"]').tooltip({
 //        template: '<div class="tooltip"></div><div class="tooltip-inner"></div></div>'
 //    });
});
