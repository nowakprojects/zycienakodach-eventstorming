import {EventBus, EventPublisher, EventsHandler, IEventHandler} from "@nestjs/cqrs";
import {ApplicantInvitedToAssociation} from "../domain/applicant-invited-to-association.domain-event";

@EventsHandler(ApplicantInvitedToAssociation)
export class EventPropagator implements IEventHandler<ApplicantInvitedToAssociation> {


    constructor(private readonly eventBus: EventBus) {
    }

    handle(event: ApplicantInvitedToAssociation): any {
        this.eventBus.publish(new ApplicantInvitedToAssociationApiEvent(event.email.raw, event.firstName.raw, event.lastName))
    }


}
