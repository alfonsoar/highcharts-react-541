import { Chart, Series, Title } from "@highcharts/react";

import "./App.css";
import { useState } from "react";

function App() {
  const [toggle, setStoggle] = useState(false);
  return (
    <>
      <div style={{ width: '600px', height: '400px' }}>
        <Chart>
          <Title>Line chart</Title>
          <Series
            type="line"
            data={[1, 2, 3]}
            options={{
              color: "#FF0000",
              name: "Slugthrowers"
            }}
          />
        </Chart>
      </div>


      <button onClick={() => setStoggle(!toggle)}>Toggle</button>
    </>
  );
}

export default App;
