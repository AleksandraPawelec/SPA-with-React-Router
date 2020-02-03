import React, { Component } from "react";
import "../styles/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header2 from "./Header2";
import Footer2 from "./Footer2";
import Navigation2 from "./Navigation2";
import Page2 from "./Page2";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            <Header2 />
          </header>
          <main>
            <aside>
              <nav>
                <Navigation2 />
              </nav>
            </aside>
            <section className="blog">
              <Page2 />
            </section>
          </main>
          <footer>
            <Footer2 />
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
