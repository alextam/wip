enyo.kind({
	name: 'TestDataGenerator',
	kind: enyo.Object,
	lists: {},

	setList: function(listName, items) {
		this.lists[listName] = items;
	},

	generate: function(format, times) {
		var values = [];

		for (var i=0; i<times; i++) {
			values.push(this.generateValue(format));
		}

		return values;
	},

	generateValue: function(format) {
		var matches = format.match(/(:.*?:)/g);

		var values = {};
		for (var i=0; i<matches.length; i++) {
			var keyword = matches[i].substring(1, matches[i].length-1);
			if (!this.lists[keyword]) {
				throw new Error("There is no list for keyword '"+keyword+"' found in '"+format+"'");
			}

			var list = this.lists[keyword];
			
			var value = this.selectRandomValueFromList(list);
			format = format.replace(matches[i], value);
			values[matches[i]] = value;
		}

		return format;
	},

	selectRandomValueFromList: function(list) {
		var index = parseInt( (Math.random() * list.length), 10 );
		return list[index];
	}

});