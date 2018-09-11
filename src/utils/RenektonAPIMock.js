const RenektonAPIMock = {
    userLogin: (username, password) => new Promise((resolve) => resolve({
        token: '328hfaskdjfh23423fdwfasdf'
    })),
    createNewUser: (username, password, name, email = '', age, areaCode, race = '') => new Promise((resolve) => resolve({
        isUserCreated: true
    })),

}

export default RenektonAPIMock