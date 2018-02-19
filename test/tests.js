var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('tests api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_test/1')
   .reply(200, {
     'assignedto_id': 1,
     'case_id': 1,
     'custom_expected': '..',
     'custom_preconds': '..',
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
     'id': 100,
     'priority_id': 2,
     'run_id': 1,
     'status_id': 5,
     'title': 'Verify line spacing on multi-page document',
     'type_id': 4
   });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_test/2')
   .reply(400, {
     error: 'Field :test is not a valid test.'
   });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_tests/1')
   .reply(200, [
     {
       'id': 1,
       'title': 'Test conditional formatting with basic value range'
     },
     {
       'id': 2,
       'title': 'Verify line spacing on multi-page document'
     }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_tests/1&status_id='+encodeURIComponent('4,5'))
   .reply(200, [
     {
       'id': 1,
       'title': 'Test conditional formatting with basic value range'
     },
     {
       'id': 2,
       'title': 'Verify line spacing on multi-page document'
     }
   ]);




  it('Get one', function (done) {
    testrail.getTest(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Get one - not found', function (done) {
    testrail.getTest(2, function (err, response, body) {
      expect(err).to.not.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.object;
      done();
    });
  });


  it('Get all', function (done) {
    testrail.getTests(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });

  it('Get all - filtered', function (done) {
    testrail.getTests(1, { status_id: '4,5' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });
});
