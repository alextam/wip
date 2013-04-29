enyo.kind({
	name: 'go.HistoryManager',
	kind: enyo.Object,
	constructor: function() {
		this.history = {};
		this.labelsHistory = ['default'];
		this.currentLabel = 'default';
		this.exitOnNextBack = false;
		this.goingBack = false;
	},

	recordHistory: function(name, params, label, extras) {
		this.goingBack = false;

		if (!label) {
			label = 'default';
		}

		if (!this.history[label]) {
			this.history[label] = [];
		}

		if (this.labelsHistory[this.labelsHistory.length-1] !== label && label !== 'default') {
			this.history[label] = [];
		}

		var history = {
			name: name,
			params: params,
			label: label,
			extras: extras
		};
		this.history[label].push(history);

		this.exitOnNextBack = false;
		
		this.recordLabelHistory(label);
	},

	recordLabelHistory: function(label) {
		var index = this.labelsHistory.indexOf(label);
		if (index === -1) {
			this.labelsHistory.push(label);
			return;
		}

		if (index == this.labelsHistory.length-1) {
			return;
		}

		this.reorderLabelsHistory(label);
	},

	reorderLabelsHistory: function(label) {
		var index = this.labelsHistory.indexOf(label);

		this.labelsHistory = this.labelsHistory.slice(0, index).concat(this.labelsHistory.slice(index+1, this.labelsHistory.length));
		this.labelsHistory.push(label);
	},

	/**
	 * 
	 */
	getBack: function(label, params) {
		if (typeof label == 'object') {
			params = label;
			label = undefined;
		}

		if ((!label || label == 'default') && this.exitOnNextBack) {
			// exit from app

			// return null means exit app
			return null;
		}

		this.exitOnNextBack = false;

		if (!this.goingBack) {
			this.deleteCurrentPage();
			this.goingBack = true;
		}

		if (!label) {
			label = this.getCurrentLabel();
		} else {
			this.reorderLabelsHistory(label);
		}

		var route = this.getLastPageOfLabel(label);

		if (!route && label != 'default') {
			return this.getBack('default', params);
		}

		if (!route) {
			//alert("Go back again to exit");
			this.exitOnNextBack = true;

			// return false means next return will be null
			return false;
		}

		this.cleanUpLabel();

		if (params) {
			route.params = params;
		}

		return route;
	},

	deleteCurrentPage: function() {
		var label = this.getCurrentLabel();

		var route = this.getLastPageOfLabel(label);
		
		return this.cleanUpLabel(label);
	},

	getLastPageOfLabel: function(label) {
		return this.history[label] && this.history[label].pop();
	},

	cleanUpLabel: function() {
		var empty = false;
		var label = this.getCurrentLabel();

		if (this.history[label].length == 0) {
			empty = true;
			delete this.history[label];
			if (label == 'default') {
				this.labelsHistory = ['default'];
			} else {
				this.labelsHistory.pop();
			}
		}

		return empty;
	},

	getCurrentLabel: function() {
		return this.labelsHistory[this.labelsHistory.length-1];
	},

	clearHistory: function(label) {
		if (!label) {
			return this.clearAllHistory();
		}
	},

	clearAllHistory: function() {
		console.log(this.history);
		var label = this.getCurrentLabel();
		var route = this.getLastPageOfLabel(label);

		this.history = {};
		this.labelsHistory = [];

		this.recordHistory(route.name, route.params, route.label, route.extras);
		console.log(this.history);
	}
});