import {Module} from '@nestjs/common';
import {InvitingController} from './presentation/inviting.controller';
import {InMemoryInviteRepositoryRepository} from "./infrastructure/in-memory/in-memory-invite-repository.repository";
import {InviteApplicantToAssociationCommandHandler} from "./application/invite-applicant-to-association.command-handler";
import {InvitingService} from "./application/inviting.service";
import {SharedModule} from "../shared/shared.module";

@Module({
    imports:[SharedModule],
    controllers: [InvitingController],
    providers: [
        {
            provide: 'InvitationRepository',
            useClass: InMemoryInviteRepositoryRepository
        },
        InviteApplicantToAssociationCommandHandler,
        InvitingService
    ]
})
export class InvitingModule {
}
