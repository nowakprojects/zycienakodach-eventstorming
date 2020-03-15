export class InviteApplicantToAssociationApiCommand {
    constructor(email: string, firstName: string, lastName: string) {
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
}
