import React, { useState } from "react";
import MaterialTable from "material-table";

const BooksMaterialTable = ({ books }) => {
  const [data, setData] = useState(books);

  const handleDelete = async (oldData) => {
    setTimeout(async () => {
      setData((prevState) => prevState.filter((row) => row.id !== oldData.id));
    }, 1000);
  };

  return (
    <MaterialTable
      columns={[
        { title: "ID", field: "id" },
        { title: "Title", field: "title" },
        { title: "Author", field: "author" },
        { title: "Genre", field: "genre" },
        { title: "Description", field: "description" },
        { title: "ACTION", field: "action", render: (rowData) => <button onClick={() => handleDelete(rowData)}>DELETE ROW</button> },
      ]}
      data={data}
      editable={{
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              setData((prevState) => prevState.filter((row) => row.id !== oldData.id));
              resolve();
            }, 1000);
          }),
      }}
      options={{
        paging: true,
        pageSizeOptions: [5, 10, 20],
        pageSize: 5,
        search: true,
        filtering: true,
      }}
    />
  );
};

export default BooksMaterialTable;

