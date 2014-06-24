enyo.kind({
	name: "go.Global",
	statics: {
		version:"1.0.2",
		globalStack: [],
		globalObject: {},
		globalNav: [],
		storeLocal:function(key, value){
			localStorage.setItem(key, JSON.stringify(value));
		},
		pushDataLayer:function(value){
			if(window.dataLayer == null) {
				console.log("Tag Manager Not Available");
			} else {
				if (value instanceof Object) {
					dataLayer.push(value);
					console.log("dataLayer push object");
				} else {
					dataLayer.push({'event':'pageview','virtual_page':'/'+value});
					console.log("dataLayer push pagename");
				}
				
			}
			
		},
		getLocal:function(key){
			var returnObject;
			if ( localStorage.getItem(key) != undefined ){
					returnObject = JSON.parse(localStorage.getItem(key));
			} else {
					returnObject = null;
			}
			return returnObject;
		},
		resetLocal:function(key){
			console.log("Resetting LocalStorage for key: " +key);
			delete localStorage[key];
		},
		flush:function(){
			console.log("WARNING: Flushing all localStorage");
			localStorage.clear();
		},
		setObject:function(key, value){
			this.globalObject[key] = value;
			console.log("=== Stored Object ===");
			console.log(this.globalObject);
		},
		getObject:function(key){
			console.log("== Fetching ["+key+"] ===");

			if (!this.globalObject[key]) {
				return null;
			}

			return this.globalObject[key];
		},
		reset:function(){
			this.globalObject = [];
		},
		pushStack:function(value){
			this.globalStack.push(value);
		},
		popStack:function(value){
			return this.globalStack.pop();
		},

		checkMemory:function(){
			return this.globalNav;
		},
		setNavData:function(value){
			this.globalNav.push(value);
		},
		getNavData:function(){
			return this.globalNav.pop();	
		},
		resetNavData:function(){
			this.globalNav = [];
		},
		resetGlobalStack:function(){
			this.globalStack = [];
		},
		resetAll:function(){
			this.reset();
			this.resetNavData();
			this.resetGlobalStack();
		},
		mergeObject:function(object1,object2){
			var c = {};
			var key;
		   for (key in object1) {
		      c[key] = object1[key];
		   }
		   for (key in object2) {
		      c[key] = object2[key];
		   }
		   return c;
		},
		logger: {
			DEBUG: 0,
			INFO: 1,
			WARN: 2,
			ALERT: 3,
			EMERG: 4,
			CRITICAL: 5,

			levelString: {
				0: 'DEBUG',
				1: 'INFO',
				2: 'WARN',
				3: 'ALERT',
				4: 'EMERG',
				5: 'CRITICAL'
			},
			log: function(msg, lvl) {
				if (!lvl) lvl = this.DEBUG;

				if (this.level > lvl) {
					return false;
				}

				lvl = this.levelString[lvl];
				for (var i in this.writers) {
					this.writers[i]({
						level: lvl,
						date: new Date(),
						msg: msg
					});
				}

				return true;
			},
			debug: function(msg) {
				this.log(msg, this.DEBUG);
			},
			info: function(msg) {
				this.log(msg, this.INFO);
			},
			warn: function(msg) {
				this.log(msg, this.WARN);
			},
			alert: function(msg) {
				this.log(msg, this.ALERT);
			},
			emerg: function(msg) {
				this.log(msg, this.EMERG);
			},
			critical: function(msg) {
				this.log(msg, this.CRITICAL);
			},
			level: 1,
			writers: [
				function(msg) {
					console.log(msg.level + ": " + msg.date + ", ", msg.msg);
				}
			],
			addWriter: function(writer) {
				if (typeof writer !== 'function') {
					return;
				}
				this.writers.push(writer);
			}
		}
	}
});