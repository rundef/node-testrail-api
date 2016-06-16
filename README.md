## testrail-api

[![npm version](https://badge.fury.io/js/testrail-api.svg)](http://badge.fury.io/js/testrail-api) 
[![Coverage Status](https://coveralls.io/repos/rundef/uniquefilename/badge.svg?branch=master&service=github)](https://coveralls.io/github/rundef/uniquefilename?branch=master)

> An API wrapper for TestRail, similar to [node-testrail](https://www.npmjs.com/package/node-testrail) - but with error handling and unit testing.

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

todo

#### Case Fields

```javascript
testrail.getCaseFields(function (err, caseFields) {
  console.log(caseFields);
});
```

#### Case Types

```javascript
testrail.getCaseTypes(function (err, caseTypes) {
  console.log(caseTypes);
});
```

#### Configurations

todo

#### Milestones

todo

#### Plans

todo

#### Priorities

```javascript
testrail.getPriorities(function (err, priorities) {
  console.log(priorities);
});
```

#### Projects

todo

#### Results

todo

#### Result Fields

```javascript
testrail.getResultFields(function (err, resultFields) {
  console.log(resultFields);
});
```

#### Runs

todo

#### Sections

todo

#### Statuses

```javascript
testrail.getStatuses(function (err, statuses) {
  console.log(statuses);
});
```

#### Suites

todo

#### Templates

```javascript
testrail.getTemplates(/*PROJECT_ID=*/1, function (err, template) {
  console.log(template);
});
```

#### Tests

todo

#### Users

todo

