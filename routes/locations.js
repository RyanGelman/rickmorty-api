import { Router } from 'express';
import * as controllers from "../controllers/locations.js";

const router = Router();

router.get("/", controllers.getLocations);
router.get("/:id", controllers.getLocation);
router.post("/", controllers.createLocation);
router.put("/:id", controllers.updateLocation);
router.delete("/:id", controllers.deleteLocation);

export default router