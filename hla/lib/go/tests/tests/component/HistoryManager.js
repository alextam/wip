describe('History Manager', function() {

	describe('can record history', function() {

		var manager;

		beforeEach(function() {
			manager = new go.HistoryManager();
		});

		it('should record history', function() {
			manager.recordHistory('page1', {value: 'value1'});

			manager.history['default'][0].name.should.equal('page1');
			manager.labelsHistory.should.have.length(1);
			manager.labelsHistory[0].should.equal('default');
		});

		it('should record history with label', function() {
			manager.recordHistory('page1', {value: 'value1'});
			manager.recordHistory('page2', {value: 'value2'}, 'label1');

			manager.history.label1[0].name.should.equal('page2');
			manager.labelsHistory.should.have.length(2);
			manager.labelsHistory[1].should.equal('label1');
		});

	});

	describe('can get back history', function() {

		var manager;

		beforeEach(function() {
			manager = new go.HistoryManager();

			manager.recordHistory('page1', {value: 'value1'});
			manager.recordHistory('page2', {value: 'value2'}, 'label1');
			manager.recordHistory('page3');
		});

		it('should return back the page before current page', function() {
			manager.recordHistory('page4');
			
			var route = manager.getBack();

			route.name.should.equal('page3');
		});

		it('should return back the history in order', function() {
			manager.recordHistory('page4');
			
			manager.getBack();
			var route = manager.getBack();

			route.name.should.equal('page1');
		});

		it('should not go back to label once travelled to default', function() {
			manager.recordHistory('page3', {});

			var route = manager.getBack();
			route.name.should.equal('page3');

			route = manager.getBack();
			route.name.should.equal('page1');

			route = manager.getBack();
			var should = chai.should();
			route.should.equal(false);
		});

		it('should clear label history when it gets back on label', function() {
			manager.recordHistory('page4', {}, 'label1');
			manager.recordHistory('page5', {});
			manager.recordHistory('page6', {}, 'label1');

			var route = manager.getBack();
			route.name.should.equal('page5');
		});

		it('should not go back by label order', function() {
			manager.recordHistory('page4', {});
			manager.recordHistory('page5', {}, 'label1');
			manager.recordHistory('page6', {}, 'label1');
			manager.recordHistory('page7', {}, 'label2');
			manager.recordHistory('page8', {}, 'label3');

			var route = manager.getBack();
			route.name.should.equal('page7');

			route = manager.getBack();
			route.name.should.equal('page6');

			route = manager.getBack();
			route.name.should.equal('page5');

			route = manager.getBack();
			route.name.should.equal('page4');
		});

		it('can go back to label', function() {
			manager.recordHistory('page3', {});
			manager.recordHistory('page4', {}, 'label1');
			manager.recordHistory('page5', {}, 'label1');
			manager.recordHistory('page6', {}, 'label2');
			manager.recordHistory('page7', {}, 'label3');

			var route = manager.getBack('label1');
			route.name.should.equal('page5');

			route = manager.getBack();
			route.name.should.equal('page4');

			route = manager.getBack();
			route.name.should.equal('page6');

			route = manager.getBack();
			route.name.should.equal('page3');
		});

		it ('bug: back and forth between labels keeps label history', function() {
			manager.recordHistory('page3', {});
			manager.recordHistory('page4', {}, 'label3');
			manager.recordHistory('page5', {}, 'label4');
			manager.recordHistory('page4', {}, 'label3');
			manager.recordHistory('page5', {}, 'label4');
			manager.recordHistory('page4', {}, 'label3');

			var route = manager.getBack();
			route.name.should.equal('page3');
		});

	});

});