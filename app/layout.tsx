import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "JS Wissensdatenbank - SlackAttack",
  description: "Alle Themen des Unterrichts 2023",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex ">
          <div className="w-1/2 p-8 bg-gray-900 sm:w-1/2 xl:w-1/3 2xl:w-1/4">
            <div className="p-8 menu">
              <h2>Menü</h2>

              <h3>Basics</h3>
              <ul>
                <li>
                  <a href="/console">Console</a>
                </li>
                <li>
                  <a href="/var">Var, Let, Const</a>
                </li>
                <li>
                  <a href="/logische-operatoren">Logische Operatoren</a>
                </li>
                <li>
                  <a href="/operatoren">Operatoren</a>
                </li>
                <li>
                  <a href="/booleans">Booleans</a>
                </li>
                <li>
                  <a href="/blockscope">Blockscope</a>
                </li>
                <li>
                  <a href="/isnan">IsNaN</a>
                </li>
                <li>
                  <a href="/string-methoden">String Methoden</a>
                </li>
              </ul>

              <h3> If Anweisungen </h3>

              <ul>
                <li>
                  <a href="/if">If & If Else</a>
                </li>
                <li>
                  <a href="/ternary-operator">Ternary Operator</a>
                </li>
              </ul>

              <h3>Array</h3>
              <ul>
                <li>
                  <a href="/array-basics">Array Basics</a>
                </li>
                <li>
                  <a href="/array-methoden">Array Methoden</a>
                </li>
              </ul>
              <h3>loops</h3>
              <ul>
                <li>
                  <a href="/for-loop">For Loop</a>
                </li>
                <li>
                  <a href="/switch">Switch</a>
                </li>
              </ul>
              <h3>Funktionen</h3>
              <ul>
                <li>
                  <a href="/funktionen-basics">Funktions Basics</a>
                </li>
                <li>
                  <a href="/funktionen">Funktionen</a>
                </li>
                <li>
                  <a href="/funktionen-deklarieren">Funktions Deklaration</a>
                </li>
                <li>
                  <a href="/funktionen-parameter">Funktions Parameter</a>
                </li>
                <li>
                  <a href="/funktionen-scope">Funktions Scope</a>
                </li>
                <li>
                  <a href="/funktionen-return">Funktions Return</a>
                </li>
              </ul>
              <h3>Objekte</h3>
              <ul>
                <li>
                  <a href="/objectscope">Objectscope</a>
                </li>
                <li>
                  <a href="/this">This</a>
                </li>
              </ul>
              <h3>Link Sammlung</h3>
              <ul>
                <li>
                  <a href="/js-resources">Javascript Ressourcen</a>
                </li>
                <li>
                  <a href="/youtube">Youtube</a>
                </li>
                <li>
                  <a href="/buecher">Bücher</a>
                </li>
              </ul>
            </div>{" "}
          </div>
          <div className="flex-1 p-8 text-black bg-gray-100">{children}</div>
        </div>
      </body>
    </html>
  );
}
