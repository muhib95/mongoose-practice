import express from "express";
import { createUser } from "./user.controller";
export const router=express.Router();
router.get("/",createUser)