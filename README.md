# Personal Portfolio Website (React + Vite)

Moderni, interaktiivinen portfolio-sivusto, joka esittelee matkani logistiikasta ohjelmistokehitykseen. Sivusto on rakennettu Reactilla ja Vitellä, taustalla toimii MongoDB-tietokanta ja Render.com backend-palveluna. Lomakkeiden sähköpostit lähetetään EmailJS:n avulla.

## Ominaisuudet

- **Dark/Light Mode Toggle**: Sulavat teemanvaihdot videotaustoilla
- **Interaktiivinen CV-modaali**: Tyylikäs, paperinvalkoinen A4-tyylinen CV
- **Responsiivinen ulkoasu**: Toimii kaikilla laitteilla
- **Projektien esittely**: Interaktiiviset projektikortit
- **Yhteydenottolomake**: EmailJS-integraatio, validointi ja onnistumis-/virheviestit
- **Kirjautuminen ja rekisteröinti**: Modernit modaalit, MongoDB-tietokanta, JWT-autentikointi
- **Omat sivut**: Kirjautunut käyttäjä näkee omat sivunsa ja voi poistaa tilinsä
- **Salasanan suojaus**: Salasanat tallennetaan hashattuina (bcrypt)
- **Automaattinen uloskirjautuminen**: Tokenin vanhentuessa

## Käytetyt teknologiat

- React + Vite
- MongoDB (Mongoose)
- Express.js (Node.js backend)
- Render.com (backend hosting)
- EmailJS (yhteydenottolomake)
- JWT (autentikointi)
- CSS3 (custom-tyylit)

## Projektirakenne

Portfolio-1/
│      
├── assets/
│   └── Images/
│       └── Videos/
├── dist/                # Buildattu tuotantoversio
├── models/              # Mongoose-mallit
├── src/                 # (jos käytössä)
├── App.jsx
├── Footer.jsx
├── Navigation.jsx
├── Columns.jsx
├── Carousels.jsx
├── server.js            # Express backend
├── package.json       
├── .env                 # Ympäristömuuttujat (ei gitissä)
├── README.md
└── ...

## Asennus ja käyttö

1. **Kloonaa repo**
```bash
git clone [repository-url]
cd Portfolio-1
```

2. **Asenna riippuvuudet**
```bash
npm install
```

3. **Käynnistä kehityspalvelin**
```bash
npm run dev
```

4. **Käynnistä backend (tarvittaessa)**
```bash
npm start
```

5. **Buildaa tuotantoon**
```bash
npm run build
```

6. **Deploy GitHub Pagesiin**
```bash
npm run deploy
```

## Ympäristömuuttujat (.env)

- MONGO_URI=...           # MongoDB-yhteysosoite (vain backend)
- JWT_SECRET=...          # JWT:n salainen avain (vain backend)
- ADMIN_EMAIL=...         # (valinnainen, admin-käyttäjä)
- ADMIN_PASSWORD=...      # (valinnainen, admin-käyttäjä)

**Älä koskaan laita näitä frontendin .env-tiedostoon!**

## EmailJS
- Integroitu yhteydenottolomakkeeseen
- Service ID, Template ID ja Public Key asetettu suoraan frontend-koodiin
- Suositellaan domain-rajoituksia ja/tai reCAPTCHAa väärinkäytösten estämiseksi

## Ominaisuudet tarkemmin

- **Teemanvaihto**: Videotaustat, localStorage tallennus
- **CV-modaali**: Paperinvalkoinen, responsiivinen, helposti muokattava
- **Yhteydenottolomake**: EmailJS, validointi, alertit
- **Kirjautuminen/rekisteröinti**: JWT, MongoDB, bcrypt, automaattinen uloskirjautuminen
- **Omat sivut**: Käyttäjä voi poistaa oman tilinsä

## Tulevia parannuksia
- [ ] Lisää projektiesimerkkejä
- [ ] Blogi-osio
- [ ] OAuth-kirjautuminen
- [ ] Käyttäjäprofiilin muokkaus
- [ ] Lisää saavutettavuusparannuksia

## Yhteystiedot

Johannes Metsäniemi
Email: jmetsaniemi@me.com  
LinkedIn: [https://www.linkedin.com/in/johannes-metsäniemi-266079aa/](https://www.linkedin.com/in/johannes-mets%C3%A4niemi-266079aa/)

