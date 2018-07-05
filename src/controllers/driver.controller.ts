// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { repository } from "@loopback/repository";

import { post, get, requestBody, HttpErrors, param, put, patch } from "@loopback/rest";
import { sign, verify } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { DriverRepository } from "../repositories/driver.repository";
import { Driver } from "../models/driver";

export class DriverController {
  constructor(@repository(DriverRepository.name) private driverRepo: DriverRepository) { }

  @get('/drivers')
  async getAllDrivers(@param.query.string('jwt') jwt: string): Promise<any> {
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required');

    try {
      var jwtBody = verify(jwt, 'shh');
      console.log(jwtBody);
      return jwtBody;
    } catch (err) {
      throw new HttpErrors.Unauthorized('JWT token is required');

    }

  }

  //http://localhost:3000/me?jwt=thetoken

  @get('/driver')
  async getDriver(@param.query.string('jwt') jwt: string): Promise<any> {
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required');
    try {
      var jwtDriver = verify(jwt, 'shh');
      console.log(jwtDriver);
      return jwtDriver;
    } catch (err) {
      throw new HttpErrors.Unauthorized('JWT token is required');

    }
  }


  // edit Profile
  @patch('/editDriver')
  async editDrivreInfo(@param.query.string('jwt') jwt: string, @requestBody() obj: Partial<Driver>): Promise<any> {
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required');
    try {
      var jwtBody = verify(jwt, 'shh') as any;
      await this.driverRepo.updateById(jwtBody.driver.id, obj);
      var updatedDriver = await this.driverRepo.findById(jwtBody.driver.id);

      // if (updatedUser.password.)
      if (updatedDriver.password.length < 12) {
        let hashedPassword = await bcrypt.hash(updatedDriver.password, 10);
        obj.password = hashedPassword;
        await this.driverRepo.updateById(updatedDriver.id, obj);
      }
      var jwt = sign({
        user: {
          id: updatedDriver.id,
          firstname: updatedDriver.firstname,
          lastname: updatedDriver.lastname,
          email: updatedDriver.email
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
}
