var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('priorities api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });


  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_priorities')
   .reply(200, [
     {
       'id': 1,
       'is_default': false,
       'name': '1 - Don\'t Test',
       'priority': 1,
       'short_name': '1 - Don\'t'
     },
     {
       'id': 4,
       'is_default': true,
       'name': '4 - Must Test',
       'priority': 4,
       'short_name': '4 - Must'
     }
   ]);


  it('Get all', function (done) {
    testrail.getPriorities(function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });
});
