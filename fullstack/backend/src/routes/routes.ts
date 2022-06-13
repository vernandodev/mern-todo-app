import { Router } from "express";
import {getTodos, getTodo, addTodo, updateTodo, deleteTodo} from "../controller/TodoController";

const router = Router();

router.get('/api/todos', getTodos);

router.get('/api/todos/:id', getTodo);

router.post('/api/add-todo', addTodo);

router.put('/api/update-todo/:id', updateTodo);

router.delete('/api/delete-todo', deleteTodo);

export default router;