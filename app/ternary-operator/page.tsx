import React from "react";

export default function page() {
  return (
    <div>
      {" "}
      <h1 className="mb-8 text-3xl font-bold">
        Ternärer Operator in JavaScript
      </h1>
      {/* Ternärer Operator */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Ternärer Operator</h2>
        <p className="mb-4">
          Der ternäre Operator ist eine Abkürzung für if-else-Anweisungen und
          hat die Syntax: `bedingung ? ausdruck1 : ausdruck2`. Wenn die
          Bedingung wahr ist, wird Ausdruck1 ausgewertet, sonst Ausdruck2:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const zahl = 7;
const istGerade = (zahl % 2 === 0) ? 'gerade' : 'ungerade';
console.log(istGerade);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">ungerade</span>
        </p>
      </div>
    </div>
  );
}
