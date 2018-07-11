$("#side-nav").html($("#navbar-transparent").html());
$("#hamburger-button span").click(function(){
	if (document.getElementById("side-nav").style.width == "0px"){
		openNav();
		
	}else{
		closeNav();
	}
});

function canvasOff(){
	if (document.getElementById("side-nav").style.width == "0px"){
		openNav();
		
	}else{
		closeNav();
	}
};

function openNav(){
	document.getElementById("side-nav").style.width = "250px";
	document.getElementById("canvas").style.display = "block";
}

function closeNav(){
	document.getElementById("side-nav").style.width = "0px";
	document.getElementById("canvas").style.display = "none";
}

var amountScrolled = 300;

$(window).scroll(function() {
	if ( $(window).scrollTop() > amountScrolled ) {
		$('a.back-to-top').fadeIn('slow');
	} else {
		$('a.back-to-top').fadeOut('slow');
	}
});