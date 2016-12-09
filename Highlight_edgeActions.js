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
      
      
      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindTimelineAction(compId, symbolName, "Default Timeline", "play", function(sym, e) {
         
         


      });
      //Edge binding end

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Menu}", "click", function(sym, e) {
         // insert code for mouse click here
         ShowSideBarMenu();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "document", "compositionReady", function(sym, e) {
         $(".HighlightAvatar").css({borderRadius: '50%',boxShadow: 'inset 0px 0px 50px 10px rgba(0,0,0,0.3)'});
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Timeline}", "click", function(sym, e) {
         ShowIntro();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'text-area'
   (function(symbolName) {   
   
      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${close}", "click", function(sym, e) {
         sym.getComposition().getStage().play(0);
         sym.playReverse(1000);
         
         

      });
      //Edge binding end

   })("text-area");
   //Edge symbol end:'text-area'

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

   //=========================================================
   
   //Edge symbol: 'HighLight_PInfo'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Group}", "click", function(sym, e) {
         sym.playReverse(1000);
         ShowPlayerInformation();

      });
      //Edge binding end

   })("HighLight_PInfo");
   //Edge symbol end:'HighLight_PInfo'

   //=========================================================
   
   //Edge symbol: 'Highlight_All'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${icon-arrow-right}", "click", function(sym, e) {
         sym.stop(0);
         sym.getSymbol("HighLight_PInfo").stop(0);
         sym.getSymbol("HighLight_PInfo2").stop(0);
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${icon-arrow-left}", "click", function(sym, e) {
         sym.stop(0);
         
         sym.getSymbol("HighLight_PInfo").stop(0);
         sym.getSymbol("HighLight_PInfo2").stop(0);
         
         sym.play(0);

      });
         //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${V1}", "click", function(sym, e) {
         sym.getSymbol("HighLight_PInfo").play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${V2}", "click", function(sym, e) {
         sym.getSymbol("HighLight_PInfo2").play(0);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${VS}", "click", function(sym, e) {
         // insert code for mouse click here
         sym.getSymbol("text-area").play();
         
         sym.stop(0);
         

      });
         //Edge binding end

   })("Highlight_All");
   //Edge symbol end:'Highlight_All'

   //=========================================================
   
   //Edge symbol: 'BG_Images'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.play(1001);

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6000, function(sym, e) {
         sym.playReverse(6000);

      });
      //Edge binding end

   })("BG_Images");
   //Edge symbol end:'BG_Images'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-Highlight");