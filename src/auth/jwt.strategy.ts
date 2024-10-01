
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request) => request?.cookies?.jwt,
      ]),
      ignoreExpiration: false,
      secretOrKey: 'SECRET_KEY', // Substitua por uma variável de ambiente em produção
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, username: payload.username };
  }
}