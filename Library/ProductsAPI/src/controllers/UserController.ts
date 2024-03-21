// controllers/UserController.ts

import { Request, Response } from 'express';
import UserModel, {User} from '../models/UserModel';

// Create a user
export const createUser = async (req:Request,res:Response) => {
  try {
    const user = await UserModel.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read all Users
export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserModel.find();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Read user by ID
export const getUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Update user by ID
export const updateUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Delete User by ID
export const deleteUserById = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};


export const signUp = async(req: Request,res: Request,next: Request) =>{
  const { name , email} = req.body;
  let existingUser;
  try{
   existingUser = await UserModel.findOne({email})
  }catch(e){
    console.error(e);
  }

  if(existingUser){
    // return res.status(404).json({ message: 'User not found' });
  }

  const user = new UserModel({
      name,email,
  });

  try{
      user.save();
    //  return res.status(201).json({ user })
  }
  catch(e){console.log(e);}
}

export const logIn = async(req:Request,res:Request,next:Request) => {
   const {email } = req.body;
   
   let existingUser;

   try{
    existingUser = await UserModel.findOne({email})
   } catch(e){console.log(e);}
   if(!existingUser){
     //  return res.status(404).json({message : "User is not found"})
   }
  }
