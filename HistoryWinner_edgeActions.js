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
      
      
      Symbol.bindElementAction(compId, symbolName, "${BackIcon}", "click", function(sym, e) {
         // insert code for mouse click here
         $("#Stage-HistoryWinner").fadeOut(1500);
         sym.playReverse(1500);
         $('#Stage-HistoryActionButton').show();
         AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('ResultSymbol').play(500);
         AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('WinnerSymbol').play(500);
         AdobeEdge.getComposition('OTF-HistoryActionButton').getStage().getSymbol('VenueSymbol').play(500);
         
         sym.getSymbol('MaleSymbol').stop(0);
         sym.getSymbol('FemaleSymbol').stop(0);

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         // insert code to be run when the composition is fully loaded here
         
         $('#Stage-HistoryWinner_MaleBackground').css({
         
         	backgroundImage:'url(images/test/Federer.jpg)',
         	backgroundSize: '100% 100%',
         	backgroundPosition: 'center center'
         
         });
         
         
         
         $('#Stage-HistoryWinner_FemaleBackground').css({
         
         	backgroundImage:'url(images/test/Maria.jpg)',
         	backgroundSize: '100% 100%',
         	backgroundPosition: 'center center'
         
         });

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${MaleBackground}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol('MaleSymbol').play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${FemaleBackground}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol('FemaleSymbol').play();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'FemaleSymbol'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${FemaleInfo}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse(750);
         ShowPlayerInformation();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${FemaleInfoIconBG}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse(750);

      });
      //Edge binding end

   })("FemaleSymbol");
   //Edge symbol end:'FemaleSymbol'

   //=========================================================
   
   //Edge symbol: 'MaleSymbol'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${MaleInfo}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse(750);
         ShowPlayerInformation();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${MaleInfoIconBG}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.playReverse(750);

      });
      //Edge binding end

   })("MaleSymbol");
   //Edge symbol end:'MaleSymbol'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-HistoryWinner");