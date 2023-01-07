// getting data from saity bakend
export const userQuery = (userId) => {
    const query = `*[ _type == 'user' &&  _id=='${userId}']`;
    return query;
}
// getting data from Pin data
export const searchQuery = (searchTerm) => {
    const query = `*[ _type == 'pin' &&  title match=='${searchTerm}*' || category match '${searchTerm}*'] ||about match '${searchQuery}*'{
        image {
            assets ->{
                url
            }
        },
        _id,
        destination,
        postedBy ->{
            _id,
            userName,
            image
        },
        save []{
            postedBy ->{
            _id,
            userName,
            image
        },
        },
    }`;
    return query;
}

export const feedQuery = `*[_type=='pin'] | order(_createat desc) {
    image {
            asset ->{
                url
            }
        },
        _id,
        destination,
        postedBy ->{
            _id,
            userName,
            image
        },
        save []{
            postedBy ->{
            _id,
            userName,
            image
        },
        },
}`