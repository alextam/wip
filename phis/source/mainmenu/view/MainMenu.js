enyo.kind({
    name: "MainMenu",
    classes:"setWidthFull",
    components: [
      {
            classes:"inflatePadding",
            components:[
              {
                  tag:"div",
                  style:"background:#fff;padding:10px;margin-top:10px;",
                  classes:"centerDiv",
                  components:[
                    {
                        tag:"h1",
                        classes:"txtAlignCenter",
                        content:"Welcome"
                    }
                  ]
              },
              {
                  style:"height:15px" 
              },
              {
                  layoutKind: "FittableColumnsLayout",
                  classes:"centerDiv menuDiv",
                  components:[
                      {
                        kind:"IconTextButton",
                        classes:"phisMenuButton",
                        icon:"phisMenu outpatient",
                        text:"Outpatient"
                      },
                      {
                        kind:"IconTextButton",
                        classes:"phisMenuButton",
                        icon:"phisMenu inpatient",
                        text:"InPatient"
                      },
                      {
                        kind:"IconTextButton",
                        classes:"phisMenuButton",
                        icon:"phisMenu recently",
                        text:"Recently<BR>Accessed"
                      }
                  ]
              },
              {
                  layoutKind: "FittableColumnsLayout",
                  classes:"centerDiv menuDiv",
                  components:[
                      {
                        kind:"IconTextButton",
                        classes:"phisMenuButton",
                        icon:"phisMenu emergency",
                        text:"Emergency"
                      },
                      {
                        kind:"IconTextButton",
                        classes:"phisMenuButton",
                        icon:"phisMenu daycare",
                        text:"Day Care"
                      },
                      {
                        kind:"IconTextButton",
                        classes:"phisMenuButton",
                        icon:"phisMenu tasklist",
                        text:"My Task List",
                        badge:99
                      } 
                  ]
              } 
            ]
      }    
    ]
});