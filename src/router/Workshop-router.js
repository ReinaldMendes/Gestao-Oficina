import { Router } from "express";
import {
  store,
  index,
  update,
  destroy,
} from "../controller/Workshop-controller.js";
const router = Router();
router.get("/", index);
router.post("/", store); // Criar usuário
router.put("/:id", update); // Atualizar usuário
router.delete("/:id", destroy); // Deletar usuário

export default router;
