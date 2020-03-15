import {AggregateRoot} from "@nestjs/cqrs";
import {InvitationId} from "./invitation.repository";
import {ApplicantInvitedToAssociation} from "./applicant-invited-to-association.domain-event";
import {Email} from "./email.value-object";
import {FirstName} from "./first-name.value-object";

enum InvitationStatus {
    IN_PROGRESS,
    ACCEPTED
}

export class Invitation extends AggregateRoot {

    id: InvitationId;
    status: InvitationStatus | undefined;

    invite(firstName: FirstName, lastName: string, email: Email) {
        if(this.status === InvitationStatus.IN_PROGRESS){
            throw new Error();
        }
        this.apply(new ApplicantInvitedToAssociation(InvitationId.new(), email, firstName, lastName))
    }

    onApplicantInvitedToAssociation(event: ApplicantInvitedToAssociation) {
        this.id = event.aggregateId;
        this.status = InvitationStatus.IN_PROGRESS;
    }


}

