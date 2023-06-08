import { ApiProperty } from '@nestjs/swagger';

export class CreateStaffsDto {
  @ApiProperty({ example: "Toshmat" })
	full_name: string;

	@ApiProperty({ example: "https://picsum.photos/1000/1000" })
	image: string;

	@ApiProperty({ example: "887038006" })
	phone: string;

	@ApiProperty({ example: "123login" })
	login: string;

	@ApiProperty({ example: "123password" })
	password: string;

	@ApiProperty({ example: "" })
	role_id: number;

	@ApiProperty({ example: "email@gmail.com" })
	email: string;

	@ApiProperty({ example: "@userDEV" })
	tg_name: string;

	@ApiProperty({ example: "" })
	token: string;

	
}
