enyo.kind({
	name: "go.DataProvider",
	kind: enyo.Object,

	statuses: {
		'dormant': 0,
		'active': 1,
		'realized': 2,
		'broken': -1
	},

	success: [],
	failure: [],
	active: [],
	rest: [],

	dataFn: null,
	status: 0,
	dfd: null,
	data: null,

	statics: {
		wrap: function(scope, dataFn) {
			var fn = enyo.bind.apply(null, arguments);
			return new go.DataProvider(fn);
		}
	},

	constructor: function(dataFn) {
		this.clearCallbacks();

		this.dataFn = dataFn;
	},

	load: function() {
		var _this = this;
/*
		if (this.status == this.statuses.active ||
				this.status == this.statuses.realized) {
			return this.dfd;
		}
*/

		this.dfd = this.dataFn.apply(null, arguments);

		//if (this.status == this.statuses.dormant) {
			this.status = this.statuses.active;
			this.processActiveCallbacks();
		//}

		var i;
		for (i=0; i<this.success.length; i++) {
			this.dfd.done(this.success[i]);
		}
		for (i=0; i<this.failure.length; i++) {
			this.dfd.fail(this.failure[i]);
		}
		for (i=0; i<this.rest.length; i++) {
			this.dfd.always(this.rest[i]);
		}

		return this.dfd;
	},

	retry: function() {
		this.status = this.statuses.dormant;
		return this.load();
	},

	onSuccess: function(fn) {
		if (!fn instanceof Function) {
			throw new Error("1st parameter for onSuccess should be a function");
		}

		this.success.push(fn);

		if (this.dfd) {
			this.dfd.done(fn);
		}

		return this;
	},

	onFailure: function(fn) {
		if (!fn instanceof Function) {
			throw new Error("1st parameter for onFailure should be a function");
		}

		this.failure.push(fn);

		if (this.dfd) {
			this.dfd.fail(fn);
		}

		return this;
	},

	onActive: function(fn) {
		if (!fn instanceof Function) {
			throw new Error("1st parameter for onActive should be a function");
		}

		this.active.push(fn);

		if (this.status == this.statuses.active) {
			fn();
		}

		return this;
	},

	onRest: function(fn) {
		if (!fn instanceof Function) {
			throw new Error("1st parameter for onRest should be a function");
		}

		this.rest.push(fn);

		switch (this.status) {
			case this.statuses.dormant:
				fn();
		}

		if (this.dfd) {
			this.dfd.always(fn);
		}

		return this;
	},

	done: function() {
		if (this.dfd) {
			this.dfd.done.apply(this.dfd, arguments);
		}

		return this;
	},

	fail: function() {
		if (this.dfd) {
			this.dfd.done.apply(this.dfd, arguments);
		}

		return this;
	},

	always: function() {
		if (this.dfd) {
			this.dfd.done.apply(this.dfd, arguments);
		}

		return this;
	},

	processActiveCallbacks: function() {
		for (var i=0; i<this.active.length; i++) {
			this.active[i].apply(null, arguments);
		}
	},

	clearCallbacks: function() {
		this.success = [];
		this.failure = [];
		this.active = [];
		this.rest = [];
	},

	setEventHandler: function(options) {
		if (options instanceof Object && !options.handler) {
			var options = {
				handler: options,
				success: options.success || function() {
					enyo.warn("Success event not handled")
				},
				failure: options.failure || function() {
					enyo.warn("Failure event not handled")
				},
				active: options.active || function() {
					enyo.warn("Active event not handled")
				},
				rest: options.rest || function() {
					enyo.warn("Rest event not handled")
				}
			};
		}

		var handler = options.handler;
		this.onSuccess(enyo.bind(handler, options.success));
		this.onFailure(enyo.bind(handler, options.failure));
		this.onActive(enyo.bind(handler, options.active));
		this.onRest(enyo.bind(handler, options.rest));

		return this;
	}

});