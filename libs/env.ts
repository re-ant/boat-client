import NoEnvironmentVariableError from "libs/error/NoEnvironmentVariableError";

export const getEnv = (envName: string) => {
  const env = process.env[envName];

  if (!env) {
    throw new NoEnvironmentVariableError(envName);
  }
  return env;
};
