var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('Users api', function() {
  var testrail = new Testrail('https://rundef.testrail.com', 'username', 'password');

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_users')
   .reply(200, [
      { "id": 1, "name": "Alexis Gonzalez" },
      { "id": 2, "name": "Ciaran Davenport" },
    ]);
/*
  it('Get one', function (done) {
    testrail.getUser(1, function (err, user) {
      expect(err).to.be.null;
      expect(user).to.be.an.object;
      done();
    });
  });


  it('Get by email', function (done) {
    testrail.getUser(1, function (err, user) {
      expect(err).to.be.null;
      expect(user).to.be.an.object;
      done();
    });
  });
*/
  it('Get all - success', function (done) {
    testrail.getUsers(function (err, users) {
      expect(err).to.be.null;
      expect(users).to.be.an.array;
      done();
    });
  });
});
