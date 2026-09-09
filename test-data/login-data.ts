export interface LoginTestData{
    testCase: string;
    username: string;
    password: string;
    expectedError: string;
}

export const negativeloginData: LoginTestData[]=[
    {
    testCase: 'Invalid username',
    username: 'rahulshetty',
    password: 'Learning@830$3mK2',
    expectedError: 'Incorrect username/password.',
    },

    {
    testCase: 'Invalid password',
    username: 'rahulshettyacademy',
    password: 'Leaing@830$3mK2',
    expectedError: 'Incorrect username/password.',
    },

    {
    testCase: 'Empty username',
    username: ' ',
    password: 'Leaing@830$3mK2',
    expectedError: 'Incorrect username/password.',
    },

    {
    testCase: 'Empty password',
    username: 'rahulshettyacademy',
    password: ' ',
    expectedError: 'Incorrect username/password.',
    },

    {
    testCase: 'Invalid username and Invalid password',
    username: 'rahulshettyacade',
    password: 'Learning@830$3mK2 ',
    expectedError: 'Incorrect username/password.',
    },



]