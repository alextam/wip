/**
	Define and instantiate your enyo.Application kind in this file.  Note,
	application rendering should be deferred until DOM is ready by wrapping
	it in a call to enyo.ready().
*/

enyo.kind({
	name: "myapp.Application",
	kind: "enyo.Application",
	view: "MainView",
	handlers:{
		onPageChange:"handlePageChange"
	},
	handlePageChange:function(inSender,inEvent) {
		switch(inEvent.view) {
			case "MainView":				
				this.view = new MainView({data:inEvent.data});
			break;

			case "StrTestView":
				this.view = new StrTestView({data:inEvent.data});
			break;
		}
		this.start();
	}
});

enyo.ready(function () {
	new myapp.Application({name: "app"});
});
