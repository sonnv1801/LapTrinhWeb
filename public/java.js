$(function(){
  /* cho box đầu tiên hiển thị */
  $('.box1:eq(0)').show();
  $('.tab-list li').click(function() {
    /* Xác định phần tử thứ n được click */
    var n = $('.tab-list li').index(this);
    /* Ẩn tất cả .box */
    $('.box1').hide();
    /* Hiển thị .box theo phần tử thứ n */
    $('.box1:eq('+ n +')').fadeIn(300);
  });
});
