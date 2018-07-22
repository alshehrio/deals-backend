let users = []


const createUser = (username, password) => {
    user = { username, password }
    users = [...users, user]

    return user
}

const getUser = username => {
    return users.find(user => user.username === username)
}


module.exports.createUser = createUser
module.exports.getUser = getUser