import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Sidebar from "./components/sidebar";
import CreatePost from "./components/createpost";
import { useState } from "react";

import PostList from "./components/postlist";
import PostListProvider from "./stores/post-list-store";

function App() {
  const [selectedTab, setSelectedTab] = useState("Home");
  function setValue(attribute) {
    setSelectedTab(attribute);
  }

  return (
    <PostListProvider>
      <>
        <div className="app-container">
          <Sidebar selectedTab={selectedTab} setValue={setValue} />
          <div className="content">
            <Header />
            {selectedTab === "Home" ? <PostList /> : <CreatePost />}

            <Footer />
          </div>
        </div>
      </>
    </PostListProvider>
  );
}

export default App;
