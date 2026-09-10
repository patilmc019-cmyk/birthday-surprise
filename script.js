/* =====================================
   GET ELEMENTS
===================================== */

const openingScreen =
    document.getElementById("openingScreen");

const birthdayScreen =
    document.getElementById("birthdayScreen");

const happinessScreen =
    document.getElementById("happinessScreen");

const letterScreen =
    document.getElementById("letterScreen");

const finalScreen =
    document.getElementById("finalScreen");


const openButton =
    document.getElementById("openButton");

const continueButton =
    document.getElementById("continueButton");

const letterButton =
    document.getElementById("letterButton");

const finalButton =
    document.getElementById("finalButton");

const restartButton =
    document.getElementById("restartButton");


/* =====================================
   BIRTHDAY COUNTDOWN
===================================== */

function updateCountdown() {

    const now = new Date();

    /*
       Current year
    */

    let birthdayYear =
        now.getFullYear();


    /*
       Birthday = September 18
       Month 8 means September
    */

    let birthday =
        new Date(
            birthdayYear,
            8,
            18,
            0,
            0,
            0
        );


    /*
       Check if today is September 18
    */

    const isBirthdayToday =
        now.getMonth() === 8 &&
        now.getDate() === 18;


    /* =================================
       BIRTHDAY TODAY
    ================================= */

    if (isBirthdayToday) {

        document.getElementById("days").textContent =
            "🎂";

        document.getElementById("hours").textContent =
            "🎉";

        document.getElementById("minutes").textContent =
            "✨";

        document.getElementById("seconds").textContent =
            "🌷";


        document.querySelector(".subtitle").textContent =
            "TODAY IS SRUSHTI B'S DAY! 🎂✨";


        return;
    }


    /*
       If September 18 has already passed,
       use next year's birthday.
    */

    if (now > birthday) {

        birthdayYear++;

        birthday =
            new Date(
                birthdayYear,
                8,
                18,
                0,
                0,
                0
            );

    }


    /* =================================
       CALENDAR DAY DIFFERENCE
    ================================= */

    /*
       Create midnight dates so that
       September 10 → September 18
       becomes exactly 8 days.
    */

    const todayMidnight =
        new Date(
            now.getFullYear(),
            now.getMonth(),
            now.getDate()
        );


    const birthdayMidnight =
        new Date(
            birthday.getFullYear(),
            birthday.getMonth(),
            birthday.getDate()
        );


    const oneDay =
        1000 * 60 * 60 * 24;


    const calendarDifference =
        Math.round(
            (
                birthdayMidnight -
                todayMidnight
            ) / oneDay
        );


    /* =================================
       REAL TIME REMAINING
    ================================= */

    const difference =
        birthday.getTime() -
        now.getTime();


    const hours =
        Math.floor(
            (
                difference /
                (1000 * 60 * 60)
            ) % 24
        );


    const minutes =
        Math.floor(
            (
                difference /
                (1000 * 60)
            ) % 60
        );


    const seconds =
        Math.floor(
            (
                difference /
                1000
            ) % 60
        );


    /* =================================
       DISPLAY
    ================================= */

    document.getElementById("days").textContent =
        String(calendarDifference).padStart(2, "0");


    document.getElementById("hours").textContent =
        String(hours).padStart(2, "0");


    document.getElementById("minutes").textContent =
        String(minutes).padStart(2, "0");


    document.getElementById("seconds").textContent =
        String(seconds).padStart(2, "0");


    /*
       Update subtitle
    */

    document.querySelector(".subtitle").textContent =
        "Srushti B's special day is getting closer... ✨";

}


/*
   Start countdown
*/

updateCountdown();


/*
   Update every second
*/

setInterval(
    updateCountdown,
    1000
);


/* =====================================
   SCREEN NAVIGATION
===================================== */

function showScreen(screenToShow) {

    const screens =
        document.querySelectorAll(".screen");


    screens.forEach(screen => {

        screen.classList.remove("active");

    });


    screenToShow.classList.add("active");

}


/* =====================================
   OPEN WEBSITE
===================================== */

openButton.addEventListener(
    "click",
    () => {

        showScreen(birthdayScreen);

    }
);


/* =====================================
   BIRTHDAY → HAPPINESS
===================================== */

continueButton.addEventListener(
    "click",
    () => {

        showScreen(happinessScreen);

    }
);


/* =====================================
   DAILY MESSAGES
===================================== */

