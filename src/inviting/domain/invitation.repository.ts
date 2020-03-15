import {Invitation} from "./invitation";
import uuid = require("uuid");

export class InvitationId {

    private readonly type = "InvitationId";

    constructor(readonly raw: string) {
    }

    static new() {
        return new InvitationId(uuid.v4());
    }

}

export interface InvitationRepository {
    save(invitation: Invitation): Promise<void>

    findById(id: InvitationId): Promise<Invitation | null>;
}
