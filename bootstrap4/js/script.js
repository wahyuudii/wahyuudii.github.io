// even pada saat link di klik
$('.page-scroll').on('click', function(e){

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap elemen ybs
	var elemenTujuan = $(tujuan);
	
	// pindah scroll
	$('body').animate({
		scroll: elemenTujuan.offset().top
	})

	e.preventDefault();

});