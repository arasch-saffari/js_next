import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Arithmetische Operatoren in JavaScript
      </h1>
      {/* Addition */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Addition (+)</h2>
        <p className="mb-4">Der Addition Operator (+) addiert zwei Werte:</p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const a = 5;
const b = 3;
const summe = a + b;
console.log(summe);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">8</span>
        </p>
      </div>
      {/* Subtraktion */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Subtraktion (-)</h2>
        <p className="mb-4">
          Der Subtraktionsoperator (-) subtrahiert den zweiten Wert vom ersten:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const a = 10;
const b = 4;
const differenz = a - b;
console.log(differenz);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">6</span>
        </p>
      </div>
      {/* Multiplikation */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Multiplikation (*)</h2>
        <p className="mb-4">
          Der Multiplikationsoperator (*) multipliziert zwei Werte miteinander:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const a = 7;
const b = 3;
const produkt = a * b;
console.log(produkt);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">21</span>
        </p>
      </div>
      {/* Division */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Division (/)</h2>
        <p className="mb-4">
          Der Divisionsoperator (/) dividiert den ersten Wert durch den zweiten:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const a = 20;
const b = 5;
const quotient = a / b;
console.log(quotient);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">4</span>
        </p>
      </div>
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Modulo (%)</h2>
        <p className="mb-4">
          Der Modulo-Operator (%) gibt den Rest einer Division zurück:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const a = 15;
const b = 4;
const rest = a % b;
console.log(rest);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">3</span>
        </p>
      </div>
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Exponentiation (**)</h2>
        <p className="mb-4">
          Der Exponentiationsoperator (**) hebt den ersten Wert (Basis) auf den
          zweiten Wert (Exponent) potenziert:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const basis = 2;
const exponent = 3;
const potenz = basis ** exponent;
console.log(potenz);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">8</span>
        </p>
      </div>
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Inkrement (++)</h2>
        <p className="mb-4">
          Der Inkrementoperator (++) erhöht den Wert einer Variable um eins:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`let zaehler = 1;
zaehler++;
console.log(zaehler);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">2</span>
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Dekrement (--)</h2>
        <p className="mb-4">
          Der Dekrementoperator (--) verringert den Wert einer Variable um eins:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`let zaehler = 3;
zaehler--;
console.log(zaehler);`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">2</span>
        </p>
      </div>
    </div>
  );
}
