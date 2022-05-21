import React from "react";
import "./Wrapper.css";
const Wrapper = () => {
  return (
    <body>
      <header>Swanns Way - Overture</header>

      <div className="fc">
        <aside>
          For a long time I used to go to bed early. Sometimes, when I had put
          out my candle, my eyes would close so quickly that I had not even time
          to say &quot;I'm going to sleep.&quot;
        </aside>

        <main>
          And half an hour later the thought that it was time to go to sleep
          would awaken me; I would try to put away the book which, I imagined,
          was still in my hands, and to blow out the light; I had been thinking
          all the time, while I was asleep, of what I had just been reading, but
          my thoughts had run into a channel of their own, until I myself seemed
          actually to have become the subject of my book: a church, a quartet,
          the rivalry between François I and Charles V.{" "}
        </main>

        <section>
          This impression would persist for some moments after I was awake; it
          did not disturb my mind, but it lay like scales upon my eyes and
          prevented them from registering the fact that the candle was no longer
          burning.
        </section>
      </div>

      <footer>by Marcel Proust</footer>
    </body>
  );
};

export default Wrapper;
