enyo.kind({
	name: "go.cache.SessionStorage",
	kind: null,

	namespace: null,
	cacheLimitItems: 10,
	cacheLimitSize: 5120,

	constructor: function(namespace) {
		this.namespace = namespace || 'goSession';
		this.cacheLimitItems = 10;
		this.cacheLimitSize = 5120;
	},

	set: function(key, value, options) {
		if (!options) {
			throw new Error("{options} parameter is required");
		}
		if (!options.expire && options.expire !== 0) {
			throw new Error("options.expire is required option");
		}

		try {
			this.setSessionStorage(key, {
				value: value,
				expire: options.expire
			});
		} catch (e) {
			enyo.warn(e.message);
			return null;
		}

		return this;
	},

	setSessionStorage: function(key, value) {
		var data = sessionStorage.getItem(this.namespace);
		data = this.truncateForSize(data, value);
		
		if (data.noOfItems >= this.cacheLimitItems) {
			var key = data.keys.unshift();
			delete data.data[key];
			data.noOfItems--;
		}

		data.keys.push(key);
		data.data[key] = value;
		data.noOfItems++;

		sessionStorage.setItem(this.namespace, JSON.stringify(data));
	},

	truncateForSize: function(cache, value) {
		var json = JSON.stringify(value);
		if (json.length > this.cacheLimitSize) {
			throw new Error("Data is too big for cache. Limit: " + this.cacheLimitSize + "; Data size: " + json.length);
		}

		var data = JSON.parse(cache);
		if (data === null) {
			data = {
				noOfItems: 0,
				keys: [],
				data: {}
			};
			cache = JSON.stringify(data);
		}

		if (cache + json + 3 <= this.cacheLimitSize) {
			return data;
		}

		while (cache.length + json.length + 3 > this.cacheLimitSize) {
			var key = data.keys.shift();
			delete data.data[key];
			data.noOfItems--;
			cache = JSON.stringify(data);
		}

		return data;
	},

	get: function(key) {
		var data = sessionStorage.getItem(this.namespace);

		if (!data) {
			return null;
		}

		data = JSON.parse(data);
		var meta = data.data[key];
		if (!meta) {
			return null;
		}

		var expire = meta.expire;

		if (this.isExpired(expire)) {
			this.unset(key);
			return null;
		}

		return meta.value;
	},

	unset: function(key) {
		sessionStorage.removeItem(this.namespace+':'+key);
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