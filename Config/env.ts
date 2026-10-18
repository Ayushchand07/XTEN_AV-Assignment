import 'dotenv/config';

const requiredEnvVariables = [
    "BASE_URL",
    "USER_NAME",
    "PASSWORD",

    "API_BASE_URL",
    "API_AUTH",
    "GET_API",
    "CREATE_API",
    "UPDATE_API",
    "DELETE_API",
];

for (const variable of requiredEnvVariables) {
    if (!process.env[variable]) {
        throw new Error(
            `Required environment variable "${variable}" is missing.`
        );
    }
}

export const config = {
        baseUrl: process.env.BASE_URL!,
        username: process.env.USER_NAME!,
        password: process.env.PASSWORD

};