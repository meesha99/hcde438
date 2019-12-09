        $(document).ready(function() {

            $('#myinput').keypress(function(event){

                var keycode = (event.keyCode ? event.keyCode : event.which);

                if(keycode == '13'){ //keycode 13 stands for enter key

                    add()   // call add method

                }

            });

        });

        function add(){

            var ip = $('#myinput').val()

            var ele = document.createElement('li') //create list item element

            $(ele).html(ip) //write text to element

            $('#mylist').append(ele) //append element to list

            $('#myinput').val('') //clear input text

        }

        function reset(){

            $('#mylist').html('') //clears the list

        }

