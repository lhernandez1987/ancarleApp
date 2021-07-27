import { properties } from '../../../utils/constants/properties';

export default function authReducer(state = {}, action) {

    switch (action.type) {
        case properties.type_login:
            
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            };

        case properties.type_logout:
        
            return {};
    
        default:
            return state;
    }
}
