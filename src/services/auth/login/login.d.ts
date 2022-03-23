export interface LoginInterface {
    email: string,
    password: string
}

export interface LoginInitialState {
    userLoginError: boolean,
    userLoginErrorMessage: object
}
