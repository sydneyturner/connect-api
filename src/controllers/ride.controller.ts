// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { repository } from "@loopback/repository";
import { RideRepository } from "../repositories/ride.repository";
import { post, get, requestBody, HttpErrors, param, put, patch } from "@loopback/rest";
import { Ride } from "../models/ride";
import { verify } from "jsonwebtoken";

export class RideController {
  constructor(@repository(RideRepository.name) private ridesRepo: RideRepository) { }

  // get endpoint
  @get('/get-rides')
  async getAllRides(@param.query.string('jwt') jwt: string): Promise<any> {
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');
    var allRides = await this.ridesRepo.find();
    try {
      var jwtBody = verify(jwt, 'shh');
      return await this.ridesRepo.find();
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }
  }

  @get('/ride')
  async getRideByID(@param.query.string('jwt') jwt: string,
    @param.path.number('id') id: number): Promise<any> {
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');
    var ride = await this.ridesRepo.findById(id);
    try {
      var jwtBody = verify(jwt, 'shh');
      return await this.ridesRepo.findById(id);
    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid')
    }
  }

  @get('/rides-by-user')
  async getRidesByUser(@param.query.string('jwt') jwt: string) {

  }


  // creating new Ride from the user app when user
  @post('/ride')
  async createNewRide(@requestBody() newRide: Ride, @param.query.string('jwt') jwt: string,
    @param.query.number('userID') driverID: number): Promise<any> {
    if (!jwt) {
      throw new HttpErrors.Unauthorized('JWT token is required.');
    }
    try {
      var jwtBody = verify(jwt, 'shh') as any;
      console.log(jwtBody);

      newRide.userID = jwtBody.user.id;
      newRide.driverID = driverID;
      console.log(jwtBody);
      console.log(driverID);
      var ride = this.ridesRepo.create(newRide);
      return ride;
    }
    catch (err) {
      console.log(err);
      throw new HttpErrors.BadRequest('JWT token invalid');
    }

  }
}
