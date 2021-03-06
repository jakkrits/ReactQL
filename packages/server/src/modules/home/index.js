// import express from 'express';
import Home from './sql';
import schema from './schema.graphql';
import createResolvers from './resolvers';
import Feature from '../connector';

export default new Feature({
  schema,
  createResolversFunc: createResolvers,
  createContextFunc: () => ({ Home: new Home() })
  // middleware: app => {
  //  app.use('/', express.static('/'));
  // }
});
