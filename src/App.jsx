import "./index.css";

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
    subtitle: "Reinigen + Bescherming",
    price: "€9,00",
    features: [
      "Alles van compleet",
      "Aanbrengen beschermlaag",
      "Bescherming tegen vuil en weersinvloeden",
    ],
  },
];

export default function App() {
  return (
    <div className="app">
      <section className="hero">
        <img src="/logo.png" alt="SteenFris Logo" className="logo" />

        <h1>
          Professionele Reiniging van
          <br />
          Terrassen, Opritten & Bestrating
        </h1>

        <p>
          SteenFris zorgt voor een strakke en frisse uitstraling van jouw terras,
          oprit of bestrating.
        </p>

        <div className="buttons">
          <a
            href="https://wa.me/31631926201"
            target="_blank"
            className="whatsapp"
          >
            WhatsApp
          </a>

          <a href="tel:0631926201" className="call">
            Bel: 06-31926201
          </a>
        </div>
      </section>

      <section className="benefits">
        <div>✅ Krachtige reiniging</div>
        <div>🌱 Milieuvriendelijke producten</div>
        <div>✨ Stralend resultaat</div>
        <div>🛡️ Beschermt en verlengt levensduur</div>
      </section>

      <section className="packages">
        <h2>Onze Pakketten</h2>

        <div className="package-grid">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`package-card ${pkg.featured ? "featured" : ""}`}
            >
              <h3>{pkg.title}</h3>
              <h4>{pkg.subtitle}</h4>

              <ul>
                {pkg.features.map((feature, i) => (
                  <li key={i}>✓ {feature}</li>
                ))}
              </ul>

              <div className="price">
                vanaf <span>{pkg.price}</span> p/m²
              </div>
            </div>
          ))}
        </div>

        <div className="minimum">
  <span>Minimum factuurbedrag</span>
  <strong>€125,-</strong>
</div>
      </section>

      <section className="service-area">
        <h2>Werkgebied</h2>
        <p>Actief in Noord-Nederland</p>
      </section>

      <section className="contact">
        <h2>Vrijblijvend contact opnemen?</h2>

        <form className="contact-form">
          <input type="text" placeholder="Naam" />
          <input type="email" placeholder="E-mailadres" />
          <textarea placeholder="Bericht"></textarea>

          <button type="submit">Versturen</button>
        </form>
      </section>
    </div>
  );
}
