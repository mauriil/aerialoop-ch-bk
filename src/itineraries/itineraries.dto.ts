import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class ItinerariesDto {
  @ApiProperty({
    example: '1',
    description: 'The ID of the itinerary',
    maxLength: 10,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(1)
  public 'itinerary ID': string;

  @ApiProperty({
    example: '25200000',
    description: 'The day starting time in milliseconds since midnight',
    maxLength: 10,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(10)
  @MinLength(1)
  public ' day starting time in milliseconds since midnight': string;

  @ApiProperty({
    example: 'CYA',
    description: 'The from location',
    maxLength: 10,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  @MinLength(1)
  public ' from location': string;

  @ApiProperty({
    example: 'CYA',
    description: 'The to location',
    maxLength: 10,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  @MinLength(1)
  public ' to location': string;

  @ApiProperty({
    example: 'flight-1.csv',
    description: 'The flight data file',
    maxLength: 10,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(5)
  @MinLength(1)
  public ' flight data file': string;
}
