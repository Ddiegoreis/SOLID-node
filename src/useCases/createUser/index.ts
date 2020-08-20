import { MailTrapMailProvider } from "../../providers/implementatiosn/MailTrapMailProvider";
import { PostgressUserRepository } from "../../repositories/implementations/PostgressUserRepository";
import { CreateUserUseCase } from "./CreateUserUseCase";
import { CreateUserController } from "./CreateUserController";

const mailTrapMailProvider = new MailTrapMailProvider()
const postgressUsersRepository = new PostgressUserRepository

const createUsersUseCase = new CreateUserUseCase(
    postgressUsersRepository,
    mailTrapMailProvider
)

const createUserUseController = new CreateUserController(createUsersUseCase)

export { createUsersUseCase, createUserUseController }