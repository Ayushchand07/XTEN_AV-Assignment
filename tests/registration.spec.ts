import { test, expect } from '@playwright/test';
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

test.describe('Registration page automation', () => {
  test.describe.configure({ timeout: 180_000 });
  let registrationPage: RegistrationPage;

  test.beforeEach('Navigate to registration page', async ({ page }) => {
    registrationPage = new RegistrationPage(page);
    await registrationPage.navigateToRegistrationURL();
  });

  test('Verify registration page elements', { tag: '@sanity' }, async () => {
    await expect(registrationPage.logo).toBeVisible( { timeout: 10000 });
    await expect(registrationPage.nameField).toBeVisible({ timeout: 10000 });
    await expect(registrationPage.emailField).toBeVisible({ timeout: 10000 });
    await expect(registrationPage.organizationNameField).toBeVisible({ timeout: 10000 });
    await expect(registrationPage.passwordField).toBeVisible({ timeout: 10000 });
    await expect(registrationPage.termsAndConditionCheckBox).toBeVisible({ timeout: 10000 });
    
  });

  test('Register with valid, unique data', { tag: '@regression' }, async () => {
    await registrationPage.enterName(name);
    await registrationPage.enterEmail(email);
    await registrationPage.enterOrganizationName(organizationName);
    await registrationPage.enterPassword(password);
    await registrationPage.acceptTermsAndConditions();
    await registrationPage.continueToDetails();
    await registrationPage.selectCountry(country);
    await registrationPage.enterContactNumber(phoneNumber);
    await registrationPage.selectAvailableState();
    await registrationPage.optInToSms();
    await registrationPage.submitRegistration();
    await expect(registrationPage.page).toHaveURL('https://app.xtenav.com/get-started', { timeout: 60_000 });
    await expect(registrationPage.welcomeTitle).toBeVisible()
  });

  test('Verify password visibility toggle', async () => {
    await registrationPage.enterName(name);
    await registrationPage.enterEmail(email);
    await registrationPage.enterOrganizationName(organizationName);
    await registrationPage.enterPassword(password);
    await registrationPage.passwordVisibilityIcon.click();
    await expect(registrationPage.passwordField).toHaveAttribute('type', 'text');
    await expect(registrationPage.passwordField).toHaveValue(password , { timeout: 10000 });
    await registrationPage.passwordVisibilityIcon.click();
    await expect(registrationPage.passwordField).toHaveAttribute('type', 'password');
    await expect(registrationPage.passwordField).toHaveValue(password , { timeout: 10000 });
  });
});
