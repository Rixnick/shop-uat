import React from 'react';
import CurrentAddress from './CurrentAddress';
import HeaderProfile from './HeaderProfile';
import HometownAddress from './HometownAddress';
import InfoProfile from './InfoProfile';
import ProfileContact from './ProfileContact';

const UserProfile = () => {
    return (
            <main>
                <HeaderProfile />
                    <section className="recent-profile">
                        <div className="profile-grid">
                                <div className="profile-activity-card">
                                    <h3>ບັນທຶກລາຍງານຕ່າງໆ</h3>

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

                                <div className="profile">
                                        <InfoProfile />
                                        <ProfileContact />
                                        <CurrentAddress />
                                        <HometownAddress />
                                </div>
                            </div>
                    </section>
            </main>
    )
}

export default UserProfile;
