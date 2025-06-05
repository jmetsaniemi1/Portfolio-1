import React, { useRef, useState, useEffect } from "react";
import "./blog.css";
import Navigation from "./Navigation.jsx";
import cat1 from "./assets/Images/cat1.jpg";
import cat2 from "./assets/Images/cat2.jpg";
import bloginintro from "./assets/Images/Videos/bloginintro.mp4";
import bloginintrophone from "./assets/Images/Videos/bloginintrophone.mp4";
import bloginintrotablet from "./assets/Images/Videos/bloginintrotablet.mp4";


const articles = [
  {
    id: "art1",
    date: "26.5.2025",
    title:
      "1. Sosiaalisen median mahdollisuudet töissä ja vapaa-ajalla YY00DA07-3012 (Oamk Highway 2024-2025)",
    content: (
      <>
        <p className="blog-text">
        <br /><br />
        <br /><br />
          <span className="blog-ingress">Johdatus sosiaaliseen mediaan – vai johdatus typeryyteen?</span>
          <br /><br />
          Olen erittäin huono sosiaalisen median käyttäjä. Minulla on suuri vihasuhde koko ilmiötä kohtaan. Olen kyllä LinkedInissä, mutta en ole panostanut siihen ollenkaan. Vihaan sitäkin. Koen, että sosiaalinen media yksinomaan tekee ihmisistä typerämpiä.
          <br /><br />
          Sen sijaan läsnä oleva elämä – aidot kohtaamiset, ihmisten kanssa lähentyminen, kirjojen lukeminen – tekevät ihmisistä parempia yksilöitä: empaattisempia, viisaampia, valmiimpia. Kaikkea sitä, mitä jatkuva ruudun tuijottaminen, tykkäysten metsästys ja itsetunnon rakentaminen seuraajamäärien varaan eivät voi koskaan tarjota.
          <br /><br />
          Sosiaalisen median haitat ovat valtavat. Tutkimukset ovat osoittaneet yhteyksiä sosiaalisen median käytön ja masennuksen, ahdistuksen, univaikeuksien sekä itsetunto-ongelmien välillä. Erityisesti nuorilla aikuisilla sosiaalinen media ruokkii vertailunhalua ja riittämättömyyden tunnetta. Vuonna 2022 julkaistussa tutkimuksessa todettiin, että jopa lyhytaikainen tauko sosiaalisesta mediasta voi lisätä hyvinvointia ja vähentää stressiä (Lambert et al., Cyberpsychology, Behavior, and Social Networking).
          <br /><br />
          Itse laittaisin sosiaalisen median samaan roskakategoriaan kuin äänikirjat, holtiton shoppailu, kuulokkeet päässä pakonomainen kävely ja rap-musiikki. Lukija voi kenties arvata, että minä en käytä sosiaalista mediaa.
          <br /><br />
          <b><span className="blog-ingress">Sosiaalisen median palvelut: vanhaa ja uutta</span></b><br />
          <br /><br />
          Olen joskus kauan sitten käyttänyt Instagramia – silloin kun se vielä oli jotain muuta kuin mainosroskan, selfieiden ja inflaation kokenut influenssahässäkkä. Noin 20 vuotta sitten Instagramissa oli kaikki oleellinen ja järkevä mukana: se oli ammatti- ja amatöörivalokuvaajien alusta, joka keskittyi pelkästään retrohenkisiin valokuviin ja visuaaliseen ilmaisuun. Ei ollut tarvetta reels-videoille, algoritmien ohjaamille sisällöille tai loputtomalle dopamiinijonolle.
          <br /><br />
          LinkedIn-minä olen sekin: työni vuoksi olen kai joskus ajatellut, että siellä pitäisi "olla mukana", mutta käytännössä en koskaan käytä sitä. Ei minulla ole aikaa eikä mielenkiintoa käyttää sitä. Olen asiantuntijatehtävissä valtavassa korporaatiossa enkä ole edennyt urallani sen takia, että olisin sosiaalista mediaa käyttävien idioottien ajan hermolla, vaan sen takia, että olen ymmärtävä, analyyttinen, lämmin, ystävällinen ja aito ihminen. Niillä arvoilla mennään.
          <br /><br />
          Tutustuin tätä tehtävää varten kahteen itselleni entuudestaan vieraaseen sosiaalisen median palveluun: Behance ja Mastodon.
          <br /><br />
          Behance on suunnattu visuaalisen alan ammattilaisille. Se vaikuttaa olevan työkalu portfolion rakentamiseen ja verkostoitumiseen – käyttöliittymältään selkeä ja ilmeeltään ammattimainen. Jos olisin suunnittelija tai graafikko, tässä voisi olla jonkinlainen järki.<br />
          <br /><br />
          Mastodon taas on hajautettu sosiaalinen alusta, josta puhutaan usein "Twitterin vastalääkkeenä". Ei mainoksia, ei algoritmeja, ei yhtiötä datasi kimpussa – kuulostaa periaatteessa hyvältä. Mutta jos ihmiset ovat jo menettäneet kykynsä ajatella, ei alustan luonne muuta sitä.<br />
          <br /><br />
          En ole vielä rekisteröitynyt näihin palveluihin, mutta ainakin teoriassa Behance voisi toimia ammatillisena näyttämönä, jos joskus haluaisin jakaa projektejani tai kirjoituksiani muille kuin kirjojen kautta.
          <br /><br />
          <b><span className="blog-ingress">Miten yritykset käyttävät sosiaalista mediaa – ja miksi?</span></b>
          <br /><br />
          Tiedän kyllä, että yritykset käyttävät sosiaalista mediaa. Siellä niitä on: brändejä, tuotteita, elämäntapamyyntiä, jatkuvaa huomiotalouden metsästystä. Yritykset käyttävät sosiaalista mediaa, jotta ihmiset – ne somea selaavat, väsyneet, eksyneet idiootit – löytäisivät jotain ostettavaa, tuhlattavaa ja kulutettavaa. Raha sitä kaikkea pyörittää.
          <br /><br />
          <span className="blog-ingress">Otetaan kaksi esimerkkiä:</span><br /><br />
          Finnair käyttää Instagramia, Facebookia ja X:ää (entinen Twitter) melko tehokkaasti. He julkaisevat näyttäviä kuvia kohteista, joissa aurinko paistaa ja turisti voi unohtaa todellisuuden. Lisäksi he vastaavat nopeasti asiakaspalautteisiin ja ilmoittavat reaaliajassa mahdollisista muutoksista – hyödyllistä, mutta kaikki on kiedottu kauniisti brändiviestinnän silkkipaperiin.<br />
          <br /><br />
          Supercell, suomalainen peliyritys, käyttää sosiaalista mediaa (YouTube, Reddit, Discord, Instagram) rakentaakseen yhteisöä ja luodakseen illuusion läheisyydestä pelaajien kanssa. Käyttäjien luoma sisältö, kilpailut ja uutuuksien hypetys sitouttavat pelaajat entistä tiiviimmin brändiin. Ja juuri siinä on koko pointti: sitouta, koukuta, kassakone kilisee.
          <br /><br />
          <br /><br />
          Sosiaalinen media ei ole enää mikään neutraali teknologinen mahdollisuus. Se on manipulaation, kaupallisen vaikuttamisen ja huomion varastamisen alusta. Mutta ehkä minussa puhuu vain vanha sielu, joka arvostaa hiljaisuutta enemmän kuin klikkauksia.
        </p>
        
      </>
    ),
  },
  {
    id: "art2",
    date: "26.5.2025",
    title: "2. Mikä on digitaalinen identiteettisi?",
    content: (
      <>
        <p className="blog-text">
        <br /><br />
          <span className="blog-ingress">Digitaalinen identiteetti – So what?</span>
          <br /><br />
          Minulta kysytään, mikä on digitaalinen identiteettini. No, se on juuri sitä mitä hakukoneet, tekoälyt ja uteliaat sormet löytävät, kun nimeni näpytellään Googlen kenttään. Kokeilin tätä tehtävää varten. Löytyi kirjailijakuva. Löytyi kirja. Löytyi linkkejä kirjaston aineistoihin, joissa naamani killuu kuin esihistoriallinen dokumentti. Löytyi kuvia 20 vuoden takaa, kun minulla oli vielä intoa nettiin. Löytyi LinkedIn – jota en käytä. Yritystietoja. Kaikkea mahdollista sälää. Paljon tavaraa, jota en ole pyytänyt julkaistavaksi, mutta jota ei ole myöskään mitenkään vaarallista.
          <br /><br />
          Tiedän kyllä, että GDPR antaa minulle oikeuden poistaa, muokata ja hallita tietojani. Minulla on oikeus tulla unohdetuksi. Mutta en ole kiinnostunut. En jaksa säätää. Enkä pelkää, vaikka tiedot säilyvät. En ole koskaan rakentanut mitään tietoisesti "digitaalisen identiteetin" nimissä. En ole hionut some-profiilia enkä optimoinut algoritmeille yhtään mitään. En ole kiinnostunut olemaan "löydettävissä". Jos joku löytää, olkoon. Jos ei, vielä parempi.
          <br /><br />
          Mikä sitten on digitaalinen identiteettini? Se on hajanaista jälkeä sieltä täältä, osittain totta, osittain vanhentunutta, eikä kovin imartelevaa tai kiinnostavaa. En ole sisällöntuottaja. En vaikuttaja. En edes kommentoija. Enemmänkin – tarkkailija, joskus huvittunut sivusta katsoja. En koe tarvetta antaa itsestäni "oikeaa" kuvaa verkkoon. Ne, jotka minut tuntevat, tietävät kyllä millainen olen. Ja he eivät tarvitse Instagramia siihen.
          <br /><br />
          Tekoäly osaa muuten yllättävän hyvin kertoa missä asun, missä olen ollut töissä ja mitä olen julkaissut. Se on kiinnostavaa lähinnä teknisesti. En kuitenkaan koe tätä uhkana, vaan ennemminkin ajan merkkinä. Näin maailma toimii. Ja minä toimin toisin.
          <br /><br />
          Jos joku haluaa luoda itsestään kauniin, hiotun, julkisuuskelpoisen digitaalisen version, olkoon hyvä vaan. Minä pysyn mieluummin tässä analogisessa maailmassa, jossa ihmiset puhuvat kasvotusten, lukevat kirjoja, eivätkä esitä olevansa jotakin muuta kuin mitä ovat. Digitaalinen identiteettini on lähinnä jäänne. Jälki siitä, että olen joskus täälläkin käynyt.
        </p>
        
      </>
    ),
  },
  {
    id: "art3",
    date: "26.5.2025",
    title: "3. CC ja tekijänoikeus - AI-kuvien luominen – uuden aikakauden apu kuvien käytössä",
    content: (
      <>
        <p className="blog-text">
          Kuvien käyttäminen viestinnässä ja markkinoinnissa on nykyään keskeistä, mutta sopivien ja käyttöön sallittujen kuvien löytäminen on usein haasteellista tekijänoikeuskysymysten vuoksi. Tässä kohtaa tekoälypohjaiset kuvanluontityökalut, kuten DALL·E, Midjourney tai Stable Diffusion, ovat nousseet tärkeiksi apuvälineiksi.
          <br /><br />
          AI-kuvien suurin etu on niiden ainutlaatuisuus ja käyttöoikeuksien joustavuus. Koska kuvat luodaan algoritmin avulla eikä niillä ole perinteisiä tekijänoikeuksia, niitä voi yleensä käyttää vapaasti omiin projekteihin ilman lupapyyntöjä. Tämä helpottaa erityisesti pienyrittäjiä, sisällöntuottajia ja markkinoijia, jotka tarvitsevat nopeita ja kustannustehokkaita ratkaisuja visuaalisen sisällön luomiseen.
          <br /><br />
          <span className="blog-ingress">Tekoäly osaa luoda melko aitoja kuvia kuvailun perusteella</span>
          <div className="blog-image-row">
            <img src={cat1} alt="AI Cat 1" className="blog-img" />
            <img src={cat2} alt="AI Cat 2" className="blog-img" />
          </div>
          <br /><br />
          On kuitenkin tärkeää huomata, että AI-kuvien tekijänoikeustilanne on vielä kehittymässä, ja oikeudelliset näkökohdat voivat muuttua tulevaisuudessa. Lisäksi kuvia käytettäessä on hyvä olla tarkkana esimerkiksi mallisuoja- tai tavaramerkkirajoitusten suhteen, jotka voivat koskea AI:n oppimateriaaleina käyttämiä kuvia.
          <br /><br />
          Kuvien lainaaminen ja uudelleenkäyttö on AI-kuvien kohdalla usein yksinkertaisempaa kuin perinteisten valokuvien kanssa, mikä nopeuttaa sisältöjen tuotantoa ja säästää kustannuksissa. Tämä uusi teknologia avaa mahdollisuuksia luovuudelle ja yksilöllisyydelle, ja samalla se haastaa perinteiset käsitykset tekijänoikeuksista.
        </p>
      </>
    ),
  },
  {
    id: "art4",
    date: "26.5.2025",
    title: "4. Sosiaalisen median hyödyntämissuunnitelma",
    content: (
      <>
        <p className="blog-text">
          <span className="blog-ingress">Osallistujat:</span><br />
          Johannes Metsäniemi
          <br /><br />
          <span className="blog-ingress">Tausta</span><br />
          Suunnitelman nimi: Koodausfirman näkyvyyden ja asiakasverkoston kasvatus sosiaalisen median avulla
          <br /><br />
          <span className="blog-ingress">Suunnitelman tavoite</span><br />
          Tavoitteena on lisätä pienen koodausfirman tunnettuutta ja asiakaskontakteja hyödyntämällä sosiaalisen median kanavia sekä rakentamalla aktiivinen verkkoyhteisö. Kohderyhmänä ovat potentiaaliset asiakkaat, kuten startup-yritykset, paikalliset pienyritykset sekä teknologiasta kiinnostuneet ammattilaiset.
          <br /><br />
          <span className="blog-ingress">Kohderyhmä</span><br />
          Kyseessä on pieni, kasvava koodausfirma, joka tarjoaa räätälöityjä ohjelmistoratkaisuja. Yrityksen haasteena on saada jalansijaa kilpailulla alalla ja tavoittaa uusia asiakkaita sekä luoda luottamusta brändiin. Toteutus on tärkeä, koska sosiaalinen media tarjoaa kustannustehokkaan ja suoraviivaisen tavan markkinoida palveluita sekä verkostoitua. Suunnitelma voi ratkaista näkyvyyden puutetta, asiakassuhteiden luomisen haasteita ja asiakkaiden epävarmuutta pienestä palveluntarjoajasta.
          <br /><br />
          <span className="blog-ingress">Sosiaalisen median työkalut ja palvelut ja niiden käyttö</span><br />
          <b>Valitut työkalut:</b><br />
          LinkedIn: Ammatillisen verkoston rakentamiseen, asiantuntijasisällön jakamiseen ja yrityskuvauksen vahvistamiseen.<br />
          Instagram: Visuaalisen sisällön, kuten koodausprojektien esittelyn, työpaikkakulttuurin ja asiakastarinoiden jakamiseen.<br />
          Twitter: Alan uutisten, nopeiden päivitysten ja vuorovaikutuksen lisäämiseksi teknologia-alan ammattilaisten kanssa.
          <br /><br />
          <b>Valinnan perustelut:</b><br />
          LinkedIn tukee B2B-markkinointia ja yrityskontakteja, Instagram tavoittaa visuaalisesti suuntautuneita nuorempia käyttäjiä ja Twitter on tehokas nopeaan vuorovaikutukseen ja alan trendien seuraamiseen. Nämä kanavat yhdessä tukevat tavoitetta lisätä näkyvyyttä ja asiakassuhteita monipuolisesti.
          <br /><br />
          <span className="blog-ingress">Yksityisyys- ja turvallisuuskysymykset</span><br />
          Tietosuoja on varmistettava käyttämällä vahvoja salasanoja ja kaksivaiheista tunnistautumista. Yrityksen henkilötietoja ei jaeta julkisesti ilman lupaa, ja asiakkaiden tiedot käsitellään luottamuksellisesti. Sisällön julkaisussa noudatetaan tekijänoikeuksia ja mahdollisissa yhteistyöpostauksissa merkitään tekijät ja lähteet asianmukaisesti.
          <br /><br />
          <span className="blog-ingress">Päivitys ja ylläpito</span><br />
          Sosiaalisen median kanavia päivitetään säännöllisesti, esimerkiksi 3–5 kertaa viikossa, sisältäen sekä omaa että kuratoitua sisältöä. Vastuutahona toimii Johannes Metsäniemi, joka seuraa analytiikkaa ja reagoi palautteisiin. Käyttöönotto on avoin ja ilmainen, ja tavoitteena on kasvattaa orgaanista näkyvyyttä ja sitoutuneisuutta. Tulevaisuudessa suunnitelmaan voidaan liittää maksullisia mainoskampanjoita ja yhteistyötä muiden alan toimijoiden kanssa, jotta saavutetaan laajempi yleisö ja varmistetaan jatkuvuus.
        </p>
      </>
    ),
  },
  {
    id: "art5",
    date: "26.5.2025",
    title: "5. Itsearviointi – mitä opin sosiaalisen median kurssilla?",
    content: (
      <>
        <p className="blog-text">
        <br /><br />
          Kun kurssi alkoi, en ollut ajatellut koskaan tekeväni omaa blogia. Se on aina kuulostanut jotenkin... tylsältä. Mutta nyt blogi on olemassa – sellaisena kuin se on. Ehkä vielä joskus työstän sen ulkoasua ja teen siitä responsiivisemman, kun aikaa löytyy. Ainakin nyt tiedän, miten se tehdään.
          <br /><br />
          Kurssin aikana opin paljon käytännön asioita liittyen tekijänoikeuksiin, CC-lisensseihin ja sosiaalisen median suunnitteluun. Oli yllättävää huomata, kuinka paljon somen taustalla vaikuttavia asioita voi (ja pitää) ottaa huomioon, jos haluaa toimia vastuullisesti – varsinkin, jos edustaa yritystä tai yhteisöä.
          <br /><br />
          Asenteeni sosiaalista mediaa kohtaan ei ole kuitenkaan muuttunut. En ole koskaan ollut suuri fani, ja joka vuosi viihdyn siellä vähän vähemmän. En koe tarvetta rakentaa digitaalista persoonaa tai olla jatkuvasti näkyvillä. Tämä ei kuitenkaan estä minua hyödyntämästä sosiaalista mediaa silloin, kun sille on selkeä ja konkreettinen tarkoitus, kuten nyt suunnitelmassa pienelle koodausfirmalle.
          <br /><br />
          Kurssin tavoitteeni olivat käytännönläheisiä: oppia työkaluja, joita voin hyödyntää tulevissa projekteissa. Tässä onnistuin hyvin. Sain myös tehtyä selkeän sosiaalisen median suunnitelman, jossa yhdistyivät oppimani asiat ja aiempi kokemukseni viestinnästä.
          <br /><br />
          Ajankäyttöni? No, se on mestarillista. Teen asioita silloin kun se tuntuu hyvältä ja tarpeelliselta. Olen onnellisessa asemassa, jossa elämä ei ole minuuttiaikataulutettua. Käytän aikani mieluiten hyvien ihmisten seurassa – ja tämä kurssi, yllättäen, mahtui siihen mukaan.
        </p>
      </>
    ),
  }
];

