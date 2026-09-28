/* =========================================================
   LOADER
========================================================= */

const loader =
  document.getElementById("loader");

const invitation =
  document.getElementById("invitation");


window.addEventListener(
  "load",
  () => {

    setTimeout(
      () => {

        loader.classList.add("hide");

        invitation.classList.remove(
          "hidden"
        );

      },
      900
    );

  }
);


/* =========================================================
   OPEN INVITATION
========================================================= */

document
  .getElementById("openBtn")
  .addEventListener(
    "click",
    () => {

      document
        .querySelector(".welcome")
        .scrollIntoView({
          behavior: "smooth"
        });

      burstPetals(18);

    }
  );


/* =========================================================
   REVEAL ANIMATION
========================================================= */

const observer =
  new IntersectionObserver(

    entries => {

      entries.forEach(
        entry => {

          if (
            entry.isIntersecting
          ) {

            entry.target
              .classList
              .add("visible");

          }

        }
      );

    },

    {
      threshold: 0.12
    }

  );


document
  .querySelectorAll(".reveal")
  .forEach(
    element => {

      observer.observe(
        element
      );

    }
  );


/* =========================================================
   EVENT CARDS
========================================================= */

document
  .querySelectorAll(".event-card")
  .forEach(
    card => {

      card.addEventListener(
        "click",
        event => {

          card
            .classList
            .toggle("open");


          const button =
            card.querySelector(
              ".event-more"
            );


          button.textContent =
            card.classList.contains(
              "open"
            )
              ? "−"
              : "+";

        }
      );

    }
  );


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
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(".lang")
            .forEach(
              item => {

                item.classList.remove(
                  "active"
                );

              }
            );


          button.classList.add(
            "active"
          );


          const text =
            document.getElementById(
              "languageText"
            );


          const language =
            button.dataset.lang;


          text.textContent =
            langText[language];


          if (
            language === "ur"
          ) {

            text.setAttribute(
              "lang",
              "ur"
            );

            text.setAttribute(
              "dir",
              "rtl"
            );

            text.classList.add(
              "urdu-mode"
            );

          }

          else {

            text.setAttribute(
              "lang",
              "en"
            );

            text.setAttribute(
              "dir",
              "ltr"
            );

            text.classList.remove(
              "urdu-mode"
            );

          }

        }
      );

    }
  );


/* =========================================================
   COUNTDOWN
========================================================= */

const weddingDate =
  new Date(
    "2027-03-14T19:30:00+05:00"
  ).getTime();


function updateCountdown() {

  const now =
    Date.now();


  let distance =
    weddingDate - now;


  if (
    distance < 0
  ) {

    distance = 0;

  }


  const days =
    Math.floor(
      distance /
      86400000
    );


  const hours =
    Math.floor(
      (
        distance %
        86400000
      ) /
      3600000
    );


  const minutes =
    Math.floor(
      (
        distance %
        3600000
      ) /
      60000
    );


  const seconds =
    Math.floor(
      (
        distance %
        60000
      ) /
      1000
    );


  document
    .getElementById("days")
    .textContent =
      String(days)
        .padStart(
          3,
          "0"
        );


  document
    .getElementById("hours")
    .textContent =
      String(hours)
        .padStart(
          2,
          "0"
        );


  document
    .getElementById("minutes")
    .textContent =
      String(minutes)
        .padStart(
          2,
          "0"
        );


  document
    .getElementById("seconds")
    .textContent =
      String(seconds)
        .padStart(
          2,
          "0"
        );

}


updateCountdown();


setInterval(
  updateCountdown,
  1000
);


/* =========================================================
   RSVP BUTTONS
========================================================= */

document
  .querySelectorAll(".attend")
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(
              ".attend"
            )
            .forEach(
              item => {

                item.classList.remove(
                  "active"
                );

              }
            );


          button.classList.add(
            "active"
          );

        }
      );

    }
  );


/* =========================================================
   WHATSAPP RSVP
========================================================= */

document
  .getElementById("rsvpBtn")
  .addEventListener(
    "click",
    () => {

      const name =
        document
          .getElementById(
            "guestName"
          )
          .value
          .trim();


      const count =
        document
          .getElementById(
            "guestCount"
          )
          .value;


      const selected =
        document
          .querySelector(
            ".attend.active"
          );


      const answer =
        selected.dataset.answer;


      if (
        !name
      ) {

        document
          .getElementById(
            "rsvpMessage"
          )
          .textContent =
            "Please enter your name first.";

        return;

      }


      document
        .getElementById(
          "rsvpMessage"
        )
        .textContent =
          "";


      let message;


      if (
        answer === "joy"
      ) {

        message =
          `Assalamualaikum! I’m ${name}. I’m joyfully attending Ayesha & Hamza’s wedding with ${count} guest(s). ❤️`;

      }

      else {

        message =
          `Assalamualaikum! I’m ${name}. Sadly, I won’t be able to attend Ayesha & Hamza’s wedding. Sending my love and duas. ❤️`;

      }


      /*
        IMPORTANT:

        Replace this example
        number with your actual
        RSVP WhatsApp number.

        Do not use + or spaces.

        Example:
        923001234567
      */

      const phone =
        "923001234567";


      const url =
        `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;


      window.open(
        url,
        "_blank"
      );

    }
  );


/* =========================================================
   BACK TO TOP
========================================================= */

document
  .getElementById("topBtn")
  .addEventListener(
    "click",
    () => {

      window.scrollTo({

        top: 0,

        behavior:
          "smooth"

      });

    }
  );


/* =========================================================
   PETALS
========================================================= */

function burstPetals(
  count = 10
) {

  const container =
    document.getElementById(
      "petals"
    );


  for (
    let i = 0;
    i < count;
    i++
  ) {

    const petal =
      document.createElement(
        "span"
      );


    petal.className =
      "petal";


    const symbols =
      [
        "❀",
        "✦",
        "•"
      ];


    petal.textContent =
      symbols[
        Math.floor(
          Math.random() *
          symbols.length
        )
      ];


    petal.style.left =
      (
        Math.random() *
        100
      ) +
      "vw";


    petal.style.animationDuration =
      (
        4 +
        Math.random() *
        4
      ) +
      "s";


    petal.style.fontSize =
      (
        10 +
        Math.random() *
        14
      ) +
      "px";


    container.appendChild(
      petal
    );


    setTimeout(
      () => {

        petal.remove();

      },
      9000
    );

  }

}


setInterval(
  () => {

    burstPetals(2);

  },
  4500
);


/* =========================================================
   MUSIC
========================================================= */

const music =
  document.getElementById(
    "weddingMusic"
  );


const musicButton =
  document.getElementById(
    "musicBtn"
  );


musicButton.addEventListener(
  "click",
  async () => {

    const source =
      music.querySelector(
        "source"
      );


    if (
      !source
    ) {

      alert(
        "Music is ready to be added. Upload your MP3 as assets/wedding-music.mp3 and uncomment the source line in index.html."
      );

      return;

    }


    try {

      if (
        music.paused
      ) {

        await music.play();


        musicButton
          .classList
          .add(
            "playing"
          );


        musicButton
          .setAttribute(
            "aria-label",
            "Pause music"
          );

      }

      else {

        music.pause();


        musicButton
          .classList
          .remove(
            "playing"
          );


        musicButton
          .setAttribute(
            "aria-label",
            "Play music"
          );

      }

    }

    catch (
      error
    ) {

      console.log(
        "Music playback error:",
        error
      );

    }

  }
);
