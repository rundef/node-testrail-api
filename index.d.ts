declare module 'testrail-api' {
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
        comment: string;
        version: string;
        elapsed: number;
        defects: string;
        assignedto_id: number;

        [key: string]: CustomFieldType;
    }

    interface INewTestResults {
        results: INewTestResult[];
    }

    type CustomFieldType = boolean | string | number | number[] | any[];

    interface ITest {
        id: number;
        case_id: number;
        assignedto_id: number;
        estimate: string;
        estimate_forecast: string;
        milestone_id: number;
        priority_id: number;
        refs: string;
        run_id: number;
        status_id: number;
        title: string;
        type_id: number;

        [key: string]: CustomFieldType;
    }

    interface ICase {
        created_by: number;
        created_on: number;
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
        display_order: number;
        id: number;
        include_all: boolean;
        is_active: boolean;
        label: string;
        name: string;
        system_name: string;
        template_ids: number[];
        type_id: number;
        configs: ICaseFieldConfig[];
    }

    interface ICaseType {
        id: number;
        is_default: boolean;
        name: string;
    }

    interface ICaseFieldConfig {
        id: string;
        context: {
            is_global: boolean;
            project_ids: number[];
        };
        options: {
            items?: string;
            default_value?: string;
            format?: string;
            is_required?: boolean;
            has_actual: boolean;
            has_expected: boolean;
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
        description: string;
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
        created_after: number;
        created_before: number;
        created_by: string;
        milestone_id: number;
        priority_id: number;
        template_id: number;
        type_id: number;
        updated_after: number;
        updated_before: number;
        updated_by: number;
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
        name: string;s
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

    interface TestrailApiClient {
        new (options: any): TestrailApiClient;

        getCase(id: number, callback?: Callback<ICase>): Promise<ICase>;
        getCases(project_id: number, filters?: ICaseFilters, callback?: Callback<ICase[]>): Promise<ICase[]>;
        addCase(section_id: number, data: ICaseUpdate, callback?: Callback<ICase>): Promise<ICase>;
        updateCase(case_id: number, data: ICaseUpdate, callback?: Callback<ICase>): Promise<ICase>;
        deleteCase(case_id: number, callback?: Callback<void>): Promise<void>;
        getCaseFields(callback?: Callback<ICaseField[]>): Promise<ICaseField[]>;
        getCaseTypes(callback?: Callback<ICaseType[]>): Promise<ICaseType[]>;

        getConfigs(project_id: number, callback?: Callback<IConfigurationGroup>): Promise<IConfigurationGroup>;
        addConfigGroup(project_id: number, data: IConfigurationUpdate, callback?: Callback<IConfigurationGroup>): Promise<IConfigurationGroup>;
        addConfig(config_group_id: number, data: IConfigurationUpdate, callback?: Callback<IConfiguration>): Promise<IConfiguration>;
        updateConfigGroup(config_group_id: number, data: IConfigurationUpdate, callback?: Callback<IConfigurationGroup>): Promise<IConfigurationGroup>;
        updateConfig(config_id: number, data: IConfigurationUpdate, callback?: Callback<IConfiguration>): Promise<IConfiguration>;
        deleteConfigGroup(config_group_id: number, callback?: Callback<void>): Promise<void>;
        deleteConfig(config_id: number, callback?: Callback<void>): Promise<void>;

        getMilestone(id: number, callback?: Callback<IMilestone>): Promise<IMilestone>;
        getMilestones(project_id: number, filters?: IMilestoneFilters, callback?: Callback<IMilestone[]>): Promise<IMilestone[]>;
        addMilestone(project_id: number, data: INewMilestone, callback?: Callback<IMilestone>): Promise<IMilestone>;
        updateMilestone(milestone_id: number, data: IMilestoneUpdate, callback?: Callback<IMilestone>): Promise<IMilestone>;
        deleteMilestone(milestone_id: number, callback?: Callback<void>): Promise<void>;

        getPlan(id: number, callback?: Callback<any>): Promise<any>;
        getPlans(project_id: number, filters?: any, callback?: Callback<any>): Promise<any>;
        addPlan(project_id: number, data: any, callback?: Callback<any>): Promise<any>;
        addPlanEntry(plan_id: number, data: any, callback?: Callback<any>): Promise<any>;
        updatePlan(plan_id: number, data: any, callback?: Callback<any>): Promise<any>;
        updatePlanEntry(plan_id: number, entry_id: number, data: any, callback?: Callback<any>): Promise<any>;
        closePlan(plan_id: number, callback?: Callback<any>): Promise<any>;
        deletePlan(plan_id: number, callback?: Callback<void>): Promise<void>;
        deletePlanEntry(plan_id: number, entry_id: number, callback?: Callback<void>): Promise<void>;

        getPriorities(callback?: Callback<IPriority[]>): Promise<IPriority[]>;
        getProject(id: number, callback?: Callback<IProject>): Promise<IProject>;
        getProjects(filters?: IProjectFilters, callback?: Callback<IProject[]>): Promise<IProject[]>;
        addProject(data: IProjectUpdate, callback?: Callback<IProject>): Promise<IProject>;
        updateProject(project_id: number, data: IProjectUpdate, callback?: Callback<IProject>): Promise<IProject>;
        deleteProject(project_id: number, callback?: Callback<void>): Promise<void>;

        getResults(test_id: number, filters?: ITestResultFilters, callback?: Callback<ITestResult[]>): Promise<ITestResult[]>;
        getResultsForCase(run_id: number, case_id: number, filters?: ITestResultFilters, callback?: Callback<ITestResult[]>): Promise<ITestResult[]>;
        getResultsForRun(run_id: number, filters?: ITestResultsForRunFilters, callback?: Callback<ITestResult[]>): Promise<ITestResult[]>;

        addResult(test_id: number, data: INewTestResult, callback?: Callback<ITestResult>): Promise<ITestResult>;
        addResultForCase(run_id: number, case_id: number, data: INewTestResult, callback?: Callback<ITestResult>): Promise<ITestResult>;
        addResults(run_id: number, data: INewTestResults, callback?: Callback<ITestResult[]>): Promise<ITestResult[]>;
        addResultsForCases(run_id: number, data: INewTestResults, callback?: Callback<ITestResult[]>): Promise<ITestResult[]>;
        getResultFields(callback?: Callback<ICaseField[]>): Promise<ICaseField[]>;

        getRun(id: number, callback?: Callback<ITestRun>): Promise<ITestRun>;
        getRuns(project_id: number, filters?: any, callback?: Callback<ITestRun[]>): Promise<ITestRun[]>;
        addRun(project_id: number, data: INewTestRun, callback?: Callback<ITestRun>): Promise<ITestRun>;
        updateRun(run_id: number, data: INewTestRun, callback?: Callback<ITestRun>): Promise<ITestRun>;
        closeRun(run_id: number, callback?: Callback<ITestRun>): Promise<ITestRun>;
        deleteRun(run_id: number, callback?: Callback<void>): Promise<void>;

        getSection(id: number, callback?: Callback<ISection>): Promise<ISection>;
        getSections(project_id: number, filters?: any, callback?: Callback<ISection>): Promise<ISection>;
        addSection(project_id: number, data: INewSection, callback?: Callback<ISection>): Promise<ISection>;
        updateSection(section_id: number, data: ISectionUpdate, callback?: Callback<ISection>): Promise<ISection>;
        deleteSection(section_id: number, callback?: Callback<void>): Promise<void>;

        getStatuses(callback?: Callback<ITestStatus[]>): Promise<ITestStatus[]>;

        getSuite(id: number, callback?: Callback<ISuite>): Promise<ISuite>;
        getSuites(project_id: number, callback?: Callback<ISuite[]>): Promise<ISuite[]>;
        addSuite(project_id: number, data: INewSuite, callback?: Callback<ISuite>): Promise<ISuite>;
        updateSuite(suite_id: number, data: INewSuite, callback?: Callback<ISuite>): Promise<ISuite>;
        deleteSuite(suite_id: number, callback?: Callback<void>): Promise<void>;

        getTemplates(project_id: number, callback?: Callback<ITemplate[]>): Promise<ITemplate[]>;

        getTest(id: number, callback?: Callback<ITest>): Promise<ITest>;
        getTests(run_id: number, filters?: {status_id: number | number[]}, callback?: Callback<ITest[]>): Promise<ITest[]>;

        getUser(id: number, callback?: Callback<ITestrailUser>): Promise<ITestrailUser>;
        getUserByEmail(email: string, callback?: Callback<ITestrailUser>): Promise<ITestrailUser>;
        getUsers(callback?: Callback<ITestrailUser[]>): Promise<ITestrailUser[]>;
    }

    var _: TestrailApiClient;
    export = _;
}