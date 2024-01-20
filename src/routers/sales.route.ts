import express from "express";
import SalesController from "../architecture/controllers/sales.controller";

const  salesRouter = express.Router();
const salesController = new SalesController();

salesRouter.get("/", salesController.monthlySales);

export default salesRouter;