export default function TestPage() {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [shrinkVideo, setShrinkVideo] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(true);
  const [videoSrc, setVideoSrc] = useState(bloginintro);
  const [videoReady, setVideoReady] = useState(false);

  // Videon lähteen valinta ruudun koon mukaan
  useEffect(() => {
    function chooseVideoSrc() {
      const width = window.innerWidth;
      if (width <= 600) {
        setVideoSrc(bloginintrophone);
      } else if (width <= 1024) {
        setVideoSrc(bloginintrotablet);
      } else {
        setVideoSrc(bloginintro);
      }
    }
    chooseVideoSrc();
    window.addEventListener("resize", chooseVideoSrc);
    return () => window.removeEventListener("resize", chooseVideoSrc);
  }, []);

  // Kun video päättyy, näytetään scroll down
  const handleVideoEnd = () => {
    setVideoEnded(true);
    // Pysäytä video viimeiseen frameen
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  // Scroll logiikka: shrink kun scrollataan alas ja hallitse scroll down -tekstin näkyvyyttä
  useEffect(() => {
    if (!videoEnded) return;
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShrinkVideo(true);
      } else {
        setShrinkVideo(false);
      }
      // Näytä scroll down vain kun test-content ei ole näkyvissä
      const content = document.querySelector('.test-content');
      if (content) {
        const rect = content.getBoundingClientRect();
        // Jos yläreuna on näkyvissä (esim. 0-100px viewportin yläreunasta), piilota scroll down
        if (rect.top < 100) {
          setShowScrollDown(false);
        } else {
          setShowScrollDown(true);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Tarkista heti myös mountissa
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [videoEnded]);

  // Estä scroll ennen videon loppua
  useEffect(() => {
    if (!videoEnded) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [videoEnded]);

  return (
    <div className="test-root">
      <Navigation hideBackgroundAndThemeSwitch />
      <div
        className={`video-container${shrinkVideo ? " shrink" : ""}`}
        style={{ pointerEvents: videoEnded ? "auto" : "none" }}
      >
        <video
          ref={videoRef}
          className="intro-video"
          src={videoSrc}
          autoPlay={!videoEnded}
          onEnded={handleVideoEnd}
          playsInline
          muted
          onCanPlayThrough={() => setVideoReady(true)}
        />
      </div>
      {!videoReady && (
        <div style={{position: 'fixed', top:0, left:0, width:'100vw', height:'100vh', background:'#000', zIndex:100, display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'2rem'}}>
          Ladataan videota...
        </div>
      )}
      {videoReady && (
        <>
          {videoEnded && !shrinkVideo && (
            <div className="scroll-down-wrapper">
              <span className="scroll-down-text" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8V28M18 28L8 18M18 28L28 18" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <div className="corner-box">
                <span className="cool-text">Cool?</span>
                <button
                  className="play-again-btn"
                  onClick={() => {
                    setVideoEnded(false);
                    setShrinkVideo(false);
                    if (videoRef.current) {
                      videoRef.current.currentTime = 0;
                      videoRef.current.play();
                    }
                  }}
                >
                  Play It Again!
                </button>
              </div>
            </div>
          )}
          <div className="test-content">
            <div className="blog-layout">
              <div className="blog-sidebar center">
                <ul>
                  {articles.map((a) => (
                    <li key={a.id}>
                      <a href={`#${a.id}`}>{a.title.split(" – ")[0]}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="blog-area-multi center">
                {articles.map((a) => (
                  <div className="blog-article dark" id={a.id} key={a.id}>
                    <div className="blog-date">{a.date}</div>
                    <h1 className="blog-title">{a.title}</h1>
                    {a.content}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

