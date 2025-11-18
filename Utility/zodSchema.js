import {z} from 'zod';

export const zodSchema = z.object({
    task: z.string().trim().min(1, {message: "Enter task"})
})