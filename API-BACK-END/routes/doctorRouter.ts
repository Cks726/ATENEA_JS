import express, { Request, Response } from 'express';
import * as doctorModel from '../controllers/doctor';
import { Doctor, BasicDoctor } from '../models/doctor';

const doctorRouter = express.Router();

doctorRouter.post('/', async (req: Request, res: Response) => {
    const newDoctor: Doctor = req.body;
    doctorModel.create(newDoctor, (err: Error) => {
        if (err) {
            return res.status(400).json({ 'message': err.message });
        }
        res.status(200).json(newDoctor);
    });
});


doctorRouter.get('/', async (req: Request, res: Response)=>
    doctorModel.findAll((err: Error, doctor:Doctor[])=>{
        if (err) {
            return res.status(400).json({'error Message': err.message});
        }
        res.status(200).json({'data': doctor})
    }))

    export { doctorRouter };



