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
      
      
      

      

      

      

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindElementAction(compId, symbolName, "${Timeline}", "click", function(sym, e) {
         ShowIntro();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu}", "click", function(sym, e) {
         // insert code for mouse click here
         ShowSideBarMenu();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'BGSymbol'
   (function(symbolName) {   
   
   })("BGSymbol");
   //Edge symbol end:'BGSymbol'

   //=========================================================
   
   //Edge symbol: 'PlayerBrief'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${ReadMoreGroup}", "click", function(sym, e) {
         ShowPlayerInformation_RightOnly();

      });
      //Edge binding end

   })("PlayerBrief");
   //Edge symbol end:'PlayerBrief'

   //=========================================================
   
   //Edge symbol: 'Pluse'
   (function(symbolName) {   
   
   })("Pluse");
   //Edge symbol end:'Pluse'

   //=========================================================
   
   //Edge symbol: 'BGImages'
   (function(symbolName) {   
   
      

   })("BGImages");
   //Edge symbol end:'BGImages'

   //=========================================================
   
   //Edge symbol: 'PInfo'
   (function(symbolName) {   
   
   })("PInfo");
   //Edge symbol end:'PInfo'

   //=========================================================
   
   //Edge symbol: 'P_Info'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${RefCircle}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.play(250);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Group}", "click", function(sym, e) {
         sym.playReverse(1000);
         ShowPlayerInformation();

      });
      //Edge binding end

   })("P_Info");
   //Edge symbol end:'P_Info'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-PlayerList");