import models from '../../models/index.js';
// import dateToString from  '../../helpers/date.js';


const transformUser = user => {
    return {
        ...user._doc,
        _id: user.id,
        // createdBooks: getListTransformedBooks.bind(this, user.createdBooks)
    };
}

const getSingleTransformedUser = async userID => {
    try {
        const user = await models.User.findById(userID);
        return transformUser(user);
    } catch (err) {
        throw err;
    }
}

const getListTransformedUser = async userIDs => {
    try {
        const users = await models.User.find({ _id: { $in: userIDs } });
        return users.map(user => {
            return transformUser(user);
        });
    } catch (err) {
        throw err;
    }
}


export { transformUser, getSingleTransformedUser, getListTransformedUser };
