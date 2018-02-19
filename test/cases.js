var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('cases api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_case/1')
   .reply(200, {
     'created_by': 5,
     'created_on': 1392300984,
     'custom_expected': '..',
     'custom_preconds': '..',
     'custom_steps': '..',
     'custom_steps_separated': [
       {
         'content': 'Step 1',
         'expected': 'Expected Result 1'
       },
       {
         'content': 'Step 2',
         'expected': 'Expected Result 2'
       }
     ],
     'estimate': '1m 5s',
     'estimate_forecast': null,
     'id': 1,
     'milestone_id': 7,
     'priority_id': 2,
     'refs': 'RF-1, RF-2',
     'section_id': 1,
     'suite_id': 1,
     'title': 'Change document attributes (author, title, organization)',
     'type_id': 4,
     'updated_by': 1,
     'updated_on': 1393586511
   });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_cases/1')
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_cases/1&suite_id=2&section_id=3&updated_by=' + encodeURIComponent('4,5,6'))
   .reply(200, [
    { 'id': 1, 'title': '..' }
   ]);

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_case/1')
   .reply(200, {
     'name': 'Release 2.0',
     'due_on': 1394596385
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'update_case/1')
   .reply(200, {
     'is_completed': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'delete_case/1')
   .reply(200, {
     'success': true
   });


  it('Get one', function (done) {
    testrail.getCase(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Get all', function (done) {
    testrail.getCases(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Get all - filtered', function (done) {
    testrail.getCases(1, { suite_id: 2, section_id: 3, updated_by: '4,5,6'}, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Add', function (done) {
    testrail.addCase(1, { 'custom_preconds': 'These are the preconditions for a test case' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Update', function (done) {
    testrail.updateCase(1, { 'custom_preconds': 'These are the preconditions for a test case' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Delete', function (done) {
    testrail.deleteCase(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });
});
