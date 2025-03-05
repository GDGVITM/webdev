import nodemailer from 'nodemailer';
import User from '../model/user.model.js'
import bcryptjs from 'bcryptjs';

export const sendMail = async (email, emailType, userId) => {
    try {
        if(!['verify','forget'].includes(emailType)){
            throw new Error('Invalid email type');
        }
        const user = await User.findById(userId);
        if(!user){
            throw new Error('User not found');
        }

        const token = await bcryptjs.hash(userId.toString(), 10);
        const tokenField = emailType === 'verify' ? 'emailVerificationToken' : 'passwordResetToken';
        const expiryField = emailType === 'verify' ? 'emailVerificationTokenExpiry' : 'passwordResetTokenExpiry';
        user[tokenField] = token;
        user[expiryField] = Date.now() + 3600000;
        await user.save();

        const domain = process.env.DOMAIN || 'http://localhost:3000';
        if (!domain) {
            throw new Error('Domain not found');
        }
        const transporter = nodemailer.createTransport({
            host : "smtp.ethereal.email",
            port : 587,
            secure : false,
            auth :{
                user: 'dante.gottlieb@ethereal.email',
                pass: 'kTHNDaXEKuvJpESfqn'
            },
        });
        const link = `${domain}/auth/${emailType}/${token}`;
        const mailOptions = {
            from: 'xyz@gmail.com',
            to: email,
            subject: emailType === 'verify' ? 'Email Verification' : 'Password Reset',
            html:`
                <h1>${emailType === 'verify' ? 'Email Verification' : 'Password Reset'}</h1>
                <p>Click <a href="${link}">here</a> to ${emailType === 'verify' ? 'verify' : 'reset'} your account</p>
            `,
        };
        const mailResponse = await transporter.sendMail(mailOptions);
        return mailResponse;
        
    } catch (error) {
        throw new Error(`Failed to send email: ${error.message}`);
    }
};