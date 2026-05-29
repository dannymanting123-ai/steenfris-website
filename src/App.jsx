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
    price: "€7,00",
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
        <div>🧴 Professionele reinigingsmiddelen</div>
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
        <p>Actief in Drenthe</p>
      </section>

      <section className="contact-section">
  <h2>Vraag vrijblijvend een offerte aan</h2>

  <form
    action="https://api.web3forms.com/submit"
    method="POST"
    className="contact-form"
  >
    <input
      type="hidden"
      name="access_key"
      value="bb91a809-3d4e-4413-a021-296590fea62d"
    />

    <input
      type="text"
      name="name"
      placeholder="Naam"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="E-mailadres"
      required
    />

    <input
      type="tel"
      name="phone"
      placeholder="Telefoonnummer"
    />

    <textarea
      name="message"
      placeholder="Waarmee kunnen wij helpen?"
      required
    ></textarea>

    <button type="submit">
      Offerte aanvragen
    </button>
  </form>

  <a
    href="https://wa.me/31631926201"
    target="_blank"
    rel="noreferrer"
    className="whatsapp-button"
  >
    WhatsApp ons
  </a>
</section>
    </div>
  );
}
