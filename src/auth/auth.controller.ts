import { Controller, Post, Body, Res, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UsersService } from '../users/users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService
  ) { }

  @Post('register')
  async register(@Body() createUserDto: CreateUserDto, @Res() res) {
    const hashedPassword = await this.authService.hashPassword(createUserDto.password);
    const user = await this.usersService.create({ ...createUserDto, password: hashedPassword });
    return res.status(HttpStatus.CREATED).send({ message: 'Usuário registrado com sucesso', user });
  }

  @Post('login')
  async login(@Body() loginDto: LoginDto, @Res() res) {
    const user = await this.authService.validateUser(loginDto.username, loginDto.password);
    if (!user) {
      return res.status(HttpStatus.UNAUTHORIZED).send({ message: 'Credenciais inválidas' });
    }
    const token = await this.authService.login(user);
    res.cookie('jwt', token.access_token, { httpOnly: true });
    return res.send({ message: 'Login realizado com sucesso' });
  }
}