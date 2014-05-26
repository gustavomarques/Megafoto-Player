/* To avoid CSS expressions while still supporting IE 7 and IE 6, use this script */
/* The script tag referring to this file must be placed before the ending body tag. */

/* Use conditional comments in order to target IE 7 and older:
	<!--[if lt IE 8]><!-->
	<script src="ie7/ie7.js"></script>
	<!--<![endif]-->
*/

(function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'mf-player\'">' + entity + '</span>' + html;
	}
	var icons = {
		'mficon-mf-sound-on': '&#xe653;',
		'mficon-mf-sound-off': '&#xe65a;',
		'mficon-mf-next': '&#xe646;',
		'mficon-mf-close': '&#xe647;',
		'mficon-mf-check': '&#xe64a;',
		'mficon-mf-back': '&#xe64c;',
		'mficon-share': '&#xe60d;',
		'mficon-marcar': '&#xe626;',
		'mficon-logout': '&#xe627;',
		'mficon-like': '&#xe628;',
		'mficon-friends': '&#xe629;',
		'mficon-qrcode': '&#xe622;',
		'mficon-help': '&#xe623;',
		'mficon-feedback': '&#xe624;',
		'mficon-embed': '&#xe625;',
		'mficon-mail': '&#xe600;',
		'mficon-export': '&#xe601;',
		'mficon-target': '&#xe630;',
		'mficon-search': '&#xe62a;',
		'mficon-bell': '&#xe62d;',
		'mficon-link': '&#xe602;',
		'mficon-camera': '&#xe62b;',
		'mficon-eye': '&#xe603;',
		'mficon-calendar': '&#xe604;',
		'mficon-cart': '&#xe62c;',
		'mficon-info': '&#xe605;',
		'mficon-help2': '&#xe606;',
		'mficon-warning': '&#xe631;',
		'mficon-resize-enlarge': '&#xe607;',
		'mficon-resize-shrink': '&#xe608;',
		'mficon-arrow-left': '&#xe609;',
		'mficon-arrow-down': '&#xe60a;',
		'mficon-arrow-up': '&#xe60b;',
		'mficon-arrow-right': '&#xe60c;',
		'mficon-flickr': '&#xe632;',
		'mficon-vimeo': '&#xe633;',
		'mficon-twitter': '&#xe634;',
		'mficon-facebook': '&#xe635;',
		'mficon-googleplus': '&#xe636;',
		'mficon-pinterest': '&#xe637;',
		'mficon-tumblr': '&#xe638;',
		'mficon-linkedin': '&#xe639;',
		'mficon-dribbble': '&#xe63a;',
		'mficon-skype': '&#xe63b;',
		'mficon-paypal': '&#xe63c;',
		'mficon-bug': '&#xe60e;',
		'mficon-filter': '&#xe60f;',
		'mficon-target2': '&#xe63d;',
		'mficon-code': '&#xe63e;',
		'mficon-fullscreen-exit': '&#xe610;',
		'mficon-fullscreen': '&#xe611;',
		'mficon-support': '&#xe612;',
		'mficon-phone': '&#xe63f;',
		'mficon-bell2': '&#xe641;',
		'mficon-screen': '&#xe642;',
		'mficon-mobile': '&#xe613;',
		'mficon-tablet': '&#xe614;',
		'mficon-target3': '&#xe643;',
		'mficon-filter2': '&#xe615;',
		'mficon-html5': '&#xe616;',
		'mficon-css3': '&#xe617;',
		'mficon-chrome': '&#xe618;',
		'mficon-firefox': '&#xe619;',
		'mficon-IE': '&#xe61a;',
		'mficon-opera': '&#xe61b;',
		'mficon-safari': '&#xe61c;',
		'mficon-microphone': '&#xe648;',
		'mficon-checkmark': '&#xe649;',
		'mficon-cancel': '&#xe64b;',
		'mficon-plus': '&#xe64d;',
		'mficon-plus2': '&#xe64e;',
		'mficon-minus': '&#xe64f;',
		'mficon-minus2': '&#xe650;',
		'mficon-cog': '&#xe651;',
		'mficon-pictures': '&#xe61d;',
		'mficon-location3': '&#xe652;',
		'mficon-medal': '&#xe654;',
		'mficon-chat': '&#xe655;',
		'mficon-volume': '&#xe656;',
		'mficon-volume2': '&#xe657;',
		'mficon-resize': '&#xe658;',
		'mficon-square': '&#xe659;',
		'mficon-times': '&#xe61e;',
		'mficon-tick': '&#xe61f;',
		'mficon-plus3': '&#xe620;',
		'mficon-chevron-right': '&#xe62e;',
		'mficon-chevron-left': '&#xe640;',
		'mficon-arrow-right-thick': '&#xe644;',
		'mficon-arrow-left-thick': '&#xe645;',
		'mficon-th-menu': '&#xe621;',
		'mficon-home': '&#xe62f;',
		'mficon-star': '&#xf005;',
		'mficon-star-o': '&#xf006;',
		'mficon-home2': '&#xf015;',
		'mficon-print': '&#xf02f;',
		'mficon-fast-backward': '&#xf049;',
		'mficon-calendar2': '&#xf073;',
		'mficon-thumbs-o-up': '&#xf087;',
		'mficon-star-half': '&#xf089;',
		'mficon-table': '&#xf0ce;',
		'mficon-apple': '&#xf179;',
		'mficon-windows': '&#xf17a;',
		'mficon-android2': '&#xf17b;',
		'0': 0
		},
		els = document.getElementsByTagName('*'),
		i, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		c = el.className;
		c = c.match(/mficon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
}());
