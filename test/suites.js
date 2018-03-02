var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('suites api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_suite/1')
   .reply(200, {
     'description': '..',
     'id': 1,
     'name': 'Setup & Installation',
     'project_id': 1,
     'url': 'http://<server>/testrail/index.php?/suites/view/1'
   });


  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_suites/1')
   .reply(200, [
      { 'id': 1, 'name': 'Setup & Installation' },
      { 'id': 2, 'name': 'Document Editing' }
   ]);

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_suite/1')
   .reply(200, {
     'description': '..',
     'id': 1,
     'name': 'Setup & Installation',
     'project_id': 1,
     'url': 'http://<server>/testrail/index.php?/suites/view/1'
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_suite/2')
   .reply(403, {
     error: 'No permissions to add test suites or no access to the project'
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'update_suite/1')
   .reply(200, {
     'description': '..',
     'id': 1,
     'name': 'Setup & Installation',
     'project_id': 1,
     'url': 'http://<server>/testrail/index.php?/suites/view/1'
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'delete_suite/1')
   .reply(200, {
     'success': true
   });


  it('Get one', function (done) {
    testrail.getSuite(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Get all', function (done) {
    testrail.getSuites(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Add - success', function (done) {
    testrail.addSuite(1, { 'name': 'This is a new test suite' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Add - error', function (done) {
    testrail.addSuite(2, { 'name': 'This is a new test suite' }, function (err, response, body) {
      expect(err).to.not.be.null;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Update', function (done) {
    testrail.updateSuite(1, { 'name': 'This is a new test suite' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Delete', function (done) {
    testrail.deleteSuite(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });
});
