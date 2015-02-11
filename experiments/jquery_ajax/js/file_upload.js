jQuery(document).ready(function($) {
                $('#dropzone').on({
                    dragenter: function(e) {
                        $(this).css('background-color', 'lightBlue');
                    },
                    dragleave: function(e) {
                        $(this).css('background-color', 'white');
                    },
                    drop: function(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        console.log(e.dataTransfer.files);
                    }
                });
            });