// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { repository } from "@loopback/repository";
import { RoutesRepository } from "../repositories/routes.repository";
import { post, get, requestBody, HttpErrors, param, put, patch } from "@loopback/rest";
import { Routes } from "../models/routes";
import { verify } from "jsonwebtoken";

export class RoutesController {
  constructor(@repository(RoutesRepository.name) private routesRepo: RoutesRepository) { }


  // town route
  @get('/town-route')
  async getTownRoute(@param.query.string('jwt') jwt: string): Promise<Routes[]> {
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');
    var townRoute = await this.routesRepo.find();
    try {
      var jwtBody = verify(jwt, 'shh');
      return await this.routesRepo.find();

    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }
  }

}
