# XTENAV Registration UI Tests

End-to-end browser tests for the XTENAV registration flow, built with
TypeScript and Playwright Test. The suite covers registration-page rendering,
form validation, password visibility, terms acceptance, and successful
registration. Test results are available in both Playwright HTML and Allure
formats.

## Technology

- Node.js and npm
- TypeScript
- Playwright Test
- Chromium
- Allure Playwright reporter and Allure Report 2
- GitHub Actions for scheduled and pull-request test runs

## Project structure

```text
.
├── .github/
│   └── workflows/
│       ├── regression.yml          # Daily regression workflow
│       └── sanity.yml              # Daily, pull-request, and manual sanity workflow
├── Config/
│   ├── env.ts                      # Loads and validates required environment variables
│   └── environments/
│       ├── dev.env                 # Development environment configuration
│       ├── qa.env                  # QA environment configuration
│       └── staging.env             # Staging environment configuration
├── Pages/
│   └── RegistrationPage.ts         # Page Object Model and registration locators/actions
├── scripts/
│   └── allure-report.js            # Generate and open the Allure report
├── tests/
│   ├── registration.spec.ts        # Registration UI and happy-path tests
│   └── registrationNegativeScenarios.spec.ts
├── TestData/                       # Reserved for test data files
├── Utils/
│   └── testDataGenerator.ts        # Random registration test data
├── playwright.config.ts            # Playwright projects, timeouts, reporters, and retries
├── package.json                    # Dependencies and npm scripts
├── package-lock.json
└── Testcases.md                    # High-level test case list
```

Generated directories such as `test-results/`, `playwright-report/`,
`allure-results/`, and `allure-report/` are test artifacts, not source code.

## Prerequisites

- Node.js 20 or newer and npm
- Java 17 or newer to generate or open Allure Report 2
- Access to `https://app.xtenav.com/register`

## Install

From the project root:

```bash
npm ci
npx playwright install chromium
```

For Linux CI runners, install browser system dependencies as well:

```bash
npx playwright install --with-deps chromium
```

## Run tests

Run all tests:

```bash
npm test
```

Run by tag:

```bash
npm run test:sanity
npm run test:regression
```

List tests without executing them:

```bash
npx playwright test --list
```

Run a specific test by title:

```bash
npx playwright test --grep "Verify password visibility toggle"
```

The current Playwright project runs Chromium. Test timeout is 120 seconds.
Failed tests are retried twice in both local and CI runs. Screenshots, videos,
and traces are retained for failed tests in `test-results/`.
The registration tests use the live XTENAV registration site and therefore
require network access and availability of that service.

## Reports

Playwright writes its HTML report to `playwright-report/` and Allure test result
data to `allure-results/`.

Open the Playwright HTML report after a test run:

```bash
npx playwright show-report
```

Generate and open the Allure report in one command:

```bash
 npm run allure:generate
 npm run allure:open
```

The script generates `allure-report/`, starts a local report server, and opens
the report in a browser. Keep the command running while viewing the report;
press Ctrl+C to stop the server.

Alternatively, generate and open the Allure report in separate steps:

```bash
npm run allure:generate
npm run allure:open
```

## Continuous integration

Both workflows run on `ubuntu-latest`, install Node.js, Java 17, project
dependencies, and Playwright browsers, then upload reports as GitHub Actions
artifacts. Artifacts are retained for 30 days.

| Workflow | Tests | Schedule (IST) | Other triggers |
| --- | --- | --- | --- |
| `sanity.yml` | Tests tagged `@sanity` | Daily at 1:00 AM | Every pull request; manual dispatch |
| `regression.yml` | Tests tagged `@regression` | Daily at 3:00 AM | Manual dispatch |

GitHub Actions cron schedules use UTC. The sanity workflow uses `30 19 * * *`
(1:00 AM IST), and regression uses `30 21 * * *` (3:00 AM IST). To run either
workflow manually, open the repository's **Actions** tab, select the workflow,
and choose **Run workflow**.

The workflows upload the raw Allure results, generated Allure report,
Playwright HTML report, and `test-results/` diagnostics (including screenshots,
videos, and traces), including when a test step fails.

## Test coverage

Sanity-tagged tests cover registration-page elements, missing required
information, and invalid email input. Regression-tagged tests cover successful
registration, invalid password input, an already-registered email, and the
terms checkbox behavior. Other tests can be run with `npm test` but are not
included in the tag-filtered CI runs unless tagged.

## Environment configuration and safety

The repository includes environment configuration files under `Config/`.
Current registration UI tests navigate directly to the XTENAV registration
URL; they do not require environment variables to run. Do not commit real
credentials, tokens, or private `.env` files. Configure secrets in the
appropriate local environment or GitHub Actions secret store when adding tests
that need them.
