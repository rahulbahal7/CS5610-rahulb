$(document).ready(function() {
    $('.circle-slider').live('click', function() {
      checkboxID		= '#' + $(this).attr('rel');

      if($(checkboxID)[0].checked == false) {
        $(checkboxID)[0].checked = true;
        $(this).removeClass('off').addClass('on');
      } else {
        $(checkboxID)[0].checked = false;
        $(this).removeClass('on').addClass('off');
      }
    });

    $('.circle-slider').each(function() {
      thisID		= $(this).attr('id');
      thisClass	= $(this).attr('class');
      setClass = "circle-slider";

      $(this).addClass('hidden');
      if($(this)[0].checked == true)
        $(this).after('<div class="'+ setClass +' on" rel="'+ thisID +'">&nbsp;</div>');
      else
        $(this).after('<div class="'+ setClass +' off" rel="'+ thisID +'">&nbsp;</div>');
    });
  });
