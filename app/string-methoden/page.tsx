import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Grundlegende String-Methoden in JavaScript
      </h1>
      {/* length */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">length</h2>
        <p className="mb-4">
          Die Eigenschaft length gibt die Länge eines Strings zurück:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const text = 'Hallo, Welt!';
const laenge = text.length;
console.log(laenge);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">12</span>
        </p>
      </div>

      {/* toUpperCase() */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">toUpperCase()</h2>
        <p className="mb-4">
          Die Methode toUpperCase() gibt den String in Großbuchstaben zurück:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const text = 'Hallo, Welt!';
const grossbuchstaben = text.toUpperCase();
console.log(grossbuchstaben);`}
          </code>
        </pre>
        <p>
          Ergebnis:{" "}
          <span className="p-1 bg-green-200 rounded">HALLO, WELT!</span>
        </p>
      </div>
      {/* toLowerCase() */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">toLowerCase()</h2>
        <p className="mb-4">
          Die Methode toLowerCase() gibt den String in Kleinbuchstaben zurück:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const text = 'Hallo, Welt!';
const kleinbuchstaben = text.toLowerCase();
console.log(kleinbuchstaben);`}
          </code>
        </pre>
        <p>
          Ergebnis:{" "}
          <span className="p-1 bg-green-200 rounded">hallo, welt!</span>
        </p>
      </div>
      {/* indexOf() */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">indexOf()</h2>
        <p className="mb-4">
          Die Methode indexOf() gibt den ersten Index zurück, an dem das
          angegebene Zeichen oder der angegebene String gefunden wird, oder -1,
          wenn es nicht gefunden wird:
        </p>{" "}
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const text = 'Hallo, Welt!';
const index = text.indexOf('Welt');
console.log(index);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">7</span>
        </p>
      </div>

      {/* slice() */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">slice()</h2>
        <p className="mb-4">
          Die Methode slice() extrahiert einen Teil des Strings und gibt diesen
          als neuen String zurück:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const text = 'Hallo, Welt!';
const ausschnitt = text.slice(7);
console.log(ausschnitt);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">Welt!</span>
        </p>
      </div>

      {/* replace() */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">replace()</h2>
        <p className="mb-4">
          Die Methode replace() ersetzt einen Teil des Strings durch einen
          anderen String:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const text = 'Hallo, Welt!';
const neuerText = text.replace('Welt', 'JavaScript');
console.log(neuerText);`}
          </code>
        </pre>
        <p>
          Ergebnis:{" "}
          <span className="p-1 bg-green-200 rounded">Hallo, JavaScript!</span>
        </p>
      </div>
    </div>
  );
}
