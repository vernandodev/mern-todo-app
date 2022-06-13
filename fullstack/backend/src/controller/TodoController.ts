import { Request, Response } from "express";

import TodoModel from "../models/todo";
import { Todo } from "../types/todo";

export const getTodos = async (req: Request, res: Response) => {
     const todos: Todo[] = await TodoModel.find()

     res.status(200).json({ todos })
};

export const getTodo = async (req: Request, res: Response) => {
    await TodoModel.findById(req.params.id, (err, result) => {
        if (err) {
            res.status(400).json({
                error: err
            })
        }else {
            res.status(200).json({
                result
            })
        }
    })
}