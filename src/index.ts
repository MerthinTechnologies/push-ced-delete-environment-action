import 'reflect-metadata';
import * as core from '@actions/core';
import cli, { GlobalErrorHandler } from '@ced/cli-dev';

GlobalErrorHandler.set();

const run = async () => {
  const cliToken = core.getInput('cli-token') || process.env['CED_CLI_TOKEN'];
  const projectId =
    core.getInput('project-id') || process.env['CED_PROJECT_ID'];
  const environment =
    core.getInput('environment') || process.env['CED_ENVIRONMENT'];

  if (!cliToken) {
    throw new Error(
      `Missing CED CLI token. Provide a CLI token by "cli-token" input parameter or define a variable "CED_CLI_TOKEN".`
    );
  }

  if (!projectId) {
    throw new Error(`Missing projectId.`);
  }

  if (!environment) {
    throw new Error(`Missing environment.`);
  }

  console.log(`Deleting environment: ${environment}`);

  const command = cli({
    token: cliToken,
    config: {
      useConsoleSpinner: false,
    },
  }).deleteEnvironment();
  await command.run(environment, projectId, true);
};

run();
