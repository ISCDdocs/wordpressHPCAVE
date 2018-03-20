thumbnail = jQuery(".wp-post-image");
if(thumbnail.length){
	thumbnail.css("display","none");
	jQuery(".inner-main-title").css("background-image","-moz-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url(" + thumbnail.prop("src") + ")");
	jQuery(".inner-main-title").css("background-image","-webkit-gradient(linear, left top, left bottom, color-stop(0%, rgba(0, 0, 0, 0)), color-stop(59%, rgba(0, 0, 0, 0)), color-stop(100%, rgba(0, 0, 0, 1))), url(" + thumbnail.prop("src") + ")");
	jQuery(".inner-main-title").css("background-image","-webkit-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url(" + thumbnail.prop("src") + ")");
	jQuery(".inner-main-title").css("background-image","-o-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url(" + thumbnail.prop("src") + ")");
	jQuery(".inner-main-title").css("background-image","-ms-linear-gradient(top, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url(" + thumbnail.prop("src") + ")");
	jQuery(".inner-main-title").css("background-image","linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 59%, rgba(0, 0, 0, 1) 100%), url(" + thumbnail.prop("src") + ")");
	jQuery(".inner-main-title").css("background-size","cover");
}


