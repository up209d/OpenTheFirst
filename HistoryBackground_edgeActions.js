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
         // insert code to be run when the composition is fully loaded here
         clickable = true;

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Stage-HistoryBackground}", "click", function(sym, e) {
         // insert code for mouse click here
         /*
         if (clickable == true) {
         
         	// insert code for mouse click here
         	AdobeEdge.getComposition('OTF-YearSelector').getStage().play(0);
         	setTimeout(function(){AdobeEdge.getComposition('OTF-HistoryYearInfo').getStage().play();AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().play();},4000);
         	clickable = false;
         
         }
         */

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Timeline}", "click", function(sym, e) {
         ShowIntro();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu}", "click", function(sym, e) {
         ShowSideBarMenu();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-HistoryBackground");