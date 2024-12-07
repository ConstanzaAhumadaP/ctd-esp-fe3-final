import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useGlobalStates } from '../Components/utils/global.context';

const Detail = () => {
    const { id } = useParams();
    const { dentistState, getDentist } = useGlobalStates();

    useEffect(() => {
        getDentist(id);
    }, [id]);

    return (
        <div className="detail-container">
            <h1>Detail Dentist {id}</h1>
            <table className="dentist-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{dentistState.dentistDetail.name}</td>
                        <td>{dentistState.dentistDetail.email}</td>
                        <td>{dentistState.dentistDetail.phone}</td>
                        <td>
                            <a href={`https://${dentistState.dentistDetail.website}`} target="_blank" rel="noopener noreferrer">
                                {dentistState.dentistDetail.website}
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Detail;
