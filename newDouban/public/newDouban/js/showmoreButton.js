$(function(){
	var c=1;
	$('.showmoreButton').click(function(){
//		$('.menu').css({
//			'display':'block'
//		})
		if(c){
		$('.menu').show();
			c=c*-1;
		}else{
		$('.menu').hide();
			
		}
		console.log(c);
	})

})
