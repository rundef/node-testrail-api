import t = TestrailApiClient;

declare class TestrailApiClient {
    constructor(options: {host: string, user: string, password: string});

    getCase<T extends t.ICase>(id: number, callback?: t.Callback<t.ICase>): Promise<t.ICase>;
    getCases<T extends t.ICase>(project_id: number, filters?: t.ICaseFilters, callback?: t.Callback<T[]>): Promise<T[]>;
    addCase<T extends t.ICaseUpdate, U extends t.ICase>(section_id: number, data: T, callback?: t.Callback<U>): Promise<U>;
    updateCase<T extends t.ICaseUpdate, U extends t.ICase>(case_id: number, data: T, callback?: t.Callback<U>): Promise<U>;
    deleteCase(case_id: number, callback?: t.Callback<void>): Promise<void>;

    getCaseFields(callback?: t.Callback<t.ICaseField[]>): Promise<t.ICaseField[]>;
    getCaseTypes(callback?: t.Callback<t.ICaseType[]>): Promise<t.ICaseType[]>;

    getConfigs(project_id: number, callback?: t.Callback<t.IConfigurationGroup>): Promise<t.IConfigurationGroup>;
    addConfigGroup(project_id: number, data: t.IConfigurationUpdate, callback?: t.Callback<t.IConfigurationGroup>): Promise<t.IConfigurationGroup>;
    addConfig(config_group_id: number, data: t.IConfigurationUpdate, callback?: t.Callback<t.IConfiguration>): Promise<t.IConfiguration>;
    updateConfigGroup(config_group_id: number, data: t.IConfigurationUpdate, callback?: t.Callback<t.IConfigurationGroup>): Promise<t.IConfigurationGroup>;
    updateConfig(config_id: number, data: t.IConfigurationUpdate, callback?: t.Callback<t.IConfiguration>): Promise<t.IConfiguration>;
    deleteConfigGroup(config_group_id: number, callback?: t.Callback<void>): Promise<void>;
    deleteConfig(config_id: number, callback?: t.Callback<void>): Promise<void>;

    getMilestone(id: number, callback?: t.Callback<t.IMilestone>): Promise<t.IMilestone>;
    getMilestones(project_id: number, filters?: t.IMilestoneFilters, callback?: t.Callback<t.IMilestone[]>): Promise<t.IMilestone[]>;
    addMilestone(project_id: number, data: t.INewMilestone, callback?: t.Callback<t.IMilestone>): Promise<t.IMilestone>;
    updateMilestone(milestone_id: number, data: t.IMilestoneUpdate, callback?: t.Callback<t.IMilestone>): Promise<t.IMilestone>;
    deleteMilestone(milestone_id: number, callback?: t.Callback<void>): Promise<void>;

    getPlan(id: number, callback?: t.Callback<any>): Promise<any>;
    getPlans(project_id: number, filters?: any, callback?: t.Callback<any>): Promise<any>;
    addPlan(project_id: number, data: any, callback?: t.Callback<any>): Promise<any>;
    addPlanEntry(plan_id: number, data: any, callback?: t.Callback<any>): Promise<any>;
    updatePlan(plan_id: number, data: any, callback?: t.Callback<any>): Promise<any>;
    updatePlanEntry(plan_id: number, entry_id: number, data: any, callback?: t.Callback<any>): Promise<any>;
    closePlan(plan_id: number, callback?: t.Callback<any>): Promise<any>;
    deletePlan(plan_id: number, callback?: t.Callback<void>): Promise<void>;
    deletePlanEntry(plan_id: number, entry_id: number, callback?: t.Callback<void>): Promise<void>;

    getPriorities(callback?: t.Callback<t.IPriority[]>): Promise<t.IPriority[]>;

    getProject(id: number, callback?: t.Callback<t.IProject>): Promise<t.IProject>;
    getProjects(filters?: t.IProjectFilters, callback?: t.Callback<t.IProject[]>): Promise<t.IProject[]>;
    addProject(data: t.IProjectUpdate, callback?: t.Callback<t.IProject>): Promise<t.IProject>;
    updateProject(project_id: number, data: t.IProjectUpdate, callback?: t.Callback<t.IProject>): Promise<t.IProject>;
    deleteProject(project_id: number, callback?: t.Callback<void>): Promise<void>;

    getResults<T extends t.ITestResult>(test_id: number, filters?: t.ITestResultFilters, callback?: t.Callback<T[]>): Promise<T[]>;
    getResultsForCase<T extends t.ITestResult>(run_id: number, case_id: number, filters?: t.ITestResultFilters, callback?: t.Callback<T[]>): Promise<T[]>;
    getResultsForRun<T extends t.ITestResult>(run_id: number, filters?: t.ITestResultsForRunFilters, callback?: t.Callback<T[]>): Promise<T[]>;
    addResult<T extends t.INewTestResult, U extends t.ITestResult>(test_id: number, data: T, callback?: t.Callback<U>): Promise<U>;
    addResultForCase<T extends t.INewTestResult, U extends t.ITestResult>(run_id: number, case_id: number, data: t.INewTestResult, callback?: t.Callback<t.ITestResult>): Promise<t.ITestResult>;
    addResults<T extends t.INewTestResult, U extends t.ITestResult>(run_id: number, data: t.INewTestResults<T>, callback?: t.Callback<U[]>): Promise<U[]>;
    addResultsForCases<T extends t.INewTestResult, U extends t.ITestResult>(run_id: number, data: t.INewTestResults<T>, callback?: t.Callback<U[]>): Promise<U[]>;
    getResultFields(callback?: t.Callback<t.ICaseField[]>): Promise<t.ICaseField[]>;

