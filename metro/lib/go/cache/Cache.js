enyo.kind({
	name: "go.cache.Cache",
	kind: null,

	storage: null,
	expire: 0,

	constructor: function(storage, expire) {
		this.setStorage(storage);
		this.setExpire(expire);
	},

	set: function(key, value, options) {
		if (!options) {
			options = {};
		}
		var expire = options.expire || this.expire;
		options.expire = +(new Date()) + (expire * 1000);

		this.storage.set(key, value, options);
	},

	get: function(key) {
		return this.storage.get(key);
	},

	unset: function(key) {
		this.storage.unset(key);
	},

	// @private
	setStorage: function(storage) {
		this.storage = storage;
	},

	setExpire: function(expire) {
		this.expire = expire;
	}

});