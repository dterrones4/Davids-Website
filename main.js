handleNavClicks();

function handleNavClicks(){
	$('#navIcon').on('click touchstart', function(event){
		let nav = document.getElementById("myTopnav");
		if(nav.className === 'topnav'){
			nav.className += ' responsive'
		}	
		else{
			nav.className = 'topnav';
		}
	})
}