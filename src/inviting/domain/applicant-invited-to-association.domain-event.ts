import {IEvent} from "@nestjs/cqrs";
import {InvitationId} from "./invitation.repository";
import {Email} from "./email.value-object";
import {FirstName} from "./first-name.value-object";

export class ApplicantInvitedToAssociation implements IEvent {
    readonly aggregateId: InvitationId;
    readonly email: Email;
    readonly firstName: FirstName;
    readonly lastName: string;

    constructor(aggregateId: InvitationId, email: Email, firstName: FirstName, lastName: string) {
        this.aggregateId = aggregateId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
