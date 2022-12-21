import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FlightsDto } from './flights.dto';
import { FlightsService } from './flights.service';
import { FlightData } from './flights.types';
@ApiTags('Flights')
@Controller('flights')
export class FlightsController {
  constructor(private readonly flightsService: FlightsService) {}

  @Get(':fileName')
  @ApiOkResponse({ type: FlightsDto, isArray: true })
  @HttpCode(200)
  async getOne(@Param('fileName') fileName: string): Promise<FlightData[]> {
    return this.flightsService.findOne(fileName);
  }
}
