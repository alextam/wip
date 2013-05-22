enyo.kind({
      name: "LoginView",
      global: go.Global,
      layoutKind: "FittableRowsLayout", 
      components: [
         {     
            kind: "Scroller",
            fit:true,
            touch:true, 
            thumb:true,
            horizontal:"hidden",
            vertical:"hidden",
            components:[
               {style:"height:300px;"},
               {
                  kind:"LoginForm"
               },
               {style:"height:108px;"},
               {
                  kind:"DisclaimerView"
               }
            ]
         }
      ]
});