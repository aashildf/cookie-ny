import { useEffect, useState } from "react";

function CatFacts() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchCatFacts = () => {
    setLoading(true);
    setError(null);

    const randomPage = Math.floor(Math.random() * 10) + 1;

    fetch(`https://catfact.ninja/facts?limit=5&page=${randomPage}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Noe gikk galt");
        }
        return response.json();
      })
      .then((data) => {
        setFacts(data.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchCatFacts();
  }, []);

  if (loading) return <p className="loading">Loading...</p>;
  if (error) return <p className="error">Feil...{error}</p>;

  return (
    <div className="cat-facts-container">
      <div className="cat-header">
        <h2>Cat Facts</h2>
        <img
          src="./public/sourcat.gif"
          alt="Cat Animation"
          className="cat-animation"
        />
      </div>

      <button
        className="refresh-button"
        onClick={() => {
          setLoading(true);
          fetchCatFacts();
        }}
      >
        Refresh facts
      </button>

      <ul>
        {facts.map((fact, index) => (
          <li key={index}>{fact.fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default CatFacts;
