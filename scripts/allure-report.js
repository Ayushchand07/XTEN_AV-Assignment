const allure = require('allure-commandline');

function runAllure(args) {
  return new Promise((resolve, reject) => {
    const process = allure(args);

    process.once('error', reject);
    process.once('exit', (code, signal) => {
      if (code === 0) {
        resolve();
        return;
      }

      reject(new Error(`Allure ${args[0]} failed with ${signal ? `signal ${signal}` : `exit code ${code}`}.`));
    });
  });
}

async function main() {
  console.log('Generating Allure report...');
  await runAllure(['generate', 'allure-results', '--clean', '-o', 'allure-report']);
  console.log('Opening Allure report. Press Ctrl+C to stop the report server.');
  await runAllure(['open', 'allure-report']);
}

main().catch((error) => {
  console.error('Unable to generate or open the Allure report:', error);
  process.exitCode = 1;
});
