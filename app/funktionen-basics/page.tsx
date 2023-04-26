import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Grundlagen von Funktionen in JavaScript
      </h1>

      {/* Funktionen */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Funktionen</h2>
        <p className="mb-4">
          Funktionen sind wiederverwendbare Codeblöcke, die eine bestimmte
          Aufgabe ausführen und gegebenenfalls einen Wert zurückgeben. Sie
          können Parameter akzeptieren und auf diese Weise flexibel gestaltet
          werden:
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
    </div>
  );
}
