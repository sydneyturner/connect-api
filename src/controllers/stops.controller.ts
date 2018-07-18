// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { repository } from "@loopback/repository";
import { StopsRepository } from "../repositories/stops.repository";
import { post, get, requestBody, HttpErrors, param, put, patch } from "@loopback/rest";
import { Stops } from "../models/stops";
import { verify } from "jsonwebtoken";

export class StopsController {
  constructor(@repository(StopsRepository.name) private stopsRepo: StopsRepository) { }

  // get stops by town route
  @get('/stops/town-route')
  async getStopsByTownRoute(): Promise<Array<Stops>> {
    var townStops = await this.stopsRepo.find({ where: { route: 'town-route' } })
    return townStops;
  }

  @get('/stops')
  async getAllStops(): Promise<any> {
    var allStops = await this.stopsRepo.find();
    return allStops;
  }

  // get town-route lat and lng
  // @get('/stops/town-route/lat-lng')
  // async getTownLatLng(): Promise<any> {
  //   var townLatLng = await this.stopsRepo.find();

  //   return townLatLng;
  // }


}
