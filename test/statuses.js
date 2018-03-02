var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('statuses api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });


  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_statuses')
   .reply(200, [
     {
       'color_bright': 12709313,
       'color_dark': 6667107,
       'color_medium': 9820525,
       'id': 1,
       'is_final': true,
       'is_system': true,
       'is_untested': false,
       'label': 'Passed',
       'name': 'passed'
     },
     {
       'color_bright': 16631751,
       'color_dark': 14250867,
       'color_medium': 15829135,
       'id': 5,
       'is_final': true,
       'is_system': true,
       'is_untested': false,
       'label': 'Failed',
       'name': 'failed'
     },
     {
       'color_bright': 13684944,
       'color_dark': 0,
       'color_medium': 10526880,
       'id': 6,
       'is_final': false,
       'is_system': false,
       'is_untested': false,
       'label': 'Custom',
       'name': 'custom_status1'
     }
   ]);


  it('Get all', function (done) {
    testrail.getStatuses(function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });
});
