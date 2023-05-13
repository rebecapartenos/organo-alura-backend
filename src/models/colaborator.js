import mongoose from "mongoose";

const colaboratorSchema = mongoose.Schema({
        id: {
            type: String
        },
        name: {
            type: String,
            required: true,
        },
        office: {
            type: String,
            required: true,
        },
        team: {
            type: String,
            required: true,
        }
    },
    {
        versionKey: false
    }
);

const Colaborator = mongoose.model("Colaborator", colaboratorSchema);

export default Colaborator;