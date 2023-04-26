import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Function Return in JavaScript</h1>

      {/* Funktionen mit return */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Funktionen mit return</h2>
        <p className="mb-4">
          In JavaScript können Funktionen Werte zurückgeben, indem sie das
          Schlüsselwort "return" verwenden, gefolgt vom Wert, der zurückgegeben
          werden soll:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`function addiere(a: number, b: number): number {
  return a + b;
}

const summe: number = addiere(3, 5);
console.log('Die Summe von 3 und 5 ist', summe);`}
          </code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Die Summe von 3 und 5 ist 8
          </span>
        </p>
      </div>

      {/* Frühe Rückgabe */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Frühe Rückgabe</h2>
        <p className="mb-4">
          Sie können das "return"-Statement verwenden, um eine Funktion
          frühzeitig zu beenden, bevor der gesamte Funktionscode ausgeführt
          wurde:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`function dividiere(a: number, b: number): void {
  if (b === 0) {
    console.log('Division durch Null ist nicht erlaubt.');
    return;
  }
  const ergebnis: number = a / b;
  console.log(a + ' geteilt durch ' + b + ' ist ' + ergebnis);
}

dividiere(10, 0);`}
          </code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Division durch Null ist nicht erlaubt.
          </span>
        </p>
      </div>
    </div>
  );
}
