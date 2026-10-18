import { expect, test } from '@playwright/test';
import { RegistrationPage } from '../Pages/RegistrationPage';
import {
  generateRandomCountry,
  generateRandomEmail,
  generateRandomFullName,
  generateRandomOrganizationName,
  generateRandomPhoneNumber,
} from '../Utils/testDataGenerator';

const name = generateRandomFullName();
const email = generateRandomEmail();
const organizationName = generateRandomOrganizationName();
const country = generateRandomCountry();
const phoneNumber = generateRandomPhoneNumber(country);
const password = 'Test@12345';

test.describe('Registration negative scenarios', () => {
  test.describe.configure({ timeout: 180_000 });

  let registrationPage: RegistrationPage;

  test.beforeEach(async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.navigateToRegistrationURL();
  });

  test('Submit the form with all fields empty', { tag: '@sanity' }, async () => {
    await registrationPage.enterName(name)
    await registrationPage.enterEmail(email)
    await registrationPage.enterOrganizationName(organizationName)
    await registrationPage.acceptTermsAndConditions()
    await registrationPage.continueToDetails()

    await expect(registrationPage.passwordError).toBeVisible();

    await registrationPage.enterPassword(password)
    await registrationPage.continueToDetails()
    await registrationPage.selectCountry('Select Country')
    await registrationPage.selectState('Select State')
    await registrationPage.submitRegistration()

    await expect(registrationPage.countryErrpr).toBeVisible();
    await expect(registrationPage.stateError).toBeVisible();
    await expect(registrationPage.phoneError).toBeVisible();

  });

  test('Enter an invalid email format', { tag: '@sanity' }, async () => {
    await registrationPage.enterName(name)
    await registrationPage.enterEmail('invalid@invalid.com')
    await registrationPage.enterOrganizationName(organizationName)
    await registrationPage.acceptTermsAndConditions()
    await expect(registrationPage.emailError).not.toBeVisible();
  });

  test('Enter an invalid password', { tag: '@regression' }, async () => {
    await registrationPage.enterName(name)
    await registrationPage.enterEmail(email)
    await registrationPage.enterOrganizationName(organizationName)
    await registrationPage.enterPassword("Wrongpassword")
    await registrationPage.acceptTermsAndConditions()
    await registrationPage.continueToDetails()
    await expect(registrationPage.passwordError).toBeVisible();
  });

  test('Register using an already registered email', { tag: '@regression' }, async () => {
    await registrationPage.enterName(name);
    await registrationPage.enterEmail('aayushchand900@gmail.com');
    await registrationPage.enterOrganizationName(organizationName);
    await registrationPage.enterPassword(password);
    await registrationPage.acceptTermsAndConditions();
    await registrationPage.continueToDetails();
    await registrationPage.selectCountry(country);
    await registrationPage.enterContactNumber(phoneNumber);
    await registrationPage.selectAvailableState();
    await registrationPage.optInToSms();
    await registrationPage.submitRegistration();
    await expect(registrationPage.userError).toBeVisible();
  });

  test('Leave the required terms checkbox unchecked', { tag: '@regression' }, async () => {
    await registrationPage.enterName(name);
    await registrationPage.enterEmail(email);
    await registrationPage.enterOrganizationName(organizationName);
    await registrationPage.enterPassword(password);

    await expect(registrationPage.termsAndConditionCheckBox).not.toBeChecked();
    await expect(registrationPage.continueButton).toHaveClass(/(?:^|\s)disabled(?:\s|$)/);

    await registrationPage.acceptTermsAndConditions();
    await registrationPage.continueToDetails();

    await registrationPage.selectCountry(country);
    await registrationPage.enterContactNumber(phoneNumber);
    await registrationPage.selectAvailableState();
    await expect(registrationPage.smsOptIn).not.toBeChecked();

    await registrationPage.submitRegistration();
    await expect(registrationPage.page).toHaveURL('https://app.xtenav.com/get-started', { timeout: 60_000 });
  });

  test('Enter only whitespace in a required text field', async () => {
    await registrationPage.enterName('     ')
    await registrationPage.enterEmail('    ');
    await registrationPage.enterOrganizationName('   ');
    await registrationPage.enterPassword('  ');

    await expect(registrationPage.continueButton).toHaveClass(/(?:^|\s)disabled(?:\s|$)/);


  });
});