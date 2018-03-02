var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('case_fields api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });


  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_case_fields')
   .reply(200, [
     {
       'configs': [
         {
           'context': {
             'is_global': true,
             'project_ids': null
           },
           'id': '..',
           'options': {
             'default_value': '',
             'format': 'markdown',
             'is_required': false,
             'rows': '5'
           }
         }
       ],
       'description': 'The preconditions of this test case. ..',
       'display_order': 1,
       'id': 1,
       'label': 'Preconditions',
       'name': 'preconds',
       'system_name': 'custom_preconds',
       'type_id': 3
     }
   ]);


  it('Get all', function (done) {
    testrail.getCaseFields(function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });
});
