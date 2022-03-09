import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { datGheAction } from '../../redux/actions/baiTapDatVeActions'
import rootReducer from '../../redux/reducer/rootReducer'


class HangGhe extends Component {

    renderGhe = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            let cssGhe = ''
            let disable = false
            // trạng thái ghế đã bị người khác đặt rồi
            if (ghe.daDat) {
                cssGhe = 'gheDuocChon'
                disable = true
            }
            let cssGheDangDat = ''
            // trạng thái ghế đang đặt
            let indexGheDangDat = this.props.danhSachGheDangDat.findIndex
                (gheDangDat => gheDangDat.soGhe === ghe.soGhe)
            if (indexGheDangDat !== -1) {
                cssGheDangDat = 'gheDangChon'
            }
            return (
                <button
                    onClick={() => this.props.datGhe(ghe)}
                    disabled={disable}
                    className={`ghe ${cssGhe} ${cssGheDangDat}`}
                    key={index}
                >
                    {index += 1}
                </button>
            )
        })
    }

    renderHangGheDau = () => {
        return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
            return (
                <span className='rowNumber' key={index}>
                    {ghe.soGhe}
                </span>)
        })
    }

    renderHangGhe = () => {
        if (this.props.soThuTuHang === 0) {
            return <Fragment>
                {this.renderHangGheDau()}
            </Fragment>
        } else {
            return <Fragment>
                {this.props.hangGhe.hang} {this.renderGhe()}
            </Fragment>
        }

    }
    render() {
        return (
            <div className='text-warning text-left mt-1 ml-5' style={{ fontSize: 18 }} >
                {this.renderHangGhe()}
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {
        danhSachGheDangDat: rootReducer.baiTapDatVeReducer.danhSachGheDangDat
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        datGhe: (ghe) => {
            const action = datGheAction(ghe)
            dispatch(action)
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(HangGhe)


