import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class FlightsDto {
  @ApiProperty({
    example: '646278309',
    description: 'Sample time in microseconds)',
    maxLength: 15,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(15)
  @MinLength(1)
  public 'TIME_StartTime': string;

  @ApiProperty({
    example: '49.15156173706055',
    description: 'Filtered voltage in V',
    maxLength: 50,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(1)
  public 'BATT_VFilt': string;

  @ApiProperty({
    example: '3.9139437675476074',
    description: 'Filtered current in A',
    maxLength: 50,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(1)
  public 'BATT_CFilt': string;

  @ApiProperty({
    example: '99.47522735595703',
    description: 'Discharged capacity in mAh',
    maxLength: 50,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(1)
  public 'BATT_Discharged': string;

  @ApiProperty({
    example: '0.9789615273475647',
    description: 'In percent',
    maxLength: 50,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(1)
  public 'BATT_Remaining': string;

  @ApiProperty({
    example: '0.9546699523925781',
    description: 'In percent',
    maxLength: 50,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(50)
  @MinLength(1)
  public 'BATT_RemainingV': string;

  @ApiProperty({
    example: '0',
    description: 'Integer BAT warning code',
    maxLength: 2,
    minLength: 1,
  })
  @IsString()
  @IsNotEmpty()
  @MaxLength(2)
  @MinLength(1)
  public 'BATT_Warning': string;
}
