export default function App() {
  const packages = [
    {
      title: "Basis",
      subtitle: "Reinigen",
      price: "€4,50",
      features: [
        "Grof vuil verwijderen",
        "Inzepen",
        "Reinigen met oppervlakte reiniger",
        "Naspoelen",
      ],
    },
    {
      title: "Compleet",
      subtitle: "Reinigen + Invegen",
      price: "€7,50",
      features: [
        "Alles van basis",
        "Voegen opnieuw invegen",
        "Inclusief standaard brekerzand",
      ],
      featured: true,
    },
    {
      title: "Premium",
      subtitle: "Reinigen + Invegen + Bescherming",
      price: "€9,00",
      features: [
        "Alles van compleet",
        "Aanbrengen beschermlaag",
        "Bescherming tegen vuil en weersinvloeden",
      ],
    },
  ];

  return (
    <div className="bg-slate-950 text-white min-h-screen font-sans">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <img
          src="https://i.imgur.com/r9xY7xY.png"
          alt="SteenFris Logo"
          className="mx-auto w-full max-w-3xl mb-10"
        />

        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-lime-400">
          Professionele Reiniging van
          <br />
          Terrassen, Opritten & Bestrating
        </h1>

        <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
          SteenFris zorgt voor een strakke en frisse uitstraling van jouw
          terras, oprit of bestrating. Professionele reiniging met krachtige
          apparatuur en hoogwaardige producten.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/31631926201"
            className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-4 rounded-2xl text-lg shadow-lg transition"
          >
            WhatsApp Direct
          </a>

          <a
            href="tel:0631926201"
            className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl text-lg transition"
          >
            Bel: 06-31926201
          </a>
        </div>
      </section>

      {/* USP */}
      <section className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6 px-6 pb-12">
        {[
          "Krachtige reiniging",
          "Milieuvriendelijke producten",
          "Stralend resultaat",
          "Beschermt en verlengt levensduur",
        ].map((item) => (
          <div
            key={item}
            className="bg-slate-900 rounded-3xl p-6 text-center border border-slate-800 shadow-lg"
          >
            <div className="text-4xl mb-4">✓</div>
            <p className="font-semibold text-lg">{item}</p>
          </div>
        ))}
      </section>

      {/* Packages */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold mb-4 text-lime-400">
            Onze Pakketten
          </h2>
          <p className="text-slate-300 text-lg">
            Transparante prijzen en professionele kwaliteit.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.title}
              className={`rounded-3xl overflow-hidden shadow-2xl border ${
                pkg.featured
                  ? "border-lime-400 scale-105 bg-white text-black"
                  : "border-slate-800 bg-white text-black"
              }`}
            >
              <div
                className={`p-8 text-center ${
                  pkg.featured ? "bg-lime-500" : "bg-slate-950 text-white"
                }`}
              >
                <h3 className="text-5xl font-bold mb-3">{pkg.title}</h3>
                <p className="text-2xl font-semibold uppercase tracking-wide">
                  {pkg.subtitle}
                </p>
              </div>

              <div className="p-8">
                <ul className="space-y-5 mb-10 text-lg">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <span className="text-lime-500 font-bold">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className="border-t pt-6 text-center">
                  <p className="text-lg text-slate-500 mb-2">vanaf</p>
                  <div className="flex items-end justify-center gap-2">
                    <span className="text-6xl font-bold">{pkg.price}</span>
                    <span className="text-2xl pb-2">p/m²</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Work Area */}
      <section className="max-w-5xl mx-auto px-6 py-10">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-10 text-center shadow-xl">
          <h2 className="text-4xl font-bold mb-4 text-lime-400">
            Actief in Noord-Nederland
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            Wij reinigen terrassen, opritten en bestrating in Groningen,
            Drenthe, Friesland en omgeving.
          </p>
        </div>
      </section>

      {/* Contact */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="bg-white text-black rounded-3xl p-10 shadow-2xl">
          <h2 className="text-5xl font-bold text-center mb-10 text-slate-900">
            Vrijblijvend Contact Opnemen
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <div className="space-y-6 text-lg">
                <p>
                  <strong>Telefoon:</strong>
                  <br />
                  06-31926201
                </p>

                <p>
                  <strong>Werkgebied:</strong>
                  <br />
                  Noord-Nederland
                </p>

                <p>
                  <strong>WhatsApp:</strong>
                  <br />
                  Snel contact mogelijk
                </p>
              </div>
            </div>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Naam"
                className="w-full border border-slate-300 rounded-xl px-4 py-3"
              />

              <input
                type="tel"
                placeholder="Telefoonnummer"
                className="w-full border border-slate-300 rounded-xl px-4 py-3"
              />

              <textarea
                rows="5"
                placeholder="Waarmee kunnen wij helpen?"
                className="w-full border border-slate-300 rounded-xl px-4 py-3"
              />

              <button
                type="submit"
                className="bg-lime-500 hover:bg-lime-400 text-black font-bold px-8 py-4 rounded-2xl w-full transition"
              >
                Verstuur Aanvraag
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 py-8 text-center text-slate-400">
        <p className="text-lg">
          © 2026 SteenFris — Schoon. Veilig. Beschermd.
        </p>
      </footer>
    </div>
  );
}
