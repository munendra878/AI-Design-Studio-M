import express from "express";

import {

    saveDesign,

    getDesigns,

    getUserDesigns,

    deleteDesign

} from "../controllers/designController.js";


const router = express.Router();


// ==========================
// Save Design
// ==========================

router.post(
    "/",
    saveDesign
);


// ==========================
// Get All Designs
// ==========================

router.get(
    "/",
    getDesigns
);


// ==========================
// Get Logged User Designs
// ==========================

router.get(
    "/user/:userId",
    getUserDesigns
);


// ==========================
// Delete Design
// ==========================

router.delete(
    "/:id",
    deleteDesign
);


export default router;