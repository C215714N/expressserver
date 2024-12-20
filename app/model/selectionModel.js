import * as slice from "./selectionSlices.js"
import mongoose, { Schema, Model } from "mongoose";

const selectionSchema = new Schema({
    gender:String,
    name: slice.Name,
    location: slice.Location,
    email: String,
    login: slice.Login,
    dob: slice.DateObj,
    registered: slice.DateObj,
    phone: String,
    cell: String,
    id: slice.ID,
    picture: slice.Picture,
    nat: String
})
const selectionModel = mongoose.model('Selection', selectionSchema)
export default selectionModel;