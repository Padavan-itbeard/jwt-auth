const UserModel = require('../models/user_model');
const bcrypt = require('bcrypt');
const uuid = require('uuid');
const mailService = require('../services/mail_service');
const tokenService = require('../services/token_service');
const UserDto = require('../dtos/user_dto');

class UserService {
    async registration(email, password) {
        const candidate = await UserModel.findOne({email});

        if (candidate) {
            throw new Error(`User with this ${email} already exist`);
        }

        const hashPassword = await bcrypt.hash(password, 3);
        const activationLink = uuid.v4(); // sdfs-asdfaa-asfass-sd-sss
        const user = await UserModel.create({email, password: hashPassword, activationLink});

        await mailService.sendActivationMail(email, activationLink);

        const userDto = new UserDto(user); // id, email, isActivated
        const tokens = tokenService.generateTokens({...userDto});

        await tokenService.saveToken(userDto.id, tokens.refreshToken);

        return {
            ...tokens,
            user: userDto
        }
    }
}

module.exports = new UserService();
