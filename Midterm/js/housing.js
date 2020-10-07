//  listeners

$('.language-selection').on('mouseover', displayLanguageSelection);
$('.language-selection').on('mouseleave', displayLanguageSelection);
$('.languages-wrapper').on('mouseover', displayLanguageSelection);
$('.languages-wrapper').on('mouseleave', displayLanguageSelection);

$('.location-selection').on('mouseover', displayLocationSelection);
$('.location-selection').on('mouseleave', displayLocationSelection);
$('.locations-wrapper').on('mouseover', displayLocationSelection);
$('.locations-wrapper').on('mouseleave', displayLocationSelection);

$('.content .inner-wrapper svg').on('click', addToFavourites);
$('.sorting p').eq(1).on('click', changeOrder);
$('.sorting p').eq(2).on('click', changeOrder);
$('.sorting p').eq(3).on('click', changeOrder);
$('.controls-wrapper .layout svg').on('click', changeLayuot);
$('.availability-wrapper .inner-wrapper p').on('click', changeDates);
$('#reset').on('click', resetFilter);
$('.left-menu input[type=text]').on('input', checkInput);
$('.type-wrapper label input').on('change', selectAll);
$('.other-options-wrapper .inner-wrapper p, .other-options-wrapper .inner-wrapper img').on('click', displayContent);
$('.section-3 p').eq(0).on('click', displayCities);

//  function calls

init();

//  functions

function init() {
	$('.sorting p').eq(1).css('color', '#96bcfd');
	$('.controls-wrapper .layout svg').eq(3).css({
		fill: '#96bcfd',
		opacity: '1'
	});
}

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
		svg.css('fill', '#96bcfd');
		svg.css('opacity', '1');
	} else {
		svg.css('fill', '');
		svg.css('opacity', '');
	}
}

function changeOrder(e) {
	$('.sorting p').each((i, el) => {
		if (el === e.target) $(el).css('color', '#96bcfd');
		else $(el).css('color', '');
	});
}

function changeLayuot(e) {
	$('.controls-wrapper .layout svg').each((i, el) => {

		if (el === e.target || el === $(e.target).parent()[0]) {
			$(el).css('fill', '#96bcfd');
			$(el).css('opacity', '1');
		} else {
			$(el).css('fill', '');
			$(el).css('opacity', '0.3');
		}
	});
}

function changeDates(e) {
	$('.availability-wrapper .inner-wrapper p').each((i, el) => {
		if (el === e.target) $(el).css('color', 'rgb(179, 169, 216)');
		else $(el).css('color', '');
	});
}

function resetFilter() {
	$('.type-wrapper input').prop('checked', false);
	$('.left-menu input[type=text]').prop('value', '');
	$('.availability-wrapper .inner-wrapper p').css('color', '');
	$('.checkboxes-wrapper input').prop('checked', false);
}

function checkInput(e) {
	const values = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	if (!values.includes(e.originalEvent.data)) $(e.target).prop('value', $(e.target).prop('value').slice(0, -1));
}

function selectAll(e) {
	if (e.target === $('.type-wrapper label input')[0]) {
		if ($('.type-wrapper label input').eq(0).prop('checked')) $('.type-wrapper label input').prop('checked', true);
		else $('.type-wrapper label input').prop('checked', false);
	} else {
		let counter = 0;

		$('.type-wrapper label input').each((i, el) => {
			if (i !== 0) {
				if ($(el).prop('checked') === true) counter++;
			}
		});

		if (counter === $('.type-wrapper label input').length - 1) $('.type-wrapper label input').eq(0).prop('checked', true);
		else $('.type-wrapper label input').eq(0).prop('checked', false);
	}
}

function displayContent(e) {
	let target = $(e.target).parent().next();
	let img = $(e.target).parent().find($('img'));

	if (!target.hasClass('displayed')) {
		target.addClass('displayed');
		img.addClass('rotated');
	} else {
		target.removeClass('displayed');
		img.removeClass('rotated');
	}
}

function displayCities() {
	$('.section-1').css('display', 'flex');
	$('.vertical-separator').css('display', 'block');
	$('.locations-wrapper').css('width', '520px');
	$('.section-3 p').eq(0).css('color', 'rgb(179, 169, 216)');
}