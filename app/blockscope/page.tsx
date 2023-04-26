import React from "react";

export default function Page() {
  function testScope() {
    let x = 10;
    const y = 20;

    if (x < y) {
      let z = 30;
      console.log("Innerhalb des Blocks:", x, y, z);
    }

    // Zugriff auf z außerhalb des Blocks verursacht einen Fehler
    console.log("Außerhalb des Blocks:", x, y); // z ist hier nicht verfügbar
  }

  testScope();

  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Block Scope in JavaScript</h1>
      {/* Block Scope */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Block Scope</h2>
        <p className="mb-4">
          Variablen, die mit `let` und `const` innerhalb eines Blocks (z. B.
          innerhalb einer Funktion oder Schleife) deklariert werden, sind auf
          diesen Block beschränkt und außerhalb des Blocks nicht verfügbar:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            function testScope() &#123;
            <br />
            &nbsp;&nbsp;let x = 10;
            <br />
            &nbsp;&nbsp;const y = 20;
            <br />
            <br />
            &nbsp;&nbsp;if (x &#60; y) &#123;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;let z = 30;
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;console.log('Innerhalb des Blocks:', x, y,
            z);
            <br />
            &nbsp;&nbsp;&#125;
            <br />
            <br />
            &nbsp;&nbsp;// Zugriff auf z außerhalb des Blocks verursacht einen
            Fehler
            <br />
            &nbsp;&nbsp;console.log('Außerhalb des Blocks:', x, y); // z ist
            hier nicht verfügbar
            <br />
            &#125;
            <br />
            <br />
            testScope();
          </code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Innerhalb des Blocks: 10 20 30
          </span>
          <br />
          <span className="p-1 bg-green-200 rounded">
            Außerhalb des Blocks: 10 20
          </span>
        </p>
      </div>
    </div>
  );
}
