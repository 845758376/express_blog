// JavaScript Document

	window.onload = function() {
    var moreBtn = document.querySelector('.more-btn');
    moreBtn.onclick = function() {
        var listBox = document.querySelector('.small-list');
        var val = listBox.style.display;
        console.log(val);
        if (val == 'block') {
            listBox.style.display = 'none';
        } else {
            listBox.style.display = 'block';
        }
    }
}
//	点击置顶
			$(function() {
		    $("#li").bind({
		        "mouseenter": function() {
		            $(this).animate({
		                "background-position-x": "0px"
		            }, 200);
		        },
		        "mouseleave": function() {
		            $("#li").stop(true, true);
		            $(this).animate({
		                "background-position-x": "-58px"
		            }, 200);
		        }
		    });
		    $(window).bind("scroll", function() {
		        var wtop = $(document).scrollTop();
		        if (wtop >= 800) {
		            $("#ul li:first").fadeIn(200);
		        } else {
		            $("#ul li:first").fadeOut(200);
		        }
		    });
		    $("#ul li:first").bind("click", function() {
		        $("html,body").animate({
		            "scrollTop": "0px"
		        });
		    });
		});