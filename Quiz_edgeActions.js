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
   
   //Edge symbol: 'Quiz_Selection'
   (function(symbolName) {   
   
      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Quiz_Circle}", "click", function(sym, e) {
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(2500);
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Quiz_Circle2}", "click", function(sym, e) {
         
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play(1750);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2989, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2239, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("Quiz_Selection");
   //Edge symbol end:'Quiz_Selection'

   //=========================================================
   
   //Edge symbol: 'BG_Images'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.playReverse(6000);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(1001);

      });
      //Edge binding end

   })("BG_Images");
   //Edge symbol end:'BG_Images'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-QuizTwo");