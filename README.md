## testrail-api

[![npm version](https://badge.fury.io/js/testrail-api.svg)](http://badge.fury.io/js/testrail-api) 
[![Travis](https://travis-ci.org/rundef/node-testrail-api.svg?branch=master)](https://travis-ci.org/rundef/node-testrail-api?branch=master) 
[![Coverage Status](https://coveralls.io/repos/github/rundef/node-testrail-api/badge.svg?branch=master)](https://coveralls.io/github/rundef/node-testrail-api?branch=master)

> An API wrapper for TestRail, similar to [node-testrail](https://www.npmjs.com/package/node-testrail) - but with error handling and unit testing.

The TestRail API is [described here](http://docs.gurock.com/testrail-api2/start).

### Usage

First, you will have to initialize the API wrapper :

```javascript
var Testrail = require('testrail-api');

var testrail = new Testrail({
  host: 'https://rundef.testrail.com', 
  user: 'username', 
  password: 'password'
});
```

#### Cases

> List cases

```javascript
testrail.getCases(/*PROJECT_ID=*/1, /*FILTERS=*/{}, function (err, cases) {
  console.log(cases);
});
```

> Get a case

```javascript
testrail.getCase(/*CASE_ID=*/1, function (err, case) {
  console.log(case);
});
```

> Add a case

```javascript
testrail.addCase(/*SECTION_ID=*/1, /*CONTENT=*/{}, function (err, case) {
  console.log(case);
});
```

> Update a case

```javascript
testrail.updateCase(/*CASE_ID=*/1, /*CONTENT=*/{}, function (err, case) {
  console.log(case);
});
```

> Delete a case

```javascript
testrail.deleteCase(/*CASE_ID=*/1, function (err, response) {
  console.log(response);
});
```

#### Case Fields

> List case fields

```javascript
testrail.getCaseFields(function (err, caseFields) {
  console.log(caseFields);
});
```

#### Case Types

> List case types

```javascript
testrail.getCaseTypes(function (err, caseTypes) {
  console.log(caseTypes);
});
```

#### Configurations

todo

#### Milestones

> List projects

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

#### Plans

todo

#### Priorities

```javascript
testrail.getPriorities(function (err, priorities) {
  console.log(priorities);
});
```

#### Projects

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

#### Results

todo

#### Result Fields

```javascript
testrail.getResultFields(function (err, resultFields) {
  console.log(resultFields);
});
```

#### Runs

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
testrail.addRun(/*RUN_ID=*/1, /*CONTENT=*/{}, function (err, run) {
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

#### Sections

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

#### Statuses

```javascript
testrail.getStatuses(function (err, statuses) {
  console.log(statuses);
});
```

#### Suites

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

#### Templates

```javascript
testrail.getTemplates(/*PROJECT_ID=*/1, function (err, template) {
  console.log(template);
});
```

#### Tests

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

#### Users

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