var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('projects api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_project/1')
   .reply(200, {
     'announcement': '..',
     'completed_on': null,
     'id': 1,
     'is_completed': false,
     'name': 'Datahub',
     'show_announcement': true,
     'url': 'http://<server>/testrail/index.php?/projects/overview/1'
   });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_projects')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_projects&is_completed=0')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_project')
   .reply(200, {
     'announcement': '..',
     'completed_on': null,
     'id': 1,
     'is_completed': false,
     'name': 'Datahub',
     'show_announcement': true,
     'url': 'http://<server>/testrail/index.php?/projects/overview/1'
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'update_project/1')
   .reply(200, {
     'is_completed': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'delete_project/1')
   .reply(200, {
     'success': true
   });


  it('Get one', function (done) {
    testrail.getProject(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Get all', function (done) {
    testrail.getProjects(function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Get all - filtered', function (done) {
    testrail.getProjects({ is_completed: '0' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Add', function (done) {
    testrail.addProject({ 'is_completed': true }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Update', function (done) {
    testrail.updateProject(1, { 'is_completed': true }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Delete', function (done) {
    testrail.deleteProject(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });
});
