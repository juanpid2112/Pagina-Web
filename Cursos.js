
 $(document).ready(function valor(){

 	$('#miboton').click(function valor(){
 		let value = $('#select').val();

 		if (value == 0) {

 			$(".t").show(1500);

 		} else if (value == 1){
			$("#Tabla1").show(1500);
 			$("#Tabla2").hide(1500);
 			$("#Tabla3").hide(1500);
 			
 			

 		} else if (value == 2){

 			$("#Tabla2").show(1500);
 			$("#Tabla1").hide(1500);
 			$("#Tabla3").hide(1500);

 		} else if (value == 3){

 			$("#Tabla3").show(1500);
 			$("#Tabla1").hide(1500);
 			$("#Tabla2").hide(1500);

 		} 
 	})
 	
 })
	

























