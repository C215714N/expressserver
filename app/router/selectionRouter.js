import * as seleccionController from "../controller/seleccionController.js"
import { Router } from "express";

const selectionRouter = Router()

selectionRouter.get('/:id?', seleccionController.getAll)
selectionRouter.post('/', seleccionController.insertMany)
selectionRouter.put('/:id', seleccionController.updateOne)
selectionRouter.delete('/:id', seleccionController.deleteOne)

export default selectionRouter;