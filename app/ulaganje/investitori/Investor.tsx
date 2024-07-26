import React from 'react';
import { invested, withdrawn } from './investorsData';

interface Props {
  id: string;
  name: string;
  view: 'investment' | 'withdrawal';
}

const Investor: React.FC<Props> = ({ id, name, view }) => {
  const investments = invested[id] || [];
  const withdrawals = withdrawn[id] || [];

  const totalInvestment = investments
    .reduce((sum, investment) => sum + parseFloat(investment.amount.replace(',', '.')), 0)
    .toFixed(2);
  const totalShare =
    investments
      .reduce((sum, investment) => sum + parseFloat(investment.share.replace(',', '.')), 0)
      .toFixed(2) + '%';

  return (
    <div>
      {view === 'investment' ? (
        <div>
          <h2 className='text-2xl font-semibold mb-4 text-center text-black uppercase'>
            Ulaganje finansija
          </h2>
          <div className='flex flex-col gap-4'>
            <div className='mt-4'>
              <p className='text-lg text-black'>
                <strong>Ime i prezime :</strong> {name}
              </p>
              <p className='text-lg text-black'>
                <strong>Registarski broj :</strong> {id}
              </p>
            </div>
            <table className='w-full bg-white border border-gray-200'>
              <thead className='bg-gray-50'>
                <tr>
                  <th className='px-3 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600'>
                    Datum
                  </th>
                  <th className='px-3 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600'>
                    Iznos
                  </th>
                  <th className='px-3 py-3 border-b border-gray-200 text-left text-sm font-semibold text-gray-600'>
                    Udeo
                  </th>
                </tr>
              </thead>
              <tbody>
                {investments.map((investment, index) => (
                  <tr key={index} className='hover:bg-gray-100'>
                    <td className='px-3 py-4 border-b border-gray-200 text-sm text-gray-700'>
                      {investment.date}
                    </td>
                    <td className='px-3 py-4 border-b border-gray-200 text-sm text-gray-700'>
                      {investment.amount.replace(',', '.')} EUR
                    </td>
                    <td className='px-3 py-4 border-b border-gray-200 text-sm text-gray-700'>
                      {investment.share}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p className='text-lg text-black'>
              <strong>Ukupno:</strong> {totalInvestment} EUR / {totalShare}
            </p>
          </div>
        </div>
      ) : (
        <div>
          <h2 className='text-2xl font-semibold mb-4 text-center text-black uppercase'>
            Povlačenje finansija
          </h2>
          <p className='text-lg text-black'>
            <strong>Ukupno:</strong> 0 EUR 0.00%
          </p>
        </div>
      )}
    </div>
  );
};

export default Investor;
