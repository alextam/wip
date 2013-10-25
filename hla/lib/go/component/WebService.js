enyo.kind({
	name: 'go.WebService',
	kind: enyo.Object,

	webService: null,
	wrapDataProvider: false,

	options: {},
	tempOptions: {},

	constructor: function(webService) {
		this.webService = webService;
	},

	setTemporaryOption: function(key, value) {
		this.tempOptions[key] = value;

		return this;
	},

	getOptions: function() {
		var options = enyo.mixin(this.options, this.tempOptions);

		this.tempOptions = {};
		
		if (this.basePath)
			options = enyo.mixin(options, {chgBasePath: this.basePath});
		else
			options.chgBasePath = null;

		return options;
	},

	get: function(uri, success, fail) {
		var _this = this;

		return this.wrapInDataProvider(function() {
			var dfd = new Deferred();

			var request = _this.webService.get(uri, _this.getOptions());

			if (success) {
				request.done(function(response) {
					var args = Array.prototype.unshift.call(arguments, dfd);
					success.apply(_this, arguments);
				});
			} else {
				request.done(dfd.resolve);
			}

			if (fail) {
				request.fail(function(err) {
					fail.call(_this, dfd, err);
				});
			} else {
				request.fail(dfd.reject);
			}

			return dfd.promise();
		});
	},

	post: function(uri, payload, success, fail) {
		var _this = this;

		return this.wrapInDataProvider(function() {
			var dfd = new Deferred();

			//modified by nyiam to add in options as new argument
			var request = _this.webService.post(uri, payload, _this.getOptions());
			
			if (success) {
				request.done(function(response) {
					success.call(_this, dfd, response);
				});
			} else {
				request.done(dfd.resolve);
			}

			if (fail) {
				request.fail(function(err) {
					fail.call(_this, dfd, err);
				});
			} else {
				request.fail(dfd.reject);
			}

			return dfd.promise();
		});
	},

	put: function(uri, payload, success, fail) {
		var _this = this;

		return this.wrapInDataProvider(function() {
			var dfd = new Deferred();

			//modified by nyiam to add in options as new argument
			var request = _this.webService.put(uri, payload, _this.getOptions());
			
			if (success) {
				request.done(function(response) {
					success.call(_this, dfd, response);
				});
			} else {
				request.done(dfd.resolve);
			}

			if (fail) {
				request.fail(function(err) {
					fail.call(_this, dfd, err);
				});
			} else {
				request.fail(dfd.reject);
			}

			return dfd.promise();
		});
	},

	delete: function(uri, payload, success, fail) {
		var _this = this;

		return this.wrapInDataProvider(function() {
			var dfd = new Deferred();

			//modified by nyiam to add in options as new argument
			var request = _this.webService.delete(uri, payload, _this.getOptions());
			
			if (success) {
				request.done(function(response) {
					success.call(_this, dfd, response);
				});
			} else {
				request.done(dfd.resolve);
			}

			if (fail) {
				request.fail(function(err) {
					fail.call(_this, dfd, err);
				});
			} else {
				request.fail(dfd.reject);
			}

			return dfd.promise();
		});
	},

	resolveDfd: function(data) {
		var dfd = new Deferred();
		var args = arguments;

		setTimeout(function() {
			dfd.resolve.apply(dfd, args);
		}, 100);

		return dfd.promise();
	},

	wrapInDataProvider: function(dataFn) {
		if (!this.wrapDataProvider) {
			return dataFn();
		}

		var dp = new go.DataProvider(dataFn);
		
		return dp;
	}

});