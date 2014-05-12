/* Author:
Gustavo marques
*/

// ------------------------------------------------------------------
// megafoto menu
// ------------------------------------------------------------------ 

$(document).ready(function() {

	$( '#btUser' ).click( function(){
		if( $(this).hasClass('open') ){
			$('#userNav').stop().animate({left : '-240px'}, 300);
			$(this).removeClass('open');
		}else{
			$('#userNav').stop().animate({left : '0'}, 200);
			$(this).addClass('open');
		}

		return false
	});

	$( "#btFullscreen" ).click(function() {
		$( this ).toggleClass( "active" );
	});


});



// ------------------------------------------------------------------
// megafoto modal
// ------------------------------------------------------------------ 

	$( '#userNav nav > a, a#amigos' ).click( function(){

		var alturaModal = $('.md-show .md-content .content').height();
		var alturaBrowser = $(window).height() - 200;

		if( alturaModal > alturaBrowser){
			$('.md-modal').addClass('md-scroll');
		}
	});

	$(function () {
		$('[data-tab]').on('click', function (e) {
			$(this)
				.closest('.content').find('[data-content=' + $(this).data('tab') + ']')
				.addClass('active')
				.siblings('[data-content]')
				.removeClass('active');
		});
	});



/* tabs
	$(function () {
	
		$('[data-tab]').on('click', function (e) {
			$(this)
				.addClass('active')
				.siblings('[data-tab]')
				.removeClass('active')
				.closest('.content').find('[data-content=' + $(this).data('tab') + ']')
				.addClass('active')
				.siblings('[data-content]')
				.removeClass('active');
		});
	});
*/

	$( 'button' ).click( function(){
		$('.alert.sucess').addClass('active');
		
		setTimeout(function() {
			$('.alert.sucess').removeClass('active');
    }, 3100)
	});



// apagar depois, apenas pra exemplo //
	$( '#testes a.sucess' ).click( function(){
		$('.alert.sucess').addClass('active');
		setTimeout(function() {
			$('.alert.sucess').removeClass('active');
    }, 3100)
	});

	$( '#testes a.error' ).click( function(){
		$('.alert.error').addClass('active');
		setTimeout(function() {
			$('.alert.error').removeClass('active');
    }, 3100)
	});

	$( '#testes a.default' ).click( function(){
		$('.alert.default').addClass('active');
		setTimeout(function() {
			$('.alert.default').removeClass('active');
    }, 3100)
	});

// ------------------------------------------------------------------
// megafoto placar
// ------------------------------------------------------------------ 

$('#slides').cycle({ 
	fx: 'fade',
	pause:  1,
	speed:  1000,
	timeout: 5000
});

$("#infos nav").idTabs(function(id,list,set){ 
	$("a",set).removeClass("selected") 
	.filter("[href='"+id+"']",set).addClass("selected"); 
	for(i in list) 
		$(list[i]).hide(); 
	$(id).fadeIn(); 
	return false; 
});
