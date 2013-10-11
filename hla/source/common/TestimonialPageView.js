enyo.kind({
    name: "TestimonialPageView",
    kind: "Control",
    nav: Navigator,
    fit:true,
    classes:"mainBg",
    components: [   
        {
            kind:"ActionButton",
            content:"< Back",
            ontap:"handleTap",
            classes:"actionButton"
        },
        { 
            layoutKind: "FittableColumnsLayout",
            components:[
                { style:"width:5%;height:700px;" },
                {
                    style:"width:50%;",
                    components:[
                      { style:"height:80px;"},
                      {
                          name: "testimonialRepeater", 
                          style:"height:610px;",
                          kind: "List", 
                          multiSelect: false, 
                          count:0, 
                          thumb:false,
                          touch:true, 
                          onSetupItem: "setupItem", 
                          components: [
                             {
                                 name: "item", 
                                 ontap:'listItemTapped', 
                                 components: [
                                   {
                                     name: "itemTitle",  
                                     kind: "WitnessListItem"
                                   }
                                 ]
                             }
                          ]
                      }
                    ]
                         
                },
                { 
                  style:"width:45%;position:relative",
                  components:[
                    { 
                      tag:"div",
                      style:"position:absolute;width:320px;top:-25px;left:80px",
                      components:[
                        {
                          tag:"h2",
                          classes:"standardSeanH2",
                          style:"margin-top:0px;margin-bottom:5px",
                          content:"Our Stories"
                        },
                        {
                          classes:"standardHeader",
                          content:"What ours agents think?"
                        },
                        { style:"height:10px" },
                        {
                          tag:"p",
                          content:"Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat."
                        },
                        {
                          tag:"p",
                          content:"Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi."
                        },
                        {
                          tag:"p",
                          content:"Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum."
                        }
                      ]
                    }
                  ] 

                }
                
            ]
        }
    ],
    published:{
        data:[
          { 
            name:"Adam Baker",
            year:7,
            alt:true,
            photoClass:"ppl1",
            income:"105k"            
          },
          { 
            name:"Samson Dave",
            year:7,
            alt:false,
            photoClass:"ppl2",
            income:"105k"            
          },
          { 
            name:"Liza Teoh",
            year:7,
            alt:true,
            photoClass:"ppl3",
            income:"105k"            
          }
        ]    
    },
    create: function() {
        this.inherited(arguments);
        if (this.data != null) {
            this.dataChanged();
        }
    },
    dataChanged: function() {
        this.$.testimonialRepeater.setCount(this.data.length);
    },
    setupItem: function(inSender,inEvent) {
        this.$.itemTitle.setData(this.data[inEvent.index]);
    },
    handleTap: function(inSender,inEvent) {
    	this.nav.gotoPage("App");
    }
});