import React from "react";
import "./blog.css";
import cat1 from "./assets/Images/cat1.jpg";
import cat2 from "./assets/Images/cat2.jpg";

const articles = [
  {
    id: "art1",
    date: "26.5.2025",
    title:
      "Sosiaalisen median mahdollisuudet töissä ja vapaa-ajalla YY00DA07-3012 (Oamk Highway 2024-2025) – Social Media Opportunities at Work and in Leisure YY00DA07-3012 (Oamk Highway 2024-2025)",
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
        <hr className="blog-hr" />
        <p className="blog-text">
          <span className="blog-ingress">Introduction to Social Media – Or an Introduction to Stupidity?</span>
          <br /><br />
          I am a very poor user of social media. I have a deep and lasting hatred for the entire phenomenon. Yes, I do have a LinkedIn profile, but I haven't invested in it at all. I hate that too. In my experience, social media only makes people stupider.
          <br /><br />
          Instead, being present – forming real connections with people, reading books – makes us better individuals: more empathetic, wiser, more prepared for life. All the things that staring at screens, chasing likes, and building one's self-worth on follower counts will never offer.
          <br /><br />
          The downsides of social media are enormous. Studies have shown links between social media use and depression, anxiety, sleep disorders, and self-esteem issues. Especially among young adults, social media fuels harmful comparisons and feelings of inadequacy. A 2022 study found that even a short break from social media can improve wellbeing and reduce stress (Lambert et al., Cyberpsychology, Behavior, and Social Networking).
          <br /><br />
          I'd throw social media in the same trash category as audiobooks, compulsive shopping, walking with headphones on as if under a spell, and rap music. The reader might already guess that I do not use social media.
          <br /><br />
          <b><span className="blog-ingress">Social Media Services: Old and New</span></b><br />
          I did use Instagram once – way back when it was still something else than a bloated, ad-ridden mess of selfies and influencer nonsense. About 20 years ago, Instagram had all the essentials: it was a platform for professional and amateur photographers, focused solely on retro-style photos and visual expression. No reels, no algorithmic garbage, no endless dopamine loops.
          <br /><br />
          As for LinkedIn, I am technically on it, too. Maybe once upon a time I thought it would be smart to "have a profile there," but in practice I never use it. I don't have the time or interest. I work in a massive corporate environment in a specialist role, and I've advanced in my career not by staying "in the loop" like social media–obsessed idiots, but because I am understanding, analytical, warm, kind, and authentic. That's how I move forward in life.
          <br /><br />
          For this assignment, I looked into two platforms I had not used before: Behance and Mastodon.
          <br /><br />
          Behance is aimed at professionals in the visual arts. It seems like a solid tool for building a portfolio and networking – clear in its layout and professional in tone. If I were a designer or visual artist, this could make some sense.
          <br /><br />
          Mastodon is a decentralized social platform often described as "the antidote to Twitter." No ads, no algorithms, no company spying on your data – sounds good on paper. But if people have already lost the ability to think clearly, changing platforms won't fix that.<br />
          I haven't signed up for these services yet, but at least in theory, Behance might work as a professional showcase if I ever wanted to share my projects or writing outside of books.
          <br /><br />
          <b><span className="blog-ingress">How Companies Use Social Media – And Why</span></b><br />
          I'm well aware that companies use social media. They're everywhere: brands, products, lifestyle propaganda, all fighting for your attention in the endless scroll. Companies use social media so that people – the tired, lost idiots swiping their screens – will find something to buy, waste money on, or consume. Money makes the whole machine go round.
          <br /><br />
          <span className="blog-ingress">Let me give you two examples:</span><br /><br />
          Finnair uses Instagram, Facebook, and X (formerly Twitter) quite effectively. They post beautiful photos of sunny destinations where the tourist can forget reality. They also respond quickly to customer feedback and post real-time updates about flight changes – useful, sure, but all wrapped in branded silk and corporate polish.<br />
          <br /><br />
          Supercell, a Finnish game company, uses social media (YouTube, Reddit, Discord, Instagram) to build a sense of community and foster the illusion of closeness with players. User-generated content, contests, and hyped-up announcements keep the player base tightly hooked to the brand. And that's the whole point: engage, addict, cash in.<br />
          <br /><br />
          Social media is no longer just a neutral technological tool. It's a platform for manipulation, commercial influence, and attention theft. But perhaps that's just the old soul in me talking – the part that values silence more than clicks.
        </p>
      </>
    ),
  },
  {
    id: "art2",
    date: "26.5.2025",
    title: "Mikä on digitaalinen identiteettisi? - What is your digital identity?",
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
        <hr className="blog-hr" />
        <p className="blog-text">
          <span className="blog-ingress">Digital Identity – So What?</span>
          <br /><br />
          People ask me what my digital identity is. Well, it's exactly what search engines, AI bots, and nosy fingers can find when they type my name into Google. I tried it for this assignment. Found a writer photo. Found a book. Found library material links featuring my face like some prehistoric record. Found pictures from 20 years ago, back when I still had energy for the internet. Found my LinkedIn – which I don't use. Company records. All sorts of stuff. A lot of it. A lot of pictures too. None of it matters to me in the slightest.
          <br /><br />
          Sure, I know that GDPR gives me the right to delete, edit, and control my data. I have the right to be forgotten. But I couldn't care less. I don't feel like bothering. I'm not scared, even if the data stays online. I've never intentionally built anything in the name of "digital identity." I haven't polished my social media profile, nor optimized anything for any algorithm. I'm not interested in being "found." If someone finds me – fine. If not – even better.
          <br /><br />
          So what is my digital identity, then? It's scattered traces here and there, partly true, partly outdated, not particularly flattering or interesting. I'm not a content creator. Not an influencer. Not even a commenter. More of an observer, sometimes an amused bystander. I don't feel the need to project the "real me" online. The people who know me, know who I am. And they don't need Instagram for that.
          <br /><br />
          By the way, AI is surprisingly good at figuring out where I live, where I've worked, and what I've published. That's interesting, mainly from a technical standpoint. But I don't see it as a threat – more like a sign of the times. That's how the world works now. And I work differently.
          <br /><br />
          If someone wants to create a beautiful, polished, public-friendly digital version of themselves – go ahead. I'd rather stay in this analog world, where people talk face to face, read books, and don't pretend to be something they're not. My digital identity is mostly a remnant. A trace that I once passed through this virtual world.
        </p>
      </>
    ),
  },
  {
    id: "art3",
    date: "26.5.2025",
    title: "CC ja tekijänoikeus - AI-kuvien luominen – uuden aikakauden apu kuvien käytössä",
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
    title: "Sosiaalisen median hyödyntämissuunnitelma",
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
];

function Blog() {
  return (
    <div className="blog-wrapper">
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
          <div className="blog-article" id={a.id} key={a.id}>
            <div className="blog-date">{a.date}</div>
            <h1 className="blog-title">{a.title}</h1>
            {a.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blog;
