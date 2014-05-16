/**
	For simple applications, you might define all of your views in this file.  
	For more complex applications, you might choose to separate these kind definitions 
	into multiple files under this folder.
*/

enyo.kind({
	name: "MainView",
	kind: "FittableColumns",
	fit: true,
	mydata: new MyContact(),
	components:[
		{
			classes:"menuMainMenu",
			components: [
				{ classes:"logoPos"},
				{
					name:"mainMenuList",
					kind: "List",
					style:'height:355px', 
					touch: true, 
					count: 0,
					onSetupItem: "setupMainMenuItem", 
					components: [
						{
							name:"menuItem",
							kind:"MenuButton", 
							ontap:"handleMainMenuItemTapped",
							classes:"panels-main-menuitem"
						}
					]
				},
				{ style:"height:80px" },
				{
					kind:"ContactMenu"
				}
			]
		},
		{
			kind: "Panels", 
			fit: true,
			name:"myPanel",
			draggable:true,
			arrangerKind: "CollapsingArranger", 
			wrap: false,
			index:1,
			components:[
				{
					name:"subMenu",
					classes:"menuSubMenu",
					components:[
						{ kind:"ContactList" }
					]
				},
				{
					classes:"bodyContent", 
					components:[
						{
							name:"header",
							kind:"Header"
						},
						{
							name:"contentBox",
							classes:"paddedContent"
						}
					]
				}
			]
		}
	],
	published:{
		recordSelectedIndex:-1,
		selectedIndex:-1,
	    moduleName:["My Contacts","Customer Fact Find","Quotation","Proposal","Supplementary","E-Signature","Payment"],
	    cffModuleName:["Life Priorities","Dependent","Existing Plan","Risk Profile","Net Worth","Monthly Cash Flow","Financial Analysis"],	    
		quotationModuleName:["Email Quotation","Generate PDF"],
		sigModuleName:["Reset"]
	},
	handlers:{
		onClosePanel:"handleClosePanel",
		onCFFTapped:"handleCFFTapped",
		onSigTapped:"handleSigTapped",
		onContactTapped:"handleRecordTapped"
	},
	create: function() {
	    this.inherited(arguments);
	    this.loadData();
	    if (this.selectedIndex == -1) {
	    	//Nothing is selected;
	    	this.$.myPanel.setDraggable(false);
	    	this.$.header.setReadOnly(true);
	    	this.$.contentBox.setClasses("");
	    	this.$.contentBox.setClasses("paddedContent logoGE");
	    }
	},
	loadData:function(){
		this.$.mainMenuList.setCount(this.moduleName.length);
	},
	handleClosePanel: function(inSender,inEvent) {
		if (this.selectedIndex > -1) {
			this.$.myPanel.setIndex(!this.$.myPanel.getIndex());
		}
	},
	handleSigTapped:function(inSender,inEvent) {
		this.$.contentBox.controls[0].controls[2].clearCanvas();
		//console.log(  );
	},
	handleCFFTapped:function(inSender,inEvent) {
		if (this.getRecordSelectedIndex() > -1) {
			this.$.myPanel.setIndex(1);
			this.$.contentBox.destroyClientControls();
			this.$.contentBox.setClasses("paddedContent");
			switch(inEvent.index) {
				case 0:
					this.$.header.setReadOnly(true);
					var priorityView = new PriorityForm();
					this.$.contentBox.addControl(priorityView);
					this.$.contentBox.render();
				break;

				case 2:
					this.$.header.setReadOnly(false);
					var existingPlanView = new ExistingPlan();
					this.$.contentBox.addControl(existingPlanView);
					this.$.contentBox.render();
				break;

				case 6:
					this.$.header.setReadOnly(false);
					var financeAnalysisView = new FinanceAnalysis();
					this.$.contentBox.addControl(financeAnalysisView);
					this.$.contentBox.render();
				break;

				default:
					var comingSoon = new ComingSoon();
					this.$.header.setReadOnly(true);
					this.$.contentBox.addControl(comingSoon);
					this.$.contentBox.render();
				break;
			}
			
			
		} else {
			this.promptError();
			return true;
		}

	},
	handleRecordTapped:function(inSender,inEvent){
		this.$.myPanel.setIndex(1);
		this.$.contentBox.destroyClientControls();
		this.$.contentBox.setClasses("paddedContent");
		this.setRecordSelectedIndex(inEvent.index);
		this.$.header.setReadOnly(false);
		var formView = new Form();
		this.$.contentBox.addControl(formView);
		this.$.contentBox.render();
		this.$.header.setData({name:this.mydata.getData()[inEvent.index].name,readOnly:false});
		formView.setData(this.mydata.getData()[inEvent.index]);
	},
	handleMainMenuItemTapped:function(inSender,inEvent) {
		switch(inEvent.index){
			case 0:
				this.setSelectedIndex(0);
				this.$.header.setReadOnly(true);
				var contactList = new ContactList();
				contactList.setSelectedIndex(this.getSelectedIndex());
				contactList.setData( this.mydata.getData() );
				this.$.subMenu.destroyClientControls();
				this.$.subMenu.addControl(contactList);
				this.$.subMenu.render();
				this.$.myPanel.setIndex(0);
			break;

			case 1:
				this.setSelectedIndex(1);
				this.$.header.setReadOnly(true);
				var cffList = new CFFList();
				cffList.setSelectedIndex(this.getSelectedIndex());
				cffList.setData( this.cffModuleName );
				this.$.subMenu.destroyClientControls();
				this.$.subMenu.addControl(cffList);
				this.$.subMenu.render();
				this.$.myPanel.setIndex(0);
			break;

			case 2:
				if(this.recordSelectedIndex != -1) {
					this.setSelectedIndex(2);
					this.$.header.setReadOnly(true);
					var quotationList = new QuotationList();
					quotationList.setSelectedIndex(this.getSelectedIndex());
					quotationList.setData( this.quotationModuleName );
					this.$.subMenu.destroyClientControls();
					this.$.subMenu.addControl(quotationList);
					this.$.subMenu.render();
					this.$.myPanel.setIndex(1);

					this.$.header.setReadOnly(true);
					this.$.contentBox.setClasses("");
					this.$.contentBox.destroyClientControls();
		    		this.$.contentBox.setClasses("paddedContent");

					var quotationView = new Quotation();
					this.$.contentBox.addControl(quotationView);
					this.$.contentBox.render();
				} else {
					this.promptError();
					return true;
				}
			break;

			case 5:
				this.setSelectedIndex(2);
				this.$.header.setReadOnly(false);
				var sigModuleList = new SigList();
				sigModuleList.setSelectedIndex(this.getSelectedIndex());
				sigModuleList.setData( this.sigModuleName );
				this.$.subMenu.destroyClientControls();
				this.$.subMenu.addControl(sigModuleList);
				this.$.subMenu.render();
				this.$.myPanel.setIndex(1);

				this.$.contentBox.setClasses("");
				this.$.contentBox.destroyClientControls();
		    	this.$.contentBox.setClasses("paddedContent");

				var eSig = new ESig();
				this.$.contentBox.addControl(eSig);
				this.$.contentBox.render();
			break;

			default:
				this.$.myPanel.setIndex(1);
				return true;
			break;

		}
	},
	promptError:function() {
		alert("Select a Contact First");
	},
	setupMainMenuItem:function(inSender,inEvent) {
		this.$.menuItem.setData(this.moduleName[inEvent.index]);
		this.$.menuItem.setSelected(inSender.isSelected(inEvent.index));
	}
	
});