import React, { Component } from 'react';
import CategoriesList from './CategoriesList';
import Backdrop from '../Backdrop';
import Modal from '../Modal';



class Categories extends Component {
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

    /**
     * Create Form Component with Function
     */
    _renderCreateCategory = () => () => {
        return (
            <div className="create-category__card">
                <form action="">
                    <div className="form-control">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name" id="name" placeholder="Category Name" />
                    </div>
                    <div className="form-control">
                        <label htmlFor="desc">Description</label>
                        <textarea type="text" name="desc" id="desc" placeholder="Description" rows="4"></textarea>
                    </div>
                    <div className="form-control">
                        <label htmlFor="image">Image</label>
                        <input type="file" name="name" id="name" placeholder="image file" />
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
        const CreateCategory = this._renderCreateCategory();
        return (
            <>
                <div className="categories__head">
                    <h2 className="dash-title">All Product Categories List</h2>
                    <a onClick={this.CreateEventHandler}>
                        <span className="ti-plus"></span>
                        <small>Add Category</small>
                    </a>
                </div>
                { this.state.creating && <Backdrop />}
                { this.state.creating && (
                    <Modal
                        title="Create Category"
                        canCancel
                        canConfirm
                        onCancel={this.modalCancelHandler}
                        onConfirm={this.modalConfirmHandler}
                    >
                        <CreateCategory />
                    </Modal>)}
                <section className="recent-categories">
                    <div className="categories-grid">
                        <CategoriesList />

                        <div className="category-detail">
                            <div className="category-card">
                                <div className="category-single">
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
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Categories;