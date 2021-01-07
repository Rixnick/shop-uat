import React, { Component } from 'react'
import BankAcList from './BankAcList';
import Backdrop from '../Backdrop';
import Modal from '../Modal';


class UserBankAcc extends Component {
    state = {
        creating: false
    };

    CreateEventHandler = () => {
        this.setState({ creating: true });
    };

    modalConfirmHandler = () => {
        this.setState({ creating: false });
    };

    modalCancelHandler = () => {
        this.setState({ creating: false });
    };

    _renderCreateBankAccount = () => () => {
        return(
            <div className="creat-bank__account__card">
                <form action="">
                    <div className="form-control">
                        <label htmlFor="bank__name">Bank Name</label>
                        <input type="text" name="bankName" id="bankName" placeholder="Bank Name"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="bank__name">Account Name</label>
                        <input type="text" name="acName" id="acName" placeholder="Bank Name"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="bank__name">Account No</label>
                        <input type="text" name="acNo" id="acNo" placeholder="Bank Name"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="bank__name">Account Remark</label>
                        <textarea type="text" name="acNo" id="acNo" placeholder="Bank Name" rows="4"></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="bank__name">Bank Logo</label>
                        <input type="text" name="bankLogo" id="bankLogo" placeholder="Bank Name"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="bank__name">My QR-Code</label>
                        <input type="text" name="qrcode" id="qrcode" placeholder="Bank Name"/>
                    </div>
                    <div className="form-submit">
                        <button className="btn__cancel">Cancel</button>
                        <button className="btn__submit">Submit</button>
                    </div>
                </form>
            </div>
        )
    }

    render() {
        const CreateBankAccount = this._renderCreateBankAccount();
        return (
            <>
                <div className="bank_card__head">
                    <h2 className="dash-title">My Bank Account</h2>
                    <a onClick={this.CreateEventHandler}>
                        <span className="ti-plus"></span>
                        <small>Add Account</small>
                    </a>
                </div>
                { this.state.creating && <Backdrop />}
                { this.state.creating && (
                    <Modal
                        title="Create Bank Account No"
                        canCancel
                        canConfirm
                        onCancel={this.modalCancelHandler}
                        onConfirm={this.modalConfirmHandler}
                    >
                       <CreateBankAccount />
                    </Modal>)}
                <BankAcList />
            </>
        )
    }
}

export default UserBankAcc;
