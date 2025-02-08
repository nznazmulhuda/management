import { Router } from "express";
import { getTotalProfit } from "./dashboard.controller";
import { JwtVerify } from "../../middlewares/jwtVerify";

const router: Router = Router()

router.get("/total-profit", JwtVerify, getTotalProfit) // get total profit

export default router