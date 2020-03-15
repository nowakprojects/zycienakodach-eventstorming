import {InvitationId, InvitationRepository} from "../../domain/invitation.repository";
import {EventPublisher, IEvent} from "@nestjs/cqrs";
import {Invitation} from "../../domain/invitation";
import {Injectable} from "@nestjs/common";

@Injectable()
export class InMemoryInviteRepositoryRepository implements InvitationRepository {

    private eventStreams: { [key: string]: IEvent[]; } = {};

    constructor(private eventPublisher: EventPublisher) {
    }

    save(invitation: Invitation): Promise<void> {
        const events = invitation.getUncommittedEvents();
        const foundStream = this.eventStreams[invitation.id.raw];
        if (!foundStream) {
            this.eventStreams[invitation.id.raw] = [...events];
        } else {
            this.eventStreams[invitation.id.raw].push(events);
        }
        this.eventPublisher.mergeObjectContext(invitation).commit();
        return Promise.resolve();
    }

    findById(id: InvitationId): Promise<Invitation | null> {
        const events = this.eventStreams[id.raw];
        const invitation = new Invitation();
        invitation.loadFromHistory(events);
        return Promise.resolve(invitation);
    }

}
