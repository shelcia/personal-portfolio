import React from "react";
import AUV from "../../assets/mockups/auv.png";
import Samgatha from "../../assets/mockups/samgatha.png";
import CRM from "../../assets/mockups/crm.png";
import Countries from "../../assets/mockups/countries.png";
import FbClone from "../../assets/mockups/fbclone.png";
import TodoList from "../../assets/mockups/todo.png";
import SlidingPuzzle from "../../assets/mockups/slidingpuzzle.png";
import TicTacToe from "../../assets/mockups/tic-tac-toe.png";
import CricketGame from "../../assets/mockups/cricketgame.png";

const Project = () => {
  return (
    <React.Fragment>
      <h4 className="subheading">Projects</h4>
      <hr />
      <div className="row">
        <div className="col-sm-6">
          <div className="card" id="auv">
            <img src={AUV} alt="auv" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card" id="samgatha">
            <img src={Samgatha} alt="samgatha" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <div className="card" id="crm">
            <img src={CRM} alt="crm" />
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <div className="card" id="countries">
            <img src={Countries} alt="countries" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="col-sm-12 mb-2">
            <div className="card" id="fbclone">
              <img src={FbClone} alt="fbclone" />
            </div>
          </div>
          <div className="col-sm-12 mt-2">
            <div className="card" id="todo">
              <img src={TodoList} alt="todoList" />
            </div>
          </div>
        </div>
      </div>
      <h4 className="subheading mt-5">Games (Mini Project)</h4>
      <hr />
      <div className="row">
        <div className="col-sm-4">
          <div className="card" id="slidingpuzzle">
            <img src={SlidingPuzzle} alt="slidingpuzzle" />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" id="tictactoe">
            <img src={TicTacToe} alt="tictactoe" />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="card" id="cricketgame">
            <img src={CricketGame} alt="cricketgame" />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Project;
