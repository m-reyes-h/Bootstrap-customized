import React from 'react'
import Table from 'rc-table';
import {Table as BSTable} from 'react-bootstrap';

const Tables = () => {
	const brands = [
	{
		a: 'Aguascalientes',
		b: 'Aguascalientes',
		c: 'Elektra',
		d: 'XRBADF',
		e: 'Deposit - Cash Pickup',
		key: '1',
	},
	{
		a: 'Coahuila',
		b: 'Torreón',
		c: 'Elektra',
		d: 'YPBZDF',
		e: 'Deposit - Cash Pickup',
		key: '2',
	},
];

const branches = {
	1: [
		{
			a: 'Aguadita',
			b: '202 Ave. Siglo XXI, Loteria #33',
			c: 'M-F: 09:00 AM / 02:00 PM | S-D: Closed',
		},
		{
			a: 'Locairo',
			b: '202 Ave. Siglo XXI, Loteria #33',
			c: 'M-F: 09:00 AM / 02:00 PM | S-D: Closed',
		},
	],
	2: [
		{
			a: 'La Mora',
			b: '202 Ave. Siglo XXI, Loteria #33',
			c: 'M-F: 09:00 AM / 07:00 PM | S-D: 10:30 AM / 03:00 PM',
		},
	],
};

const branchColumns = [
	{
		title: 'Branch Name',
		dataIndex: 'a',
		key: 'a',
		width: 200,
	},
	{
		title: '',
		dataIndex: '-2',
		key: '-2',
		width: 200,
	},
	{
		title: 'Address',
		dataIndex: 'b',
		key: 'b',
		render(value) {
			return (
				<div className="d-flex flex-wrap">
					<span>{value}</span>
				</div>
			);
		},
	},
	{
		title: 'Hours',
		dataIndex: 'c',
		key: 'c',
		render(value) {
			const [weekday, weekend] = value.split('|');
			return (
				<div>
					<div>{weekday}</div>
					<div>{weekend}</div>
				</div>
			);
		},
	},
];

const brandColumns = [
	{
		title: 'State',
		dataIndex: 'a',
		key: 'a',
		width: 200,
	},
	{
		title: 'City',
		dataIndex: 'b',
		key: 'b',
		width: 200,
	},
	{
		title: 'Payer',
		dataIndex: 'c',
		key: 'c',
		render(value) {
			return (
				<div className="d-flex flex-wrap">
					<span>{ value }</span>
				</div>
			);
		},
	},
	{
		title: 'Branch Code',
		dataIndex: 'd',
		key: 'd',
	},
	{
		title: 'Delivery Methods',
		dataIndex: 'e',
		key: 'e',
	},
];

	const renderBranches = (key) => (
    <Table
      columns={branchColumns}
      data={branches[key]}
      className="table bg-white"
    />
  );
  
  return (
    <div className="my-5 bg-white border p-5">
      <div className="mv-5 py-5">
        <h1>Table RC</h1>
        <hr />
				<p className="subtitle2">Sub tables</p>
				<Table
					columns={brandColumns}
					expandedRowRender={(record) => renderBranches(record.key)}
					data={brands}
					className="table"
				/>
			</div>

			<div className="mv-5 py-5">
        <h1>Table BS</h1>
        <hr />
				<p className="subtitle2">Hovered table</p>
				<BSTable hover>
					<thead>
						<tr>
							<th>Col1</th>
							<th>Col2</th>
							<th>Col3</th>
							<th>Col4</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Content 1</td>
							<td>Content 2</td>
							<td>Content 3</td>
							<td>Content 4</td>
						</tr>
						<tr>
							<td>Content 1</td>
							<td>Content 2</td>
							<td>Content 3</td>
							<td>Content 4</td>
						</tr>
					</tbody>
				</BSTable>
      
      </div>
    </div>
  );
}

export default Tables
