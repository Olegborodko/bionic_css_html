( function($) {
	$(document).ready(function () {
		$("header a.submenu-hover").mouseenter(function(){
			index = $(this).attr("data-index");
			$("header .top_menu_hover[data-index="+index+"]").show(); 
		});

		$('*').hover(function(event){
			if (event.target.className === 'submenu' ||
				event.target.className ==='logo' ||
				event.target.className ==='top-button'
				){
				$(".top_menu_hover").hide();
				return;	
			}
			let parents = $(event.target).parents();
			let arrParents = Object.keys(parents).map((key) => `${parents[key].id}`);
			if (arrParents.includes('masthead') || event.target.className==='submenu-hover'){
				return;
			}
			$(".top_menu_hover").hide();
		});
	});
}(jQuery) );
