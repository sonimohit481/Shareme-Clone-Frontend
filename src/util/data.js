// getting data from saity bakend
export const userQuery = (userId) => {
    const query = `*[ _type == 'user' &&  _id=='${userId}']`;
    return query;
}