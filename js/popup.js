$(function () {
    var img = $('img'),
        imgshow = $('#imgshow'),
        overly = $('#over'),
        close = $('#close');
        img.on('click', function () {
        // overly 영역 보임
        overly.show();
        
        // overly.removeClass('.overly');

        imgshow.attr('src', $(this).attr('src'));

        //close를 클릭하면 overly 영역 숨김
        close.on('click',function(){
          
          overly.hide();
        })
        
  });
});