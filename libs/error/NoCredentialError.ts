type CredentialType = "email" | "password";

export default class NoCredentialError extends Error {
  constructor(credentialType: CredentialType) {
    super(`${credentialType} 항목이 존재하지 않습니다.`);
    this.name = "NoCredentialsError";
  }
}
