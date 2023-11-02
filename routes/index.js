import { Router } from "express";
import locationsRoutes from "./locations.js";
import charactersRoutes from "./characters.js";

const router = Router();

router.get("/", (req, res) => res.send("This is the api root"));

router.use("/locations", locationsRoutes);
router.use("/characters", charactersRoutes);

export default router;