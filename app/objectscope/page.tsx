import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">Objektscope in JavaScript</h1>

      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">Objektscope</h2>
        <p className="mb-4">
          In JavaScript haben Objekte ihren eigenen Scope. Das bedeutet, dass
          Variablen und Funktionen, die innerhalb eines Objekts definiert sind,
          nur innerhalb des Objekts zugänglich sind, es sei denn, sie werden
          explizit nach außen hin zugänglich gemacht:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const objekt = {
  interneVariable: 'Ich bin intern',
  interneFunktion: function() {
    console.log('Die interne Variable ist:', this.interneVariable);
  },
  externeFunktion: function() {
    console.log('Die externe Variable ist:', externeVariable);
  }
};

const externeVariable = 'Ich bin extern';

objekt.interneFunktion(); // Zugriff auf die interne Variable
objekt.externeFunktion(); // Zugriff auf die externe Variable`}
          </code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Die interne Variable ist: Ich bin intern
          </span>
          <br />
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Die externe Variable ist: Ich bin extern
          </span>
        </p>
      </div>

      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">
          Zugriff auf Objekteigenschaften und -methoden
        </h2>
        <p className="mb-4">
          Um auf die Eigenschaften und Methoden eines Objekts zuzugreifen,
          verwenden Sie die Punktnotation oder die eckigen Klammern:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const person = {
  name: 'Anna',
  alter: 30,
  begruessung: function() {
    console.log('Hallo, mein Name ist ' + this.name + ' und ich bin ' + this.alter + ' Jahre alt.');
  }
};

console.log(person.name); // Zugriff auf die Eigenschaft 'name'
person.begruessung(); // Zugriff auf die Methode 'begruessung'`}
          </code>
        </pre>
        <p>
          Ergebnis: <span className="p-1 bg-green-200 rounded">Anna</span>
          <br />
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Hallo, mein Name ist Anna und ich bin 30 Jahre alt.
          </span>
        </p>
      </div>
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">'this' in Objekten</h2>
        <p className="mb-4">
          Das Schlüsselwort 'this' bezieht sich auf das aktuelle Objekt, in dem
          es verwendet wird. Es ermöglicht den Zugriff auf die Eigenschaften und
          Methoden des Objekts innerhalb des Objekts:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const auto = {
  marke: 'Tesla',
  modell: 'Model 3',
  gibAutoDetails: function() {
    console.log('Dieses Auto ist ein ' + this.marke + ' ' + this.modell + '.');
  }
};

auto.gibAutoDetails();`}
          </code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">
            Dieses Auto ist ein Tesla Model 3.
          </span>
        </p>
      </div>
    </div>
  );
}
