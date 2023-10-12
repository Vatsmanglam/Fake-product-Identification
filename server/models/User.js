import mongoose  from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true,
        maxlength:[40,'Name should be under 40 characters.']
    },
    email:{
        type:String,
        required:[true,'Please provide an email'],
        validate:[validator.isEmail,'Please enter email in correct format'],
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:[6,"Password should be of atleast 6 characters."],
        // select:false
    },
    role:{
        type: [{
            type: String,
            enum: ['admin', 'user']
        }],
        default: ['user']
    },
    forgotPasswordToken:String,
    forgotPasswordExpiry:Date
},
{
    timestamps:true
})

userSchema.pre('save',async function(next) {
    if (!this.isModified('password')){
        return next();
    } 
    this.password=await bcrypt.hash(this.password,10)
})

userSchema.methods.isValidatedPassword= async function(usersendPassword, password){
    return await bcrypt.compare(usersendPassword,password);
}

userSchema.methods.getJwtToken=function(){
    return jwt.sign({id:this._id},process.env.JWT_SECRET,{
        expiresIn:process.env.JWT_EXPIRY
    })
}

userSchema.methods.getForgotPasswordToken = function(){
    const forgotToken = crypto.randomBytes(20).toString("hex");

    this.forgotPasswordToken=crypto.createHash("sha256").update(forgotToken).digest("hex")

    this.forgotPasswordExpiry=Date.now()+20*60*1000;

    return forgotToken;
}

const User = mongoose.model("User",userSchema);
export default User;