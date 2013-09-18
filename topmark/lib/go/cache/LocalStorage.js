enyo.kind({
	name: "go.cache.SessionStorage",
	kind: null,

	namespace: null,

	constructor: function(namespace) {
		this.namespace = namespace || 'goSession';
	},

	set: function(key, value, options) {
		if (!options) {
			throw new Error("{options} parameter is required");
		}
		if (!options.expire && options.expire !== 0) {
			throw new Error("options.expire is required option");
		}

		localStorage.setItem(this.namespace+':'+key, JSON.stringify({
			value: value,
			expire: options.expire
		}));

		return this;
	},

	get: function(key) {
		var data = localStorage.getItem(this.namespace+':'+key);

		if (!data) {
			return null;
		}

		meta = JSON.parse(data);

		var expire = meta.expire;

		if (this.isExpired(expire)) {
			this.unset(key);
			return null;
		}

		return meta.value;
	},

	unset: function(key) {
		localStorage.removeItem(this.namespace+':'+key);
	},

	// @private
	isExpired: function(expire) {
		if (expire === 0) {
			return false;
		}

		var now = +(new Date());

		if (expire - now > 0) {
			return false;
		}

		return true;
	}

});