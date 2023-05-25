import express from "express";
import { createUser, getAdmin, getUserId, getUsers } from "./user.controller";
const router = express.Router();

router.get('/', getUsers);
router.get('/admin', getAdmin);
router.get('/:id', getUserId);
router.post('/', createUser);


export default router;