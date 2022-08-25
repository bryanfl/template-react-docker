export const UserReducers = (state, action) => {
    switch (action.type) {
        case 'signIn':
            return {
                ...action.payload
            }
        case 'signOut':
            return {
                id: '',
                user: '',
                email: '',
                token: '',
            }
        default:
            throw new Error()
    }
}
