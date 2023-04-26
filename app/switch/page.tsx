import React from "react";

export default function page() {
  return (
    <div>
      {" "}
      <h1 className="mb-8 text-3xl font-bold">
        Switch-Anweisung in JavaScript
      </h1>
      {/* Switch-Anweisung */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Switch-Anweisung</h2>
        <p className="mb-4">
          Eine `switch`-Anweisung ermöglicht das Testen eines Ausdrucks gegen
          mehrere mögliche Fälle und führt den zugehörigen Codeblock aus, wenn
          eine Übereinstimmung gefunden wird:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const obst = 'Banane';

              switch (obst) {
                case 'Apfel':
                  console.log('Das Obst ist ein Apfel.');
                  break;
                case 'Banane':
                  console.log('Das Obst ist eine Banane.');
                  break;
                case 'Kirsche':
                  console.log('Das Obst ist eine Kirsche.');
                  break;
                default:
                  console.log('Das Obst ist nicht in der Liste.');
              }`}
          </code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Das Obst ist eine Banane.
          </span>
        </p>
      </div>
    </div>
  );
}
