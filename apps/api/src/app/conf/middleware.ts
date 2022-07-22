import { AuthenticationError } from "apollo-server-express";
import jwt = require("jsonwebtoken");

export const isAuthorized = (parent, args, context) => {
  const token = context.req.headers.authorization || '';

  try {
    const { id } = jwt.verify(token, process.env['JWT_SECRET']) as { id: string };
    return { id };
  } catch (e) {
    throw new AuthenticationError('Authentication error');
  }
};

