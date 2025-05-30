import React from "react";
import "./SchoolBlog.css";

const articles = [
  {
    id: "school1",
    date: "30.5.2026",
    title: "Digitaalinen osaamiseni - Johannes, Taitotalo",
    content: (
      <>
        <p className="blog-text">
          <br /><br />
          <span className="blog-ingress">1. Esittely</span>
          <br /><br />
          Kuka olen? Olen Johannes, 34-vuotias Taitotalossa opiskeleva ohjelmistokehityksen opiskelija. Aloitin koodaamisen vasta opintojeni myötä, mutta olen motivoitunut oppimaan ja kehittämään itseäni sen saralla.
          <br /><br />
          <span className="blog-ingress">Miksi valitsin tämän kurssin?</span>
          <br /><br />
          Sen lisäksi, että se on pakollinen, haluan tarkistaa digitaalista osaamistani, onko se esim ajantasainen.
          <br /><br />
          Työtehtävä / tuleva ammatti: Tavoitteeni on työskennellä tulevaisuudessa web-kehityksen parissa – erityisesti visuaalisesti laadukkaiden ja toimivien verkkosivujen parissa. Tällä hetkellä työskentelen opiskeluprojektissa, jossa rakennamme verkkosivustoa aurinkokunnasta. Aloitan työharjoittelun kesän lopussa. Jatkan opintoja Oulun AMK:ssa.
          <br /><br />
          LinkedIn-profiilini: <a href="https://www.linkedin.com/in/johannes-metsäniemi-266079aa/" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/johannes-metsäniemi-266079aa/</a>
          <br /><br />
          <span className="blog-ingress">2. Digitaalinen ympäristö</span>
          <br /><br />
          Mitä käytän työssäni tai opinnoissani?
          <br />
          • Visual Studio Code -editoria (HTML, CSS, JavaScript, React)
          <br />
          • GitHub versionhallintaan ja ryhmätyöhön
          <br />
          • MongoDB Atlas henkilökohtaisiin tietokantoihin
          <br />
          • Vercel & Render frontendin julkaisuun
          <br />
          • Framer no-code/no-low-code-verkkosivuihin
          <br /><br />
          Käytännön esimerkki: Ryhmäprojektissamme käytämme GitHubia jakamaan tehtävät ja hallitsemaan koodimuutoksia. Esimerkiksi tein tietokantatiedoston MongoDB-yhteyttä varten ja päivitin PUT-metodin käyttäjätietojen muokkausta varten.
          <br /><br />
          <span className="blog-ingress">3. Ammatilliset verkostot ja sovellukset</span>
          <br /><br />
          Käyttämäni ammatilliset verkostot ja sovellukset:
          <br />
          • LinkedIn: on olemassa muodon vuoksi
          <br />
          • Teams: opiskeluun ja työhön
          <br />
          • GitHub / Git: ryhmätyöhön ja omien projektien hallintaan
          <br /><br />
          Mitä voisin hyödyntää enemmän?
          <br />
          • Stack Overflow'n osallistuva käyttö (kysymysten ja vastausten kautta)
          <br />
          • LinkedInin ryhmät ja keskustelut
          <br />
          • Puhua ihmisille
          <br /><br />
          <span className="blog-ingress">4. Digitaalisen aineiston tuottaminen ja jakaminen</span>
          <br /><br />
          Tuotan mm.:
          <br />
          • Verkkosivustoja HTML:llä, CSS:llä ja JavaScriptillä
          <br />
          • Visuaalisia esityksiä ja käyttöliittymäluonnoksia esim After Efectsillä tai Photoshopilla
          <br />
          • Dokumentaatiota projekteista, Word
          <br /><br />
          Miten jaan aineistoa?
          <br />
          • GitHubin kautta julkisesti tai yksityisesti
          <br />
          • Vercelin tai Renderin avulla julkaistuina verkkosivuina
          <br />
          • Vokaalisesti
          <br /><br />
          <span className="blog-ingress">Kenelle ja kuinka laajasti?</span>
          <br />
          • Ryhmätyön tiimille
          <br />
          • Opettajalle
          <br />
          • Mahdollisesti portfolion kautta myös tuleville työnantajille
          <br /><br />
          Tekijänoikeudet?
          <br />
          • Käytän vain tekoälyn tai itseni luomia kuvia ja animaatioita, joissa ei ole tekijänoikeuksia tai ne ovat itselläni
          <br />
          • Mainitsen lähteet selkeästi sivuilla, mikäli sellaiseen on tarvetta
          <br />
          • En käytä muiden koodia ilman viittausta tai lisenssin tarkistamista, mikäli sellainen päivä joskus tulisi.
          <br /><br />
          <span className="blog-ingress">Yhteenveto</span>
          <br /><br />
          Tämän blogin tarkoituksena on esitellä digitaalista osaamistani ja jakaa kokemuksia siitä, miten hyödynnän digitaalisia ympäristöjä ja sovelluksia ammatillisessa kontekstissa. Matkani ohjelmistokehittäjäksi on vielä kesken, mutta eteneminen on ollut innostavaa ja antoisaa.
        </p>
      </>
    ),
  },
];

function SchoolBlog() {
  return (
    <div className="blog-wrapper">
      <video
        className="background-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="./assets/Images/Videos/lightmode.mp4" type="video/mp4" />
      </video>

      <div className="blog-sidebar">
        <h2>BLOG</h2>
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <a href={`#${article.id}`}>
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="blog-area-multi">
        {articles.map((article) => (
          <div key={article.id} id={article.id} className="blog-article">
            <h2 className="blog-title">{article.title}</h2>
            <p className="blog-date">{article.date}</p>
            {article.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default SchoolBlog;
