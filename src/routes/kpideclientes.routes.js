import { Router } from "express";

import * as clientsCtrl from "../controllers/kpideclientes.controller";

const router = Router();

router.get('/kpideclientes', clientsCtrl.getListByAge );

export default router;