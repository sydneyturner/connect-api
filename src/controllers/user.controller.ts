// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { repository } from "@loopback/repository";
import { UserRepository } from "../repositories/user.repository";
import { post, get, requestBody, HttpErrors, param, put, patch } from "@loopback/rest";
import { sign, verify } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { User } from "../models/user";
import { DriverRepository } from "../repositories/driver.repository";
import { Driver } from "../models/driver";

export class UserController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository,
    @repository(DriverRepository.name) private driverRepo: DriverRepository) { }

  @get('/users')
  async getAllUsers(@param.query.string('jwt') jwt: string): Promise<any> {
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required');
    var allUsers = await this.userRepo.find();
    try {
      var jwtBody = verify(jwt, 'shh');
      console.log(jwtBody);
      return await this.userRepo.find();
    } catch (err) {
      throw new HttpErrors.Unauthorized('JWT token is required');

    }
    // return await this.userRepo.find();
  }

  //http://localhost:3000/me?jwt=thetoken

  @get('/me')
  async getMe(@param.query.string('jwt') jwt: string): Promise<any> {
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required');
    try {
      var jwtUser = verify(jwt, 'shh');
      console.log(jwtUser);
      return jwtUser;
    } catch (err) {
      throw new HttpErrors.Unauthorized('JWT token is required');

    }
  }

  // @del('/users')
  // async delAllUsers(@param.query.string('jwt') jwt: string): Promise<any>{
  //   if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required');
  //   try {

  //   }
  // }

  // edit Profile
  @patch('/editUser')
  async editUserInfo(@param.query.string('jwt') jwt: string, @requestBody() obj: Partial<User>): Promise<any> {
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required');
    try {
      var jwtBody = verify(jwt, 'shh') as any;
      await this.userRepo.updateById(jwtBody.user.id, obj);
      var updatedUser = await this.userRepo.findById(jwtBody.user.id);

      // if (updatedUser.password.)
      if (updatedUser.password.length < 12) {
        let hashedPassword = await bcrypt.hash(updatedUser.password, 10);
        obj.password = hashedPassword;
        await this.userRepo.updateById(updatedUser.id, obj);
      }
      var jwt = sign({
        user: {
          id: updatedUser.id,
          firstname: updatedUser.firstname,
          lastname: updatedUser.lastname,
          email: updatedUser.email
        },
      },
        'shh',
        {
          issuer: 'auth.ix.co.za',
          audience: 'ix.co.za',
        },

      );
      console.log(jwt)
      return {
        token: jwt,
      };
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }

  }

  // later: move to ride controller

  // // want to return a Driver
  // @get('getDriver')
  // async getDriver(@param.query.string('jwt') jwt: string): Promise<any> {
  //   try {
  //     var jwtDriver = verify(jwt, 'shh' as any);
  //     console.log(jwtDriver);
  //     return jwtDriver;
  //     // var driverID = await this.driverRepo.findById(1); // need to change this
  //   }
  //   catch (err) {
  //     console.log(err);
  //     throw new HttpErrors.BadRequest('JWT token invalid');
  //   }
  // }
}

