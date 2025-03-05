import bcryptjs from 'bcryptjs';
import { verify } from 'jsonwebtoken';
import User from '../model/user.model.js';

export async function hashPassword(password) {
  return await bcryptjs.hash(password, 12);
}   

export async function verifyPassword(password, hashedPassword) {
    return await bcryptjs.compare(password, hashedPassword);
}

export async function userVerify(token,emailType,password){
    const decodedToken = verify(token, process.env.JWT_SECRET);
    if(emailType=='verify'){
        user = await User.findOne({
            verifyToken: token,
            verifyTokenExpiration: { $gt: Date.now() },
          });

          if(!user){
              throw new Error('Token is invalid');
          }
            user.isVerified = true;
            user.verifyToken = undefined;
            user.verifyTokenExpiration = undefined;

            await user.save();
            return user;
        }
        else if(emailType=='forgot'){
            if(!password){
                throw new Error('Password is required');
            }
            user = await User.findOne({
                forgotPasswordToken: token,
                forgotPasswordTokenExpiration: { $gt: Date.now() },
              });

              if(!user){
                  throw new Error('Token is invalid');
              }
              user.password = await hashPassword(password);
                user.forgotPasswordToken = undefined;
                user.forgotPasswordTokenExpiration = undefined;

                await user.save();
                return user;

        }
    
}
