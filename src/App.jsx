import "./App.css";
import GradeTracker from "./components/GradeTracker";

function App() {
  return (
    <div className="App">
      <div className="container max-w-4xl mx-auto my-8 px-8">
        <div className="my-8">
          <h1 className="text-center text-3xl font-bold">Students</h1>
        </div>
        <GradeTracker />
      </div>
    </div>
  );
}

export default App;
