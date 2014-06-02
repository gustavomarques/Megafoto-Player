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

	$( "#topButtons > a" ).click(function() {
		$( this ).toggleClass( "active" );
	});


});



// ------------------------------------------------------------------
// megafoto modal
// ------------------------------------------------------------------ 
/* 
	$( '#userNav nav > a, a#amigos' ).click( function(){

		var alturaModal = $('.md-show .md-content .content').height();
		var alturaBrowser = $(window).height() - 200;

		if( alturaModal > alturaBrowser){
			$('.md-modal').addClass('md-scroll');
		}
	});
*/
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

// apagar depois, apenas pra exemplo //
	$( '.md-modal button' ).click( function(){
		$('.alert.sucess').addClass('active');
		setTimeout(function() {
			$('.alert.sucess').removeClass('active');
    }, 3100)
	});

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



// ------------------------------------------------------------------
// megafoto marcar + snap + tags
// ------------------------------------------------------------------ 


$( '#bt-snap' ).click( function(){
	$( this ).addClass( "active" );
});


$( '#bt-marcar' ).click( function(){
	$( this ).addClass( "active" );
});


$( '#bt-tags' ).click( function(){
	$( this ).toggleClass( "active" );
});


$( '#marcarWrapper nav a' ).click( function(){
	if( $('#bt-snap').hasClass('active') ){
		$('#marcarContent').removeClass('show');
		$('#snapContent').addClass( "show" );
		$('#bt-marcar').removeClass('active');
	}
	if( $('#bt-marcar').hasClass('active') ){
		$('#snapContent').removeClass('show');
		$('#marcarContent').addClass('show');
		$('#bt-snap').removeClass('active');
	}
});

$( '#marcarContent .bt-close' ).click( function(){
	$('#marcarContent').removeClass('show');
	$('#bt-marcar').removeClass('active');
});

$( '.bt-snap-ok' ).click( function(){
	$('#snapContent').removeClass('show');
	$('#bt-snap').removeClass('active');
	$('.alert.default').addClass('active');
	setTimeout(function() {
		$('.alert.default').removeClass('active');
}, 3100)
});

$( '#snapContent .bt-close' ).click( function(){
	$('#snapContent').removeClass('show');
	$('#bt-snap').removeClass('active');
});



// ------------------------------------------------------------------
// HELP
// ------------------------------------------------------------------ 

$( '#btHelp' ).click( function(){
	$( '#help-overlay' ).toggleClass( "active" );
	if( $('#btUser').hasClass('open') ){

	}else{
		$('#userNav').stop().animate({left : '0'}, 200);
		$('#btUser').addClass('open');
	}
});


$('#help-overlay.active').click( function(){
	$(this).hide();
});


// ------------------------------------------------------------------
// TagBox
// ------------------------------------------------------------------ 

$( '.tagBt' ).click( function(){
	$(this).closest('.tagBox').find('.profile').toggleClass( "active" );
});

$( '.tagBox .bt-close' ).click( function(){
	$('.tagBox .profile').removeClass('active');
});



// ------------------------------------------------------------------
// AutoComplete
// ------------------------------------------------------------------ 


