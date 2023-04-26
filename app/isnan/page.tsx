import React from "react";

export default function Page() {
  const wert1 = "Hallo!";
  const wert2 = 42;
  const nummernString = "12345";
  const floatWert = 3.14159;

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">isNaN in JavaScript</h1>

      {/* isNaN() */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">isNaN()</h2>
        <p className="mb-4">
          Die isNaN-Funktion (is Not a Number) wird verwendet, um zu überprüfen,
          ob ein Wert keine Zahl ist. Sie gibt true zurück, wenn der Wert keine
          Zahl ist, und false, wenn der Wert eine Zahl ist:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            console.log(isNaN(wert1)); // true console.log(isNaN(wert2)); //
            false
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">true</span> und{" "}
          <span className="p-1 bg-red-200 rounded">false</span>
        </p>
      </div>

      {/* isNaN() mit Zahlen im String */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">
          isNaN() mit Zahlen im String
        </h2>
        <p className="mb-4">
          Wenn ein String nur aus Zahlen besteht, wird isNaN() false
          zurückgeben, da der String in eine Zahl konvertiert werden kann:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>console.log(isNaN(nummernString)); // false</code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-red-200 rounded">false</span>
        </p>
      </div>

      {/* isNaN() mit Floats */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">isNaN() mit Floats</h2>
        <p className="mb-4">
          Die isNaN-Funktion gibt auch false zurück, wenn der Wert eine
          Fließkommazahl ist:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>console.log(isNaN(floatWert)); // false</code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-red-200 rounded">false</span>
        </p>
      </div>
    </div>
  );
}
