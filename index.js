var request = require('request');
var qs = require('querystring');
var Promise = require('bluebird');


// ----- API Reference: http://docs.gurock.com/testrail-api2/start -----

function TestRail(options) {
  this.host = options.host;
  this.user = options.user;
  this.password = options.password;

  this.uri = '/index.php?/api/v2/';
}

TestRail.prototype.apiGet = function (apiMethod, queryVariables, callback) {
  var url = this.host + this.uri + apiMethod;

  if(typeof queryVariables == 'function') {
    callback = queryVariables;
    queryVariables = null;
  }

  return this._callAPI('get', url, queryVariables, null, callback);
};

TestRail.prototype.apiPost = function (apiMethod, body, queryVariables, callback) {
  var url = this.host + this.uri + apiMethod;

  if(typeof body == 'function') {
    callback = body;
    queryVariables = body = null;
  }
  else if(typeof queryVariables == 'function') {
    callback = queryVariables;
    queryVariables = null;
  }

  return this._callAPI('post', url, queryVariables, body, callback);
};

TestRail.prototype._callAPI = function (method, url, queryVariables, body, callback) {
  if(queryVariables != null) {
    url += '&' + qs.stringify(queryVariables);
  }

  var requestArguments = {
    uri: url,
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    rejectUnauthorized: false
  };

  if(body != null) {
    requestArguments.body = body;
  }

  if (typeof callback === 'function') {
    return request[method](requestArguments, function(err, res, body) {
      if(err) {
        return callback(err);
      }
      var responseBody = body === '' ? JSON.stringify({}) : body;
      if(res.statusCode != 200) {
        var errData = body;
        try {
          errData = JSON.parse(body);
        } catch (err) {
          return callback(err.message || err);
        }
        return callback(errData, res);
      }
      return callback(null, res, JSON.parse(responseBody));
    }).auth(this.user, this.password, true);
  }
  else {
    return new Promise(function (resolve, reject) {
      return request[method](requestArguments, function(err, res, body) {
        if(err) {
          return reject(err);
        }
        var responseBody = body === '' ? JSON.stringify({}) : body;
        if(res.statusCode != 200) {
          var errData = body;
          try {
            errData = JSON.parse(body);
          } catch (err) {
            return callback(err.message || err);
          }
          return reject({ message: errData, response: res });
        }
        return resolve({ response: res, body: JSON.parse(responseBody) });
      }).auth(this.user, this.password, true);
    }.bind(this));
  }
};



// ----- Cases -----

TestRail.prototype.getCase = function (id, callback) {
  return this.apiGet('get_case/' + id, callback);
};

TestRail.prototype.getCases = function (project_id, filters, callback) {
  var uri = 'get_cases/' + project_id;

  if(typeof filters == 'function') {
    callback = filters;
    return this.apiGet(uri, callback);
  }
  else {
    return this.apiGet(uri, filters, callback);
  }
};

TestRail.prototype.addCase = function (section_id, data, callback) {
  return this.apiPost('add_case/' + section_id, JSON.stringify(data), callback);
};

TestRail.prototype.updateCase = function (case_id, data, callback) {
  return this.apiPost('update_case/' + case_id, JSON.stringify(data), callback);
};

TestRail.prototype.deleteCase = function (case_id, callback) {
  return this.apiPost('delete_case/' + case_id, callback);
};

// ----- Case Fields -----

TestRail.prototype.getCaseFields = function (callback) {
  return this.apiGet('get_case_fields', callback);
};

// ----- Case Types -----

TestRail.prototype.getCaseTypes = function (callback) {
  return this.apiGet('get_case_types', callback);
};

// ----- Configurations -----

TestRail.prototype.getConfigs = function (project_id, callback) {
  return this.apiGet('get_configs/' + project_id, callback);
};

TestRail.prototype.addConfigGroup = function (project_id, data, callback) {
  return this.apiPost('add_config_group/' + project_id, JSON.stringify(data), callback);
};

TestRail.prototype.addConfig = function (config_group_id, data, callback) {
  return this.apiPost('add_config/' + config_group_id, JSON.stringify(data), callback);
};

TestRail.prototype.updateConfigGroup = function (config_group_id, data, callback) {
  return this.apiPost('update_config_group/' + config_group_id, JSON.stringify(data), callback);
};

TestRail.prototype.updateConfig = function (config_id, data, callback) {
  return this.apiPost('update_config/' + config_id, JSON.stringify(data), callback);
};

TestRail.prototype.deleteConfigGroup = function (config_group_id, callback) {
  return this.apiPost('delete_config_group/' + config_group_id, callback);
};

