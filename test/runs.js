var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('runs api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_run/1')
   .reply(200, {
     'assignedto_id': 6,
     'blocked_count': 0,
     'completed_on': null,
     'config': 'Firefox, Ubuntu 12'
   });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_runs/1')
   .reply(200, [
      { 'id': 1, 'name': 'Test run 1' }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_runs/1&is_completed=0&suite_id=4')
   .reply(200, {
     'assignedto_id': 6,
     'blocked_count': 0,
     'completed_on': null,
     'config': 'Firefox, Ubuntu 12'
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_run/1')
   .reply(200, {
     'assignedto_id': 6,
     'blocked_count': 0,
     'completed_on': null,
     'config': 'Firefox, Ubuntu 12'
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'update_run/1')
   .reply(200, {
     'assignedto_id': 6,
     'blocked_count': 0,
     'completed_on': null,
     'config': 'Firefox, Ubuntu 12'
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'close_run/1')
   .reply(200, {
     'assignedto_id': 6,
     'blocked_count': 0,
     'completed_on': null,
     'config': 'Firefox, Ubuntu 12'
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'delete_run/1')
   .reply(200, {
     'success': true
   });


  it('Get one', function (done) {
    testrail.getRun(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Get all', function (done) {
    testrail.getRuns(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Get all - filtered', function (done) {
    testrail.getRuns(1, { is_completed: 0, suite_id: 4 }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Add', function (done) {
    testrail.addRun(1, { 'suite_id': 5, 'name': 'This is a new test run' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Update', function (done) {
    testrail.updateRun(1, { 'description': 'A description for the test run' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Close', function (done) {
    testrail.closeRun(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Delete', function (done) {
    testrail.deleteRun(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });
});
