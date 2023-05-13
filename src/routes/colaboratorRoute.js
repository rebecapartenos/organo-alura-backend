import ColaboratorController from "../controllers/colaboratorController";
import express from "express";

const colaboratorRouter = express.Router();

colaboratorRouter
    .post("/colaborator", ColaboratorController.insertColaborator)
    .post("/colaborator/team", ColaboratorController.getColaboratorsByTeam)
    .get("/colaborator/teams", ColaboratorController.getTeams);

export default colaboratorRouter;

