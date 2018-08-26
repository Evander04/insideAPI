import mongoose from 'mongoose';
const Schema = mongoose.Schema;
const userModel = new Schema({
    user: { type: String  },
    email: { type: String },
    pass: { type: String }
})
export default mongoose.model('users', userModel)