    getRun(id: number, callback?: t.Callback<t.ITestRun>): Promise<t.ITestRun>;
    getRuns(project_id: number, filters?: any, callback?: t.Callback<t.ITestRun[]>): Promise<t.ITestRun[]>;
    addRun(project_id: number, data: t.INewTestRun, callback?: t.Callback<t.ITestRun>): Promise<t.ITestRun>;
    updateRun(run_id: number, data: t.INewTestRun, callback?: t.Callback<t.ITestRun>): Promise<t.ITestRun>;
    closeRun(run_id: number, callback?: t.Callback<t.ITestRun>): Promise<t.ITestRun>;
    deleteRun(run_id: number, callback?: t.Callback<void>): Promise<void>;

    getSection(id: number, callback?: t.Callback<t.ISection>): Promise<t.ISection>;
    getSections(project_id: number, filters?: any, callback?: t.Callback<t.ISection>): Promise<t.ISection[]>;
    addSection(project_id: number, data: t.INewSection, callback?: t.Callback<t.ISection>): Promise<t.ISection>;
    updateSection(section_id: number, data: t.ISectionUpdate, callback?: t.Callback<t.ISection>): Promise<t.ISection>;
    deleteSection(section_id: number, callback?: t.Callback<void>): Promise<void>;

    getStatuses(callback?: t.Callback<t.ITestStatus[]>): Promise<t.ITestStatus[]>;

    getSuite(id: number, callback?: t.Callback<t.ISuite>): Promise<t.ISuite>;
    getSuites(project_id: number, callback?: t.Callback<t.ISuite[]>): Promise<t.ISuite[]>;
    addSuite(project_id: number, data: t.INewSuite, callback?: t.Callback<t.ISuite>): Promise<t.ISuite>;
    updateSuite(suite_id: number, data: t.INewSuite, callback?: t.Callback<t.ISuite>): Promise<t.ISuite>;
    deleteSuite(suite_id: number, callback?: t.Callback<void>): Promise<void>;

    getTemplates(project_id: number, callback?: t.Callback<t.ITemplate[]>): Promise<t.ITemplate[]>;

    getTest<T extends t.ITest>(id: number, callback?: t.Callback<T>): Promise<T>;
    getTests<T extends t.ITest>(run_id: number, filters: { status_id?: number | number[] }, callback?: t.Callback<T[]>): Promise<T[]>;

    getUser(id: number, callback?: t.Callback<t.ITestrailUser>): Promise<t.ITestrailUser>;
    getUserByEmail(email: string, callback?: t.Callback<t.ITestrailUser>): Promise<t.ITestrailUser>;
    getUsers(callback?: t.Callback<t.ITestrailUser[]>): Promise<t.ITestrailUser[]>;
}

declare namespace TestrailApiClient {
    type CustomFieldType = boolean | string | number | number[] | any[];

    interface ITestResult {
        assignedto_id: number;
        comment: string;
        created_by: number;
        created_on: number;
        defects: string;
        elapsed: number;
        id: number;
        status_id: number;
        test_id: number;
        version: string;

        [key: string]: CustomFieldType;
    }

    interface INewTestResult {
        status_id: number;
        comment?: string;
        version?: string;
        elapsed?: number;
        defects?: string;
        assignedto_id?: number;

        [key: string]: CustomFieldType;
    }

    interface INewTestResults<T extends INewTestResult>{
        results: T[];
    }

    interface ITest {
        id: number;
        case_id: number;
        assignedto_id?: number;
        estimate?: string;
        estimate_forecast?: string;
        milestone_id?: number;
        priority_id?: number;
        refs?: string;
        run_id?: number;
        status_id?: number;
        title?: string;
        type_id?: number;

        [key: string]: CustomFieldType;
    }

    interface ICase {
        created_by?: number;
        created_on?: number;
        estimate?: any;
        estimate_forecast?: any;
        id?: number;
        milestone_id?: number;
        priority_id?: number;
        refs?: string;
        section_id?: number;
        suite_id?: number;
        template_id?: number;
        title?: string;
        type_id?: number;
        updated_by?: number;
        updated_on?: number;

        [key: string]: CustomFieldType;
    }

    interface ICaseField {
        description: string;
        display_order?: number;
        id: number;
        include_all?: boolean;
        is_active?: boolean;
        label?: string;
        name: string;
        system_name: string;
        template_ids?: number[];
        type_id: number;
        configs?: ICaseFieldConfig[];
    }

