import { ZodError } from "zod";
import todolistModel from "../Model/userModel.js";
import { zodSchema } from "../Utility/zodSchema.js";

export const showAllTask = async(req,res) => {
    try{
        const allTasks = await todolistModel.find();
        if(!allTasks || allTasks.length === 0) {
            return res.status(400).json({
                success: false,
                message: "No tasks listed",
                tasks: []
            })
        }
        res.status(200).json({
            success: true,
            message: "The tasks are depicated as",
            tasks: allTasks
        })
    } catch(error) {
        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}

export const addNewTask = async(req, res) => {
    try{
        const taskFormat = await zodSchema.parseAsync(req.body);
        const newTask = await todolistModel.create({
            ...taskFormat
        })
        if(!newTask) {
        return res.status(400).json({
                success: false,
                message: "No Tasks added"
            })
        }
        res.status(201).json({
            success: true,
            message: "New task added successfully",
            id: newTask._id,
            task: newTask.task
        })
    } catch(error) {
        if(error instanceof ZodError) {
        return res.status(400).json({
            success: false,
            message: "Invalid Request",
            error: error.issues
        })
        } else {
            res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
        }
    }
}

export const deleteTask = async(req,res) => {
    try{
        const {id} = req.params;
        const deleteOne = await todolistModel.findByIdAndDelete(id);
        if(!deleteOne) {
        return res.status(404).json({
                success: false,
                message: "Data wasn't deleted"
            })
        }
        res.status(200).json({
            success: true,
            message: "Data deleted successfully"
        })
    } catch(error) {
            res.status(500).json({
            success: false,
            message: "Internal Server Error"
        })
    }
}