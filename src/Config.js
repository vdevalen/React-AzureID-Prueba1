import {LogLevel} from '@azure/msal-browser';

export const msalConfig = {
    auth: {
        clientId: 'c3744f00-57a4-465c-bcf2-57bca50f6750',
        authority: 'https://login.microsoftonline.com/mariologika.onmicrosoft.com',
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