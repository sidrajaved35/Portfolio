
function openCity(evt, cityName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}

   $(document).ready(function(){
   $("#btn2").click(function(){
	  
	if( $('#value1').val().length === 0){
alert('Value cannot be left Blank'); 

    }
	else if($('#textarea3').val().length === 0){
	alert('Description cannot be left Blank');
    }
	else{
		alert("Your plan has been added");
		}
        	var radioValue = $("input[name='gender']:checked").val();
            if(radioValue){
              document.getElementById("demo2").innerHTML=( radioValue);
            var message="$"+ value1.value+"    " + textarea3.value;
			document.getElementById('demo').innerHTML= message;
			}
      
        
      });
  });

   $(document).ready(function(){
   $("#btn3").click(function(){
	  
  if($('#textarea2').val().length === 0){
	alert('Description cannot be left Blank');
    }
	else{
		alert("Your Offer has been added");
		}
        	var radioValue = $("input[name='gender']:checked").val();
            if(radioValue){
              document.getElementById('demo3').innerHTML=( radioValue);
            var message=     textarea2.value;
			document.getElementById('demo4').innerHTML=message;
			
			}
      
        
      });
  });

   function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#blah')
                        .attr('src', e.target.result)
                        .width(350)
                        .height(350);
                };

                reader.readAsDataURL(input.files[0]);
            }
        }

	  
