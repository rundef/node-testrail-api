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
   .get(testrail.uri + 'get_results/1')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_results/1&status_id=2')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_results_for_case/1/2')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_results_for_case/1/2&status_id=3')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_results_for_run/1')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_results_for_run/1&status_id=2')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_result/1')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_result_for_case/1/2')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_results/1')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_results_for_cases/1')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);


  it('Get all', function (done) {
    testrail.getResults(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Get all - filtered', function (done) {
    testrail.getResults(1, { status_id: 2 }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Get all for case', function (done) {
    testrail.getResultsForCase(1, 2, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Get all for case - filtered', function (done) {
    testrail.getResultsForCase(1, 2, { status_id: 3 }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Get all for run', function (done) {
    testrail.getResultsForRun(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Get all for run - filtered', function (done) {
    testrail.getResultsForRun(1, { status_id: 2 }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Add one', function (done) {
    testrail.addResult(1, { 'comment': 'This test failed' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Add one for case', function (done) {
    testrail.addResultForCase(1, 2, { 'comment': 'This test failed' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Add multiple', function (done) {
    testrail.addResults(1, [{ 'comment': 'This test failed' }], function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Add multiple for case', function (done) {
    testrail.addResultsForCases(1, [{ 'comment': 'This test failed' }], function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });
});
