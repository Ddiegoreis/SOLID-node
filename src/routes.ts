import { Router } from "express";
import { createUserUseController } from "./useCases/createUser";

const router = Router()

router.post('/users', (req, res) => {
    return createUserUseController.handle(req, res)
})

export { router }