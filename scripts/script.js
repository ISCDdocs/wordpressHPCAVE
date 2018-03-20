jQuery(document).ready( function() {

	thumbnail = jQuery(".wp-post-image");
	if(thumbnail.length){
        	thumbnail.css("display","none");
	        jQuery(".inner-main-title").css("background-image","-moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url(" + thumbnail.prop("src") + ")");
	        jQuery(".inner-main-title").css("background-image","-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(59%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 1))\), url(" + thumbnail.prop("src") + ")");
	        jQuery(".inner-main-title").css("background-image","-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url(" + thumbnail.prop("src") + ")");
	        jQuery(".inner-main-title").css("background-image","-o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url(" + thumbnail.prop("src") + ")");
	        jQuery(".inner-main-title").css("background-image","-ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url(" + thumbnail.prop("src") + ")");
	        jQuery(".inner-main-title").css("background-image","linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url(" + thumbnail.prop("src") + ")");
	        jQuery(".inner-main-title").css("background-size","cover");
	}


    //Function to allow the toggling on pages
    function addToggleUntil(pageID, tag="h2"){
	//On rajoute un chevron
	jQuery(pageID + " " + tag).each( function(){ jQuery(this).html( jQuery(this).html() + " <i class='fa fa-chevron-down' aria-hidden='true'></i>" ) } );
	//On change le chevron au clic
	jQuery(pageID + " " + tag).click(function(e){
	    jQuery(this).find("i").each(function(){
		if (jQuery(this).hasClass('fa-chevron-down')){
		    jQuery(this).removeClass('fa-chevron-down');
		    jQuery(this).addClass('fa-chevron-up');
		}
		else{
		    jQuery(this).removeClass('fa-chevron-up');
		    jQuery(this).addClass('fa-chevron-down');
		}
	    })
	});
	//On cache les tags en question
	jQuery(pageID + " " + tag).nextUntil(tag).toggle();
	jQuery(pageID + ' ' + tag).hover(function() {
	    jQuery(this).css('cursor','pointer');
	});
	//Au clic, on toggle
	jQuery(pageID + " " + tag).click(function(e){
	    jQuery(pageID + " " + tag).not(jQuery(this)).nextUntil(tag).slideUp("slow");
	    jQuery(pageID + " " + tag).not(jQuery(this)).find("i").each(function(){
		jQuery(this).removeClass('fa-chevron-up');
		jQuery(this).addClass('fa-chevron-down');
	    });
	    jQuery(this).nextUntil(tag).slideToggle("slow");
	});
    }
    function addToggleNext(pageID, tag, next){
	jQuery(pageID + " " + tag).next("p").toggle();
	jQuery(pageID + " " + tag).hover(function() {
	    jQuery(this).css('cursor','pointer');
	});
	jQuery(pageID + " " + tag).click(function(e){
	    jQuery(pageID + " " + tag).not(jQuery(this)).next(next).slideUp();
	    jQuery(this).next(next).slideToggle("slow");
	});
    }

    addToggleUntil("#post-429", "td[data-colspan]");
    addToggleUntil("#post-443", "td[data-colspan]");
    addToggleUntil("post-1876","h2");
    addToggleUntil("#post-700", "h2");
    addToggleUntil("#post-415", "h2");
    addToggleNext( "#post-479", "h5", "p");
    addToggleUntil("#post-19",  "h3");
    addToggleUntil("#post-443", "h2");
    addToggleUntil("#post-1476", "h2");
    addToggleUntil("#post-1557", "h3");
    jQuery(".spinner").remove();
});

jQuery(window).on("load",function(){

	function toggleArray(){
        rowTag = "tr:has(td[data-colspan]:not([data-hide]))";
        jQuery(rowTag).css("background-color", "#eee");
        //$(rowTag).css("color", "red");
        jQuery(rowTag).nextUntil(rowTag).hide();
        jQuery(rowTag).on("click", function(){
            //$(rowTag).nextUntil(rowTag).hide();
            if(!jQuery(this).hasClass("shown")){
                jQuery(this).addClass("shown");
                jQuery(this).nextUntil(rowTag).show();
            }
            else{
                jQuery(this).removeClass("shown");
                jQuery(this).nextUntil(rowTag).hide();
            }
        });
    }
    jQuery(".dataTables_filter input").on("input", function(){
        size = jQuery(this).val().length;
        if(size>0){
            rowTag = "tr";
            jQuery(rowTag).show();
        }
        else{
            rowTag = "tr:has(td[data-colspan]:not([data-hide]))";
            jQuery(rowTag).nextUntil(rowTag).hide();
        }
    });
	toggleArray();

})
