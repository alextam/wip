enyo.kind({
	name: 'Bootstrap',
	global: go.Global,
	callback: null,
	delta : 1,
	settings: {},
	signals: null,
	constructor: function() {
		this.inherited(arguments);

		var dfds = [];
		this.onReadySet = Deferred();
		dfds.push(this.onReadySet);

		var _this = this;
		var global = go.Global;

		var settingsDfd = Deferred();
		dfds.push(settingsDfd);

		var postMan = new go.Postman();
		postMan.getJSONFile('assets/settings/settings.json',onSuccessGet, onFailGet);
		function onSuccessGet(inRequest, inResponse){
			_this.settings = inResponse;
			_this.bootStrapWebService(_this.settings.postMan);
			_this.setEnvironmentSettings(_this.settings);

			settingsDfd.resolve();
		}
		function onFailGet(results){
			this.phoneGap.alert("Error in Loading Settings");
			settingsDfd.resolve();

			throw new Error("Error in Loading Settings");
		}

		this.allReady = Deferred.when.apply(this, dfds);
		this.allReady.done(function() {
			if (typeof _this.callback == 'function') {
				_this.callback();
			}
		});
	},

	bootStrapWebService: function(settings) {
		var broker = phis.ServiceBroker.getBroker();

		var postMan = new go.Postman();
		//var postMan = new FakePostman();
		postMan.parseSettings(settings);

		var cache = new go.cache.Cache(
			new go.cache.SessionStorage('phis.webservice'),
			300
		);
		var phisWebService = new phis.WebService(postMan, cache, settings);
		this.phisWebService = phisWebService;

		broker.setService('webService', phisWebService);

		enyo.log("PHD Web Service Setup");

		var userPersistence = {
			saveUser: function(user) {
				phis.Session.set('user', user);
				go.Global.storeLocal('PHD.APPDATA.USERSESSION', user);
			},
			getUser: function() {
				return phis.Session.get('user');
				//return go.Global.getLocal('PHD.APPDATA.USERSESSION');
			}
		};
		var userModule = new UserModule(phisWebService, userPersistence);
		broker.setService('userService', userModule);

		var patientCache = new go.cache.Cache(new go.cache.Memory(), 0);
		var patientModule = new PatientModule(phisWebService, patientCache);
		broker.setService('patientService', patientModule);

		var orderService = new phis.OrderService(phisWebService);
		var medicationDataService = new phis.MedicationDataService(phisWebService);
		var pnService = new phis.PnService(phisWebService);
		var cdrService = new phis.CDRService(phisWebService);
		var marService = new phis.MARService(phisWebService);
		var radioPharmaService = new phis.RadioPharmaService(phisWebService);
		broker.setService('orderService', orderService);
		broker.setService('medicationDataService', medicationDataService);
		broker.setService('pnService', pnService);
		broker.setService('cdrService', cdrService);
		broker.setService('marService', marService);
		broker.setService('radioPharmaService', radioPharmaService);

		var taskListService = new phis.TaskListService(phisWebService);
		broker.setService('taskListService', taskListService);
		
		var tdmService = new phis.TdmService(phisWebService);
		broker.setService('tdmService', tdmService);
	},

	setEnvironmentSettings: function(settings) {
		this.global.setObject("Settings",settings);
		if (settings.loggingLevel || settings.loggingLevel === 0) {
			enyo.setLogLevel(settings.loggingLevel);
		}
	},

	run: function() {
		var _this = this;

		this.onReadySet.resolve();
		this.allReady.done(function() {
			var nav = new phis.Navigator({historyManager: new go.HistoryManager()});
			//nav.setContext(_this.getContext());

			var app = new App({
				appContainer: document.body,
				navigator: nav,
				webService: _this.phisWebService
			});

			_this.captureBrowserBackButton();

			// @todo use enyo phonegap suite for these things
			document.addEventListener('deviceready', function() {
				//enyo.log('deviceready');
				go.PhoneGapSuit.setDeviceReady(true);
				document.addEventListener('backbutton', function() {
					nav.goBack();
				}, false);
			});

			//nav.gotoPage('LoginPage');
			nav.gotoPage('PreloaderPage');
		});
	},

	captureBrowserBackButton: function() {
		if (!history.state) {
			history.pushState({app:true}, null, '');
			history.pushState({app:true}, null, '');
		}
		window.addEventListener('popstate', function(e) {
			if (!e.state) {
				return;
			}
			go.PhoneGapSuit.confirm("Press OK if you want to navigate away from this page. Cancel otherwise.", function(confirm) {
				if (confirm) {
					if (e.state && e.state.app === true) {
						history.go(-2);
					} else {
						history.go(-1);
					}
				} else {
					history.pushState({app:true}, null, '');
				}
			});
		});
	},

	ready: function(callback) {
		this.onReadySet.resolve();
		this.callback = callback;
	},

	getContext: function() {
		var context = {
			phdWebService: this.phdWebService,
			userModule: this.userModule,
			store: this.store,
			cart: this.cart
		};

		go.Global.setObject('context', context);

		return context;
	}

});