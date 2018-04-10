export const getNotifications = state => getArrayOfObjects(state.notificationState)

const getArrayOfObjects = object => (
    Object.keys(object).map(key => object[key])
)