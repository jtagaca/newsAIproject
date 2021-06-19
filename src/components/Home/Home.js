import React, { useEffect, useState } from "react";
import "./home.css";
import news from "../../newsimg.jpg";
import { Button } from "react-bootstrap";
import alanBtn from "@alan-ai/alan-sdk-web";
import wordsToNumbers from "words-to-numbers";

const Home = () => {
  const [command, setcommand] = useState("");
  const handleCommand = (e) => {
    setcommand(e);
    // alanBtn.playText("hello");
  };
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
          variant="dark"
        >
          Intructions
        </Button>
      </div>
      <div className="row no-gutters mx-auto">
        <div
          onClick={() => {
            handleCommand("Give me the latest news");
          }}
          className="col-sm-3 "
        >
          <div
            className="card card1 center"
            style={{ backgroundColor: "black" }}
          >
            <h4 className="publish1">Try Saying:</h4>
            <p className="inst">Show the latest news</p>
          </div>
        </div>
        <div className="col-sm-3" style={{ marginLeft: "0px" }}>
          <div
            className="card card1 center"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <h4 className="publish1">Try Saying:</h4>
            <p className="inst">Show me technology news</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div
            className="card card1 center"
            style={{ backgroundColor: "black" }}
          >
            <h4 className="publish1">Try Saying:</h4>
            <p className="inst">Show me sports news</p>
          </div>
        </div>
        <div className="col-sm-3">
          <div
            className="card card1 center"
            style={{ backgroundColor: "white", color: "black" }}
          >
            <h4 className="publish1">Use your imagination</h4>
            <p className="inst">"Give me ..."</p>
            <p className="inst">"Show the ..."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
