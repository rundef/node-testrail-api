var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('milestones api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_milestone/1')
   .reply(200, {
     'completed_on': 1389968184,
     'description': '...',
     'due_on': 1391968184,
     'id': 1,
     'is_completed': true,
     'name': 'Release 1.5',
     'project_id': 1,
     'url': 'http://<server>/testrail/index.php?/milestones/view/1'
   });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_milestones/1')
   .reply(200, [
    { 'id': 1, 'name': 'Release 1.5' }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_milestones/1&is_completed=0')
   .reply(200, [
    { 'id': 1, 'name': 'Release 1.5' }
   ]);

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_milestone/1')
   .reply(200, {
     'name': 'Release 2.0',
     'due_on': 1394596385
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'update_milestone/1')
   .reply(200, {
     'is_completed': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'delete_milestone/1')
   .reply(200, {
     'success': true
   });


  it('Get one', function (done) {
    testrail.getMilestone(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Get all', function (done) {
    testrail.getMilestones(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Get all - filtered', function (done) {
    testrail.getMilestones(1, { is_completed: 0 }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Add', function (done) {
    testrail.addMilestone(1, { 'name': 'Release 2.0', 'due_on': 1394596385 }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Update', function (done) {
    testrail.updateMilestone(1, { 'is_completed': 1 }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Delete', function (done) {
    testrail.deleteMilestone(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });
});
