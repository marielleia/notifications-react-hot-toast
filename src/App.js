import "./App.css";
import { Toaster, toast } from "react-hot-toast";
import HarryPotter from "./components/HarryPotter";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">WINGARDIUM LEVIOSA</h1>
      <button
        onClick={() =>
          toast.success("Its a beautiful morning", {
            position: "top-right",
            autoClose: 5000,
            icon: "☀️",
            style: {
              background: "white",
              color: "orange",
            },
          })
        }
      >
        Good morning ☀️
      </button>
      <br />
      <br />
      <button
        onClick={() =>
          toast.loading("Loading...", {
            position: "bottom-right",
            autoClose: 5000,
            icon: "💤",
            style: {
              background: "green",
              color: "#fff",
            },
          })
        }
      >
        Siesta Time 💤
      </button>
      <br />
      <br />
      <button
        onClick={() =>
          toast.success("Sweet dreams and sleep tight", {
            position: "bottom-right",
            autoClose: 5000,
            icon: "🌙",
            style: {
              background: "darkblue",
              color: "#fff",
            },
          })
        }
      >
        Good night 🌙
      </button>
      <HarryPotter />
      <Toaster />
    </div>
  );
}

export default App;
