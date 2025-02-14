import { POST_TRANSACTION } from "../actions/types"

const reducer = (state = null, action) => {
    switch (action.type) {
        case POST_TRANSACTION:
            return {...state, credit: action.payload}
        default:
            return state
    }
}

export default reducer