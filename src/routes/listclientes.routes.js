import { Router } from "express";

import * as listCtrl from "../controllers/listclientes.controllers";

const router = Router();

router.delete("/client/:id", listCtrl.deleteClient);

router.get('/listclientes', listCtrl.findAllClients);

export default router;