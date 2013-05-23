enyo.kind({
    name: "DashboardView",
    classes:"setWidthFull",
    layoutKind: "FittableRowsLayout",
    components: [
         {     
            kind: "PageScrollView",
            components:[
              { 
              	 kind:"DashboardSelectorMenu"
              }
            ]
         }
      ]
});