import { Router } from "express";
import excel from "./excel.route";
import salesRouter from "./sales.route";

const router = Router();

router.use("/api/excel", excel);
router.use("/api/sales", salesRouter);

export default router;