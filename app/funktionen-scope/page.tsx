import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Funktionsbereich (Function Scope) in JavaScript
      </h1>

      {/* Function Scope */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Funktionsbereich</h2>
        <p className="mb-4">
          In JavaScript hat jede Funktion ihren eigenen Gültigkeitsbereich
          (scope). Variablen, die innerhalb einer Funktion deklariert werden,
          sind nur innerhalb dieser Funktion verfügbar und können von außerhalb
          der Funktion nicht aufgerufen werden:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`function zeigeBereich() {
const innerhalbDerFunktion = 'Ich bin innerhalb der Funktion';
console.log(innerhalbDerFunktion);
}

zeigeBereich();
console.log(innerhalbDerFunktion); `}
            // Fehler: ReferenceError: innerhalb DerFunktion is not defined
          </code>{" "}
        </pre>{" "}
        <p>Ergebnis:</p>{" "}
        <pre className="p-2 text-sm bg-green-200 rounded">
          {" "}
          <code>
            Ich bin innerhalb der Funktion ReferenceError: innerhalbDerFunktion
            is not defined
          </code>
        </pre>
      </div>
      {/* Zugriff auf globale Variablen innerhalb von Funktionen */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">
          Zugriff auf globale Variablen innerhalb von Funktionen
        </h2>
        <p className="mb-4">
          Funktionen können auf globale Variablen zugreifen, die außerhalb der
          Funktion deklariert wurden:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>{`const globalVariable = 'Ich bin eine globale Variable';
function zeigeGlobaleVariable() {
console.log(globalVariable);
}

zeigeGlobaleVariable();`}</code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Ich bin eine globale Variable
          </span>
        </p>
      </div>
    </div>
  );
}
