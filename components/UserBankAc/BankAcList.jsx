import React from 'react'
import { useQuery } from '@apollo/react-hooks';
import Router  from 'next/router';
import { MY_BRANKS } from '../../graphql/Banks';
import AcItems from './AcItems';



const BankAcList = () => {
    const { data, loading, error} = useQuery(MY_BRANKS);
    //console.log("Bank Accounts:", data)

    if (error) return <p>Oooops...Something went wrong!</p>
    if (loading) return <p>Loading...!</p>  
    return (
        <>
            <section className="recent-bank-acs">
                <div className="bank-card">
                    <h3>Recently Bank Acs List</h3>
                    <div className="table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th>Bank Logo</th>
                                    <th>Bank Name</th>
                                    <th>Ac Name</th>
                                    <th>Ac No.</th>
                                    <th>Ac QR-Code</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.user.bankAccounts.length > 0 &&
                                    data.user.bankAccounts.map(bankac => (
                                        <AcItems key={bankac.id} bankac={bankac} />
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BankAcList
