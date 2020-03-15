import {CommandHandler, ICommandHandler} from "@nestjs/cqrs";
import {Invitation} from "../domain/invitation";
import {InvitationRepository} from "../domain/invitation.repository";
import {Inject} from "@nestjs/common";
import {InviteApplicantToAssociationApiCommand} from "../../inviting-api/command/invite-applicant-to-association.api-command";
import {Email} from "../domain/email.value-object";
import {FirstName} from "../domain/first-name.value-object";

@CommandHandler(InviteApplicantToAssociationApiCommand)
export class InviteApplicantToAssociationCommandHandler implements ICommandHandler<InviteApplicantToAssociationApiCommand> {

    constructor(@Inject('InvitationRepository') private readonly invitationRepository: InvitationRepository) {
    }

    async execute(command: InviteApplicantToAssociationApiCommand) {
        const {email, firstName, lastName} = command;
        const something = new Invitation();
        something.invite(FirstName.from(firstName), lastName, Email.from(email));
        await this.invitationRepository.save(something);
        return something.id.raw;
    }


}
