enyo.kind({
    name: "OccupationSelector",
    kind: "Control",
    classes:"panel-view",
    layoutKind: "FittableRowsLayout",
    components: [
        { style:"height:10px" },
        /*
        {
            classes:"mct-inputBoxGroup",
            components:[
                {
                    classes:"mct-realInput fullbox",
                    kind:"Input",
                    name:"txtCountry",
                    placeholder:"Filter Search..."
                }
            ]
        },
        */
        { style:"height:10px" },
        {
            name: "myList", 
            kind: "List", 
            multiSelect: false, 
            fit:true, 
            count:0, 
            touch:true, 
            onSetupItem: "setupItem", 
            components: [
                {
                    name: "listItem", 
                    classes:'listItems', 
                    ontap:'listItemTapped', 
                    components: [
                            {
                                name: "itemTitle",  
                                tag:"h3",
                                classes:"listItemButtons",
                                content:"Item List",
                                value:0
                            }
                    ]
                }
            ]
        },
        { style:"height:10px" }
    ],
    published:{
        data:null        
    },
    create: function() {
        this.inherited(arguments);
        this.loadData();
    },
    loadData:function() {
        var _this = this;
        var postman = new go.Postman();
        postman.getJSONFile("assets/settings/age-group.json",onJSONSuccess,onJSONFail);
        function onJSONSuccess(inRequest, inResponse){
            _this.setData(inResponse);
        }
        function onJSONFail(error){
            console.log("Error in loading file...");
        }

    },
    dataChanged: function() {
        this.$.myList.setCount(this.data.length);
    },
    listItemTapped:function(inSender,inEvent) {
        console.log(inEvent);
        this.bubble("onAgeGroupListSelected",{label:this.data[inEvent.index].name});
    },
    setupItem:function(inSender,inEvent) {
        this.$.itemTitle.setContent(this.data[inEvent.index].name);
        this.$.itemTitle.value = this.data[inEvent.index].code;
    },
    handleButtonTapped:function(inSender,inEvent) {
    	this.bubble("onHandleButtonTapped");
    }
});