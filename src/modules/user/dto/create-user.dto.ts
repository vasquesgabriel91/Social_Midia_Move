import { IsNotEmpty, IsString, MinLength, IsEmail, Matches } from "class-validator";

class CreateUserDto {
    private static readonly passwordRegEx = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;

    @IsString()
    @IsNotEmpty()
    @MinLength(2, { message: 'Name must have atleast 2 characters.' })
    name:string

    @IsNotEmpty()
    @MinLength(3, { message: 'Username must have atleast 3 characters.' })
    username: string;

    @IsNotEmpty()
    @IsEmail({}, { message: 'Please provide valid Email.' })
    email: string;

    @IsString()
    birth_date: number;

    @IsNotEmpty()
    @IsString()
    @Matches(CreateUserDto.passwordRegEx, {
      message: `Password must contain Minimum 8 and maximum 20 characters, 
        at least one uppercase letter, 
        one lowercase letter, 
        one number and 
        one special character`,
  })
  password: string;

}

export {CreateUserDto};
