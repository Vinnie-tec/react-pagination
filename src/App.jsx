import { useState } from "react";
import "./App.css";
import ReactPaginate from "react-paginate";
import JSONDATA from "./MOCK_DATA.json";

function App() {
  const [users, setUsers] = useState(JSONDATA.slice(0, 50));
  const [pageNumber, setPageNumber] = useState(0);

  const userPerPages = 3;
  const pageVisited = pageNumber * userPerPages;

  const displayUsers = users
    .slice(pageVisited, pageVisited + userPerPages)
    .map((user) => {
      return (
        <div key={user.id} className="user">
          <h4>
            <span>{user.first_name}</span>
            <span>{user.last_name}</span>
          </h4>
          <span>{user.email}</span>
          <p>{user.gender}</p>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / userPerPages);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="app">
      {displayUsers}
      <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        nextClassName={"nextbtn"}
        previousClassName={"prevbtn"}
        disabledClassName={"page-disabled"}
        activeClassName={"page-active"}
      />
    </div>
  );
}

export default App;
