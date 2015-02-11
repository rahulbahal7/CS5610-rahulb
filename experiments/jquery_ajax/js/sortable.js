$(function() {
         $( "#sort1, #sort2" ).sortable({
            connectWith: "#sort1, #sort2"
         });
         $( "#sort3").sortable({
            connectWith: "#sort1",
            dropOnEmpty: false
         });

      });