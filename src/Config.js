import {LogLevel} from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        clientId: '91cea1cd-a1f4-4962-ad83-ca7d4404eda8',
        authority: 'https://login.microsoftonline.com/logikaapp.onmicrosoft.com',
        postLogoutRedirectUri: '/',
        redirectUri: '/',
        navigateToLoginRequestUri: false,
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookies: false,
    },
    system: {
        loggerOptionS: {
            loggerCallback: (level, message, containsPii) => {
                if (containsPii){
                    return;
                }
                switch (level){
                    case LogLevel.Error:
                        console.error(message);
                        return;
                    case LogLevel.Info:
                        console.info(message);
                        return;
                    case LogLevel.Verbose:
                        console.debug(message);
                        return;
                    case LogLevel.Warning:
                        console.warn(message);
                        return;
                    default:
                        return;
                }
            },
        },
    },
};

export const loginRequest = {
    scopes: ['user.read'],
};