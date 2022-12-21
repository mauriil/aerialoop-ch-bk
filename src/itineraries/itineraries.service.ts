import { HttpException, Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import csvToJson from 'src/utils/csvToJson';
import { ItinerariesDto } from './itineraries.dto';

@Injectable()
export class ItinerariesService {
  async findAll(): Promise<ItinerariesDto[]> {
    try {
      const itinerariecsv = readFileSync('./data/itinerarie/itineraries.csv', 'utf8');
      return csvToJson(itinerariecsv);
    } catch (error) {
      // eslint-disable-next-line prettier/prettier
      console.error('file: flights.service.ts:13 ~ FlightsService ~ findOne ~ error', error);
      if (error.name === 'HttpException') {
        throw new HttpException(error.message, 422);
      } else {
        throw new HttpException('Something went wrong', 422);
      }
    }
  }

  async findOne(id: number): Promise<ItinerariesDto> {
    try {
      const itinerariecsv = readFileSync('./data/itinerarie/itineraries.csv', 'utf8');
      const itineraries = csvToJson(itinerariecsv);
      return itineraries.filter((itinerary) => {
        return +itinerary['itinerary ID'] === id;
      })[0];
    } catch (error) {
      // eslint-disable-next-line prettier/prettier
      console.error('file: flights.service.ts:13 ~ FlightsService ~ findOne ~ error', error);
      if (error.name === 'HttpException') {
        throw new HttpException(error.message, 422);
      } else {
        throw new HttpException('Something went wrong', 422);
      }
    }
  }
}