TestRail.prototype.deleteConfig = function (config_id, callback) {
  return this.apiPost('delete_config/' + config_id, callback);
};

// ----- Milestones -----

TestRail.prototype.getMilestone = function (id, callback) {
  return this.apiGet('get_milestone/' + id, callback);
};

TestRail.prototype.getMilestones = function (project_id, filters, callback) {
  var uri = 'get_milestones/' + project_id;

  if(typeof filters == 'function') {
    callback = filters;
    return this.apiGet(uri, callback);
  }
  else {
    return this.apiGet(uri, filters, callback);
  }
};

TestRail.prototype.addMilestone = function (project_id, data, callback) {
  return this.apiPost('add_milestone/' + project_id, JSON.stringify(data), callback);
};

TestRail.prototype.updateMilestone = function (milestone_id, data, callback) {
  return this.apiPost('update_milestone/' + milestone_id, JSON.stringify(data), callback);
};

TestRail.prototype.deleteMilestone = function (milestone_id, callback) {
  return this.apiPost('delete_milestone/' + milestone_id, callback);
};

// ----- Plans -----

TestRail.prototype.getPlan = function (id, callback) {
  return this.apiGet('get_plan/' + id, callback);
};

TestRail.prototype.getPlans = function (project_id, filters, callback) {
  var uri = 'get_plans/' + project_id;

  if(typeof filters == 'function') {
    callback = filters;
    return this.apiGet(uri, callback);
  }
  else {
    return this.apiGet(uri, filters, callback);
  }
};

TestRail.prototype.addPlan = function (project_id, data, callback) {
  return this.apiPost('add_plan/' + project_id, JSON.stringify(data), callback);
};

TestRail.prototype.addPlanEntry = function (plan_id, data, callback) {
  return this.apiPost('add_plan_entry/' + plan_id, JSON.stringify(data), callback);
};

TestRail.prototype.updatePlan = function (plan_id, data, callback) {
  return this.apiPost('update_plan/' + plan_id, JSON.stringify(data), callback);
};

TestRail.prototype.updatePlanEntry = function (plan_id, entry_id, data, callback) {
  return this.apiPost('update_plan_entry/' + plan_id + '/' + entry_id, JSON.stringify(data), callback);
};

TestRail.prototype.closePlan = function (plan_id, callback) {
  return this.apiPost('close_plan/' + plan_id, callback);
};

TestRail.prototype.deletePlan = function (plan_id, callback) {
  return this.apiPost('delete_plan/' + plan_id, callback);
};

TestRail.prototype.deletePlanEntry = function (plan_id, entry_id, callback) {
  return this.apiPost('delete_plan_entry/' + plan_id + '/' + entry_id, callback);
};

// ----- Priorities -----

TestRail.prototype.getPriorities = function (callback) {
  return this.apiGet('get_priorities', callback);
};

// ----- Projects -----

TestRail.prototype.getProject = function (id, callback) {
  return this.apiGet('get_project/' + id, callback);
};

TestRail.prototype.getProjects = function (filters, callback) {
  var uri = 'get_projects';

  if(typeof filters == 'function') {
    callback = filters;
    return this.apiGet(uri, callback);
  }
  else {
    return this.apiGet(uri, filters, callback);
  }
};

TestRail.prototype.addProject = function (data, callback) {
  return this.apiPost('add_project', JSON.stringify(data), callback);
};

TestRail.prototype.updateProject = function (project_id, data, callback) {
  return this.apiPost('update_project/' + project_id, JSON.stringify(data), callback);
};

TestRail.prototype.deleteProject = function (project_id, callback) {
  return this.apiPost('delete_project/' + project_id, callback);
};

// ----- Results -----

TestRail.prototype.getResults = function (test_id, filters, callback) {
  var uri = 'get_results/' + test_id;

  if(typeof filters == 'function') {
    callback = filters;
    return this.apiGet(uri, callback);
  }
  else {
    return this.apiGet(uri, filters, callback);
  }
};

TestRail.prototype.getResultsForCase = function (run_id, case_id, filters, callback) {
  var uri = 'get_results_for_case/' + run_id + '/' + case_id;

  if(typeof filters == 'function') {
    callback = filters;
    return this.apiGet(uri, callback);
  }
  else {
    return this.apiGet(uri, filters, callback);
  }
};

TestRail.prototype.getResultsForRun = function (run_id, filters, callback) {
  var uri = 'get_results_for_run/' + run_id;

  if(typeof filters == 'function') {
    callback = filters;
    return this.apiGet(uri, callback);
  }
  else {
    return this.apiGet(uri, filters, callback);
  }
};

