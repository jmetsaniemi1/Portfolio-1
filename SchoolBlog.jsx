import React from "react";
import "./SchoolBlog.css";
import pexels1 from "./assets/Images/pexels-luis-gomes.jpg";
import pexels2 from "./assets/Images/pexels-tara-winstead.jpg";
import Navigation from "./Navigation";

const articles = [
  {
    id: "school1",
    date: "2.6.2025",
    title: "Digitaalinen osaamiseni - Johannes, Taitotalo",
    content: (
      <>
        <p className="blog-text">
          <h1 className="text-3xl font-bold mb-4">Tekoälyn merkitys ohjelmistokehityksessä</h1>
          <br /><br />
          <span className="text-sm text-gray-400 mb-6">Johannes Metsäniemi, Taitotalo | 2.6.2025</span>
          <br /><br />
          <br /><br />
          Olen Johannes, 34-vuotias ohjelmistokehityksen opiskelija Taitotalosta. Aloitin koodaamisen vasta opintojeni alettua, mutta olen jo saanut runsaasti kokemuksia muun muassa MongoDB:n ja GitHubin käytöstä sekä React- ja JavaScript-koodauksesta. Elokuussa 2025 aloitan ohjelmistokehittäjän harjoittelun Keskolla, jossa on käynnistymässä laaja projekti. Tätä taustaa vasten on ollut kiinnostavaa tarkastella, millainen rooli tekoälyllä on nykyisessä ja tulevassa ohjelmistokehityksessä, ja miten sitä tullaan Keskolla, oikeassa työelämässä käyttämään.
          <br /><br />
          Tässä blogipäivtyksessä siten tarkastelen tekoälyn vaikutusta ohjelmistokehityksen arkeen – lähinnä opiskelijana mutta myös tulevana työelämän osaajana.

          <br /><br />
          <span className="blog-ingress">1. Tekoäly ohjelmistokehityksessä</span>
          <br /><br />
          Tekoäly ei ole enää leikkikalu, vaan se on aito työkalu. Se on tullut arkeen ennen kaikkea ohjelmistokehittäjille, jotka ironisesti ovat olleet luomassa "tekoälyä". Nyt modernit kehittäjät hyödyntävät tekoälypohjaisia työkaluja koodin kirjoittamiseen, dokumentointiin, testien luontiin, refaktorointiin sekä jopa luovaan ideointiin.
          <br /><br />
          Yksi erityisen nopeasti yleistynyt työkalu on Cursor, AI-avusteinen koodieditori, joka perustuu Visual Studio Codeen, mutta on syvästi integroitu GPT-avusteiseen koodintäydennykseen. Sillä ei ole vielä vastaavaa kilpailijaa. Keskusteluissani kokeneiden full stack -kehittäjien kanssa olen kuullutkin, että moni  vanhakin ammattilainen käyttää nykyään pelkästään Cursoria perinteisten editorien sijaan – niin tehokasta sen AI-avustus voi olla.
          <br /><br />
          Tekoälyllä voi:
          <ul>
            <li>Auttaa luomaan raakaa koodia automaattisesti.</li>
            <li>Generoida dokumentaatiota koodista reaaliaikaisesti.</li>
            <li>Ehdottaa tehokkaampaa tai puhtaampaa toteutustapaa koodille.</li>
            <li>Auttaa virheenkorjauksessa ja debuggaamisessa.</li>
          </ul>

          <br /><br />
          <span className="blog-ingress">2. Digiroolit tekoälyajassa</span>
          <br /><br />
          Ohjelmistokehitystiimeissä on muutamia rooleja, joihin tekoäly vaikuttaa eri tavoin. Niistä keskeiset ovat:
          <br /><br />
          <b>Frontend-kehittäjä</b> voi käyttää paljon tekoälyä luomaan peruskäyttöliittymien rakennetta ja komponentteja. Aiemmin tämä työ on täytynyt tehdä käsin tai hyödyntää valmiita kirjastoja ja palikoita, mutta nyt tekoäly voi ehdottaa jopa kokonaisia näkymärakenteita nopeasti.
          <br /><br />
          <b>Backend-kehittäjä</b> hyötyy tekoälystä esimerkiksi API-rakenteiden, tietomallien ja testien automatisoinnissa. Tämä nopeuttaa kehitystä ja auttaa keskittymään ratkaisujen logiikkaan.
          <br /><br />
          <b>Projektipäällikkö</b> tai <b>tuoteomistaja</b> voi hyödyntää tekoälyä suurten tietomäärien analysoinnissa, esimerkiksi käyttäjädatan, palautejärjestelmien tai erilaisten mittarien pohjalta tehtävien päätösten tueksi.
          <br /><br />
          Tekoäly ei kenties poista rooleja, vaan pikemminkin vahvistaa niitä – tehokkuuden ja tuottavuuden kautta. Mutta... samalla se tuo  suuren murroksen koko alalle: Valtaosa alan työntekijöistä tulee kokemaan haasteita, kun osa tehtävistä automatisoituu tai muuttuu. Sopeutuminen, jatkuva oppiminen ja oman osaamisen kehittäminen ovat tulevaisuudessa entistäkin tärkeämpiä. 
          <br /><br />
          Itse lähdin opiskelemaan koodaamista kun AI oli vielä alkuvaiheissa - eikä siitä ole kauaa. Sinä aikana koko työmarkkina ja työskentelytapa on muuttunut. Seuraaville opiskelijoille luultavasti tekoälyä painotetaan aivan eri tavalla kuin minulle. Onko se minulle etu vai haaste, se jää nähtäväksi.
          <br /><br />
          <figure>
    <img className="school-blog-img" src={pexels1} alt="AI-themed image by Tara Windstead from Pexels" />
    <figcaption>Kuva: Tara Windstead / Pexels</figcaption>
  </figure>
  <br /><br />
          <span className="blog-ingress">3. Vastuu ja eettisyys tekoälyn käytössä</span>
          <br /><br />
          Tekoäly voi olla tehokas apuri, mutta vastuu työn tuloksista säilyy aina käyttäjällä itsellään. Tämä tarkoittaa muun muassa:
          <ul>
            <li><b>AI:n</b> antamien ehdotusten tarkistamista.</li>
            <li><b>Tietoturvan</b> ja yksityisyyden varmistamista. - Mieti, mitä olet antamassa tekoälylle. Mieti myös, mitä ole tekemässä sillä.</li>
            <li><b>Sekä sen varmistamista, ettei tekoäly luo virheellistä tai harhaanjohtavaa sisältöä.</b></li>
          </ul>
          <br />
          Tämä on tärkeää, koska AI-mallit voivat helposti antaa vastauksia, jotka vaikuttavat uskottavilta, mutta eivät pidä paikkaansa. ChatGPT:n kaltaiset mallit ovat suunniteltu niin, että jos pyydät sitä etsimään vaikkapa virheen jostakin koodinpätkästä, niin se kertoo / luo sinulle virheen, vaikkei sitä oikeasti olisi. Toisin sanoen AI tekee sen, mitä siltä pyydät, vaikka siinä ei olisi mitään järkeä.
          <br /><br />
          Toinen huomioitava ilmiö on, että tekoälyä käytetään haitallisiin ja rikollisiin tarkoitusperiin. Tekoälyllä voidaan luoda haitallista sisältöä, kuten haitallisia ohjelmia, haitallisia verkkosivustoja, haitallisia sähköposteja ja haitallisia sähköpostiviestejä. Sillä voidaan luoda kuvia ihmisistä, jotka eivät ole olemassa, ja myös luoda haitallisia kuvia. Sillä voidaan luoda aidon tuntuisia, epäasiallisia kuvia tunnetuista ihmisistä tai omista vihamiehistä, koulukavereista, kollegoista, joita sitten laitetaan internettiin.
          <br /><br />
           Luulenpa, että tekoälyn haitat ovat vasta pääsemässä vauhtiin. Ikäviä ihmisiä löytyy noin joka toisesta meistä. Niinpä tekoälyn hyödyntäminen vaatii edelleen osaamista ja kriittistä ajattelua.
          <br /><br />
          <span className="blog-ingress">4. Yhteenveto</span>
          <br /><br />
          Tekoäly muuttaa nopeasti ohjelmistokehityksen tapoja. Se ei korvaa kehittäjiä, mutta muuttaa työkalupakkia ja osaamisprofiilia merkittävästi. Tulevassa verkkokauppaprojektissa Keskolla tekoäly voi olla tukena esimerkiksi testien automatisoinnissa, käyttöliittymien prototypoinnissa tai asiakasdatan analysoinnissa.
          <br /><br />
          Opiskelijana tämä on motivoivaa: tekoäly tarjoaa tukea oppimiseen ja kokeiluun, mutta muistuttaa samalla vastuusta ja osaamisen jatkuvasta päivittämisestä. Koodari on yhä enemmän myös AI:n viisas edelläkävijä.
          <br /><br />
          <br /><br />
        </p>

        
  

  <figure>
    <img className="school-blog-img" src={pexels2} alt="AI-themed image by Luis Gomez from Pexels" />
    <figcaption>Kuva: Luis Gomez / Pexels</figcaption>
  </figure>
      </>
    ),
  },
];

function SchoolBlog() {
  return (
    <div className="blog-wrapper">
      <Navigation />
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
