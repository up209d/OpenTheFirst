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
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${WinnerSymbol}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage-HistoryWinner").show();
         AdobeEdge.getComposition('OTF-HistoryWinner').getStage().play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${VenueSymbol}", "click", function(sym, e) {
         // insert code for mouse click here
         //sym.getSymbol("Readmore").getSymbol("ReadMore_Left").getSymbol("ReadMore").play(0);
         //$("#Stage-HistoryReadMore").fadeIn(500);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ResultSymbol}", "click", function(sym, e) {
         // insert code for mouse click here
         
         $("#Stage-HistoryReadMore").fadeIn(500);
         sym.getSymbol("Readmore").getSymbol("ReadMore_Right").getSymbol("Evenmore").play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ResultSymbol'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("ResultSymbol");
   //Edge symbol end:'ResultSymbol'

   //=========================================================
   
   //Edge symbol: 'WinnerSymbol'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("WinnerSymbol");
   //Edge symbol end:'WinnerSymbol'

   //=========================================================
   
   //Edge symbol: 'VenueSymbol'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("VenueSymbol");
   //Edge symbol end:'VenueSymbol'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-HistoryActionButton");