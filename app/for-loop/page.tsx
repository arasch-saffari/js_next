import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">For-Schleife in JavaScript</h1>
      {/* For-Schleife */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">For-Schleife</h2>
        <p className="mb-4">
          Eine `for`-Schleife ermöglicht das wiederholte Ausführen eines
          Codeblocks für eine bestimmte Anzahl von Iterationen. Sie besteht aus
          drei optionalen Ausdrücken (Initialisierung, Bedingung und
          Finalisierung), die durch Semikolons getrennt sind:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`let summe = 0;

              for (let i = 1; i <= 5; i++) {
                summe += i;
              }

              console.log('Summe:', summe);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">Summe: 15</span>
        </p>
      </div>
    </div>
  );
}
