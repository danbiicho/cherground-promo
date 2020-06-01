import { inject, injectable } from "inversify";
import { GetUser } from "domain/use-case";
import { UserRepository } from "domain/interactor/repository";

@injectable()
export default class GetUserImpl implements GetUser {
  private userRepository: UserRepository;

  constructor(
    @inject("UserRepository")
    userRepository: UserRepository
  ) {
    this.userRepository = userRepository;
  }

  execute() {
    return this.userRepository.getUser();
  }
}
