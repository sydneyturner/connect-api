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
  @get('/routes/town-route')
  async getTownRoute(@param.query.string('jwt') jwt: string): Promise<Routes[]> {
    if (!jwt) throw new HttpErrors.Unauthorized('JWT token is required.');
    var townRoute = await this.routesRepo.find({ where: { route: 'town-route' } });
    try {
      var jwtBody = verify(jwt, 'shh');
      return await this.routesRepo.find({ where: { route: 'town-route' } });

    } catch (err) {
      throw new HttpErrors.BadRequest('JWT token invalid');
    }
  }

  // for right now: this is the town-route
  @get('/routes')
  async getAllRoutes(): Promise<any> {
    var allRoutes = await this.routesRepo.find();
    // get all route coordinates
    return allRoutes;
  }

}
