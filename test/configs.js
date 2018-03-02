var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('configs api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_configs/1')
   .reply(200, [
     {
       'configs': [
         {
           'group_id': 1,
           'id': 1,
           'name': 'Chrome'
         },
         {
           'group_id': 1,
           'id': 2,
           'name': 'Firefox'
         },
         {
           'group_id': 1,
           'id': 3,
           'name': 'Internet Explorer'
         }
       ],
       'id': 1,
       'name': 'Browsers',
       'project_id': 1
     }
   ]);

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_config_group/1')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_config/1')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'update_config_group/1')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'update_config/1')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'delete_config_group/1')
   .reply(200, {
     'success': true
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'delete_config/1')
   .reply(200, {
     'success': true
   });




  it('Get all', function (done) {
    testrail.getConfigs(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Add config group', function (done) {
    testrail.addConfigGroup(1, { 'name': 'Browsers' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Add config', function (done) {
    testrail.addConfig(1, { 'name': 'Chrome' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Update config group', function (done) {
    testrail.updateConfigGroup(1, { 'name': 'Browsers' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Update config', function (done) {
    testrail.updateConfig(1, { 'name': 'Chrome' }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });

  it('Delete config group', function (done) {
    testrail.deleteConfigGroup(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });

  it('Delete config', function (done) {
    testrail.deleteConfig(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });
});
