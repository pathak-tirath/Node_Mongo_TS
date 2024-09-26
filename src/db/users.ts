import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username: { String, required: true },
    email: { String, required: true },
    authentication: {
        password: { String, required: true, select: false },
        salt: { String, select: false },
        sessionToken: { String, select: false },
    }
})