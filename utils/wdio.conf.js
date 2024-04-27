exports.config = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',

    // ==================
    // Specify Test Files
    // ==================
    specs: [
        './features/*.feature'
    ],

    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    capabilities: [
        {
            maxInstances: 1,
            browserName: 'chrome', // Change this to the desired browser or device
            'goog:chromeOptions': {
                // Add any browser options here
            }
        }
    ],

    // ===================
    // Test Configurations
    // ===================
    logLevel: 'info',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'cucumber',
    reporters: ['spec'],
    cucumberOpts: {
        require: ['./steps/*.js'], // Path to the step definitions
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        format: ['pretty'],
        snippets: true,
        source: true,
        profile: [],
        strict: false,
        tagExpression: '',
        timeout: 60000,
        ignoreUndefinedDefinitions: false
    }
};
