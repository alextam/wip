enyo.kind({
	name: "FeedBackUser",
	phoneGap : go.PhoneGapSuit,
	published:{
		message:"Please fill in required information",
		isPopup:false
	},
	handleFormError:function(errorResults){
		var i;
		if(!this.getIsPopup()) {
			this.phoneGap.alert(this.message);
		}
		for (i = 0; i < errorResults.errors.length; i++) {
			errorResults.errors[i].controller.parent.addClass("errorDecorator");
			errorResults.errors[i].controller.setValue("");
			errorResults.errors[i].controller.setAttribute("placeholder", "");
			errorResults.errors[i].controller.setAttribute("placeholder", errorResults.errors[i].message);
		} 
	},
	handleTDMFormError:function(errorResults){
		var i;
		if(!this.getIsPopup()) {
			this.phoneGap.alert(this.message);
		}
		for (i = 0; i < errorResults.errors.length; i++) {
			errorResults.errors[i].controller.parent.addClass("errorDecorator");
			errorResults.errors[i].controller.setValue("");
			errorResults.errors[i].controller.setAttribute("placeholder", "");
			console.log ("===");
			console.log (errorResults.errors[i].message);
			if ( errorResults.errors[i].message == "* Must be positive integer." ){
				errorResults.errors[i].controller.setAttribute("placeholder", "* Must be integer.");
			} else {
				errorResults.errors[i].controller.setAttribute("placeholder", errorResults.errors[i].message);
			}
		} 
	},
	handleShortFormError:function(errorResults, options){
		if (!options) {
			options = {};
		}
		
		var i;
		if(!this.getIsPopup()) {
			this.phoneGap.alert(this.message);
		}
		for (i = 0; i < errorResults.errors.length; i++) {
			errorResults.errors[i].controller.parent.addClass("errorDecorator");
			if (!options.dontClearValue) {
				errorResults.errors[i].controller.setValue("");
			}
		} 
	},
	handlePopupFormError:function(errorResults, options){
		var i;
		if(!this.getIsPopup()) {
			this.phoneGap.alert(this.message);
		}
		for (i = 0; i < errorResults.errors.length; i++) {
			errorResults.errors[i].controller.parent.addClass("errorDecorator");
			errorResults.errors[i].controller.setValue("");
			errorResults.errors[i].controller.setAttribute("placeholder", "");
			errorResults.errors[i].controller.setAttribute("placeholder", errorResults.errors[i].message);
		} 
	}
});