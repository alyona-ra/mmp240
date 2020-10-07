//  listeners 

$('.language-selection').on('mouseover', displayLanguageSelection);
$('.language-selection').on('mouseleave', displayLanguageSelection);
$('.languages-wrapper').on('mouseover', displayLanguageSelection);
$('.languages-wrapper').on('mouseleave', displayLanguageSelection);

$('.location-selection').on('mouseover', displayLocationSelection);
$('.location-selection').on('mouseleave', displayLocationSelection);
$('.locations-wrapper').on('mouseover', displayLocationSelection);
$('.locations-wrapper').on('mouseleave', displayLocationSelection);

$('.favourite').on('click', addToFavourites);
$('.section-3 p').eq(0).on('click', displayCities);

//  functions

function displayLanguageSelection(e) {
    let node = $('.languages-wrapper');
    let blurTarget1 = $('.main-content-wrapper');
    let blurTarget2 = $('.place-ad');

    if (e.type === 'mouseover') {
        node.css('display', 'flex');
        blurTarget1.css('filter', 'blur(8px)');
        blurTarget2.css('filter', 'blur(8px)');
    }

    if (e.type === 'mouseleave') {
        node.css('display', 'none');
        blurTarget1.css('filter', '');
        blurTarget2.css('filter', '');
    }
}

function displayLocationSelection(e) {
    let node = $('.locations-wrapper');
    let blurTarget1 = $('.main-content-wrapper');
    let blurTarget2 = $('.place-ad');

    if (e.type === 'mouseover') {
        node.css('display', 'flex');
        blurTarget1.css('filter', 'blur(8px)');
        blurTarget2.css('filter', 'blur(8px)');
    }

    if (e.type === 'mouseleave') {
        node.css('display', 'none');
        blurTarget1.css('filter', '');
        blurTarget2.css('filter', '');

        
		$('.section-1').css('display', '');
		$('.vertical-separator').css('display', '');
		$('.locations-wrapper').css('width', '');
		$('.section-3 p').eq(0).css('color', '');
    }
}

function addToFavourites(e) {
    let svg;

	if ($(e.target).prop('tagName') === 'svg') svg = $(e.target);
    else svg = $(e.target).parent();

    if (svg.css('fill') === 'rgb(0, 0, 0)') {
        svg.css('fill', '#ff4d4d');
        svg.css('opacity', '1');
	} else {;
        svg.css('fill', '');
        svg.css('opacity', '');
	}
}

function displayCities() {
	$('.section-1').css('display', 'flex');
	$('.vertical-separator').css('display', 'block');
	$('.locations-wrapper').css('width', '520px');
	$('.section-3 p').eq(0).css('color', 'rgb(179, 169, 216)');
}