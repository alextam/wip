enyo.kind({
      name: "LoginView",
      components: [
         {     
            kind: "go.Scroller",
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