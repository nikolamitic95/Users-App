
export class UserObj {
    constructor(showUser) {
        this.id = showUser.id;
        this.name = showUser.name;
        this.email = showUser.email;
        this.city = showUser.address.city;
        this.street = showUser.address.street;
        this.companyName = showUser.company.name;
        this.phone = showUser.phone;
        this.website = showUser.website;
    }
}
