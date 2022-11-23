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
      
      
      Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function(sym, e) {
         
         
         const letters = new SplitType('.split', { types: 'words,chars' })
         
           document.querySelectorAll(".char").forEach(function(el,index){
           gsap.set(el,{scale:.5,opacity:0})
         
         })
         
         
         document.getElementById("Stage_BTN_CTA").style.cursor="pointer"

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4559, function(sym, e) {
         document.getElementById("Stage_T1").querySelectorAll(".char").forEach(function(el,index){
           gsap.to(el,.2,{scale:1,opacity:1,delay:index*0.02})
           })

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5874, function(sym, e) {
         document.getElementById("Stage_T2").querySelectorAll(".char").forEach(function(el,index){
           gsap.to(el,.2,{scale:1,opacity:1,delay:index*0.02})
           })

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 7092, function(sym, e) {
         document.getElementById("Stage_T3").querySelectorAll(".char").forEach(function(el,index){
           gsap.to(el,.2,{scale:1,opacity:1,delay:index*0.02})
           })

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 9814, function(sym, e) {
         sym.play("re")

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "EDGE-400296298");