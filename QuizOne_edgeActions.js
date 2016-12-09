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
         // insert code for mouse click here
         ShowSideBarMenu();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Timeline}", "click", function(sym, e) {
         ShowIntro();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Popup'
   (function(symbolName) {   
   
   })("Popup");
   //Edge symbol end:'Popup'

   //=========================================================
   
   //Edge symbol: 'TextInfo'
   (function(symbolName) {   
   
   })("TextInfo");
   //Edge symbol end:'TextInfo'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-QuizOne");