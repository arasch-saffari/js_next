import React from "react";

export default function page() {
  return (
    <div>
      <>
        <h1 className="mb-8 text-3xl font-bold">
          Grundlagen von Arrays in JavaScript
        </h1>

        {/* Array erstellen */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">Array erstellen</h2>
          <p className="mb-4">
            Ein Array ist eine Liste von Werten. So erstellen Sie ein Array in
            JavaScript:
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              {`const zahlen = [1, 2, 3, 4, 5];
const namen = ['Alice', 'Bob', 'Charlie'];
console.log(zahlen);
console.log(namen);`}
            </code>
          </pre>
          <p>
            Ergebnis:
            <span className="p-1 bg-green-200 rounded">
              [1, 2, 3, 4, 5]
            </span>{" "}
            und
            <span className="p-1 bg-green-200 rounded">
              ['Alice', 'Bob', 'Charlie']
            </span>
          </p>
        </div>

        {/* Array-Elemente */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">Array-Elemente</h2>
          <p className="mb-4">
            Um auf ein Element in einem Array zuzugreifen, verwenden Sie die
            eckigen Klammern und den Index des Elements (beginnend bei 0):
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              {`const namen = ['Alice', 'Bob', 'Charlie'];
const ersterName = namen[0];
console.log(ersterName);`}
            </code>
          </pre>
          <p>
            Ergebnis: <span className="p-1 bg-green-200 rounded">Alice</span>
          </p>
        </div>

        {/* Array-Länge */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">Array-Länge</h2>
          <p className="mb-4">
            Die length-Eigenschaft gibt die Anzahl der Elemente in einem Array
            zurück:
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              {`const namen = ['Alice', 'Bob', 'Charlie'];
const anzahlNamen = namen.length;
console.log(anzahlNamen);`}
            </code>
          </pre>
          <p>
            Ergebnis: <span className="p-1 bg-green-200 rounded">3</span>
          </p>
        </div>

        {/* Elemente hinzufügen */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">Elemente hinzufügen</h2>
          <p className="mb-4">
            Um einem Array ein Element hinzuzufügen, können Sie die
            push()-Methode verwenden:
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              {`const namen = ['Alice', 'Bob', 'Charlie'];
namen.push('David');
console.log(namen);`}
            </code>
          </pre>
          <p>
            Ergebnis:
            <span className="p-1 bg-green-200 rounded">
              ['Alice', 'Bob', 'Charlie', 'David']
            </span>
          </p>
        </div>

        {/* Elemente entfernen */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">Elemente entfernen</h2>
          <p className="mb-4">
            Um das letzte Element aus einem Array zu entfernen, verwenden Sie
            die pop()-Methode:
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              {`const namen = ['Alice', 'Bob', 'Charlie'];
const entfernterName = namen.pop();
console.log(entfernterName);
console.log(namen);`}
            </code>
          </pre>
          <p>
            Ergebnis: <span className="p-1 bg-green-200 rounded">Charlie</span>{" "}
            und
            <span className="p-1 bg-green-200 rounded">['Alice', 'Bob']</span>
          </p>
        </div>

        {/* Array-Iteration */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">Array-Iteration</h2>
          <p className="mb-4">
            Um über die Elemente eines Arrays zu iterieren, können Sie eine
            for-Schleife oder die forEach()-Methode verwenden:
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              {`const namen = ['Alice', 'Bob', 'Charlie'];
// for-Schleife
for (let i = 0; i < namen.length; i++) {
console.log(namen[i]);
}

// forEach()-Methode
namen.forEach((name) => {
console.log(name);
});`}
            </code>
          </pre>
          <p>
            Ergebnis: <span className="p-1 bg-green-200 rounded">Alice</span>,
            <span className="p-1 bg-green-200 rounded">Bob</span>,
            <span className="p-1 bg-green-200 rounded">Charlie</span> (zweimal)
          </p>
        </div>
      </>
    </div>
  );
}
