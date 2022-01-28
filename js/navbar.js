$(document).ready(function(){       

   function getBodyScrollTop()
{
return self.pageYOffset || (document.documentElement && document.documentElement.scrollTop) || (document.body && document.body.scrollTop);
}
getBodyScrollTop()

    var scroll_start = 0;
    var startchange = $('.pos_wrap');
    var offset = startchange.offset();
    $(document).scroll(function() { 
      // let q = document.querySelector('.pos_wrap').getBoundingClientRect().top
       scroll_start = $(this).scrollTop();
       if(scroll_start > offset.top || getBodyScrollTop()>20 ) {
           $('.pos_wrap').css('background-color', 'rgba(91,91,91,1)');
           $('.pos_wrap').css('top', '0px');
        } else {
           $('.pos_wrap').css('background-color', 'transparent');
           $('.pos_wrap').css('top', '');
        }
    });
 });