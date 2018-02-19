var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('templates api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });


  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_templates/1')
   .reply(200, [
     {
       'id': 1,
       'is_default': true,
       'name': 'Test Case (Text)'
     },
     {
       'id': 2,
       'is_default': false,
       'name': 'Test Case (Steps)'
     },
     {
       'id': 3,
       'is_default': false,
       'name': 'Exploratory Session'
     }
   ]);


  it('Get all', function (done) {
    testrail.getTemplates(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });
});
