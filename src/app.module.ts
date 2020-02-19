import { Module } from '@nestjs/common';
import { InvitingModule } from './inviting/inviting.module';

@Module({
  imports: [InvitingModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
