import React from 'react';

const TransferList = ({transfers}) => (
    <table className="table">
        <thead>
            <tr>
                <th>Descrição</th>
                <th>Monto</th>
                <th>Opções</th>
            </tr>
        </thead>
        <tbody>
            { transfers.map((transfer) => (
                <tr key={transfer.id}>
                    <td>{transfer.description}</td>
                    <td className={transfer.amount > 0 ? 'text-success' : 'text-danger'}>
                        {transfer.amount}
                    </td>
                    <td>Edit</td>
                </tr>
            )) }
        </tbody>
    </table>
);

export default TransferList;