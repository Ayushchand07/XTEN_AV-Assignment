import {Page, Locator, expect} from 'playwright/test'

export class RegistrationPage{

    readonly page : Page
    readonly nameField : Locator
    readonly emailField: Locator
    readonly organizationNameField: Locator
    readonly passwordField : Locator
    readonly passwordVisibilityIcon: Locator
    readonly termsAndConditionCheckBox: Locator
    readonly continueButton: Locator
    readonly countryField: Locator
    readonly contactNumberField: Locator
    readonly stateField: Locator
    readonly smsOptIn: Locator
    readonly signUpButton: Locator

    //--------------------------------------------------

    readonly passwordError: Locator
    readonly userError : Locator
    readonly phoneError: Locator
    readonly stateError: Locator
    readonly emailError: Locator
    readonly countryErrpr: Locator

    //---------------------------------------------------

    readonly logo: Locator
    readonly welcomeTitle: Locator

    constructor(page: Page){

        this.page = page
        this.nameField = page.getByRole('textbox', {name: "Enter your name"})
        this.emailField = page.getByRole('textbox', {name: "Enter your work email"})
        this.organizationNameField = page.getByRole('textbox', {name: "Enter your organization name"})
        this.passwordField = page.locator('#id_password1')
        this.passwordVisibilityIcon = page.locator('#eye')
        this.termsAndConditionCheckBox = page.locator('#terms')
        this.continueButton = page.locator('#continueBtn')
        this.countryField = page.locator('#select2-id_country-container')
        this.contactNumberField = page.locator('#phone')
        this.stateField = page.locator('#select2-id_state-container')
        this.smsOptIn = page.locator('#smsOptIn')
        this.signUpButton = page.locator('#register_button')

        //-----------------------------------------------------
        this.userError = page.locator('#user-error')
        this.emailError = page.locator('#email-error')
        this.phoneError = page.locator('#phone-error')
        this.stateError = page.locator('#state-error')
        this.countryErrpr = page.locator('#country-error')
        this.passwordError = page.locator('#password-error')
        //------------------------------------------------------

        this.logo = page.locator('.logo-img')  
        this.welcomeTitle = page.locator('.welcome-title')      
    }

    async navigateToRegistrationURL(){
        await this.page.goto('https://app.xtenav.com/register')
    }

    async enterName(name: string) {
        await this.nameField.fill(name)
    }

    async enterEmail(email: string) {
        await this.emailField.fill(email)
    }

    async enterOrganizationName(organizationName: string) {
        await this.organizationNameField.fill(organizationName)
    }

    async enterPassword(password: string) {
        await this.passwordField.fill(password)
    }

    async acceptTermsAndConditions() {
        await this.termsAndConditionCheckBox.click()
    }

    async continueToDetails() {
        await this.continueButton.click()
    }

    async selectCountry(country: string) {
        await this.countryField.click()
        await this.page.locator('.select2-results__option').getByText(`${country}`, {exact: true}).click()
    }

    async enterContactNumber(contactNumber: string) {
        await this.contactNumberField.fill(contactNumber)
    }

    async selectAvailableState() {
        await this.stateField.click()
        const stateOptions = this.page.locator('.select2-results__option:visible')
            .filter({ hasNotText: /^Select State$/ })
        const stateOption = stateOptions.first()
        await expect(stateOption).toBeVisible()
        const selectedState = (await stateOption.innerText()).trim()
        await stateOption.click()
        await expect(this.stateField).toHaveText(selectedState)
    }

    async selectState(state: string) {
        await this.stateField.click()
        await this.page.locator('.select2-results__option').getByText(state, { exact: true }).click()
    }

    async optInToSms() {
        await this.smsOptIn.click()
    }

    async submitRegistration() {
        await this.signUpButton.click()
    }

    // async registerUser(name: string, email: string, organizationName: string, country: string, contactNumber: string, state: string, password: string) {
    //     await this.enterName(name)
    //     await this.enterEmail(email)
    //     await this.enterOrganizationName(organizationName)
    //     await this.enterPassword(password)
    //     await this.acceptTermsAndConditions()
    //     await this.continueToDetails()
    //     await this.selectCountry(country)
    //     await this.enterContactNumber(contactNumber)
    //     await this.selectState(state)
    //     await this.optInToSms()
    //     await this.submitRegistration()
    // }


}