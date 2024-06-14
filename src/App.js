import logo from "./logo.svg";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slices/counterSlice";
import { useEffect } from "react";
import { fetchAllUsers } from "./redux/slices/userSlice";

function App() {
  const count = useSelector((state) => state.counter.value);
  const listUsers = useSelector((state) => state.user.listUsers);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllUsers());
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello world with React</h1>
        {/* <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div> */}
        <div>
          <table>
            <thead>
              <th>ID</th>
              <th>Email</th>
              <th>Username</th>
            </thead>
            <tbody>
              {isError === true ? (
                <>Something wrong</>
              ) : (
                <>
                  {isLoading === true ? (
                    <>Loading...</>
                  ) : (
                    <>
                      {listUsers &&
                        listUsers.length > 0 &&
                        listUsers.map((item, index) => {
                          return (
                            <tr key={`table-users-${index}`}>
                              <td>{item.id}</td>
                              <td>{item.email}</td>
                              <td>{item.username}</td>
                            </tr>
                          );
                        })}
                    </>
                  )}
                </>
              )}
            </tbody>
          </table>
        </div>
      </header>
    </div>
  );
}

export default App;
