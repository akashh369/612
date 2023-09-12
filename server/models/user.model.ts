
import mongoose, {Schema,Model,model, Types} from "mongoose"


export interface IUser extends Document{
    username: String,
    email: String,
    password: String,
    following: Array<String>,
    profilePic: String,
    gender: String,
    dob:Date,
}

const UserSchema : Schema = new Schema({
=======
    profilePic: String
}

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    following:{
        type:Array,
        // required:true,
        trim: true
    },
    profilePic:{
        type:String,
        // required:true
    },
    gender:{
        type:String,
        require:true,
    },
    dob:{
        type:Date,
    }
},{
    timestamps:true
=======
        required:true
    },
    profilePic:{
        type:String,
        required:true
    }
})

export const User: Model<IUser> = model<IUser>('UserModel', UserSchema)
// module.exports = new mongoose.model('UserSchema', UserSchema)