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
      
      
      Symbol.bindElementAction(compId, symbolName, "${Menu}", "click", function(sym, e) {
         ShowSideBarMenu();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Logo}", "click", function(sym, e) {
         ShowSideBarMenu();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'BG_Images'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(1001);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 8000, function(sym, e) {
         sym.playReverse(8000);

      });
      //Edge binding end

   })("BG_Images");
   //Edge symbol end:'BG_Images'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-Intro");