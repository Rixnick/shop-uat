import React from 'react';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';

const Dashboard = () => {
    return (
        <>
            <Sidebar />
            <div className="main-content">
                <Header />

                    <main>
                        <h2 className="dash-title">Over Views</h2>
                        <div className="dash-cards">
                            <div className="card-single">
                                <div className="card-body">
                                    <span className="ti-briefcase"></span>
                                    <div>
                                        <h5>Account Balance</h5>
                                        <h4>$30,405.00</h4>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a href="">View all</a>
                                </div>
                            </div>
                            <div className="card-single">
                                <div className="card-body">
                                    <span className="ti-reload"></span>
                                    <div>
                                        <h5>Pending</h5>
                                        <h4>$21,249.00</h4>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a href="">View all</a>
                                </div>
                            </div>

                            <div className="card-single">
                                <div className="card-body">
                                    <span className="ti-check-box"></span>
                                    <div>
                                        <h5>Proccessed</h5>
                                        <h4>$74,905.00</h4>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a href="">View all</a>
                                </div>
                            </div>

                            <div className="card-single">
                                <div className="card-body">
                                    <span className="ti-book"></span>
                                    <div>
                                        <h5>Total Report</h5>
                                        <h4>$174,905.00</h4>
                                    </div>
                                </div>
                                <div className="card-footer">
                                    <a href="">View all</a>
                                </div>
                            </div>
                        </div>


                        <section className="recent">
                                <div className="activity-grid">
                                    <div className="activity-card">
                                        <h3>Recently Activity</h3>

                                        <div className="table-responsive">
                                            <table>
                                                <thead>
                                                        <tr>
                                                            <th>Project</th>
                                                            <th>Start Data</th>
                                                            <th>End Date</th>
                                                            <th>Team</th>
                                                            <th>Status</th>
                                                        </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>App Development</td>
                                                        <td>23 Aug, 2020</td>
                                                        <td>23 Dec, 2020</td>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                            <div className="img-2"></div>
                                                            <div className="img-3"></div>
                                                        </td>
                                                        <td>
                                                            <span className="badge success">Success</span>
                                                        </td>
                                                    </tr>
                                                
                                                    <tr>
                                                        <td>Frontend Development</td>
                                                        <td>23 Aug, 2020</td>
                                                        <td>23 Dec, 2020</td>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                            <div className="img-2"></div>
                                                            <div className="img-3"></div>
                                                        </td>
                                                        <td>
                                                            <span className="badge warning">Processing</span>
                                                        </td>
                                                    </tr>
                
                                                    <tr>
                                                        <td>Marketting Reasearch</td>
                                                        <td>23 Aug, 2020</td>
                                                        <td>23 Dec, 2020</td>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                            <div className="img-2"></div>
                                                            <div className="img-3"></div>
                                                        </td>
                                                        <td>
                                                            <span className="badge success">Success</span>
                                                        </td>
                                                    </tr>
                
                                                    <tr>
                                                        <td>Backend Development</td>
                                                        <td>23 Aug, 2020</td>
                                                        <td>23 Dec, 2020</td>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                            <div className="img-2"></div>
                                                            <div className="img-3"></div>
                                                        </td>
                                                        <td>
                                                            <span className="badge warning">Processing</span>
                                                        </td>
                                                    </tr>
                
                                                    <tr>
                                                        <td>Official building Construct</td>
                                                        <td>23 Aug, 2020</td>
                                                        <td>23 Dec, 2020</td>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                            <div className="img-2"></div>
                                                            <div className="img-3"></div>
                                                        </td>
                                                        <td>
                                                            <span className="badge success">Success</span>
                                                        </td>
                                                    </tr>
                
                                                    <tr>
                                                        <td>MS Advanced Specialist Training</td>
                                                        <td>23 Aug, 2020</td>
                                                        <td>23 Dec, 2020</td>
                                                        <td className="td-team">
                                                            <div className="img-1"></div>
                                                            <div className="img-2"></div>
                                                            <div className="img-3"></div>
                                                        </td>
                                                        <td>
                                                            <span className="badge warning">Processing</span>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <div className="summary">
                                            <div className="summary-card">
                                                    <div className="summary-single">
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

                                            <div className="bday-card">
                                                <div className="bday-flex">
                                                        <div className="bday-image"></div>
                                                        <div className="bday-info">
                                                            <h5>Loki J. Rixnickz</h5>
                                                            <small>Birthday Today</small>
                                                        </div>
                                                </div>

                                                    <div className="text-center">
                                                        <button>
                                                            Wish him 
                                                            <span className="ti-gift"></span>
                                                        </button>
                                                    </div>
                                            </div>
                                    </div>
                                </div>
                        </section>
                    </main>
            </div>
        </>
    )
}

export default Dashboard;
