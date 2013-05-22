enyo.kind({
    name: "DashboardView",
    components: [
         {     
            kind: "go.Scroller",
            fit:true,
            touch:true, 
            thumb:true,
            horizontal:"hidden",
            vertical:"hidden",
            components:[
              { 
              	 kind:"MainMenuView"
              }
            ]
         }
      ]
});