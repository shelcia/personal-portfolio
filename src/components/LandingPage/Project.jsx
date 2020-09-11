import React from "react";
import { Link } from "react-router-dom";
import AUV from "../../assets/mockups/auv.png";
import Samgatha from "../../assets/mockups/samgatha.png";
import CRM from "../../assets/mockups/crm.png";
import Countries from "../../assets/mockups/countries.png";
import FbClone from "../../assets/mockups/fbclone.png";
import TodoList from "../../assets/mockups/todo.png";
import SlidingPuzzle from "../../assets/mockups/slidingpuzzle.png";
import TicTacToe from "../../assets/mockups/tic-tac-toe.png";
import CricketGame from "../../assets/mockups/cricketgame.png";
import ScrollAnimation from "react-animate-on-scroll";

const Project = () => {
  return (
    <React.Fragment>
      <h4 className="subheading">Projects</h4>
      <hr />
      <div className="row">
        <div className="col-sm-6">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="card">
              <div className="card-inner" id="auv">
                <div className="card-front">
                  <img src={AUV} alt="auv" />
                </div>
                <div className="card-back">
                  <h6 className="subtitle">AUV IIITDM</h6>
                  <Link to="/project/auv" className=" mt-2">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="col-sm-6">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="card">
              <div className="card-inner" id="samgatha">
                <div className="card-front">
                  <img src={Samgatha} alt="samgatha" />
                </div>
                <div className="card-back">
                  <h6 className="subtitle">Samgatha</h6>
                  <Link to="/project/samgatha" className=" mt-2">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12">
          <ScrollAnimation animateIn="fadeInUp">
            <div className="card">
              <div className="card-inner" id="crm">
                <div className="card-front">
                  <img src={CRM} alt="crm" />
                </div>
                <div className="card-back">
                  <h6 className="subtitle">Customer Relations Management</h6>
                  <Link to="/project/crm" className=" mt-2">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-6">
          <ScrollAnimation
            animateIn="fadeInUp"
            style={{
              height: "100%",
            }}
          >
            <div
              className="card"
              style={{
                height: "100%",
              }}
            >
              <div className="card-inner" id="countries">
                <div className="card-front">
                  <img src={Countries} alt="countries" />
                </div>
                <div className="card-back">
                  <h6 className="subtitle">Weather App</h6>
                  <Link to="/project/weatherapp" className=" mt-2">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </ScrollAnimation>
        </div>
        <div className="col-sm-6">
          <div className="col-sm-12 mb-2 p-0">
            <ScrollAnimation animateIn="fadeInUp">
              <div className="card">
                <div className="card-inner" id="fbclone">
                  <div className="card-front">
                    <img src={FbClone} alt="fbclone" />
                  </div>
                  <div className="card-back">
                    <h6 className="subtitle">Facebook Clone</h6>
                    <Link to="/project/fbclone" className=" mt-2">
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
          <div className="col-sm-12 mt-2 p-0">
            <ScrollAnimation animateIn="fadeInUp">
              <div className="card">
                <div className="card-inner" id="todo">
                  <div className="card-front">
                    <img src={TodoList} alt="todoList" />
                  </div>
                  <div className="card-back">
                    <h6 className="subtitle">Todo App</h6>
                    <Link to="/project/todoapp" className=" mt-2">
                      See More
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
      <h4 className="subheading mt-5">Games (Mini Project)</h4>
      <hr />
      <ScrollAnimation animateIn="fadeInUp">
        <div className="row">
          <div className="col-sm-4">
            <div className="card">
              <div className="card-inner" id="slidingpuzzle">
                <div className="card-front">
                  <img src={SlidingPuzzle} alt="slidingpuzzle" />
                </div>
                <div className="card-back">
                  <h6 className="subtitle">Sliding Puzzle</h6>
                  <Link to="/project/slidingpuzzle" className=" mt-2">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-inner" id="tictactoe">
                <div className="card-front">
                  <img src={TicTacToe} alt="tictactoe" />
                </div>
                <div className="card-back">
                  <h6 className="subtitle">Tic Tac Toe</h6>
                  <Link to="/project/tictactoe" className=" mt-2">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card">
              <div className="card-inner" id="cricketgame">
                <div className="card-front">
                  <img src={CricketGame} alt="cricketgame" />
                </div>
                <div className="card-back">
                  <h6 className="subtitle">Cricket Game</h6>
                  <Link to="/project/cricket" className=" mt-2">
                    See More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </React.Fragment>
  );
};

export default Project;
