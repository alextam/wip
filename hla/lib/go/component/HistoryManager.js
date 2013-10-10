/**
	_go.HistoryManager_ is a generic HistoryManager which can be used to
	keep track of navigation history within an application, for the purpose
	of forwards and backwards navigation.

	_go.HistoryManager_ also enables non-linear navigation using 'labels'. The
	History for each label is maintained separately. Once you navigate from one
	label to another, the backwards navigation will only go through the current
	label until it is exhausted. Once the current label is exhausted it goes
	back to the previous label.

	A 'default' label is used where the user does not specify the label. The
	'default' label is special in that once the navigation reaches the
	'default' label, it doesn't go back to another label even if there are
	previous labels in history. The 'default' label can be treated as the main
	flow of the app, while the labels are sub flows which you want to throw
	away after use.
*/
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

	/**
		Ask the _go.HistoryManager_ to record this page in history.
	*/
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
		var label = this.getCurrentLabel();
		var route = this.getLastPageOfLabel(label);

		this.history = {};
		this.labelsHistory = [];

		this.recordHistory(route.name, route.params, route.label, route.extras);
	}
});