import React from 'react'
import Table from 'rc-table';
import {Table as BSTable} from 'react-bootstrap';

const Tables = () => {
	  const data = [
		{ a: "123", key: "1" },
		{ a: "cdd", b: "edd", key: "2" },
		{ a: "1333", c: "eee", d: 2, key: "3" },
	  ];
	  
	  const columns = [
		{
		  title: "title1",
		  dataIndex: "a",
		  className: "a",
		  key: "a",
		  width: 100,
		},
		{
		  id: "123",
		  title: "title2",
		  dataIndex: "b",
		  className: "b",
		  key: "b",
		  width: 100,
		},
		{
		  title: "title3",
		  dataIndex: "c",
		  className: "c",
		  key: "c",
		  width: 200,
		},
		{
		  title: "Operations",
		  dataIndex: "",
		  className: "d",
		  key: "d",
		},
	  ];
  
  return (
    <div className="card">
      <Table
        columns={columns}
        expandedRowRender={(record) => <p>extra: {record.a}</p>}
        data={data}
        className="table"
      />

      <hr />
      <div className="my-5" />

      <BSTable>
        <thead>
          <tr>
            <th>Col1</th>
            <th>Col2</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Content 1</td>
            <td>Content 1</td>
          </tr>
        </tbody>
      </BSTable>
      <hr />
      <div className="my-5" />
      <div className="row">
        <div className="col col-lg-12 col-md-6 col-sm-8 bg-primary">a</div>
        <div className="col col-lg-12 offset-lg-0 col-md-2 offset-md-4 col-sm-4 bg-success">
          b
        </div>
      </div>
    </div>
  );
}

export default Tables
