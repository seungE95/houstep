import { Router } from "express";
import excel from "./excel.route";

const router = Router();

router.use("/api/excel", excel);

export default router;