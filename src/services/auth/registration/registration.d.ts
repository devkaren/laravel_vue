export interface RegistrationInterface {
    first_name: string,
    last_name: string,
    email: string,
    password: string,
    password_confirmation: string
}

export interface RegistrationInitialState {
    userRegistrationError: boolean,
    userRegistrationErrorMessage: object
}
