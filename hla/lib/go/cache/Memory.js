enyo.kind({
	name: "go.cache.Memory",
	kind: null,

	data: {},

	constructor: function() {
		this.data = {};
	},

	set: function(key, value, options) {
		if (!options) {
			throw new Error("{options} parameter is required");
		}
		if (!options.expire && options.expire !== 0) {
			throw new Error("options.expire is required option");
		}

		this.data[key] = {
			value: value,
			expire: options.expire
		};

		return this;
	},

	get: function(key) {
		if (!this.data[key]) {
			return null;
		}

		var meta = this.data[key];
		var expire = meta.expire;

		if (this.isExpired(expire)) {
			this.unset(key);
			return null;
		}

		return meta.value;
	},

	unset: function(key) {
		if (!this.data[key]) {
			return;
		}

		delete this.data[key];
	},

	// @private
	isExpired: function(expire) {
		if (expire === 0) {
			return false;
		}

		var now = +(new Date());

		if (expire - now < 0) {
			return false;
		}

		return true;
	}

});