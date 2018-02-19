var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('plans api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_plan/1')
   .reply(200, {
     'assignedto_id': null,
     'blocked_count': 2,
     'completed_on': null
   });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_plans/1')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_plans/1&is_completed=0')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_plan/1')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_plan_entry/1')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'update_plan/1')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'update_plan_entry/1/2')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'close_plan/1')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'delete_plan/1')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'delete_plan_entry/1/2')
   .reply(200, {
     'success': true
   });



  it('Get one', function (done) {
    testrail.getPlan(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Get all', function (done) {
    testrail.getPlans(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Get all - filtered', function (done) {
    testrail.getPlans(1, { is_completed: 0 }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Add plan entry', function (done) {
    testrail.addPlanEntry(1, { 'name': 'Browsers' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Add plan', function (done) {
    testrail.addPlan(1, { 'name': 'Chrome' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Update plan entry', function (done) {
    testrail.updatePlanEntry(1, 2, { 'name': 'Browsers' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Update plan', function (done) {
    testrail.updatePlan(1, { 'name': 'Chrome' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });

  it('Close plan', function (done) {
    testrail.closePlan(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });

  it('Delete plan entry', function (done) {
    testrail.deletePlanEntry(1, 2, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });

  it('Delete plan', function (done) {
    testrail.deletePlan(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });
});
