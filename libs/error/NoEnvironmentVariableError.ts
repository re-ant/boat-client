export default class NoEnvironmentVariableError extends Error {
  constructor(환경변수명: string) {
    super(`환경변수 ${환경변수명} 항목이 존재하지 않습니다.`);
    this.name = "NoEnvironmentVariableError";
  }
}