$(document).ready(function () {
    //Single DataSet
    $('input.times').typeahead({
        name: 'times',
        local: ["Chelsea FC ", "Atlético de Madrid", "FC Bayern München", "SC Corinthians Paulista ", "FC Barcelona", "CA Boca Juniors ", "Real Madrid CF", "Juventus FC ", "FC Internazionale ", "São Paulo FC", "Universidad de Chile ", "Fluminense FC ", "FC Basel", "Fenerbahçe SK ", "SS Lazio Roma", "BV Borussia Dortmund", "Olympique Lyonnais", "Paris Saint-Germain FC", "Manchester United FC", "Club Libertad Asunción", "Glasgow Celtic FC", "FC Anzhi Makhachkala", "Grêmio FBPA", "Santos FC", "Liverpool FC", "SK Viktoria Plzen", "Valencia CF", "Hannoverscher SV 1896", "CFR 1907 Cluj", "FC Girondins de Bordeaux", "Málaga CF", "Ulsan Hyundai Horangi FC", "KRC Genk", "Deportivo Quito", "CA Vélez Sarsfield", "FC Steaua Bucuresti", "Tottenham Hotspur FC", "CA Tigre", "Club Sport Emelec ", "Milan AC", "RSC Anderlecht", "FC Twente Enschede", "FC Kobenhavn", "UD Levante", "PSV Eindhoven", "Universidad Católica ", "VfB Stuttgart", "Sport Lisboa e Benfica", "Club de Futbol Monterrey", "Arsenal FC ", "CR Vasco da Gama ", "FC Shakhtar Donetsk", "SSC Napoli", "FC Schalke 04", "Athletic Club de Bilbao", "Manchester City FC", "FBC Olimpia Asunción", "FK Metalist Charkiv", "PAE Olympiakos SFP ", "AC Sparta Praha", "FC do Porto", "Cerro Porteño FBC ", "FC Dnipr Dnipropetrovsk", "CCD Tolima Ibague", "Newcastle United FC", "NK Dinamo Zagreb", "Millonarios FC ", "CA Lanús", "NK Maribor ", "FC Pohang Steelers", "FC BATE Barysau", "FK Rubin Kazan", "AEL Lemesos", "Club Santos Laguna ", "Al-Hilal Omdurman", "Espérance Sportive de Tunis", "TSV Bayer 04 Leverkusen", "Olympique de Marseille", "FC Dinamo Kyiv", "Rosenborg BK Trondheim", "Borussia Mönchengladbach", "SE Palmeiras ", "AFC Ajax Amsterdam", "Atlético Mineiro", "Galatasaray SK ", "Sporting Lisboa", "Barcelona Guayaquil", "Nacional de Montevideo", "Molde FK", "Club Brugge KV", "Kashiwa Reysol", "Udinese Calcio", "LDU de Loja", "Al-Merreikh Omdurman", "BSC Young Boys Bern", "Unión Española ", "Lille Olympique ", "CB Jeonbuk Hyundai ", "Videoton FC Székesféhervár", "Club Bolívar La Paz", "FK Bunyodkor Tashkent", "Everton FC", "FC Zenit St. Petersburg", "Panathinaikos AO ", "APOEL Lefkosia", "SC Internacional ", "Guangzhou Evergrande FC", "FM Sepahan Isfahan", "CA Peñarol Montevideo", "Arsenal FC Sarandí", "CR Flamengo ", "Real Garcilaso", "Eskisehirspor", "Coritiba FC", "Sporting Cristal ", "Djoliba AC Bamako", "AFC Rapid Bucuresti", "CS Marítimo Funchal", "Bursaspor K Bursa", "CA Newell's Old Boys ", "Club Tijuana", "Montpellier Hérault ", "CA Independiente ", "PAOK Thessaloniki", "FC Seoul", "Al-Ahli SC Jeddah", "FK Partizan Beograd", "Seattle Sounders FC", "Al-Ahly Cairo", "Al-Ittihad Club Jeddah", "Al-Hilal FC Riyadh", "FC Sheriff Tiraspol", "SC Freiburg", "Racing Club Avellaneda", "Esteghlal FC Tehran", "Defensor Sporting ", "CDC Atlético Nacional ", "AS Roma", "Club Juan Aurich", "CD Iquique", "Al-Kuwait SC Kaifan", "Helsingborg IF", "AC Léopard Dolisie", "AC Horsens", "Nagoya Grampus", "FC Dacia Chisinau", "Wydad AC Casablanca", "Hapoel Tel-Aviv FC", "Sporting Club Vaslui", "Stade Rennais FC", "AIK Solna", "FC Dila Gori", "CA Colón de Santa Fe", "Chelsea FC Berekum", "Kelantan FA Kota Bahru", "SBV Vitesse Arnhem", "Al-Jazeera Abu Dhabi", "CPD Junior Barranquilla", "Tromso IL", "Chonburi FC", "Nacional FBC Asunción", "AZ Alkmaar", "FK Crvena zvezda ", "LDU de Quito", "SK Liepajas Metalurgs", "Guaraní FC Asunción", "Sevilla FC", "Dynamos FC Harare", "Suwon Samsung Blue-Wings FC", "AC Fiorentina Firenze", "Sanfrecce Hiroshima FC", "FK Ekranas Panevezys", "CD Cruz Azul ", "Adelaide United FC", "FC Dinamo Moscow", "OGC Nice", "FC Asteras Tripolis", "Anorthosis Ammochostos", "Seongnam Ilhwa Chunma FC", "PFC Neftchi Baku", "Botafogo FR ", "KP Legia Warszawa", "HJK Helsinki", "Club Sport Herediano", "SC Lokeren", "FC Spartak Moscow", "Arbil Sport Club", "Hapoel Ironi Kiryat Shmona FC", "FC Parma", "Linfield FAC", "Real Betis Balompié", "Universitario de Nuevo León", "CA San Lorenzo de Almagro ", "Catania Calcio", "GD Interclube Luanda", "SK SIGMA Olomouc", "Sporting Clube de Braga", "Debreceni VSC", "SK Rapid Wien", "Bologna Calcio", "FC Red Bull Salzburg", "Universidad César Valleja ", "VfL Wolfsburg", "Lorient FC", "Inglaterra", "Espanha", "Alemanha", "Brasil", "Espanha", "Argentina", "Espanha", "Italia", "Italia", "Brasil", "Chile", "Brasil", "Suiça", "Turquia", "Italia", "Alemanha", "França", "França", "Inglaterra", "Paraguai", "Escocia", "Russia", "Brasil", "Brasil", "Inglaterra", "Rep. Checa", "Espanha", "Alemanha", "Romenia", "França", "Espanha", "Rep. Korea", "Belgica", "Equador", "Argentina", "Romenia", "Inglaterra", "Argentina", "Equador", "Italia", "Belgica", "Holanda", "Dinamarca", "Espanha", "Holanda", "Chile", "Alemanha", "Portugal", "Mexico", "Inglaterra", "Brasil", "Ucrania", "Italia", "Alemanha", "Espanha", "Inglaterra", "Paraguai", "Ucrania", "Grecia", "Rep. Checa", "Portugal", "Paraguai", "Ucrania", "Colombia", "Inglaterra", "Croacia", "Colombia", "Argentina", "Slovenia", "Rep. Korea", "Belarus", "Russia", "Chipre", "Mexico", "Sudão", "Tunisia", "Alemanha", "França", "Ucrania", "Noruega", "Alemanha", "Brasil", "Holanda", "Brasil", "Turquia", "Portugal", "Equador", "Uruguai", "Noruega", "Belgica", "Japão", "Italia", "Equador", "Sudão", "Suiça", "Chile", "França", "Rep. Korea", "Hungria", "Bolivia", "Ubequistão", "Inglaterra", "Russia", "Grecia", "Chipre", "Brasil", "China", "Iran", "Uruguai", "Argentina", "Brasil", "Perú", "Turquia", "Brasil", "Perú", "Mali", "Romenia", "Portugal", "Turquia", "Argentina", "Mexico", "França", "Argentina", "Grecia", "Rep. Korea", "Saudi Arabia", "Srbija", "USA", "Egypt", "Saudi Arabia", "Saudi Arabia", "Moldova", "Alemanha", "Argentina", "Iran", "Uruguai", "Colombia", "Italia", "Perú", "Chile", "Kuwait", "Sverige", "Congo", "Dinamarca", "Japão", "Moldova", "Maroc", "Israel", "Romenia", "França", "Sverige", "Georgia", "Argentina", "Ghana", "Malaysia", "Holanda", "UAE", "Colombia", "Noruega", "Thailand", "Paraguai", "Holanda", "Srbija", "Equador", "Latvija", "Paraguai", "Espanha", "Zimbabwe", "Rep. Korea", "Italia", "Japão", "Lietuva", "Mexico", "Australia", "Russia", "França", "Grecia", "Chipre", "Rep. Korea", "Azerbaijan", "Brasil", "Polska", "Suomi", "Costa Rica", "Belgica", "Russia", "Iraq", "Israel", "Italia", "Irlanda Norte", "Espanha", "Mexico", "Argentina", "Italia", "Angola", "Rep. Checa", "Portugal", "Hungria", "Austria", "Italia", "Austria", "Perú", "Alemanha", "França", "Atlético Goianiense ", "Esporte Clube Bahia ", "Cruzeiro EC ", "C Nautico C", "AA Ponte Preta ", "Portuguesa de Desportos ", "Sport Club Recife"]

    });

    $('input.amigos').typeahead({
        name: 'amigos',
        local: ["Ana Carolina","Arlindo","Amanda", "Alberto", "Bruno", "Beatriz", "Carlos", "Claudia", "Cintia", "Donatelo", "Evandro", "Everaldo", "Felipe", "Fabricio", "Fagundes de cruz", "Flora Souza", "Gabriel", "Gustavo Marques", "Hiro", "Marcio", "Marina", "Ziraldo", "Nunes", "Manoel", "Tiago", "Pedro", "Paulo", "Péricles",  "Joao"]

    });
});