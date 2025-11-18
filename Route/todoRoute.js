import express from 'express';
import { showAllTask, addNewTask, deleteTask } from '../Controller/todoController.js';

const route = express.Router();

route.get('/tasks',showAllTask);
route.post('/add',addNewTask);
route.delete('/delete/:id',deleteTask);


export default route;