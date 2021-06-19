import React, { useEffect } from "react";
import "./home.css";
import news from "../../newsimg.jpg";
import { Button } from "react-bootstrap";

const Home = () => {
  //   useEffect(() => {
  //     alert(
  //       "Please click the voice button on the bottom right to start using the application "
  //     );
  //   });

  return (
    <div className="container">
      <div
        style={{
          height: "200px",
          textAlign: "center",
          marginTop: "50px",
          marginBottom: "60px",
        }}
        className="center centercolor"
      >
        <div className=" container ">
          <h1 style={{ fontSize: "40px" }} style={{ margin: 20 }}>
            AI NEWS
          </h1>
        </div>
      </div>

      <div className="center">
        <Button
          className="btn2"
          onClick={() => {
            alert(
              "Please click the voice button on the bottom right to enable voice and start one of the suggestions below😃 . "
            );
          }}
        >
          Intructions
        </Button>
      </div>
      <div className="row no-gutters mx-auto">
        <div className="col-sm-3 ">
          <div
            className="card card1 center"
            style={{ backgroundColor: "#394989" }}
          >
            <h4 className="publish1">Try Saying:</h4>
            <p className="inst">Give me the latest news</p>
          </div>
        </div>
        <div className="col-sm-3" style={{ marginLeft: "0px" }}>
          <div
            className="card card1 center"
            style={{ backgroundColor: "#3b6978" }}
          >
            <h4 className="publish1">Try Saying:</h4>
            <p className="inst">Give me the news from CNN</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div
            className="card card1 center"
            style={{ backgroundColor: "#111d5e" }}
          >
            <h4 className="publish1">Try Saying:</h4>
            <p className="inst">Give me the latest Sports news</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div
            className="card card1 center"
            style={{ backgroundColor: "#654062" }}
          >
            <h4 className="publish1">Try Saying:</h4>
            <p className="inst">What's up with Bitcoin</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