    interface ICaseType {
        id: number;
        is_default: boolean;
        name: string;
    }

    interface ICaseFieldConfig {
        id: string;
        context: {
            is_global?: boolean;
            project_ids: number[];
        };
        options: {
            items?: string;
            default_value?: string;
            format?: string;
            is_required?: boolean;
            has_actual?: boolean;
            has_expected?: boolean;
            rows?: string;
        };
    }

    interface ISection {
        depth: number;
        description: string;
        display_order: number;
        id: number;
        name: string;
        parent_id: number;
        suite_id: number;
    }

    interface ISectionUpdate {
        description?: string;
        name?: string;
    }

    interface INewSection {
        description?: string;
        suite_id: number;
        parent_id: number;
        name: string;
    }

    interface ICaseUpdate {
        title?: string;
        template_id?: number;
        type_id?: number;
        priority_id?: number;
        estimate?: string;
        milestone_id?: number;
        refs?: string;

        [key: string]: CustomFieldType;
    }

    interface ICaseFilters {
        suite_id?: number;
        section_id?: number;
        created_after?: number;
        created_before?: number;
        created_by?: string;
        milestone_id?: number;
        priority_id?: number;
        template_id?: number;
        type_id?: number;
        updated_after?: number;
        updated_before?: number;
        updated_by?: number;
    }

    interface ITestrailUser {
        id: number;
        email: string;
        name: string;
        is_active: boolean;
    }

    interface ITemplate {
        id: number;
        is_default: boolean;
        name: string;
    }

    interface INewSuite {
        name?: string;
        description?: string;
    }

    interface ISuite {
        completed_on?: number;
        description: string;
        id: number;
        is_baseline?: boolean;
        is_completed?: boolean;
        is_master?: boolean;
        name: string;
        project_id: number;
        url: string;
    }

    interface ITestStatus {
        color_bright: string;
        color_dark: string;
        color_medium: string;
        id: number;
        is_final: boolean;
        is_system: boolean;
        is_untested: boolean;
        label: string;
        name: string;
    }

    interface ITestRun {
        assignedto_id: number;
        blocked_count: number;
        completed_on: number;
        config: string;
        config_ids: number[];
        created_by: number;
        created_on: number;
        custom_status1_count: number;
        custom_status2_count: number;
        custom_status3_count: number;
        custom_status4_count: number;
        custom_status5_count: number;
        custom_status6_count: number;
        custom_status7_count: number;
        description: string;
        failed_count: number;
        id: number;
        include_all: boolean;
        is_completed: boolean;
        milestone_id: number;
        plan_id: number;
        name: string;
        passed_count: number;
        project_id: number;
        retest_count: number;
        suite_id: number;
        untested_count: number;
        url: string;
    }

    interface INewTestRun {
        suite_id: number;
        name: string;
        description: string;
        milestone_id: number;
        assignedto_id: number;
        include_all: boolean;
        case_ids: number[];
    }

    interface ITestResultFilters {
        limit: number;
        offset: number;
        status_id: number | number[];
    }

    interface ITestResultsForRunFilters extends ITestResultFilters {
        created_after: number;
        created_before: number;
        created_by: number | number[];
    }

    interface IProject {
        announcment: string;
        completed_on: number;
        id: number;
        is_completed: boolean;
        name: string;
        show_announcement: boolean;
        suite_mode: SuiteMode;
        url: string;
    }

    interface IProjectUpdate {
        name?: string;
        announcement?: string;
        show_announcement?: boolean;
        suite_mode?: SuiteMode;
        is_completed?: boolean;
    }

    enum SuiteMode {
        SINGLE = 1,
        SINGLE_WITH_BASELINES,
        MULTIPLE_SUITES
    }

    interface IProjectFilters {
        is_completed: boolean;
    }

    interface IPriority {
        id: number;
        is_default: boolean;
        priority: number;
        short_name: string;
        name: string;
    }

    interface IMilestone {
        completed_on: number;
        description: string;
        due_on: number;
        id: number;
        is_completed: boolean;
        is_started: boolean;
        milestones?: IMilestone[];
        name: string;
        parent_id: number;
        project_id: number;
        start_on: number;
        started_on: number;
        url: string;
    }

    interface INewMilestone {
        name?: string;
        description?: string;
        due_on?: number;
        parent_id?: number;
        start_on?: number;
    }

    interface IMilestoneUpdate extends INewMilestone {
        is_completed?: boolean;
        is_started?: boolean;
    }

    interface IMilestoneFilters {
        is_completed: boolean;
        is_started: boolean;
    }

    interface IConfigurationGroup {
        id: number;
        project_id: number;
        name: string;
        configs: IConfiguration[];
    }

    interface IConfiguration {
        id: number;
        group_id: number;
        name: string;
    }

    interface IConfigurationUpdate {
        name: string;
    }

    interface Callback<T> {
        (error: any, result: T): void;
    }
}

export = TestrailApiClient;
