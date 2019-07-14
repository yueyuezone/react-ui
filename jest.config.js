module.exports={
    verbose:true,
    clearMocks:false,
    collectCoverage:true,
    collectCoverageFrom:["{lib,include}/**/*.{js,jsx,ts,tsx}","!**/node_modules/**"],
    coverageDirectory:"coverage",
    coverageReporters:['text','lcov'],
    reporters:['default',"jest-junit"],
    moduleFileExtensions:['js','jsx','ts','tsx'],
    moduleDirectories:['node_modules'],
    moduleNameMapper: {
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/**/__mocks__/fileMock.js",
        "\\.(css|less|scss|sass)$": "identity-obj-proxy"
    },
    // globals:{
    //     'ts-jest':{
    //         tsConfig:'tsconfig.test.json'
    //     }
    // },
    testMatch:['<rootDir>/**/__test__/**/*.unit.(js|jsx|tsx|ts)'],
    transform:{
        "^.+unit\\.(js|jsx)$":"babel-jest",
        "^.+\\.(ts|tsx)$":"ts-jest"
    },
    setupFilesAfterEnv:["<rootDir>test/setupTests.js"]
}