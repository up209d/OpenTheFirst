/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         var gen_animated = $('.GenderButton div:first-child');
         $('.GenderButton').on('click', function(){
           if ((!nat_animated.is(':animated')) && (!gen_animated.is(':animated')) && (PlayerListShow_playing == false)) {
         		$(this).find('div:first-child').animate({backgroundColor: 'rgba(212,253,51,1.00)'},1000);
         		$('.GenderButton').find('div:first-child').css({backgroundColor: 'rgba(192,192,192,0.10)'});
         		$('.GenderButton').find('div p span').css({color: 'rgba(255,255,255,1.00)'});
         		$(this).find("p span").animate({color: 'rgba(0,0,0,1.00)'});
         		PlayerListShow(6);
           }
         });
         
         var nat_animated = $('.NationButton div:first-child');
         $('.NationButton').on('click', function(){
           if ((!nat_animated.is(':animated')) && (!gen_animated.is(':animated')) && (PlayerListShow_playing == false)) {
         		$(this).find('div:first-child').animate({backgroundColor: 'rgba(212,253,51,1.00)'},1000);
         		$('.NationButton').find('div:first-child').css({backgroundColor: 'rgba(192,192,192,0.10)'});
         		$('.NationButton').find('div p span').css({color: 'rgba(255,255,255,1.00)'});
         		$(this).find("p span").animate({color: 'rgba(0,0,0,1.00)'});
         		PlayerListShow(9);
           }
         });

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-PlayerFilter");