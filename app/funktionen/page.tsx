import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Funktionen in JavaScript</h1>

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

      {/* Funktionen als Variablen */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Funktionen als Variablen</h2>
        <p className="mb-4">
          Funktionen können auch als Variablen gespeichert werden. Dies
          ermöglicht es, sie als Argumente an andere Funktionen zu übergeben
          oder sie in Datenstrukturen wie Arrays und Objekten zu speichern:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>{`const multiplikation = function(a: number, b: number): number {
  return a * b;
};

const ergebnis2 = multiplikation(5, 3);
console.log('Ergebnis2:', ergebnis2);`}</code>
        </pre>
        <p>
          Ergebnis:{" "}
          <span className="p-1 bg-green-200 rounded">Ergebnis2: 15</span>
        </p>
      </div>

      {/* Pfeilfunktionen */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Pfeilfunktionen</h2>
        <p className="mb-4">
          Pfeilfunktionen (Arrow Functions) sind eine kompaktere Schreibweise
          für Funktionen, die besonders in Verbindung mit höherwertigen
          Funktionen nützlich sind:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>{`const division = (a: number, b: number): number => {
  return a / b;
};

const ergebnis3 = division(6, 3);
console.log('Ergebnis3:', ergebnis3);`}</code>
        </pre>
        <p>
          Ergebnis:{" "}
          <span className="p-1 bg-green-200 rounded">Ergebnis3: 2</span>
        </p>
      </div>
      {/* Anonyme Funktionen */}

      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Anonyme Funktionen</h2>
        <p className="mb-4">
          Anonyme Funktionen sind Funktionen ohne Namen, die normalerweise als
          Argumente für höherwertige Funktionen oder als Rückgabewerte von
          anderen Funktionen verwendet werden:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>{`setTimeout(function() {
console.log('Anonyme Funktion ausgeführt');
}, 1000);`}</code>
        </pre>
        <p>
          Ergebnis:{" "}
          <span className="p-1 bg-green-200 rounded">
            Anonyme Funktion ausgeführt (nach 1 Sekunde)
          </span>
        </p>
      </div>
      {/* Funktionen mit Standardparametern */}

      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">
          Funktionen mit Standardparametern
        </h2>
        <p className="mb-4">
          Standardparameter ermöglichen das Festlegen von Standardwerten für
          Funktionen, die verwendet werden, wenn keine Werte oder `undefined`
          als Argumente übergeben werden:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>{`function gruss(name: string = 'unbekannt'): void {
console.log('Hallo, ' + name + '!');
}
gruss('Anna');
gruss();`}</code>
        </pre>

        <p>Ergebnis:</p>
        <pre className="p-2 text-sm bg-green-200 rounded">
          <code>Hallo, Anna! Hallo, unbekannt!</code>
        </pre>
      </div>
    </div>
  );
}
