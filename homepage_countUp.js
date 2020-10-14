$('.countupthis').each(function() {
  var num = $(this).attr('numx'); //end count
  var nuen = $(this).text();
  if (nuen === '') {
  nuen = 0;
  }
  var counts = new CountUp(this, nuen, num, 0, 1.5, options);
  counts.start();
});
