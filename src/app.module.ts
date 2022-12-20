import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItinerariesModule } from './itineraries/itineraries.module';
import { FlightsModule } from './flights/flights.module';

@Module({
  imports: [ItinerariesModule, FlightsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
