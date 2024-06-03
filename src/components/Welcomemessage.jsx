const WelcomeMessage = () => {
  return (
    <center className="welcome-message">
      <h1>There are no posts</h1>
      <button
        type="button"
        className="btn btn-primary"
        // onClick={handleGetPostsList}
      >
        Get Post from the server
      </button>
    </center>
  );
};
export default WelcomeMessage;
