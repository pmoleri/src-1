import { setAppBuilderConfig } from '@infragistics/appbuilder-sdk';

setAppBuilderConfig({
    hideSharingOptions: true,
    personalWorkspaceLabel: 'myExperiences',
    baseUrl: 'https://localhost:7092/',                                 // Your AppBuilder ON-PREM/SDK backend server url
    skipAuth: true,
    disableCodegen: false,
    disableAnalytics: true,
    disablePublishToGithub: false,
    hideMainMenu: false,
    favicon: '/favicon_dev.ico',
    skipOTPForDevTools: false,
    disableSurvey: true,
    useLocalFonts: false,
    disableFeedback: true,
    showOnboardingVideos: false,
    requiresActivation: false,
    showUploadFileDatasourceOption: true,
    incrementalRenderingEnabled: true,
    toggleableDatasourceTags: false,
    hideHelpResources: true,
    hideAppBuilderLogo: true,
    disableQuickTips: true,
    hideMockDataSources: true,
    hideVerbPills: false,
    useSummaryForOperationName: false,
    showObjectDatasources: false, // true is not supported by codegen yet so only enabled for dotmatics,
    hideDesktopApp: true,
    hideAccountMenu: true,
    hideExperimentalGenerators: [], // [{ platform: Platform.react }],
    rejectReservedIP: true,
    disableMockDataUponFailedEndpoint: false,
    shellTheme: {
        typeface: 'Public Sans',
        colors: {
            primary: '#2D8DFF',
            grays: '#9A9DA2',
            success: '#31AB2B',
            warn: '#F2C200',
            error: '#DB372A',
            aux1: '#068E6B', // Teal
            aux2: '#9C27B0', // Purple
        },
    },
});


