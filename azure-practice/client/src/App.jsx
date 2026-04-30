import { useEffect, useState } from 'react'

function App() {
  const [health, setHealth] = useState(null)

  useEffect(() => {
    fetch("http://127.0.0.1:4000/api/health")
    .then((res) => res.json())
    .then((data) => setHealth(data))
    .catch((error) => {
      console.error("Fetch error:", error);
      setHealth({ status: "error" });
    });
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Azure Practice App</h1>
      <pre>{JSON.stringify(health, null, 2)}</pre>
    </main>
  );
}

export default App
