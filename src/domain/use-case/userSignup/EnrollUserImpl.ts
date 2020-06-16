import { inject, injectable } from "inversify";
import { EnrollUser } from "domain/use-case";
import { UserSignupRepository } from "domain/interactor/repository";

@injectable()
export default class EnrollUserImpl implements EnrollUser {
  private userSignupRepository: UserSignupRepository;

  constructor(
    @inject("UserSignupRepository")
    userSignupRepository: UserSignupRepository
  ) {
    this.userSignupRepository = userSignupRepository;
  }

  execute(userInput: object) {
    return this.userSignupRepository.enrollUser(userInput);
  }
}
