import express, {Request, Response} from "express";
import * as citaModel from "../controllers/cita";
import { Cita, BasicCita } from "../models/cita";
const citaRouter = express.Router();

citaRouter.post("/", async(req:Request, res:Response) => {
    const newCita: Cita = req.body;
    citaModel.create(newCita, (err:Error, Id_Cita:number)=> {
        if (err){
            return res.status(400).json({"message": err.message})
        }
        res.status(200).json({"Id_Cita": Id_Cita})
        });
    });

citaRouter.get('/', async (req: Request, res: Response)=>
    citaModel.findAll((err: Error, cita:Cita[])=>{
        if (err) {
            return res.status(400).json({'error Message': err.message});
        }
        res.status(200).json({'data': cita})
    }))

export {citaRouter}

