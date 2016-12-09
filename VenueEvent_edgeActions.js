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
         $('.noHorizonScroll').css({overflowX: 'hidden'});

      });
      //Edge binding end

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
   
   //Edge symbol: 'VenueStage'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Rod}", "click", function(sym, e) {
         sym.getSymbol("RodSym").play(0);
         sym.getSymbol("BGText").play(250);
         sym.$('RodSym').show();
         sym.$('BGText').show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Milton2}", "click", function(sym, e) {
         sym.getSymbol("BGText").play(250);
         sym.getSymbol("ElseSym").play('Milton');
         sym.$('ElseSym').show();
         sym.$('BGText').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${MelPark}", "click", function(sym, e) {
         sym.getSymbol("BGText").play(250);
         sym.getSymbol("ElseSym").play('Melbourne');
         sym.$('ElseSym').show();
         sym.$('BGText').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${WCity}", "click", function(sym, e) {
         sym.getSymbol("BGText").play(250);
         sym.getSymbol("ElseSym").play('White');
         sym.$('ElseSym').show();
         sym.$('BGText').show();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Koo}", "click", function(sym, e) {
         sym.getSymbol("BGText").play(250);
         sym.getSymbol("ElseSym").play('Kooyong');
         sym.$('ElseSym').show();
         sym.$('BGText').show();
         
         

      });
      //Edge binding end

   })("VenueStage");
   //Edge symbol end:'VenueStage'

   //=========================================================
   
   //Edge symbol: 'pop_4'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3750, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

   })("pop_4");
   //Edge symbol end:'pop_4'

   //=========================================================
   
   //Edge symbol: 'melbourne'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close_btn_rCopy3}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("VenueStage").getSymbol("ElseSym").playReverse(6500);
         sym.getComposition().getStage().getSymbol("VenueStage").getSymbol("BGText").playReverse(1250);

      });
      //Edge binding end

   })("melbourne");
   //Edge symbol end:'melbourne'

   //=========================================================
   
   //Edge symbol: 'Kooyong'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close_btn_rCopy2}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("VenueStage").getSymbol("ElseSym").playReverse(5000);
         sym.getComposition().getStage().getSymbol("VenueStage").getSymbol("BGText").playReverse(1250);

      });
      //Edge binding end

   })("Kooyong");
   //Edge symbol end:'Kooyong'

   //=========================================================
   
   //Edge symbol: 'White'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close_btn_rCopy}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("VenueStage").getSymbol("ElseSym").playReverse(3500);
         sym.getComposition().getStage().getSymbol("VenueStage").getSymbol("BGText").playReverse(1250);

      });
      //Edge binding end

   })("White");
   //Edge symbol end:'White'

   //=========================================================
   
   //Edge symbol: 'Milton'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close_btn_r}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("VenueStage").getSymbol("ElseSym").playReverse(2000);
         sym.getComposition().getStage().getSymbol("VenueStage").getSymbol("BGText").playReverse(1250);

      });
      //Edge binding end

   })("Milton");
   //Edge symbol end:'Milton'

   //=========================================================
   
   //Edge symbol: 'ROD'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${close_btn}", "click", function(sym, e) {
         sym.getComposition().getStage().getSymbol("VenueStage").getSymbol("RodSym").playReverse(1000);
         sym.getComposition().getStage().getSymbol("VenueStage").getSymbol("BGText").playReverse(1250);

      });
      //Edge binding end

   })("ROD");
   //Edge symbol end:'ROD'

   //=========================================================
   
   //Edge symbol: 'BGText'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 117, function(sym, e) {
         sym.getComposition().getStage().getSymbol("VenueStage").stop(2750);

      });
      //Edge binding end

   })("BGText");
   //Edge symbol end:'BGText'

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

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-VenueEvent");