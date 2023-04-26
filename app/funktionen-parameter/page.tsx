import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Funktionsparameter in JavaScript
      </h1>

      {/* Parameterübergabe in Funktionen */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">
          Parameterübergabe in Funktionen
        </h2>
        <p className="mb-4">
          In JavaScript können Funktionen Parameter akzeptieren, die beim Aufruf
          der Funktion übergeben werden. Die Parameter werden in der
          Funktionsdeklaration in Klammern aufgelistet und können innerhalb der
          Funktion verwendet werden:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>{`function begruessung(name) {
console.log('Hallo, ' + name + '!');
}

begruessung('Anna');`}</code>
        </pre>
        <p>
          Ergebnis:{" "}
          <span className="p-1 bg-green-200 rounded">Hallo, Anna!</span>
        </p>
      </div>

      {/* Mehrere Parameter */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Mehrere Parameter</h2>
        <p className="mb-4">
          Funktionen können mehrere Parameter akzeptieren, die durch Kommata
          getrennt sind:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>{`function addiere(a, b) {
const summe = a + b;
console.log('Die Summe von ' + a + ' und ' + b + ' ist ' + summe);
}

addiere(3, 5);`}</code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Die Summe von 3 und 5 ist 8
          </span>
        </p>
      </div>
      {/* Standardwerte für Parameter */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">
          Standardwerte für Parameter
        </h2>
        <p className="mb-4">
          In JavaScript können Sie Standardwerte für Funktionsparameter
          festlegen. Wenn beim Aufruf der Funktion kein Wert für einen Parameter
          übergeben wird oder der Wert `undefined` ist, wird der Standardwert
          verwendet:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>{`function multipliziere(a, b = 1) {
const produkt = a * b;
console.log('Das Produkt von ' + a + ' und ' + b + ' ist ' + produkt);
}

multipliziere(4);`}</code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Das Produkt von 4 und 1 ist 4
          </span>
        </p>
      </div>
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Rest-Parameter</h2>
        <p className="mb-4">
          Der Rest-Parameter in JavaScript ermöglicht es, eine variable Anzahl
          von Argumenten als Array in einer Funktion zu akzeptieren. Der
          Rest-Parameter wird durch drei Punkte (...) gefolgt von einem Namen
          angegeben:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`function zeigeArgumente(...args: number[]) {
  console.log('Argumente:', args);
}

zeigeArgumente(1, 2, 3, 4, 5);`}
          </code>
        </pre>
        <p>
          Ergebnis:{" "}
          <span className="p-1 bg-green-200 rounded">
            Argumente: [1, 2, 3, 4, 5]
          </span>
        </p>
      </div>
    </div>
  );
}
