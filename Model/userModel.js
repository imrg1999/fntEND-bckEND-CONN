import {model, Schema} from "mongoose";

const todolistSchema = new Schema({
    task: {
        type: String,
        required: true,
        trim: true
    }
},{timestamps: true})

const todolistModel = model('list', todolistSchema);
export default todolistModel;