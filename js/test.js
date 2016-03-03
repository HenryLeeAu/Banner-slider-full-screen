(function($){

	$.fn.julio = function(options) {
		var defaults = {
				 'bannerNum' :-2,
				 'duration' :5000,
				 'auto' :'on',
				 'ball' :'off'
				 
				 
		};
		var settings=$.extend({},defaults,options);
		var bannerNum=settings.bannerNum;
		var now_width;
		var that=this;
		var bannerLength=this.children('.banner_wrap').children('.banner').length;
		
		this.each(function(){
			if(settings.auto=='on'){
				var refresh=setInterval(autoslide,settings.duration);
			}
			if(settings.ball=='on'){

				for(var i=0;i<bannerLength;i++){
					$(this).children(".banner_point").append( "<li class='"+i+"'></li>" );
		  		}
		  	}
			init(bannerNum);
			if(bannerNum==0){
        		$(that).children(".arrow_l").addClass('hidden');
      		}else if(bannerNum==-(bannerLength-1)){
        		$(that).children(".arrow_r").addClass('hidden');
      		}
			bannerMove(bannerNum);
			
  			function bannerMove(num){
  				$(that).children('.banner_wrap').animate({marginLeft:$(window).width()*num+"px"}, 1000, function(){
  					$(that).children(".arrow_l").removeClass('hidden');
      				$(that).children(".arrow_r").removeClass('hidden');
      				if(bannerNum==0){
        				$(that).children(".arrow_l").addClass('hidden');
      				}else if(bannerNum==-(bannerLength-1)){
        				$(that).children(".arrow_r").addClass('hidden');
      				}
  				});
    		}
    		
    		 $(window).resize(function(){
        		init(bannerNum);
  			});
    		
		 
		  	$(this).children(".arrow_l").click(function(){
		  	 	bannerNum++;
   				 if(bannerNum>=0){
      				bannerNum=0;
    			}
    			
    			 ClocknMove(bannerNum);
		  	 });
		  	$(this).children(".arrow_r").click(function(){
		  	 	bannerNum--;
   				  if(bannerNum<-(bannerLength-1)){
      				bannerNum=-(bannerLength-1); 
    			}
    			
    			 ClocknMove(bannerNum);
		  	});
		  	$(this).children(".banner_point").children("li").click(function(e){
      			bannerNum=-$(e.target).attr("class");
      			
      			ClocknMove(bannerNum);
  			});
  			function init(num){
    			now_width=$(window).width();

   				$(that).children(".banner_wrap").children(".banner").css({"width":now_width+'px'});
    			$(that).children(".banner_wrap").css({"width":now_width*$(".banner").length+'px',"margin-left":now_width*num+"px"});
       			
       		}

		  	function ClocknMove(bannerNum){
    			clearInterval(refresh);
    			if(settings.auto=='on'){
    				refresh=setInterval(autoslide,settings.duration);
    			}
    			bannerMove(bannerNum);
    
			}
			function autoslide(){
				
    			bannerNum--;
    		
    			if(bannerNum<=-bannerLength){
      				bannerNum=0;
    			}
    			bannerMove(bannerNum);
  			}



		});
		return this;

	};

})(jQuery);



/*(function($){
	$.fn.myPlugin = function(options) {
		var defaults = {
			'background' : '#000000',
			'fontSize' : '19px'

		};
		var settings=$.extend({},defaults,options);
		this.css({
			'background' : settings.background,
			'fontSize' : settings.fontSize
		});
		this.each(function(e){
			$(this).append(''+$(this).attr('href'));

		});
		return this;

	};

})(jQuery);*/