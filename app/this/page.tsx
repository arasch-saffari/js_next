import React from "react";

export default function page() {
  return (
    <div>
      <h1 className="mb-8 text-3xl font-bold">'this' in JavaScript</h1>

      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">'this' in Objektmethoden</h2>
        <p className="mb-4">
          In Objektmethoden bezieht sich 'this' auf das Objekt, zu dem die
          Methode gehört:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const person = {
  name: 'Lisa',
  begruessung: function() {
    console.log('Hallo, ich bin ' + this.name + '.');
  }
};

person.begruessung();`}
          </code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">Hallo, ich bin Lisa.</span>
        </p>
      </div>

      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">
          'this' in globalen Funktionen
        </h2>
        <p className="mb-4">
          In globalen Funktionen bezieht sich 'this' auf das globale Objekt (im
          Browser ist das das 'window'-Objekt):
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`function zeigeThis() {
  console.log(this);
}

zeigeThis();`}
          </code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-green-200 rounded">[object Window]</span>
        </p>
      </div>

      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">'this' in Event-Handler</h2>
        <p className="mb-4">
          In Event-Handler bezieht sich 'this' auf das Element, das das Event
          ausgelöst hat:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>
            {`const button = document.querySelector('button');
button.addEventListener('click', function() {
  console.log('Das geklickte Element ist:', this);
});`}
          </code>
        </pre>
        <p>
          Ergebnis: Bei Klick auf den Button:
          <span className="p-1 bg-green-200 rounded">
            Das geklickte Element ist: [object HTMLButtonElement]
          </span>
        </p>
      </div>
    </div>
  );
}
