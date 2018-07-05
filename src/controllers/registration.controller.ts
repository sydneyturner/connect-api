// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { repository } from "@loopback/repository";
import { post, get, requestBody, HttpErrors } from "@loopback/rest";
import { User } from "../models/user";
import { UserRepository } from "../repositories/user.repository";
import * as bcrypt from 'bcrypt';
import { Driver } from "../models/driver";
import { DriverRepository } from "../repositories/driver.repository";

export class RegistrationController {
  constructor(@repository(UserRepository.name) private userRepo: UserRepository,
    @repository(DriverRepository.name) private driverRepo: DriverRepository) { }

  @post('/registerUser')
  async createNewUser(@requestBody() user: User) {

    // Check required fields
    if (!user.email || !user.password) {
      throw new HttpErrors.BadRequest('missing data');
    }

    // Check that user does not already exist
    let userExists: boolean = !!(await this.userRepo.count({ email: user.email }));

    if (userExists) {
      throw new HttpErrors.BadRequest('user already exists');
    }

    let hashedPassword = await bcrypt.hash(user.password, 10);

    var userToStore = new User();

    userToStore.firstname = user.firstname;
    userToStore.lastname = user.lastname;
    userToStore.email = user.email;
    userToStore.password = hashedPassword;


    let storedUser = await this.userRepo.create(userToStore);
    storedUser.password = "";
    return storedUser;
  }


  @post('/registerDriver')
  async createNewDriver(@requestBody() driver: Driver) {

    // Check required fields
    if (!driver.email || !driver.password) {
      throw new HttpErrors.BadRequest('missing data');
    }

    // Check that user does not already exist
    let driverExists: boolean = !!(await this.driverRepo.count({ email: driver.email }));

    if (driverExists) {
      throw new HttpErrors.BadRequest('driver already exists');
    }

    let hashedPassword = await bcrypt.hash(driver.password, 10);

    var driverToStore = new Driver();

    driverToStore.firstname = driver.firstname;
    driverToStore.lastname = driver.lastname;
    driverToStore.email = driver.email;
    driverToStore.password = hashedPassword;


    let storedDriver = await this.driverRepo.create(driverToStore);
    storedDriver.password = "";
    return storedDriver;
  }




}
