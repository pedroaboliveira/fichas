import React from 'react';
import { Table } from 'reactstrap';

const TableView = ({ dados, colunas }) => {
  if (!dados || dados.length === 0) return <p>Sem dados para apresentar.</p>;

  return (
    <Table striped responsive hover>
      <thead>
        <tr>
          {colunas.map((col, index) => (
            <th key={index}>{col.label}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {dados.map((linha, rowIndex) => (
          <tr key={rowIndex}>
            {colunas.map((col, colIndex) => (
              <td key={colIndex}>{linha[col.chave]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableView;