import React from "react";

export default function Page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">
        Logische Operatoren in JavaScript
      </h1>

      {/* AND (&&) */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">AND (&&)</h2>
        <p className="mb-4">
          Der AND-Operator (&&) gibt true zurück, wenn beide Operanden wahr
          sind, sonst false:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            const a = true; const b = false; const ergebnis = a && b;
            console.log(ergebnis);
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-red-200 rounded">false</span>
        </p>
      </div>

      {/* OR (||) */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">OR (||)</h2>
        <p className="mb-4">
          Der OR-Operator (||) gibt true zurück, wenn mindestens einer der
          Operanden wahr ist, sonst false:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            const a = true; const b = false; const ergebnis = a || b;
            console.log(ergebnis);
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">true</span>
        </p>
      </div>

      {/* NOT (!) */}
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">NOT (!)</h2>
        <p className="mb-4">
          Der NOT-Operator (!) gibt true zurück, wenn der Operand falsch ist,
          und false, wenn der Operand wahr ist. Er kehrt den Wahrheitswert des
          Operanden um:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            const a = true; const ergebnis = !a; console.log(ergebnis);
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-red-200 rounded">false</span>
        </p>
      </div>
    </div>
  );
}
