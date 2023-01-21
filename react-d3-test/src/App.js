import "./App.css";
import MultilineChart from "./view/MapChart";

function App() {
  const data = [
    {
      name: "level 1",
      id: 1,
      isTooltip: true,
      tooltipText: "Welcome",
      x: 1,
      y: 2,
      isEnabled: true,
    },
    {
      name: "level 2",
      id: 2,
      isTooltip: true,
      tooltipText: "Welcome",
      x: 2,
      y: 4,
      isEnabled: true,
    },
    {
      name: "level 3",
      id: 3,
      isTooltip: true,
      tooltipText: "Welcome",
      x: 3,
      y: 3,
      isEnabled: true,
    },
    {
      name: "level 4",
      id: 4,
      isTooltip: true,
      tooltipText: "Welcome",
      x: 4,
      y: 4,
      isEnabled: true,
    },
    {
      name: "level 5",
      id: 5,
      isTooltip: true,
      tooltipText: "Welcome",
      x: 5,
      y: 6,
      isEnabled: true,
    },
    {
      name: "level 6",
      id: 6,
      isTooltip: false,
      tooltipText: "Welcome",
      x: 6,
      y: 4,
      isEnabled: false,
    },
    {
      name: "level 7",
      id: 7,
      isTooltip: false,
      tooltipText: "Welcome",
      x: 9,
      y: 5,
      isEnabled: false,
    },
  ];
  return (
    <div className="App">
      <h1>Map</h1>
      <MultilineChart data={data} />
    </div>
  );
}

export default App;
