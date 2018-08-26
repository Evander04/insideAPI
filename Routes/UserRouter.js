import express from 'express';
import User from '../models/UserModel';

const userRouter = express.Router();
userRouter.route('/')
    .get((req,res) => {
        User.find({},(err,users)=>{
            res.json(users);
        });
    })
    .post((req, res) => {
        let user = new User(req.body);
        user.save();
        res.status(201).send(user); 
    });
userRouter.route('/:userId')
    .get((req, res) => {
        User.findById(req.params.userId, (err, user) => {            
            res.json(user);
        });  
        /*User.find({_id:req.params.userId},(err,user)=>{
            res.json(user);
        });*/        
    })
    .put((req,res)=>{
        User.findById(req.params.userId, (err, user) => {            
            user.user=req.body.user;
            user.email=req.body.email;
            user.pass=req.body.pass;            
            user.save();
            res.json(user);            
        });                
    });
export default userRouter;