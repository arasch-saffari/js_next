import React from "react";

export default function page() {
  return <div>   <h1 className="mb-8 text-3xl font-bold">Array-Methoden in JavaScript</h1>

        {/* map() */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">map()</h2>
          <p className="mb-4">
            Die map()-Methode erstellt ein neues Array mit den Ergebnissen der auf
            jedes Element angewendeten Funktion:
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              const zahlen = [1, 2, 3, 4, 5];
              const quadrate = zahlen.map((zahl) => zahl * zahl);
              console.log(quadrate);
            </code>
          </pre>
          <p>
            Ergebnis:
            <span className="p-1 bg-green-200 rounded">[1, 4, 9, 16, 25]</span>
          </p>
        </div>

        {/* filter() */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">filter()</h2>
          <p className="mb-4">
            Die filter()-Methode erstellt ein neues Array mit allen Elementen, die
            den Test der angegebenen Funktion bestehen:
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              const zahlen = [1, 2, 3, 4, 5];
              const geradeZahlen = zahlen.filter((zahl) => zahl % 2 === 0);
              console.log(geradeZahlen);
            </code>
          </pre>
          <p>Ergebnis: <span className="p-1 bg-green-200 rounded">[2, 4]</span></p>
        </div>

        {/* reduce() */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">reduce()</h2>
          <p className="mb-4">
            Die reduce()-Methode führt eine Funktion für jedes Element im Array
            aus (von links nach rechts) und reduziert das Array auf einen einzigen
            Wert:
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              const zahlen = [1, 2, 3, 4, 5];
              const summe = zahlen.reduce((akkumulator, zahl) => akkumulator + zahl, 0);
              console.log(summe);
            </code>
          </pre>
                    <p>Ergebnis: <span className="p-1 bg-green-200 rounded">15</span></p>
        </div>

        {/* find() */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">find()</h2>
          <p className="mb-4">
            Die find()-Methode gibt den Wert des ersten Elements im Array zurück,
            das die Testfunktion erfüllt. Andernfalls wird undefined
            zurückgegeben:
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              const zahlen = [1, 2, 3, 4, 5];
              const ersteUngeradeZahl = zahlen.find((zahl) => zahl % 2 === 1);
              console.log(ersteUngeradeZahl);
            </code>
          </pre>
          <p>Ergebnis: <span className="p-1 bg-green-200 rounded">1</span></p>
        </div>

        {/* some() */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">some()</h2>
          <p className="mb-4">
            Die some()-Methode testet, ob mindestens ein Element im Array die
            Testfunktion erfüllt:
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              const zahlen = [1, 2, 3, 4, 5];
              const hatUngeradeZahl = zahlen.some((zahl) => zahl % 2 === 1);
              console.log(hatUngeradeZahl);
            </code>
          </pre>
          <p>Ergebnis: <span className="p-1 bg-green-200 rounded">true</span></p>
        </div>

        {/* every() */}
        <div className="p-6 mb-8 bg-white rounded-lg shadow">
          <h2 className="mb-4 text-xl font-semibold">every()</h2>
          <p className="mb-4">
            Die every()-Methode testet, ob alle Elemente im Array die Testfunktion
            erfüllen:
          </p>
          <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
            <code>
              const zahlen = [1, 2, 3, 4, 5];
              const sindAlleZahlenUngerade = zahlen.every((zahl) => zahl % 2 === 1);
              console.log(sindAlleZahlenUngerade);
            </code>
          </pre>
          <p>Ergebnis: <span className="p-1 bg-green-200 rounded">false</span></p>
        </div>
      
      </div>;
}
