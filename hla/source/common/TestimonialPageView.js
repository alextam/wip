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
                        { style:"height:20px" },
                        {
                          name:"videoBox",
                          kind:"VideoButton",
                          title:"",
                          style:"padding:10px"
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
            poster:"assets/img/p1Shot.jpg",
            video:"assets/video/male.mp4",
            photoClass:"ppl1",
            income:"105k"            
          },
          { 
            name:"Samson Dave",
            year:7,
            alt:false,
            poster:"assets/img/p2Shot.jpg",
            video:"assets/video/ceovid.mp4",
            photoClass:"ppl2",
            income:"105k"            
          },
          { 
            name:"Liza Teoh",
            year:7,
            alt:true,
            poster:"assets/img/p3Shot.jpg",
            video:"assets/video/female.mp4",
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
    rendered:function() {
        this.inherited(arguments);
        this.$.videoBox.setPoster(this.data[0].poster);
        this.$.videoBox.setSource(this.data[0].video);
    },
    listItemTapped:function(inSender,inEvent) {
      this.$.videoBox.setPoster(this.data[inEvent.index].poster);
      this.$.videoBox.setSource(this.data[inEvent.index].video);
      this.$.videoBox.playVideo();
      
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