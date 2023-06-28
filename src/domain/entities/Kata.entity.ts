import mongoose from "mongoose";

export const kataEntity = () => {
    let kataSchema = new mongoose.Schema({
        name: String,
        chances: Number,
        date: Date,
        description: String,
        level: Number,
        valoration: Number
    })
}