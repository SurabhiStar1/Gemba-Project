import React from 'react';

const Table = () => {

  const data = [
    {
      col1: 'Row-1 Val1',
      col2: 'Row-1 Val2',
      col3: 'Row-1 Val3',
      col4: 'Row-1 Val4',
      col5: 'Row-1 Val5',
      col6: 'Row-1 Val6',
      col7: null,
      col8: 'Row-1 Val4',
      col9: 'Row-1 Val5',
      col10: 'Row-1 Val6',
      col11: 'fdsgdfgd'
    },
    {
      col1: 'Row-2 Val1',
      col2: 'Row-2 Val2',
      col3: 'Row-2 Val3',
      col4: 'Row-2 Val4',
      col5: 'Row-2 Val5',
      col6: 'Row-2 Val6',
    },
    {
      col3: 'Row-3 Val1',
      col2: 'Row-3 Val2',
      col4: 'Row-3 Val3',
      col5: 'Row-3 Val5',
      col9: 'Row-1 Val5',
      col10: 'Row-1 Val6',
      col6: 'Row-3 Val6',
    },
    {
      col1: 'Row-4 Val1',
      col2: 'Row-4 Val2',
      col3: 'Row-4 Val3',
      col4: 'Row-4 Val4',
      col5: 'Row-4 Val5',
      col6: 'Row-4 val6',
    },

    {
      col1: 'Row-5 Val1',
      col2: 'Row-5 Val2',
      col3: 'Row-5 Val3',
      col4: 'Row-5 Val4',
      col5: 'Row-5 Val5',
      col9: 'Row-1 Val5',
      col10: 'Row-1 Val6',
      col7: 'Row-5 Val6',
      
    },
  ];

  const headers = data.length > 0 ? Object.keys(data[0]) : [];

  return (
    
    <table
      border="1"
      style={{
        borderCollapse: 'collapse',
        width: '100%',
        margin: '20px 0',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <thead>
        <tr>
          {headers.map((header, index) => (
            <th
              key={index}
              style={{
                background: '#303655',
                padding: '10px',
                border: '1px solid #ddd',
                textAlign: 'left',
                color:'white'
              }}
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {headers.map((header, colIndex) => (
              <td
                key={colIndex}
                style={{
                  padding: '8px',
                  border: '1px solid #303655',
                }}
              >
                {row[header]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
