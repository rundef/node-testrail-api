export class TestrailApi {
    constructor(config: any);

    getCase(id: number, callback?: Function): any;
    getCases(project_id: number, filters?: any, callback?: Function): any;
    addCase(section_id: number, data: any, callback?: Function): any;
    updateCase(case_id: number, data: any, callback?: Function): any;
    deleteCase(case_id: number, callback?: Function): any;
    getCaseFields(callback?: Function): any;
    getCaseTypes(callback?: Function): any;

    getConfigs(project_id: number, callback?: Function): any;
    addConfigGroup(project_id: number, data: any, callback?: Function): any;
    addConfig(config_group_id: number, data: any, callback?: Function): any;
    updateConfigGroup(config_group_id: number, data: any, callback?: Function): any;
    updateConfig(config_id: number, data: any, callback?: Function): any;
    deleteConfigGroup(config_group_id: number, callback?: Function): any;
    deleteConfig(config_id: number, callback?: Function): any;

    getMilestone(id: number, callback?: Function): any;
    getMilestones(project_id: number, filters?: any, callback?: Function): any;
    addMilestone(project_id: number, data: any, callback?: Function): any;
    updateMilestone(milestone_id: number, data: any, callback?: Function): any;
    deleteMilestone(milestone_id: number, callback?: Function): any;

    getPlan(id: number, callback?: Function): any;
    getPlans(project_id: number, filters?: any, callback?: Function): any;
    addPlan(project_id: number, data: any, callback?: Function): any;
    addPlanEntry(plan_id: number, data: any, callback?: Function): any;
    updatePlan(plan_id: number, data: any, callback?: Function): any;
    updatePlanEntry(plan_id: number, entry_id: number, data: any, callback?: Function): any;
    closePlan(plan_id: number, callback?: Function): any;
    deletePlan(plan_id: number, callback?: Function): any;
    deletePlanEntry(plan_id: number, entry_id: number, callback?: Function): any;

    getPriorities(callback?: Function): any;
    getProject(id: number, callback?: Function): any;
    getProjects(filters?: any, callback?: Function): any;
    addProject(data: any, callback?: Function): any;
    updateProject(project_id: number, data: any, callback?: Function): any;
    deleteProject(project_id: number, callback?: Function): any;

    getResults(test_id: number, filters?: any, callback?: Function): any;
    getResultsForCase(run_id: number, case_id: number, filters?: any, callback?: Function): any;
    getResultsForRun(run_id: number, filters?: any, callback?: Function): any;

    addResult(test_id: number, data: any, callback?: Function): any;
    addResultForCase(run_id: number, case_id: number, data: any, callback?: Function): any;
    addResults(run_id: number, data: any, callback?: Function): any;
    addResultsForCases(run_id: number, data: any, callback?: Function): any;
    getResultFields(callback?: Function): any;

    getRun(id: number, callback?: Function): any;
    getRuns(project_id: number, filters?: any, callback?: Function): any;
    addRun(project_id: number, data: any, callback?: Function): any;
    updateRun(run_id: number, data: any, callback?: Function): any;
    closeRun(run_id: number, callback?: Function): any;
    deleteRun(run_id: number, callback?: Function): any;

    getSection(id: number, callback?: Function): any;
    getSections(project_id: number, filters?: any, callback?: Function): any;
    addSection(project_id: number, data: any, callback?: Function): any;
    updateSection(section_id: number, data: any, callback?: Function): any;
    deleteSection(section_id: number, callback?: Function): any;

    getStatuses(callback?: Function): any;
    getSuite(id: number, callback?: Function): any;
    getSuites(project_id: number, callback?: Function): any;
    addSuite(project_id: number, data: any, callback?: Function): any;
    updateSuite(suite_id: number, data: any, callback?: Function): any;
    deleteSuite(suite_id: number, callback?: Function): any;
    getTemplates(project_id: number, callback?: Function): any;

    getTest(id: number, callback?: Function): any;
    getTests(run_id: number, filters?: any, callback?: Function): any;
    getUser(id: number, callback?: Function): any;
    getUserByEmail(email: string, callback?: Function): any;
    getUsers(callback?: Function): any;
}
