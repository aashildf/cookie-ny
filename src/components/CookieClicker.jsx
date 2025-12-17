import { useState } from "react";

function CookieClicker() {
  const [points, setPoints] = useState(0);
  return (
    <div>
      <h2>Cookie Clicker</h2>
      <p>Poeng: {points}</p>

      <button onClick={() => setPoints(points + 1)}>
        <img src="./cookie.png" alt="Image of a cookie" width={150} />
      </button>
    </div>
  );
}

export default CookieClicker;
