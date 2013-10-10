enyo.kind({
	name: "MasterForm",
	kind: "FittableRows",
	components:[
		{
            kind:"Header",
            title:"Search Vehicle"
        },
        {
			layoutKind: "FittableColumnsLayout",
			style:"margin:1px",
			components:[
				{ fit:true },
				{
					classes:"logoPadding",
					style:"width:133px;"
					/*
					,
					components:[
						{
							kind:"Image",
							src:"./assets/img/logo.png",
							style:"width:133px;"
						}
					]
					*/
				}
			]
		},				
		{
			classes:"setWidthFull inflatePadding",
			components:[
				{ style:"height:15px" },
				{
					classes:"setWidth60 centerDiv",
					components:[
						{
							tag:"h2",
							classes:"standardH2",
							content:"Search By"
						},
						{ style:"height:10px" },
						{
							name:"typePicker",
							kind:"StandardPicker",
							data:[
								{ content:"Vehicle Registration No.", value:"vehicleno", active:true },
								{ content:"Chassis No.", value:"chassis" }
							]
						},
						{
							name:"txtSearch",
							kind:"SearchInput",
							classes:"searchBox",
							placeholder:"Enter Search...",
							maxlength:50
						} 
					]
				},
				{ style:"height:25px" },
				{
					classes:"txtAlignCenter",							
					components:[
						{
							name:"btnSearch",
							kind:"onyx.Button",
							style:"width:250px",
							classes:"blackButton",
							content:"Search",
							ontap:"handleBtnSearch"
						}
					]
				},
				{ style:"height:55px" },
				{
					classes:"setWidth70 centerDiv",
					style:"height:200px;",
					components:[
						{ 
							classes:"centerDiv",
							style:"width:200px",
							name:"stickyLoader",
							kind:"StickyLoader"
						},
						{ 
							name:"searchResultBox",
							kind:"SearchResult" 
						}
					]
				},
				{ style:"height:10px" },
				{
					classes:"txtAlignCenter",							
					components:[
						{
							name:"btnAddNew",
							kind:"onyx.Button",
							style:"width:250px",
							classes:"blackButton",
							content:"Add New Vehicle Record",
							ontap:"handleBtnAdd"
						}
					]
				}
			]
		}
	],
	create: function() {
		this.inherited(arguments);
		this.$.stickyLoader.hide();
		this.$.btnAddNew.hide();
		this.bubble("onSubPageHide");
	},
	rendered: function() {
		this.inherited(arguments);
	},
	handleBtnAdd: function(inSender,inEvent) {
		var type = this.$.typePicker.getValue();
		var param = this.$.txtSearch.getValue();
		if (param == "") {
			go.PhoneGapSuit.alert("Please fill in the search criteria...");
			this.$.btnAddNew.hide();
			return;
		}	
		this.bubble("onChangePage",{page:"AddMasterForm",data:{type:type,value:param}});
	},
	handleBtnSearch: function(inSender,inEvent) {
		var _this = this;
		
		var type = this.$.typePicker.getValue();
		var param = this.$.txtSearch.getValue();
	
		if (String(param).trim("") == "") {
			go.PhoneGapSuit.alert("Please fill in the search criteria...");
			this.$.txtSearch.setValue("");
			return;
		}
		this.$.stickyLoader.show();
		_this.$.stickyLoader.changeMode('loading');
		_this.$.searchResultBox.setData(null);
		this.service = new Service().getSearchResult(type,param)
		.done(function(result){
			_this.$.stickyLoader.hide();
			_this.$.stickyLoader.changeMode('loading');
			if (result.length) {
				_this.$.searchResultBox.setData(result);
				_this.$.btnAddNew.hide();
			} else {
				_this.$.stickyLoader.show();
				_this.$.stickyLoader.changeMode('norecord');
				_this.$.btnAddNew.show();
			}
		});
		
	}
});