import React from 'react';
import DataTable from 'react-data-table-component';

const columns = [
  {
    name: 'Domain',
    selector: 'domain',
    sortable: true,
  },
  {
    name: 'Traffic Share',
    selector: 'traffic_share',
    sortable: true,
    cell: row => (row.traffic_share * 100).toFixed(2) + '%',
  },
  {
    name: 'Position',
    selector: 'position',
    sortable: true,
  },
  {
    name: 'Destination URL',
    selector: 'destination_url',
    sortable: true,
    cell: row => <a href={row.destination_url}>{row.destination_url}</a>,
  },
  {
    name: 'Website Categories',
    selector: 'website_categories',
    sortable: true,
  },
];

const CustomDataTable = ({ data }) => {
  return (
    <DataTable
      id="my-table"
      title=""
      columns={columns}
      data={data}
      pagination
      highlightOnHover
    />
  );
};

export default CustomDataTable;