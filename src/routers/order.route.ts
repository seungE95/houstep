import express from "express";
import OrderController from "../architecture/controllers/order.controller";

const orderRouter = express.Router();
const orderController = new OrderController();

orderRouter.get("/", orderController.orderList);

export default orderRouter;