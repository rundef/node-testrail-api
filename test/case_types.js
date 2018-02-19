var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('case_types api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });


  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_case_types')
   .reply(200, [
     {
       'id': 1,
       'is_default': false,
       'name': 'Automated'
     },
     {
       'id': 2,
       'is_default': false,
       'name': 'Functionality'
     },
     {
       'id': 6,
       'is_default': true,
       'name': 'Other'
     }
   ]);


  it('Get all', function (done) {
    testrail.getCaseTypes(function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });
});
