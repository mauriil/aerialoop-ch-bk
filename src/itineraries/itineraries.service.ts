import { Injectable } from '@nestjs/common';
import { readFileSync } from 'fs';
import csvToJson from 'src/utils/csvToJson';

@Injectable()
export class ItinerariesService {
  async findAll(): Promise<any> {
    const itinerariecsv = readFileSync(
      './data/itinerarie/itineraries.csv',
      'utf8',
    );
    return csvToJson(itinerariecsv);
  }

  findOne(id: number) {
    const itinerariecsv = readFileSync(
      './data/itinerarie/itineraries.csv',
      'utf8',
    );
    const itineraries = csvToJson(itinerariecsv);
    return itineraries.filter((itinerary) => {
      return +itinerary['itinerary ID'] === id;
    });
  }
}
