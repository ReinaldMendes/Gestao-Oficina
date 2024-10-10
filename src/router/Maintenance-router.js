import { Router } from "express";
import {
  store,
  index,
  update,
  destroy,
} from "../controller/Maintenance-controller.js";
const router = Router();
router.get("/", index);
router.get("/:id", index);
router.post("/", store); // Criar usuário
router.put("/:id", update); // Atualizar usuário
router.delete("/:id", destroy); // Deletar usuário

export default router;