TestRail.prototype.addResult = function (test_id, data, callback) {
  return this.apiPost('add_result/' + test_id, JSON.stringify(data), callback);
};

TestRail.prototype.addResultForCase = function (run_id, case_id, data, callback) {
  return this.apiPost('add_result_for_case/' + run_id + '/' + case_id, JSON.stringify(data), callback);
};

TestRail.prototype.addResults = function (run_id, data, callback) {
  return this.apiPost('add_results/' + run_id, JSON.stringify({ results: data }), callback);
};

TestRail.prototype.addResultsForCases = function (run_id, data, callback) {
  return this.apiPost('add_results_for_cases/' + run_id, JSON.stringify({ results: data }), callback);
};

// ----- Result Fields -----

TestRail.prototype.getResultFields = function (callback) {
  return this.apiGet('get_result_fields', callback);
};

// ----- Runs -----

TestRail.prototype.getRun = function (id, callback) {
  return this.apiGet('get_run/' + id, callback);
};

TestRail.prototype.getRuns = function (project_id, filters, callback) {
  var uri = 'get_runs/' + project_id;

  if(typeof filters == 'function') {
    callback = filters;
    return this.apiGet(uri, callback);
  }
  else {
    return this.apiGet(uri, filters, callback);
  }
};

TestRail.prototype.addRun = function (project_id, data, callback) {
  return this.apiPost('add_run/' + project_id, JSON.stringify(data), callback);
};

TestRail.prototype.updateRun = function (run_id, data, callback) {
  return this.apiPost('update_run/' + run_id, JSON.stringify(data), callback);
};

TestRail.prototype.closeRun = function (run_id, callback) {
  return this.apiPost('close_run/' + run_id, callback);
};

TestRail.prototype.deleteRun = function (run_id, callback) {
  return this.apiPost('delete_run/' + run_id, callback);
};

// ----- Sections -----

TestRail.prototype.getSection = function (id, callback) {
  return this.apiGet('get_section/' + id, callback);
};

TestRail.prototype.getSections = function (project_id, filters, callback) {
  var uri = 'get_sections/' + project_id;

  if(typeof filters == 'function') {
    callback = filters;
    return this.apiGet(uri, callback);
  }
  else {
    return this.apiGet(uri, filters, callback);
  }
};

TestRail.prototype.addSection = function (project_id, data, callback) {
  return this.apiPost('add_section/' + project_id, JSON.stringify(data), callback);
};

TestRail.prototype.updateSection = function (section_id, data, callback) {
  return this.apiPost('update_section/' + section_id, JSON.stringify(data), callback);
};

TestRail.prototype.deleteSection = function (section_id, callback) {
  return this.apiPost('delete_section/' + section_id, callback);
};

// ----- Statuses -----

TestRail.prototype.getStatuses = function (callback) {
  return this.apiGet('get_statuses', callback);
};

// ----- Suites -----

TestRail.prototype.getSuite = function (id, callback) {
  return this.apiGet('get_suite/' + id, callback);
};

TestRail.prototype.getSuites = function (project_id, callback) {
  return this.apiGet('get_suites/' + project_id, callback);
};

TestRail.prototype.addSuite = function (project_id, data, callback) {
  return this.apiPost('add_suite/' + project_id, JSON.stringify(data), callback);
};

TestRail.prototype.updateSuite = function (suite_id, data, callback) {
  return this.apiPost('update_suite/' + suite_id, JSON.stringify(data), callback);
};

TestRail.prototype.deleteSuite = function (suite_id, callback) {
  return this.apiPost('delete_suite/' + suite_id, callback);
};

// ----- Templates -----

TestRail.prototype.getTemplates = function (project_id, callback) {
  return this.apiGet('get_templates/' + project_id, callback);
};

// ----- Tests -----

TestRail.prototype.getTest = function (id, callback) {
  return this.apiGet('get_test/' + id, callback);
};

TestRail.prototype.getTests = function (run_id, filters, callback) {
  var uri = 'get_tests/' + run_id;

  if(typeof filters == 'function') {
    callback = filters;
    return this.apiGet(uri, callback);
  }
  else {
    return this.apiGet(uri, filters, callback);
  }
};

// ----- Users -----

TestRail.prototype.getUser = function (id, callback) {
  return this.apiGet('get_user/' + id, callback);
};

TestRail.prototype.getUserByEmail = function (email, callback) {
  return this.apiGet('get_user_by_email', {email: email}, callback);
};

TestRail.prototype.getUsers = function (callback) {
  return this.apiGet('get_users', callback);
};

// ----------


module.exports = TestRail;
