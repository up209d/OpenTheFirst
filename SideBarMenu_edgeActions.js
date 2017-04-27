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
         //currentMenu = "";
         $('.noDimensionValue').css({width:0,height:0});
         $('.SideMenuImages').css({boxShadow: '0px 0px 30px 10px rgba(0,0,0,0.5),inset 0px 0px 100px 10px rgba(0,0,0,1)', borderRadius: '50px'});
         $('.RoundBotRec').css({borderBottomLeftRadius:'50px',borderBottomRightRadius:'50px'});

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${BG}", "click", function(sym, e) {
         CloseSideBarMenu();
         

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'burger'
   (function(symbolName) {   
   
      

      

      

      

      

      

      

      

      

      

      

      

      

   })("burger");
   //Edge symbol end:'burger'

   //=========================================================
   
   //Edge symbol: 'AustralianOpen'
   (function(symbolName) {   
   
   })("AustralianOpen");
   //Edge symbol end:'AustralianOpen'

   //=========================================================
   
   //Edge symbol: 'Player'
   (function(symbolName) {   
   
   })("Player");
   //Edge symbol end:'Player'

   //=========================================================
   
   //Edge symbol: 'Gallery'
   (function(symbolName) {   
   
   })("Gallery");
   //Edge symbol end:'Gallery'

   //=========================================================
   
   //Edge symbol: 'Quiz'
   (function(symbolName) {   
   
   })("Quiz");
   //Edge symbol end:'Quiz'

   //=========================================================
   
   //Edge symbol: 'AO'
   (function(symbolName) {   
   
      

      

      

      Symbol.bindElementAction(compId, symbolName, "${Block}", "click", function(sym, e) {
             /*
             
             sym.getComposition().getStage().getSymbol('burger').getSymbol('AO').play(0);
             
             //console.log(currentMenu);
             
             if ((currentMenu != '') && (currentMenu != 'AO')) {
                 if(currentMenu != 'Player_') {
                     sym.getComposition().getStage().getSymbol('burger').getSymbol(currentMenu).playReverse(1000);
                 } else {
             
                     sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BG").playReverse(1250);
                     sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_AustralianPlayer").playReverse(999);
                     sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_InternationalPlayer").playReverse(999);
                     sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BGPlay").playReverse(1000);
             
                 }
             
             }
             
             currentMenu = 'AO';
             
             
             */
             

      });
      //Edge binding end

   })("AO");
   //Edge symbol end:'AO'

   //=========================================================
   
   //Edge symbol: 'Player_'
   (function(symbolName) {   
      
      
      
      
      
      
      
      
      
      
      
      

      Symbol.bindElementAction(compId, symbolName, "${BGPlay}", "click", function(sym, e) {
             /*
             
             sym.getComposition().getStage().getSymbol('burger').getSymbol('Player_').play(0);
             
             if ((currentMenu != '') && (currentMenu != 'Player_')) {
             
                 sym.getComposition().getStage().getSymbol('burger').getSymbol(currentMenu).playReverse(1000);
             
             }
             
             
             currentMenu = 'Player_';
             
             
             */

      });
      //Edge binding end

   })("Player_");
   //Edge symbol end:'Player_'

   //=========================================================
   
   //Edge symbol: 'Gallery_'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Block}", "click", function(sym, e) {
             /*
             
             
             sym.getComposition().getStage().getSymbol('burger').getSymbol('Gallery_').play(0);
             
             if ((currentMenu != '') && (currentMenu != 'Gallery_')) {
                 if(currentMenu != 'Player_') {
                     sym.getComposition().getStage().getSymbol('burger').getSymbol(currentMenu).playReverse(1000);
                 } else {
             
                     sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BG").playReverse(1250);
                     sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_AustralianPlayer").playReverse(999);
                     sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_InternationalPlayer").playReverse(999);
                     sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BGPlay").playReverse(1000);
             
                 }
             
             }
             currentMenu = 'Gallery_';
             
             */

      });
      //Edge binding end

   })("Gallery_");
   //Edge symbol end:'Gallery_'

   //=========================================================
   
   //Edge symbol: 'Quiz_'
   (function(symbolName) {   
   
      

      Symbol.bindElementAction(compId, symbolName, "${Block}", "click", function(sym, e) {
                 /*
                 
                 sym.getComposition().getStage().getSymbol('burger').getSymbol('Quiz_').play(0);
                 
                 if ((currentMenu != '') && (currentMenu != 'Quiz_')) {
                     if(currentMenu != 'Player_') {
                         sym.getComposition().getStage().getSymbol('burger').getSymbol(currentMenu).playReverse(1000);
                     } else {
                 
                         sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BG").playReverse(1250);
                         sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_AustralianPlayer").playReverse(999);
                         sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_InternationalPlayer").playReverse(999);
                         sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("BGPlay").playReverse(1000);
                 
                     }
                 
                 }
                 
                 currentMenu = 'Quiz_';
                 
                 
                 */

      });
      //Edge binding end

   })("Quiz_");
   //Edge symbol end:'Quiz_'

   //=========================================================
   
   //Edge symbol: 'btn_AustralianPlayer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Australian_Winner}", "click", function(sym, e) {
         sym.play(1250);
         sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_InternationalPlayer").playReverse(999);
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${HallOfFrame}", "click", function(sym, e) {

      });
      //Edge binding end

   })("btn_AustralianPlayer");
   //Edge symbol end:'btn_AustralianPlayer'

   //=========================================================
   
   //Edge symbol: 'btn_InternationalPlayer'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${International}", "click", function(sym, e) {
         sym.play(1250);
         sym.getComposition().getStage().getSymbol("burger").getSymbol("Player_").getSymbol("btn_AustralianPlayer").playReverse(999);
         

      });
      //Edge binding end

   })("btn_InternationalPlayer");
   //Edge symbol end:'btn_InternationalPlayer'

   //=========================================================
   
   //Edge symbol: 'BG'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         sym.stop();

      });
      //Edge binding end

   })("BG");
   //Edge symbol end:'BG'

   //=========================================================
   
   //Edge symbol: 'BGPlay'
   (function(symbolName) {   
   
   })("BGPlay");
   //Edge symbol end:'BGPlay'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "OTF-SideBarMenu");