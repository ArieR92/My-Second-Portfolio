$(document).ready(function(){

  // init Isotope
var $grid = $('.portfolio-container').isotope({
  itemSelector: '.portfolio-item',
});
// filter items on button click
$('.filter-buttons').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


})





