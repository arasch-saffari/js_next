import React from "react";

export default function page() {
  return (
    <div>
      {" "}
      <h1 className="mb-8 text-3xl font-bold">JavaScript-Konsole</h1>
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">console.log()</h2>
        <p className="mb-4">
          Die Methode console.log() gibt eine Nachricht in der Web-Konsole aus:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>console.log('Hallo, Welt!');</code>
        </pre>
        <p>
          Ergebnis:{" "}
          <span className="p-1 bg-green-200 rounded">Hallo, Welt!</span>
        </p>
      </div>
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">console.error()</h2>
        <p className="mb-4">
          Die Methode console.error() gibt eine Fehlermeldung in der Web-Konsole
          aus:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>console.error('Ein Fehler ist aufgetreten!');</code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-red-200 rounded">
            Ein Fehler ist aufgetreten!
          </span>
        </p>
      </div>
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">console.warn()</h2>
        <p className="mb-4">
          Die Methode console.warn() gibt eine Warnmeldung in der Web-Konsole
          aus:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>console.warn('Das ist eine Warnung!');</code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-yellow-200 rounded">
            Das ist eine Warnung!
          </span>
        </p>
      </div>
      <div className="p-6 mb-8 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">console.info()</h2>
        <p className="mb-4">
          Die Methode console.info() gibt eine Informationsmeldung in der
          Web-Konsole aus:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>console.info('Das ist eine Info-Nachricht.');</code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-blue-200 rounded">
            Das ist eine Info-Nachricht.
          </span>
        </p>
      </div>
      <div className="p-6 bg-white rounded-lg shadow">
        <h2 className="mb-4 text-xl font-semibold">console.clear()</h2>
        <p className="mb-4">
          Die Methode console.clear() löscht die Web-Konsole:
        </p>
        <pre className="p-4 mb-4 text-sm bg-gray-100 rounded">
          <code>console.clear();</code>
        </pre>
        <p>
          Ergebnis:
          <span className="p-1 bg-gray-200 rounded">
            Die Web-Konsole wird gelöscht.
          </span>
        </p>
      </div>
    </div>
  );
}
