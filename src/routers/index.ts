import { Router } from "express";
import excel from "./excel.route";
import salesRouter from "./sales.route";
import orderRouter from "./order.route";

const router = Router();

router.use("/api/excel", excel);
router.use("/api/sales", salesRouter);
router.use("/api/order", orderRouter);

export default router;