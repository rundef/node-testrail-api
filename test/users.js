var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('users api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_user/1')
   .reply(200, {
     'email': 'alexis@example.com',
     'id': 1,
     'is_active': true,
     'name': 'Alexis Gonzalez'
   });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_user/2')
   .reply(400, {
     error: 'Field :user is not a valid user.'
   });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_user_by_email&email='+encodeURIComponent('alexis@example.com'))
   .reply(200, {
     'email': 'alexis@example.com',
     'id': 1,
     'is_active': true,
     'name': 'Alexis Gonzalez'
   });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_users')
   .reply(200, [
      { 'id': 1, 'name': 'Alexis Gonzalez' },
      { 'id': 2, 'name': 'Ciaran Davenport' }
   ]);




  it('Get one', function (done) {
    testrail.getUser(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Get one - not found', function (done) {
    testrail.getUser(2, function (err, response, body) {
      expect(err).to.not.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Get one by email', function (done) {
    testrail.getUserByEmail('alexis@example.com', function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Get all', function (done) {
    testrail.getUsers(function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });
});
