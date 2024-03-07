import mongoose, { Document, model, Schema } from 'mongoose'

export interface IUser extends Document {
    name: string
    email: string
    password: string
    isActivated: boolean
    activationLink: string
}

const UserSchema: Schema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isActivated: { type: Boolean, default: false },
    activationLink: { type: String }
})

export default mongoose.model<IUser>('User', UserSchema)