const dailyMessages = [

    "Take today slowly. You don't have to do everything at once. 🌷",

    "Srushti, you are allowed to be proud of how far you've come. ✨",

    "A small step is still progress. Keep going. 🌱",

    "Don't forget to give yourself the same kindness you give others. 🌸",

    "Something good may be closer than you think. Keep looking forward. ☀️",

    "You don't need a perfect day to have a good day. 😊",

    "Rest when you need to. Your mind deserves a little peace too. 🌿",

    "You are doing better than you probably realize, Srushti. ✨",

    "Today is another chance to learn something, laugh about something, and enjoy something. 🌷",

    "Be patient with yourself. Good things take time. 🌱",

    "Your efforts matter, even when nobody else sees them. ⭐",

    "Make time for one little thing that makes you genuinely happy today. 🌸",

    "Keep going. Future Srushti will be thankful that you didn't give up. ✨",

    "You don't have to have everything figured out today. Just enjoy today. 🌿",

    "There is always something beautiful waiting in an ordinary day. 🌷",

    "Smile at least once today for absolutely no reason. 😊",

    "You've got more strength than you give yourself credit for. ⭐",

    "Protect your peace. It is precious. 🌿",

    "Today deserves a little laughter. Go find some. 😂",

    "Whatever today brings, take it one moment at a time. 🌸"

];


function getDailyMessage() {

    const today =
        new Date();


    const startOfYear =
        new Date(
            today.getFullYear(),
            0,
            0
        );


    const difference =
        today - startOfYear;


    const oneDay =
        1000 *
        60 *
        60 *
        24;


    const dayNumber =
        Math.floor(
            difference / oneDay
        );


    const messageIndex =
        dayNumber %
        dailyMessages.length;


    return dailyMessages[messageIndex];

}


document.getElementById(
    "dailyMessage"
).textContent =
    getDailyMessage();


/* =====================================
   RANDOM MESSAGES
===================================== */

const messages = [

    "Srushti, I hope something unexpectedly wonderful happens to you today. 🌷",

    "Never forget that you are capable of much more than you sometimes give yourself credit for. ✨",

    "Today is a good day to appreciate the person you are becoming. 🌱",

    "You deserve peaceful mornings, peaceful nights and lots of reasons to smile. 🌸",

    "Keep being yourself, Srushti. That's already pretty awesome. 😊"

];


const funnyMessages = [

    "Official birthday rule: calories do not count today. I don't make the rules. 😂",

    "Congratulations, Srushti! You have successfully unlocked another year of being awesome. 🎉",

    "Today's forecast: 100% chance of cake. 🍰",

    "Please accept this completely useless but extremely important birthday certificate: YOU ARE AWESOME. 🏆",

    "Your age is confidential information. Even I don't know it. 😌"

];


const reminders = [

    "Srushti, you don't have to have everything figured out. One day at a time. 🌷",

    "Take a deep breath. You're doing better than you think. 🌸",

    "Be kind to yourself today. You deserve that too. 🌱",

    "There are still so many beautiful moments waiting for you. ✨",

    "Don't forget to celebrate the person you've become. ⭐"

];


/* =====================================
   POPUP
===================================== */

const popupMessage =
    document.getElementById(
        "popupMessage"
    );


const popupText =
    document.getElementById(
        "popupText"
    );


const closePopup =
    document.getElementById(
        "closePopup"
    );


function showMessage(messageArray) {

    const randomIndex =
        Math.floor(
            Math.random() *
            messageArray.length
        );


    popupText.textContent =
        messageArray[randomIndex];


    popupMessage.classList.add(
        "show"
    );

}


closePopup.addEventListener(
    "click",
    () => {

        popupMessage.classList.remove(
            "show"
        );

    }
);


/* =====================================
   CARD ACTIONS
===================================== */

document.getElementById(
    "messageCard"
).addEventListener(
    "click",
    () => {

        showMessage(messages);

    }
);


document.getElementById(
    "smileCard"
).addEventListener(
    "click",
    () => {

        showMessage(funnyMessages);

    }
);


document.getElementById(
    "reminderCard"
).addEventListener(
    "click",
    () => {

        showMessage(reminders);

    }
);


/* =====================================
   HAPPINESS → LETTER
===================================== */

letterButton.addEventListener(
    "click",
    () => {

        showScreen(letterScreen);

    }
);


/* =====================================
   LETTER → FINAL
===================================== */

finalButton.addEventListener(
    "click",
    () => {

        showScreen(finalScreen);

    }
);


/* =====================================
   COME BACK TOMORROW
===================================== */

restartButton.addEventListener(
    "click",
    () => {

        showScreen(openingScreen);

        window.scrollTo(
            0,
            0
        );

    }
);