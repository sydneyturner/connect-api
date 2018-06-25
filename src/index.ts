import {ConnectApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {ConnectApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new ConnectApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
