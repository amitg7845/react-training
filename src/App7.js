import "./App.css";
import Header from "./Components/Header";
import useFetch from "./Components/useFetch";
import { Bars } from "react-loader-spinner"; //Ref. https://www.npmjs.com/package/react-loader-spinner for ducmentation
import { ToastContainer } from "react-toastify";

export default function App() {
  const [data, loading] = useFetch("https://dummyjson.com/comments");
  console.log(data, "asdfghjk");

  return (
    <div className="App">
      <Header heading="Customs Hooks And React Loaders and toastify" />
      <ToastContainer />
      <div className="custom-hooks">
        {loading ? (
          // <h2>loading data ...</h2>
          <Bars
          // height="80"
          // width="80"
          // color="#4fa94d"
          // ariaLabel="bars-loading"
          // wrapperStyle={{}}
          // wrapperClass=""
          // visible={true}
          />
        ) : (
          data?.comments?.map(({ body, user }, index) => (
            <div className="wrapper" key={index}>
              <h2>{body}</h2>
              <h3>
                {user.username} - {user.fullName}
              </h3>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
