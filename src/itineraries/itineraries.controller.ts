import { Controller, Get, HttpCode, Param } from '@nestjs/common';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ItinerariesDto } from './itineraries.dto';
import { ItinerariesService } from './itineraries.service';
@ApiTags('Itineraries')
@Controller('itineraries')
export class ItinerariesController {
  constructor(private readonly itinerariesService: ItinerariesService) {}

  @Get()
  @ApiOkResponse({ type: [ItinerariesDto] })
  @HttpCode(200)
  async getAll(): Promise<string[]> {
    return this.itinerariesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ItinerariesDto })
  @HttpCode(200)
  async getOne(@Param('id') id: string): Promise<any> {
    return this.itinerariesService.findOne(+id);
  }
}
