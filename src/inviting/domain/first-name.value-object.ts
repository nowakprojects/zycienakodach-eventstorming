export class FirstName {

    private readonly type = "FirstName";

    constructor(readonly raw: string) {
    }

    static from(firstName: string) {
        if(firstName.length <= 0){
            throw new Error("Name cannot be empty!")
        }
        return new FirstName(firstName);
    }

}
