enyo.kind({
	name: "Navigator",
	statics: {   
		version:"1.0.0",
		gotoPage:function(kindName) {
			//console.log(kindName);
			if (kindName == "App"){
				new App().renderInto(document.body);
			} else {
				new window[kindName]().renderInto(document.body);
			}
		}
	}
});