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
         more_clickable = true;

      Symbol.bindElementAction(compId, symbolName, "${Stage-HistoryReadMore}", "click", function(sym, e) {
         
         
         //sym.getSymbol("Readmore").getSymbol("ReadMore_Left").getSymbol("ReadMore").play(0);
         
         
         //sym.getSymbol("Readmore").getSymbol("ReadMore_Right").getSymbol("Evenmore").play(0);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         sym.getSymbol("Readmore").getSymbol("ReadMore_Left").getSymbol("ReadMore").play(0);
         sym.getSymbol("Readmore").getSymbol("ReadMore_Right").getSymbol("Evenmore").play(0);

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'ReadMore'
   (function(symbolName) {   
   
      

      

      Symbol.bindElementAction(compId, symbolName, "${ReadMore_button}", "click", function(sym, e) {
         // insert code for mouse click here
         if(more_clickable == true) {
         	sym.getComposition().getStage().getSymbol("Readmore").getSymbol("ReadMore_Left").play(4000);
         	sym.getComposition().getStage().getSymbol("Readmore").getSymbol("ReadMore_Right").playReverse(2000);
         	more_clickable = false;
         }
         

      });
      //Edge binding end

      

   })("ReadMore");
   //Edge symbol end:'ReadMore'

   //=========================================================
   
   //Edge symbol: 'Evenmore'
   (function(symbolName) {   
   
      

   })("Evenmore");
   //Edge symbol end:'Evenmore'

   //=========================================================
   
   //Edge symbol: 'EvenMore'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

   })("EvenMore");
   //Edge symbol end:'EvenMore'

   //=========================================================
   
   //Edge symbol: 'Score'
   (function(symbolName) {   
   
   })("Score");
   //Edge symbol end:'Score'

   //=========================================================
   
   //Edge symbol: 'Pluse'
   (function(symbolName) {   
   
   })("Pluse");
   //Edge symbol end:'Pluse'

   //=========================================================
   
   //Edge symbol: 'ReadMore_button'
   (function(symbolName) {   
   
   })("ReadMore_button");
   //Edge symbol end:'ReadMore_button'

   //=========================================================
   
   //Edge symbol: 'Readmore'
   (function(symbolName) {   
         

   })("Readmore");
   //Edge symbol end:'Readmore'

   //=========================================================
   
   //Edge symbol: 'ReadMore_Left'
   (function(symbolName) {   
   
      

      

      

      

      

   })("ReadMore_Left");
   //Edge symbol end:'ReadMore_Left'

   //=========================================================
   
   //Edge symbol: 'ReadMore_Right'
   (function(symbolName) {   
         

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("ReadMore_Right");
   //Edge symbol end:'ReadMore_Right'

   //=========================================================
   
   //Edge symbol: 'PhotoShows'
   (function(symbolName) {   
   
   })("PhotoShows");
   //Edge symbol end:'PhotoShows'

   //=========================================================
   
   //Edge symbol: 'ReadMore_button_1'
   (function(symbolName) {   
   
   })("ReadMore_button_1");
   //Edge symbol end:'ReadMore_button_1'

   //=========================================================
   
   //Edge symbol: 'Pluse_1'
   (function(symbolName) {   
   
   })("Pluse_1");
   //Edge symbol end:'Pluse_1'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-HistoryReadMore");