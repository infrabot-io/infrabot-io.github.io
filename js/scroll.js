$(window).scroll(function() {
	if ($(window).width() > 1082)
	{
	    if ($(this).scrollTop() > 120) {
	        $('#toTop').fadeIn();
	    } else {
	        $('#toTop').fadeOut();
	    }
    }
});

$(document).ready(function() {
  $('#toTop').hide();
});

function goToTop() {
  document.getElementById('top').scrollIntoView({
    behavior: 'smooth',
    block: 'center',
    inline: 'nearest'
  });
}