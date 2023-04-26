import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">If-Anweisungen in JavaScript</h1>

      {/* If-Anweisung */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">If-Anweisung</h2>
        <p className="mb-4">
          Eine if-Anweisung führt einen Codeblock aus, wenn eine Bedingung
          erfüllt (wahr) ist:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const zahl = 7;

if (zahl % 2 === 0) {
  console.log('Die Zahl ist gerade');
} else {
  console.log('Die Zahl ist ungerade');
}`}
          </code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Die Zahl ist ungerade
          </span>
        </p>
      </div>

      {/* If-Else If-Else Anweisung */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">
          If-Else If-Else Anweisung
        </h2>
        <p className="mb-4">
          Eine if-else if-else Anweisung ermöglicht das Testen mehrerer
          Bedingungen in einer Abfolge:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const punktzahl = 78;

if (punktzahl >= 90) {
  console.log('Ausgezeichnet');
} else if (punktzahl >= 75) {
  console.log('Gut');
} else if (punktzahl >= 50) {
  console.log('Befriedigend');
} else {
  console.log('Ungenügend');
}`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">Gut</span>
        </p>
      </div>
    </div>
  );
}
