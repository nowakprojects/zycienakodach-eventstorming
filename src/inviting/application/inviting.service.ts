import {CommandBus} from "@nestjs/cqrs";
import {Injectable} from "@nestjs/common";
import {InviteApplicantToAssociationApiCommand} from "../../inviting-api/command/invite-applicant-to-association.api-command";

@Injectable()
export class InvitingService {

    constructor(private commandBus: CommandBus) {
    }

    execute(command: InviteApplicantToAssociationApiCommand) {
        console.log(command);
        return this.commandBus.execute(command)
    }

}
