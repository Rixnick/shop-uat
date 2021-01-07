import React, { Component } from 'react';
import Backdrop from '../Backdrop';
import Modal from '../Modal';
import BrandList from './BrandList';




class Brands extends Component {
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


    _renderCreateBrand = () => () => {
        return(
            <div className="create-brand__card">
                <form action="">
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Brand Name"/>
                    </div>
                    <div className="form-control">
                        <label htmlFor="desc">Description</label>
                        <textarea type="text" name="desc" id="desc" placeholder="Description" rows="4"></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="logo">Brand Logo</label>
                        <input type="file" name="logo" id="logo" placeholder="Brand Logo"/>
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
        const CreateBrand = this._renderCreateBrand();
        return (
            <>
                <div className="brands-card__head">
                    <h2 className="dash-title">All Product Brands List</h2>
                    <a onClick={this.CreateEventHandler}>
                        <span className="ti-plus"></span>
                        <small>Add Brand</small>
                    </a>
                </div>
                { this.state.creating && <Backdrop />}
                { this.state.creating && (
                    <Modal
                        title="Create Brands"
                        canCancel
                        canConfirm
                        onCancel={this.modalCancelHandler}
                        onConfirm={this.modalConfirmHandler}
                    >
                       <CreateBrand />
                    </Modal>)}
                <section className="recent-brand">
                    <div className="brands-grid">
                        <BrandList />

                        <div className="brand-detail">
                            <div className="detail-card">
                                {/* <div className="detail-single">
                                                        <span className="ti-id-badge"></span>
                                                        <h3>196</h3>
                                                        <small>Number Of Staff</small>
                                                    </div>

                                                    <div className="summary-single">
                                                        <span className="ti-calendar"></span>
                                                        <h3>16</h3>
                                                        <small>Number Of Leaves</small>
                                                    </div>

                                                    <div className="summary-single">
                                                        <span className="ti-face-smile"></span>
                                                        <h3>59</h3>
                                                        <small>Profile update requested</small>
                                                    </div> */}
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Brands;
