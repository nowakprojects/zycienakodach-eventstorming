import {InvitedPerson} from "./invited-person.read-model";
import {Injectable} from "@nestjs/common";

@Injectable()
export class ReadOnlyRepository {

    repo: InvitedPerson[] = [];

    save(readModel: InvitedPerson) {
        this.repo.push(readModel);
    }

    findById(id: string) {
        return this.repo.filter(it => it.id === id);
    }

}
