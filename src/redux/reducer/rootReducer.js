import { combineReducers } from "redux";
import baiTapDatVeReducer from "../reducer/baiTapDatVeReducer";


const rootReducer = combineReducers({//store tổng của ứng dụng
    baiTapDatVeReducer,
})



export default rootReducer;