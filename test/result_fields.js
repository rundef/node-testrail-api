var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('result_fields api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });


  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_result_fields')
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
             'format': 'markdown',
             'has_actual': false,
             'has_expected': true,
             'is_required': false
           }
         }
       ],
       'description': null,
       'display_order': 1,
       'id': 5,
       'label': 'Steps',
       'name': 'step_results',
       'system_name': 'custom_step_results',
       'type_id': 11
     }
   ]);


  it('Get all', function (done) {
    testrail.getResultFields(function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });
});
