class ApplicantInvitedToAssociationApiEvent {
    constructor(aggregateId: string, email: string, firstName: string, lastName: string) {
        this.aggregateId = aggregateId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    readonly aggregateId: string;
    readonly email: string;
    readonly firstName: string;
    readonly lastName: string;
}
