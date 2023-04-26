import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Booleans in JavaScript</h1>

      {/* Boolean-Werte */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Boolean-Werte</h2>
        <p className="mb-4">
          In JavaScript gibt es zwei boolesche Werte: true und false. Diese
          Werte werden oft in Bedingungen und Vergleichen verwendet:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const istWahr = true;
const istFalsch = false;

console.log(istWahr);
console.log(istFalsch);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">true</span> und{" "}
          <span className="p-1 bg-red-200 rounded">false</span>
        </p>
      </div>

      {/* Vergleichsoperatoren */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Vergleichsoperatoren</h2>
        <p className="mb-4">
          Vergleichsoperatoren werden verwendet, um zwei Werte zu vergleichen
          und einen booleschen Wert zurückzugeben:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const a = 5;
const b = 10;

console.log(a === b);
console.log(a !== b);
console.log(a < b);
console.log(a > b);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-red-200 rounded">false</span>,{" "}
          <span className="p-1 bg-green-200 rounded">true</span>,{" "}
          <span className="p-1 bg-green-200 rounded">true</span> und{" "}
          <span className="p-1 bg-red-200 rounded">false</span>
        </p>
      </div>

      {/* Boolean()-Funktion */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Boolean()-Funktion</h2>
        <p className="mb-4">
          Die Boolean()-Funktion wird verwendet, um einen Wert in einen
          booleschen Wert umzuwandeln:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const zahl = 42;
const keinWert = undefined;

console.log(Boolean(zahl));
console.log(Boolean(keinWert));`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">true</span> und{" "}
          <span className="p-1 bg-red-200 rounded">false</span>
        </p>
      </div>
    </div>
  );
}
