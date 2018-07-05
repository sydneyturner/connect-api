// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { repository } from "@loopback/repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
import { request } from "http";
// import {Login} from '../models/login';
import { sign, verify } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import { Driver } from '../models/driver';
import { DriverRepository } from "../repositories/driver.repository";

export class LoginController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository,
    @repository(DriverRepository.name) private driverRepo: DriverRepository) { }

  @post('/loginUser')
  async loginUser(@requestBody() login: User): Promise<any> {
    var users = await this.userRepo.find();

    var email = login.email;
    var password = await bcrypt.hash(login.password, 10);

    for (var i = 0; i < users.length; i++) {
      var user = users[i];

      // find the user by email address if not...(look at Perry's code)

      if (user.email == email && await bcrypt.compare(login.password, user.password)) {

        var jwt = sign(
          {
            user: {
              id: user.id,
              firstname: user.firstname,
              lastname: user.lastname,
              email: user.email
            },
            anything: "hello",
          },
          'shh',
          {
            issuer: 'auth.ix.co.za',
            audience: 'ix.co.za',
          },
        );
        console.log(jwt);
        return {
          token: jwt,
        };
      }
    }

    throw new HttpErrors.NotFound('User not found, sorry!');
  }

  @post('/loginDriver')
  async loginDriver(@requestBody() login: Driver): Promise<any> {
    var drivers = await this.driverRepo.find();

    var email = login.email;
    var password = await bcrypt.hash(login.password, 10);

    for (var i = 0; i < drivers.length; i++) {
      var driver = drivers[i];

      // find the user by email address if not...(look at Perry's code)

      if (driver.email == email && await bcrypt.compare(login.password, driver.password)) {

        var jwt = sign(
          {
            user: {
              id: driver.id,
              firstname: driver.firstname,
              lastname: driver.lastname,
              email: driver.email
            },
            anything: "hello",
          },
          'shh',
          {
            issuer: 'auth.ix.co.za',
            audience: 'ix.co.za',
          },
        );
        console.log(jwt);
        return {
          token: jwt,
        };
      }
    }

    throw new HttpErrors.NotFound('Driver not found, sorry!');
  }
}


