import { Module } from '@nestjs/common';
import { InvitingModule } from './inviting/inviting.module';
import { InvitingApiModule } from './inviting-api/inviting-api.module';
import { InvitationsReadmodelModule } from './invitations-readmodel/invitations-readmodel.module';
import {CqrsModule} from "@nestjs/cqrs";
import { SharedModule } from './shared/shared.module';
import { InvitingNotificationModule } from './inviting-notification/inviting-notification.module';

@Module({
  imports: [InvitingModule, InvitingNotificationModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
