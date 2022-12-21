import { HttpException, Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import csvToJson from 'src/utils/csvToJson';
import { FlightData } from './flights.types';

@Injectable()
export class FlightsService {
  async findOne(fileName: string): Promise<FlightData[]> {
    try {
      const flightCsv = readFileSync(`./data/flight/${fileName}`, 'utf8');
      return csvToJson(flightCsv);
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
