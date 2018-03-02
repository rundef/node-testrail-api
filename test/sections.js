var Testrail = require('../index');

var expect = require('chai').expect;
var nock = require('nock');

describe('sections api', function() {
  var testrail = new Testrail({
    host: 'https://rundef.testrail.com',
    user: 'username',
    password: 'password'
  });

  nock('https://rundef.testrail.com')
   .persist()
   .get(testrail.uri + 'get_section/1')
   .reply(200, {
     'depth': 0,
     'description': null,
     'display_order': 1,
     'id': 1,
     'name': 'Prerequisites',
     'parent_id': null,
     'suite_id': 1
   });


  nock('https://rundef.testrail.com')
   .persist()
   .get(testrail.uri + 'get_sections/1')
   .reply(200, [
     {
       'depth': 0,
       'display_order': 1,
       'id': 1,
       'name': 'Prerequisites',
       'parent_id': null,
       'suite_id': 1
     },
     {
       'depth': 0,
       'display_order': 2,
       'id': 2,
       'name': 'Documentation & Help',
       'parent_id': null,
       'suite_id': 1
     },
     {
       'depth': 1, // A child section
       'display_order': 3,
       'id': 3,
       'name': 'Licensing & Terms',
       'parent_id': 2, // Points to the parent section
       'suite_id': 1
     }
   ]);

  nock('https://rundef.testrail.com')
   .get(testrail.uri + 'get_sections/1&suite_id=2')
   .reply(200, [
     {
       'depth': 0,
       'display_order': 1,
       'id': 1,
       'name': 'Prerequisites',
       'parent_id': null,
       'suite_id': 1
     }
   ]);

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'add_section/1')
   .reply(200, {
     'depth': 0,
     'description': null,
     'display_order': 1,
     'id': 1,
     'name': 'Prerequisites',
     'parent_id': null,
     'suite_id': 1
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'update_section/1')
   .reply(200, {
     'depth': 0,
     'description': null,
     'display_order': 1,
     'id': 1,
     'name': 'Prerequisites',
     'parent_id': null,
     'suite_id': 1
   });

  nock('https://rundef.testrail.com')
   .post(testrail.uri + 'delete_section/1')
   .reply(200, {
     'success': true
   });


  it('Get one', function (done) {
    testrail.getSection(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });

  it('Get one (Promise)', function (done) {
    testrail.getSection(1).then(function (result) {
      expect(result).to.be.an.object;
      expect(result.body).to.be.an.object;
      done();
    }).catch(done);
  });

  it('Get all', function (done) {
    testrail.getSections(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });

  it('Get all (Promise)', function (done) {
    testrail.getSections(1).then(function (result) {
      expect(result.body).to.be.an.array;
      done();
    }).catch(done);
  });


  it('Get all - filtered', function (done) {
    testrail.getSections(1, { suite_id: 2 }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.array;
      done();
    });
  });


  it('Add', function (done) {
    testrail.addSection(1, { 'suite_id': 5, 'name': 'This is a new section', 'parent_id': 10 }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Update', function (done) {
    testrail.updateSection(1, { 'suite_id': 5, 'name': 'This is a new section', 'parent_id': 10 }, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });


  it('Delete', function (done) {
    testrail.deleteSection(1, function (err, response, body) {
      expect(err).to.be.null;
      expect(response).to.be.an.object;
      expect(body).to.be.an.object;
      done();
    });
  });
});
