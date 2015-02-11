$(function() {
            var progressbar = $( "#progressbar" );
               $( "#progressbar" ).progressbar({
                  value: 25,
                  max:300
               });
            function progress() {
            var val = progressbar.progressbar( "value" ) || 0;
            progressbar.progressbar( "value", val + 1 );
            if ( val < 99 ) {
               setTimeout( progress, 100 );
            }
         }
         setTimeout( progress, 3000 );
      });