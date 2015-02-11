$(function() {
         var progressbar = $( "#progressbar" );
         progressLabel = $( ".progress-label" );
         $( "#progressbar" ).progressbar({
            value: false,
            change: function() {
               progressLabel.text( 
                  progressbar.progressbar( "value" ) + "%" );
            },
            complete: function() {
               progressLabel.text( "Loading Completed!" );
            }
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