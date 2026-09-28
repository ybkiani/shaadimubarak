/* =========================================================
   LOADER
========================================================= */

const loader = document.getElementById("loader");
const invitation = document.getElementById("invitation");

window.addEventListener("load", () => {

  setTimeout(() => {

    loader.classList.add("hide");
    invitation.classList.remove("hidden");

  }, 900);

});


/* =========================================================
   OPEN INVITATION
========================================================= */

document.getElementById("openBtn").addEventListener("click", () => {

  document
    .querySelector(".welcome")
    .scrollIntoView({
      behavior: "smooth"
    });

  burstPetals(18);

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const observer = new IntersectionObserver(
  (entries) => {

    entries.forEach(entry => {

      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }

    });

  },
  {
    threshold: 0.12
  }
);


document
  .querySelectorAll(".reveal")
  .forEach(el => observer.observe(el));


/* =========================================================
   EVENT CARDS
========================================================= */

document
  .querySelectorAll(".event-card")
  .forEach(card => {

    card.addEventListener("click", e => {

      if (
        e.target.classList.contains("event-more") ||
        e.currentTarget === card
      ) {

        card.classList.toggle("open");

        const btn =
          card.querySelector(".event-more");

        btn.textContent =
          card.classList.contains("open")
            ? "−"
            : "+";
      }

    });

  });


/* =========================================================
   LANGUAGE SWITCH
========================================================= */

const langText = {

  en:
    "With the blessings of our families, we invite you to share in the joy of our wedding celebrations.",

  ur:
    "اپنے خاندانوں کی دعاؤں اور محبت کے ساتھ، ہم آپ کو اپنی شادی کی خوشیوں میں شریک ہونے کی دعوت دیتے ہیں۔"

};


document
  .querySelectorAll(".lang")
  .forEach(btn => {

    btn.addEventListener("click", () => {

      document
        .querySelectorAll(".lang")
        .forEach(x =>
          x.classList.remove("active")
        );


      btn.classList.add("active");


      const languageText =
        document.getElementById("languageText");


      const selectedLanguage =
        btn.dataset.lang;


      languageText.textContent =
        langText[selectedLanguage];


      if (selectedLanguage === "ur") {

        languageText.dir = "rtl";
        languageText.lang = "ur";

        languageText.classList.add(
          "urdu-mode"
        );

      } else {

        languageText.dir = "ltr";
        languageText.lang = "en";

        languageText.classList.remove(
          "urdu-mode"
        );

      }

    });

  });


/* =========================================================
   COUNTDOWN
========================================================= */

const weddingDate =
  new Date(
    "2027-03-14T19:30:00+05:00"
  ).getTime();


function updateCountdown() {

  const now = Date.now();

  let distance =
    weddingDate - now;


  if (distance < 0) {
    distance = 0;
  }


  const d =
    Math.floor(
      distance / 86400000
    );


  const h =
    Math.floor(
      (distance % 86400000) /
      3600000
    );


  const m =
    Math.floor(
      (distance % 3600000) /
      60000
    );


  const s =
    Math.floor(
      (distance % 60000) /
      1000
    );


  document.getElementById("days")
    .textContent =
    String(d).padStart(3, "0");


  document.getElementById("hours")
    .textContent =
    String(h).padStart(2, "0");


  document.getElementById("minutes")
    .textContent =
    String(m).padStart(2, "0");


  document.getElementById("seconds")
    .textContent =
    String(s).padStart(2, "0");

}


updateCountdown();

setInterval(
  updateCountdown,
  1000
);


/* =========================================================
   RSVP ATTENDANCE
========================================================= */

document
  .querySelectorAll(".attend")
  .forEach(btn => {

    btn.addEventListener("click", () => {

      document
        .querySelectorAll(".attend")
        .forEach(x =>
          x.classList.remove("active")
        );


      btn.classList.add("active");

    });

  });


/* =========================================================
   WHATSAPP RSVP
========================================================= */

document
  .getElementById("rsvpBtn")
  .addEventListener("click", () => {

    const name =
      document
        .getElementById("guestName")
        .value
        .trim();


    const count =
      document
        .getElementById("guestCount")
        .value;


    const answer =
      document
        .querySelector(".attend.active")
        .dataset.answer;


    if (!name) {

      document
        .getElementById("rsvpMessage")
        .textContent =
        "Please enter your name first.";

      return;

    }


    const text =
      answer === "joy"

        ? `Assalamualaikum! I’m ${name}. I’m joyfully attending Ayesha & Hamza’s wedding with ${count} guest(s). ❤️`

        : `Assalamualaikum! I’m ${name}. Sadly, I won’t be able to attend Ayesha & Hamza’s wedding. Sending my love and duas. ❤️`;


    /*
      Replace this with your real
      WhatsApp RSVP number.

      Format example:
      923001234567
    */

    const phone =
      "923001234567";


    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(text)}`,
      "_blank"
    );

  });


/* =========================================================
   BACK TO TOP
========================================================= */

document
  .getElementById("topBtn")
  .addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });


/* =========================================================
   PETALS
========================================================= */

function burstPetals(count = 10) {

  const container =
    document.getElementById("petals");


  for (
    let i = 0;
    i < count;
    i++
  ) {

    const p =
      document.createElement("span");


    p.className =
      "petal";


    p.textContent =
      ["❀", "✦", "•"][
        Math.floor(
          Math.random() * 3
        )
      ];


    p.style.left =
      Math.random() * 100 +
      "vw";


    p.style.animationDuration =
      (
        4 +
        Math.random() * 4
      ) +
      "s";


    p.style.fontSize =
      (
        10 +
        Math.random() * 14
      ) +
      "px";


    container.appendChild(p);


    setTimeout(
      () => p.remove(),
      9000
    );

  }

}


setInterval(
  () => burstPetals(2),
  4500
);


/* =========================================================
   MUSIC
========================================================= */

const music =
  document.getElementById(
    "weddingMusic"
  );


const musicBtn =
  document.getElementById(
    "musicBtn"
  );


musicBtn.addEventListener(
  "click",
  async () => {

    const source =
      music.querySelector("source");


    if (!source) {

      alert(
        "To add music, place your MP3 in assets/wedding-music.mp3 and uncomment the source line in index.html."
      );

      return;

    }


    try {

      if (music.paused) {

        await music.play();

        musicBtn.classList.add(
          "playing"
        );

        musicBtn.setAttribute(
          "aria-label",
          "Pause music"
        );

      } else {

        music.pause();

        musicBtn.classList.remove(
          "playing"
        );

        musicBtn.setAttribute(
          "aria-label",
          "Play music"
        );

      }

    } catch (error) {

      console.log(
        "Music could not be started:",
        error
      );

    }

  }
);
