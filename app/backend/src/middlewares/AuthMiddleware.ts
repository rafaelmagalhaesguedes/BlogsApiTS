import { NextFunction, Request, Response } from 'express';
import JwtService from '../utils/JwtService';

class AuthMiddleware {
  //
  public static validateToken(req: Request, res: Response, next: NextFunction) {
    //
    const { authorization } = req.headers;
    if (!authorization) return res.status(401).json({ message: 'Token not found' });

    try {
      const token = JwtService.splitToken(authorization);
      const payload = JwtService.verifyToken(token);
      res.locals.user = payload;
    } catch (error) {
      console.log('Error validate token!', error);
      return res.status(401).json({ message: 'Token must be a valid token' });
    }

    next();
  }
}

export default AuthMiddleware.validateToken;
