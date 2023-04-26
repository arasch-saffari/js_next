import React from "react";

export default function Page() {
  return (
    <div>
      <h1 class="text-3xl font-bold mb-8">Var, Let und Const in JavaScript</h1>

      {/* Var */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Var</h2>
        <p className="mb-4">
          Die `var`-Anweisung deklariert eine Variable und weist ihr optional
          einen Wert zu. Variablen, die mit `var` deklariert werden, haben einen
          Funktions- oder globalen Scope:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            function testVar() &#123; var x = 10; console.log(x); &#125;
            testVar();
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">10</span>
        </p>
      </div>

      {/* Let */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Let</h2>
        <p className="mb-4">
          Die `let`-Anweisung deklariert eine Variable mit Block Scope. Das
          bedeutet, dass die Variable nur innerhalb des Blocks verfügbar ist, in
          dem sie deklariert wurde:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            function testLet() &#123; let x = 20; console.log(x); &#125;
            testLet();
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">20</span>
        </p>
      </div>

      {/* Const */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Const</h2>
        <p className="mb-4">
          Die `const`-Anweisung deklariert eine konstante Variable, deren Wert
          nicht geändert werden kann. Ähnlich wie bei `let` hat eine mit `const`
          deklarierte Variable einen Block Scope:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            function testConst() &#123; const x = 30; console.log(x); &#125;
            testConst();
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">30</span>
        </p>
      </div>
    </div>
  );
}
