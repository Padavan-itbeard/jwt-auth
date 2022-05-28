class UserDto {
    email;
    id;
    isActivated;

    constructor(model) {
        this.id = model.id;
        this.email = model.email;
        this.isActivated = model.isActivated;
    }
}

module.exports = UserDto;
