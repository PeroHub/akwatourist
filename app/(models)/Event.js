import mongoose from "mongoose";

const EventSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
        },
        venue: {
            type: String,
            required: true
        },
        status: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            enum: ["Technology", "Health", "Education", "Entertainment", "Business"],
            required: true,
        },
        picture: {
            type: String,
            required: true
        },
    },
    {
        timestamps: true,
    }
);

export default mongoose.models.Event || mongoose.model("Event", EventSchema);