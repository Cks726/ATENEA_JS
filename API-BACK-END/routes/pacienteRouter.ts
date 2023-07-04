import express, { Request, Response } from 'express';
import * as pacienteModel from '../controllers/paciente';
import { Paciente, BasicPaciente } from '../models/paciente';

const pacienteRouter = express.Router();

pacienteRouter.post('/', async (req: Request, res: Response) => {
    const newPaciente: Paciente = req.body;
    pacienteModel.create(newPaciente, (err: Error) => {
        if (err) {
            return res.status(400).json({ 'message': err.message });
        }
        res.status(200).json(newPaciente);
    });
});

pacienteRouter.get('/', async (req: Request, res: Response)=>
    pacienteModel.findAll((err: Error, paciente:Paciente[])=>{
        if (err) {
            return res.status(500).json({'error Message': err.message});
        }
        res.status(200).json({'data': paciente})
    }))

export { pacienteRouter };




