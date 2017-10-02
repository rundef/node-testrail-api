# testrail-api

[![npm version](https://badge.fury.io/js/testrail-api.svg)](http://badge.fury.io/js/testrail-api) 
[![Travis](https://travis-ci.org/rundef/node-testrail-api.svg?branch=master)](https://travis-ci.org/rundef/node-testrail-api?branch=master) 
[![Coverage Status](https://coveralls.io/repos/github/rundef/node-testrail-api/badge.svg?branch=master)](https://coveralls.io/github/rundef/node-testrail-api?branch=master)

> An API wrapper for TestRail with error handling and unit testing.

The TestRail API is [described here](http://docs.gurock.com/testrail-api2/start).

## Usage

First, you will have to initialize the API wrapper :

```javascript
var Testrail = require('testrail-api');

var testrail = new Testrail({
  host: 'https://rundef.testrail.com', 
  user: 'username', 
  password: 'password or api key'
});
```

### Cases

> List cases

```javascript
testrail.getCases(/*PROJECT_ID=*/1, /*FILTERS=*/{ suite_id: 3, section_id: 4 }, function (err, cases) {
  console.log(cases);
});
```

You can also use Promises with all the functions:

```javascript
testrail.getCases(1).then(function (cases)
  console.log(cases);
}).catch(function (err) {
  console.log('error', err);
});
```

> Get a case

```javascript
testrail.getCase(/*CASE_ID=*/1, function (err, testcase) {
  console.log(testcase);
});
```

> Add a case

```javascript
testrail.addCase(/*SECTION_ID=*/1, /*CONTENT=*/{}, function (err, testcase) {
  console.log(testcase);
});
```

> Update a case

```javascript
testrail.updateCase(/*CASE_ID=*/1, /*CONTENT=*/{}, function (err, testcase) {
  console.log(testcase);
});
```

> Delete a case

```javascript
testrail.deleteCase(/*CASE_ID=*/1, function (err, response) {
  console.log(response);
});
```

### Case Fields

> List case fields

```javascript
testrail.getCaseFields(function (err, caseFields) {
  console.log(caseFields);
});
```

### Case Types

> List case types

```javascript
testrail.getCaseTypes(function (err, caseTypes) {
  console.log(caseTypes);
});
```

### Configurations

> List configurations

```javascript
testrail.getConfigs(/*PROJECT_ID=*/1, function (err, configs) {
  console.log(configs);
});
```

> Add a configuration group

```javascript
testrail.addConfigGroup(/*PROJECT_ID=*/1, /*CONTENT=*/{}, function (err, config_group) {
  console.log(config_group);
});
```

> Add a configuration

```javascript
testrail.addConfig(/*CONFIGURATION_GROUP_ID=*/1, /*CONTENT=*/{}, function (err, config) {
  console.log(config);
});
```

> Update a configuration group

```javascript
testrail.updateConfigGroup(/*CONFIGURATION_GROUP_ID=*/1, /*CONTENT=*/{}, function (err, config_group) {
  console.log(config_group);
});
```

> Update a configuration

```javascript
testrail.updateConfig(/*CONFIGURATION_ID=*/1, /*CONTENT=*/{}, function (err, config) {
  console.log(config);
});
```

> Delete a configuration group

```javascript
testrail.deleteConfigurationGroup(/*CONFIGURATION_GROUP_ID=*/1, function (err, response) {
  console.log(response);
});
```

> Delete a configuration

```javascript
testrail.deleteConfig(/*CONFIGURATION_ID=*/1, function (err, response) {
  console.log(response);
});
```

### Milestones

> List milestones

```javascript
testrail.getMilestones(/*PROJECT_ID=*/1, /*FILTERS=*/{}, function (err, milestones) {
  console.log(milestones);
});
```

> Get a milestone

```javascript
testrail.getMilestone(/*MILESTONE_ID=*/1, function (err, milestone) {
  console.log(milestone);
});
```

> Add a milestone

```javascript
testrail.addMilestone(/*PROJECT_ID=*/1, /*CONTENT=*/{}, function (err, milestone) {
  console.log(milestone);
});
```

> Update a milestone

```javascript
testrail.updateMilestone(/*MILESTONE_ID=*/1, /*CONTENT=*/{}, function (err, milestone) {
  console.log(milestone);
});
```

> Delete a milestone

```javascript
testrail.deleteMilestone(/*MILESTONE_ID=*/1, function (err, response) {
  console.log(response);
});
```

### Plans

> List plans

```javascript
testrail.getPlans(/*PROJECT_ID=*/1, /*FILTERS=*/{}, function (err, plans) {
  console.log(plans);
});
```

> Get a plan

```javascript
testrail.getPlan(/*PLAN_ID=*/1, function (err, plan) {
  console.log(plan);
});
```

> Add a plan

```javascript
testrail.addPlan(/*PROJECT_ID=*/1, /*CONTENT=*/{}, function (err, plan) {
  console.log(plan);
});
```

> Add a plan entry

```javascript
testrail.addPlanEntry(/*PLAN_ID=*/1, /*CONTENT=*/{}, function (err, plan_entry) {
  console.log(plan_entry);
});
```

> Update a plan

```javascript
testrail.updatePlan(/*PLAN_ID=*/1, /*CONTENT=*/{}, function (err, plan) {
  console.log(plan);
});
```

> Update a plan entry

```javascript
testrail.updatePlanEntry(/*PLAN_ID=*/1, /*PLAN_ENTRY_ID=*/2, /*CONTENT=*/{}, function (err, plan_entry) {
  console.log(plan_entry);
});
```

> Close a plan

```javascript
testrail.closePlan(/*PLAN_ID=*/1, function (err, plan) {
  console.log(plan);
});
```

> Delete a plan

```javascript
testrail.deletePlan(/*PLAN_ID=*/1, function (err, response) {
  console.log(response);
});
```

> Delete a plan entry

```javascript
testrail.deletePlanEntry(/*PLAN_ID=*/1, /*PLAN_ENTRY_ID=*/2, function (err, response) {
  console.log(response);
});
```

### Priorities

```javascript
testrail.getPriorities(function (err, priorities) {
  console.log(priorities);
});
```

### Projects

> List projects

```javascript
testrail.getProjects(/*FILTERS=*/{}, function (err, projects) {
  console.log(projects);
});
```

> Get a project

```javascript
testrail.getProject(/*PROJECT_ID=*/1, function (err, project) {
  console.log(project);
});
```

> Add a project

```javascript
testrail.addProject(/*CONTENT=*/{}, function (err, project) {
  console.log(project);
});
```

> Update a project

```javascript
testrail.updateProject(/*PROJECT_ID=*/1, /*CONTENT=*/{}, function (err, project) {
  console.log(project);
});
```

> Delete a project

```javascript
testrail.deleteProject(/*PROJECT_ID=*/1, function (err, response) {
  console.log(response);
});
```

### Results

> Get results

```javascript
testrail.getResults(/*TEST_ID=*/1, /*FILTERS=*/{}, function (err, results) {
  console.log(results);
});
```

> Get results for case

```javascript
testrail.getResultsForCase(/*RUN_ID=*/1, /*CASE_ID=*/2, /*FILTERS=*/{}, function (err, results) {
  console.log(results);
});
```

> Get results for run

```javascript
testrail.getResultsForRun(/*RUN_ID=*/1, /*FILTERS=*/{}, function (err, results) {
  console.log(results);
});
```

> Add a result

```javascript
testrail.addResult(/*TEST_ID=*/1, /*CONTENT=*/{}, function (err, result) {
  console.log(result);
});
```

> Add a result for case

```javascript
testrail.addResultForCase(/*RUN_ID=*/1, /*CASE_ID=*/2, /*CONTENT=*/{}, function (err, result) {
  console.log(result);
});
```

> Add results

```javascript
testrail.addResults(/*RUN_ID=*/1, /*CONTENT=*/{}, function (err, results) {
  console.log(results);
});
```

> Add results for cases

```javascript
testrail.addResultsForCases(/*RUN_ID=*/1, /*CONTENT=*/{}, function (err, results) {
  console.log(results);
});
```

### Result Fields

```javascript
testrail.getResultFields(function (err, resultFields) {
  console.log(resultFields);
});
```

### Runs

> List runs

```javascript
testrail.getRuns(/*PROJECT_ID=*/1, /*FILTERS=*/{}, function (err, runs) {
  console.log(runs);
});
```

> Get a run

```javascript
testrail.getRun(/*RUN_ID=*/1, function (err, run) {
  console.log(run);
});
```

> Add a run

```javascript
testrail.addRun(/*PROJECT_ID=*/1, /*CONTENT=*/{}, function (err, run) {
  console.log(run);
});
```

> Update a run

```javascript
testrail.updateRun(/*RUN_ID=*/1, /*CONTENT=*/{}, function (err, run) {
  console.log(run);
});
```

> Delete a run

```javascript
testrail.deleteRun(/*RUN_ID=*/1, function (err, response) {
  console.log(response);
});
```

### Sections

> List sections

```javascript
testrail.getSections(/*PROJECT_ID=*/1, /*FILTERS=*/{}, function (err, sections) {
  console.log(sections);
});
```

> Get a section

```javascript
testrail.getSection(/*SECTION_ID=*/1, function (err, section) {
  console.log(section);
});
```

> Add a section

```javascript
testrail.addSection(/*PROJECT_ID=*/1, /*CONTENT=*/{}, function (err, section) {
  console.log(section);
});
```

> Update a section

```javascript
testrail.updateSection(/*SECTION_ID=*/1, /*CONTENT=*/{}, function (err, section) {
  console.log(section);
});
```

> Delete a section

```javascript
testrail.deleteSection(/*SECTION_ID=*/1, function (err, response) {
  console.log(response);
});
```

### Statuses

```javascript
testrail.getStatuses(function (err, statuses) {
  console.log(statuses);
});
```

### Suites

> List suites

```javascript
testrail.getSuites(/*PROJECT_ID=*/1, function (err, suites) {
  console.log(suites);
});
```

> Get a suite

```javascript
testrail.getSuite(/*SUITE_ID=*/1, function (err, suite) {
  console.log(suite);
});
```

> Add a suite

```javascript
testrail.addSuite(/*PROJECT_ID=*/1, /*CONTENT=*/{}, function (err, suite) {
  console.log(suite);
});
```

> Update a suite

```javascript
testrail.updateSuite(/*SUITE_ID=*/1, /*CONTENT=*/{}, function (err, suite) {
  console.log(suite);
});
```

> Delete a suite

```javascript
testrail.deleteSuite(/*SUITE_ID=*/1, function (err, response) {
  console.log(response);
});
```

### Templates

```javascript
testrail.getTemplates(/*PROJECT_ID=*/1, function (err, template) {
  console.log(template);
});
```

### Tests

> List tests

```javascript
testrail.getTests(/*RUN_ID=*/1, /*FILTERS=*/{}, function (err, tests) {
  console.log(tests);
});
```

> Get a test

```javascript
testrail.getTest(/*TEST_ID=*/1, function (err, test) {
  console.log(test);
});
```

### Users

> List users

```javascript
testrail.getUsers(/*FILTERS=*/{}, function (err, users) {
  console.log(users);
});
```

> Get a user

```javascript
testrail.getUser(/*USER_ID=*/1, function (err, user) {
  console.log(user);
});
```

> Get a user by email

```javascript
testrail.getUserByEmail(/*EMAIL=*/'test@gmail.com', function (err, user) {
  console.log(user);
});
```
