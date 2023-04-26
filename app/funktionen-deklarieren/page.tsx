import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Funktionsdeklarationen in JavaScript
      </h1>

      {/* Funktionen deklarieren */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Funktionsdeklarationen</h2>
        <p className="mb-4">
          Funktionsdeklarationen sind eine Möglichkeit, Funktionen in JavaScript
          zu definieren. Sie verwenden das Schlüsselwort `function`, gefolgt vom
          Funktionsnamen, einer Liste von Parametern in Klammern und dem
          Funktionskörper in geschweiften Klammern:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>{`function summe(a: number, b: number): number {
  return a + b;
}

const ergebnis = summe(5, 3);
console.log('Ergebnis:', ergebnis);`}</code>
        </pre>
        <p>
          Ergebnis:{" "}
          <span className="p-1 bg-green-200 rounded">Ergebnis: 8</span>
        </p>
      </div>

      {/* Hoisting */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Hoisting</h2>
        <p className="mb-4">
          Funktionsdeklarationen werden vom JavaScript-Interpreter vor der
          Ausführung des Codes "gehoben" (hoisting). Das bedeutet, dass sie
          überall in ihrem Gültigkeitsbereich (scope) aufgerufen werden können,
          selbst bevor sie deklariert wurden:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>{`const ergebnis2 = multiplikation(5, 3);
console.log('Ergebnis2:', ergebnis2);

function multiplikation(a: number, b: number): number {
  return a * b;
}`}</code>
        </pre>
        <p>
          Ergebnis:{" "}
          <span className="p-1 bg-green-200 rounded">Ergebnis2: 15</span>
        </p>
      </div>
    </div>
  );
}
