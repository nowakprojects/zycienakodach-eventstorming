import {EventBus, EventsHandler, IEventHandler} from "@nestjs/cqrs";
import {ReadOnlyRepository} from "./read-only-repository";
import {InvitedPerson} from "./invited-person.read-model";

@EventsHandler(ApplicantInvitedToAssociationApiEvent)
export class EventHandler implements IEventHandler<ApplicantInvitedToAssociationApiEvent> {


    constructor(private readonly readOnlyRepository: ReadOnlyRepository) {
    }

    handle(event: ApplicantInvitedToAssociationApiEvent): any {
        const readModel = new InvitedPerson(event.aggregateId, event.firstName, event.lastName);
        this.readOnlyRepository.save(readModel)
    }


}
