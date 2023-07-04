import express, { Request, Response } from 'express';
import * as especialidadModel from '../controllers/especialidad';
import { Especialidad, BasicEspecialidades } from '../models/especialidad';

const especialidadRouter = express.Router();

especialidadRouter.post('/', async (req: Request, res: Response) => {
    const newEspecialidad: Especialidad = req.body;
    especialidadModel.create(newEspecialidad, (err: Error) => {
        if (err) {
            return res.status(400).json({ 'message': err.message });
        }
        res.status(200).json(newEspecialidad);
    });
});


especialidadRouter.get('/', async (req: Request, res: Response)=>
    especialidadModel.findAll((err: Error, especialidad:Especialidad[])=>{
        if (err) {
            return res.status(400).json({'error Message': err.message});
        }
        res.status(200).json({'data': especialidad})
    }))


export { especialidadRouter };




