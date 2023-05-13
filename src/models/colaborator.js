import mongoose from "mongoose";

const colaboratorSchema = mongoose.Schema({
        id: {
            type: String,
            required: true,
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
        timestamps: true,
    }
);

const Colaborator = mongoose.model("Colaborator", colaboratorSchema);

export default Colaborator;