import { DAT_GHE, HUY_GHE } from "../types/baiTapDatVeType"

const stateDefault = {
    danhSachGheDangDat: [
        // { soGhe: 'A1', gia: 1000 },
    ]
}

const baiTapDatVeReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case DAT_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat =>
                gheDangDat.soGhe === action.ghe.soGhe)
            if (index !== -1) {// Khi người dùng click vào gheDangDat đã có trong màng
                //=> remove nó khỏi mảng
                danhSachGheDangDatUpdate.splice(index, 1)
            } else {// Khi người dùng click vào gheDangDat chưa có trong màng
                //=> push nó vòa mảng
                danhSachGheDangDatUpdate.push(action.ghe)
            }
            // cập nhật lại state => giao diện render lại
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return { ...state }
        }
        case HUY_GHE: {
            let danhSachGheDangDatUpdate = [...state.danhSachGheDangDat]
            let index = danhSachGheDangDatUpdate.findIndex(gheDangDat =>
                gheDangDat.soGhe === action.soGhe)
            if (index !== -1) {// Khi người dùng click vào gheDangDat đã có trong màng
                //=> remove nó khỏi mảng
                danhSachGheDangDatUpdate.splice(index, 1)
            }
            // cập nhật lại state => giao diện render lại
            state.danhSachGheDangDat = danhSachGheDangDatUpdate
            return { ...state }
        }
        default: return { ...state }
    }
}
export default baiTapDatVeReducer