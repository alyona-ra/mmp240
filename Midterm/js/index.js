//  listeners

$('.language-selection').on('mouseover', displayLanguageSelection);
$('.language-selection').on('mouseleave', displayLanguageSelection);
$('.languages-wrapper').on('mouseover', displayLanguageSelection);
$('.languages-wrapper').on('mouseleave', displayLanguageSelection);

$('.location-selection').on('mouseover', displayLocationSelection);
$('.location-selection').on('mouseleave', displayLocationSelection);
$('.locations-wrapper').on('mouseover', displayLocationSelection);
$('.locations-wrapper').on('mouseleave', displayLocationSelection);

$('.top-button-wrapper').on('mouseover', displayLeftMenu);
$('.top-button-wrapper').on('mouseleave', displayLeftMenu);
$('.left-menu-wrapper').on('mouseover', displayLeftMenu);
$('.left-menu-wrapper').on('mouseleave', displayLeftMenu);
$('.section-3 p').eq(0).on('click', displayCities);

//  function calls

delete Modernizr.cssgridlegacy;

for (const key in Modernizr) {
	if (Modernizr.hasOwnProperty(key)) {
		if (!Modernizr[key]) {
			showWarning();
			console.log('Not all features are supported: ');
			console.log(Modernizr);
			break;
		}
	}
}

//  functions

function displayLanguageSelection(e) {
	let node = $('.languages-wrapper');
	let blurTarget1 = $('.main-text');
	let blurTarget2 = $('.main-options-wrapper');
	let blurTarget3 = $('.place-ad');

	if (e.type === 'mouseover') {
		node.css('display', 'flex');
		blurTarget1.css('filter', 'blur(8px)');
		blurTarget2.css('filter', 'blur(8px)');
		blurTarget3.css('filter', 'blur(8px)');
	}

	if (e.type === 'mouseleave') {
		node.css('display', 'none');
		blurTarget1.css('filter', '');
		blurTarget2.css('filter', '');
		blurTarget3.css('filter', '');
	}
}

function displayLocationSelection(e) {
	let node = $('.locations-wrapper');
	let blurTarget1 = $('.main-text');
	let blurTarget2 = $('.main-options-wrapper');
	let blurTarget3 = $('.place-ad');

	if (e.type === 'mouseover') {
		node.css('display', 'flex');
		blurTarget1.css('filter', 'blur(8px)');
		blurTarget2.css('filter', 'blur(8px)');
		blurTarget3.css('filter', 'blur(8px)');
	}

	if (e.type === 'mouseleave') {
		node.css('display', 'none');
		blurTarget1.css('filter', '');
		blurTarget2.css('filter', '');
		blurTarget3.css('filter', '');

		$('.section-1').css('display', '');
		$('.vertical-separator').css('display', '');
		$('.locations-wrapper').css('width', '');
		$('.section-3 p').eq(0).css('color', '');
	}
}

function displayLeftMenu(e) {
	let node = $('.left-menu-wrapper');
	let blurTarget1 = $('.main-text');
	let blurTarget2 = $('.main-options-wrapper');
	let blurTarget3 = $('.place-ad');

	if (e.type === 'mouseover') {
		node.css('display', 'flex');
		blurTarget1.css('filter', 'blur(8px)');
		blurTarget2.css('filter', 'blur(8px)');
		blurTarget3.css('filter', 'blur(8px)');
	}

	if (e.type === 'mouseleave') {
		node.css('display', 'none');
		blurTarget1.css('filter', '');
		blurTarget2.css('filter', '');
		blurTarget3.css('filter', '');
	}
}

function displayCities() {
	$('.section-1').css('display', 'flex');
	$('.vertical-separator').css('display', 'block');
	$('.locations-wrapper').css('width', '520px');
	$('.section-3 p').eq(0).css('color', 'rgb(179, 169, 216)');
}

function showWarning() {
	$('body').append(`<div class="warning">
    <p>Not all features are supported in your browser. Try using newest version of chrome 😉</p>
</div>`);

	$('.warning').css({
		width: '30%',
		borderRadius: '15px',
		border: '2px solid whitesmoke',
		backgroundColor: 'black',
		position: 'absolute',
		bottom: '50px',
		left: '50%',
		marginLeft: '-15%',
		padding: '0px 5px 0px 15px',
		color: 'white',
		transition: '1s'
	});

	setTimeout(() => {
		$('.warning').css({
			opacity: '0'
		});
		setTimeout(() => {
			$('.warning').css({
				display: 'none'
			});
		}, 1000);
	}, 3000);
}
