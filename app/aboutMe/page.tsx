import "../styles/aboutMe.css"
const promises = [ { yes: "Plain explanations, no textbook fog", no: "Fluent in 3 days nonsense" }, { yes: "Mistakes treated as free lessons", no: "Judging anyone's grammar" }, { yes: "Small steps you can actually finish", no: "Walls of rules to memorize (more or less)" }, ];
const questions = [ { q: "Will I make mistakes here?", a: "Yes, loudly and often. That's how English gets learned. I still make them, and I'm the one who built this.", }, { q: "Is your English perfect?", a: "Nope. It's a work in progress, like getting a someone who truly loves you. We're in this together.", }, { q: "Why did you make this for free?", a: "Because somebody once explained English to me in a way that finally clicked. This is me passing it on.", }, ];
export default function Aboutme() { 
    
    
    
    return (<div className="BACKGROUND">
        <h3 className="font-bold border rounded">ABOUT ME</h3>
<div className="justify-center md:text-lg">Hey, stranger. Come on in.

Most people call me Gz.

I’m a web developer with an oddly strong interest in the English language.
Yes, I spend my days writing code and my free time thinking about words.
No, I don’t see a problem with that. </div>
  <section className="about__section">
    <h2>Who's behind the screen</h2>
    <p>
      By trade, I build websites. By obsession, I collect words, phrases,
      and the weird rules English never explains. Somewhere along the way
      those two hobbies bumped into each other, and this page is the result.
    </p>
  </section>

  <section className="about__section">
    <h2>Why this site exists</h2>
    <p>
      I made it from the deepest of my heart to help random people improve
      their English. Hi, random person. Welcome.
    </p>
    <p>
      Plot twist: building it helped me a lot too. Turns out teaching is
      just learning with extra steps.
    </p>
  </section>

  <section className="about__section">
    <h2>The deal</h2>
    <div className="about__deal">
      <div>
        <h3>You get</h3>
        <ul>
          {promises.map((p) => (
            <li key={p.yes}>{p.yes}</li>
          ))}
        </ul>
      </div>
      <div>
        <h3>You don't get</h3>
        <ul className="about__no">
          {promises.map((p) => (
            <li key={p.no}>{p.no}</li>
          ))}
        </ul>
      </div>
    </div>
  </section>

  <section className="about__section">
    <h2>Questions you might have</h2>
    <div className="about__faq">
      {questions.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </div>
  </section>

  <footer className="about__footer">
    <p>
      That's me. Now go learn something, and make a few glorious mistakes
      on the way.
    </p>
    <p className="about__sign">Gz</p>
  </footer>
</div>
);



}
