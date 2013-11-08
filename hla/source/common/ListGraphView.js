enyo.kind({
    name: "ListGraphView",
    kind: "Control",
    nav: Navigator,
    classes:"whiteBg enyo-fit",
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
              { style:"width:2%;height:405px;" },
              {
                  style:"width:96%;text-align:center;",
                  components:[
                    {
                      style:"height:5px"
                    },
                    { 
                      kind:"Image",
                      style:"width:920px;text-align:center;",
                      src:"assets/img/RecuitmentDash.jpg"
                    }
                  ]
              },
              { style:"width:2%;height:405px;" }                
          ]
        },
        {
          style:"height:5px"
        },
        {
            kind:"Scroller",
            name:"contentControl",
            touch:true, 
            thumb:false,
            classes:"centerDiv",
            style:"width:800px;height:270px;margin-top:0px;",
            components:[
              {
                name: "dataList", 
                kind: "Repeater", 
                multiSelect: false, 
                count:0, 
                touch:true, 
                onSetupItem: "setupItem", 
                components: [
                    {
                       name: "item", 
                       style:"float:left",
                       ontap:'listItemTapped', 
                       components: [
                         {
                           name: "itemTitle",
                           kind: "MemberListItem"
                         }
                       ]
                    }
                ]                           
              }
            ]
        }
    ],
    published:{
        data:null		
    },
    create: function() {
    	this.inherited(arguments);
    	var _this = this;
    	this.service = new Service().usersData()
        .done(function(result){
            //console.log(result);
            _this.setData(result);
	    });
    },
    dataChanged: function() {
    	var _this = this;
    	//console.log(this.data.length);
    	_this.$.dataList.setCount(this.data.length);
    },
    listItemTapped: function(inSender,inEvent) {
      inSender.controls[0].updateStar();
    },
    setupItem: function(inSender,inEvent) {
      inEvent.item.$.itemTitle.setData(this.data[inEvent.index]);
    },
    handleTap: function(inSender,inEvent) {
    	this.nav.gotoPage("App");
    }
});