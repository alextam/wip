enyo.kind({
	name: 'AsyncQueue',
	kind: enyo.Object,
	queued: [],
	queueLimit: 2,
	queueLength: 0,
	dfds: [],
	priority: [],
	executor: null,
	dfd: null,
	constructor: function() {

	},

	setDefaultExecutor: function(executor) {
		this.executor = executor;
	},

	addToQueue: function(itemName, queueItem, executor) {
		if (!executor) {
			executor = this.executor;
		}

		if (!executor) {
			throw new Error("Executor not provided");
		}

		queueItem.executor = executor;

		if (!queueItem.priority) {
			queueItem.priority = this.queued.length;
		}

		queueItem.name = itemName;

		this.add(itemName, queueItem);
	},

	add: function(itemName, queueItem) {
		this.queued[itemName] = queueItem;
		this.queueLength++;

		this.addToPriorityQueue(itemName, queueItem.priority);
	},

	addToPriorityQueue: function(itemName, priority) {
		var priorityObj = {
			priority: priority,
			itemName: itemName
		};

		this.priority.push(priorityObj);
		this.queued[itemName].priorityIndex = this.priority.length-1;

		this.setPriority(itemName, priority);
	},

	setPriority: function(itemName, priority) {
		this.priority[this.queued[itemName].priorityIndex].priority = priority;

		priority = Array.prototype.sort.call(this.priority, function(a, b) {
			if (a.priority < b.priority) {
				return -1;
			} else if (a.priority > b.priority) {
				return 1;
			}

			return 0;
		});

		var prevPriority;
		var pIncrement = 0;
		var i = 0;
		var _this = this;
		priority.map(function(item) {
			if (prevPriority == item.priority) {
				item.priority++;
			}

			prevPriority = item.priority;
			_this.queued[item.itemName].priorityIndex = i++;
			return item;
		});

		this.priority = priority;
	},

	process: function() {
		this.dfd = new Deferred();

		var limit = this.queueLimit;
		if (this.queueLimit > this.priority.length) {
			limit = this.priority.length;
		}

		for (var i=0; i<limit; i++) {
			var item = this.priority.shift();

			this.processItem(item.itemName);
		}

		return this.dfd;
	},

	processItem: function(itemName) {
		var item = this.queued[itemName];

		var dfd = new Deferred();
		this.dfds.push(dfd);
		//this.queued[itemName] = dfd.promise();
		
		item.executor(item, dfd);

		var _this = this;
		dfd.always(function() {
			_this.processNext();
		});
	},

	processNext: function() {
		var item = this.priority.shift();

		var _this = this;
		if (!item) {
			Deferred.when.apply(this, this.dfds).done(function() {
				_this.dfd.resolve();
			});
			
			return;
		}

		this.processItem(item.itemName);
	},

	bind: function(fn, context) {
		return function() {
			return fn.apply(context, arguments);
		};
	}

});