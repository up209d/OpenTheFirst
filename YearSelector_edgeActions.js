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
      
      
      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4250, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // !!! Imporatant because the Stage cannot control the style of elements in Symbol
         for (i=0;i<=9;i++) {
         
         	sym.getSymbol("YearBullets").getSymbol("YearBullet-0"+i).play(0);
         
         
         }

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Preloader'
   (function(symbolName) {   
   
   })("Preloader");
   //Edge symbol end:'Preloader'

   //=========================================================
   
   //Edge symbol: 'YearBullet-00'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("YearBullet-00");
   //Edge symbol end:'YearBullet-00'

   //=========================================================
   
   //Edge symbol: 'YearBullets'
   (function(symbolName) {   
   
      

   })("YearBullets");
   //Edge symbol end:'YearBullets'

   //=========================================================
   
   //Edge symbol: 'YearBorder'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("YearBorder");
   //Edge symbol end:'YearBorder'

   //=========================================================
   
   //Edge symbol: 'DecreaseSymbol'
   (function(symbolName) {   
   
      

   })("DecreaseSymbol");
   //Edge symbol end:'DecreaseSymbol'

   //=========================================================
   
   //Edge symbol: 'IncreaseSymbol'
   (function(symbolName) {   
   
      

   })("IncreaseSymbol");
   //Edge symbol end:'IncreaseSymbol'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-YearSelector");