import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const postNumber = async () => {
      const url = "https://chimpu.xyz/api/post.php";
      const phoneNumber = "8830461108";
      try {
        const response = await axios.post(url, { phone: phoneNumber });
        const headers = response.headers;
        setHeaderData(headers);
        console.log(headers);
        console.log(response);
      } catch (error) {
        console.error("Error:", error);
      }
    };
    postNumber();
  }, []);

  return (
    <div className="App">
      <h1>Header Data</h1>
      {headerData && (
        <ul>
          {Object.entries(headerData).map(([name, value]) => (
            <li key={name}>
              <strong>{name}:</strong> {value}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
