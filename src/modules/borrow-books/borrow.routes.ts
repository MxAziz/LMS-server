import { Router } from "express";
import { borrowController } from "./borrow.controller";

const router = Router();

router.post("/", borrowController.borrowBook);
router.get('/', borrowController.getBorrowBooksSummary);


export const BorrowRoute = router;