import { Router } from "express";
import bodyParser, { json } from "body-parser";
import {getTodos, getTodo, addTodo, updateTodo, deleteTodo} from "../controller/TodoController";

const router = Router();

const jsonParser = bodyParser.json()

router.get('/api/todos', getTodos);

router.get('/api/todos/:id', getTodo);

router.post('/api/add-todo', jsonParser, addTodo);

router.put('/api/update-todo/:id', jsonParser, updateTodo);

router.delete('/api/remove-todo/:id', jsonParser, deleteTodo);

export default router;