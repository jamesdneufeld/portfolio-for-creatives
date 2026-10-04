/**
 * Phrase Rotator
 *
 * Changes the phrase every 8 seconds.
 * Each phrase is a clickable link that opens in a new tab.
 *
 * To customize:
 * 1. Change the phrases and URLs in the phrases array.
 * 2. Change INTERVAL_MS to control how often the phrase changes.
 * 3. Make sure your HTML contains an element with the ID "phraseChange".
 *
 * Note: Keep at least two phrases in the array, or the no-repeat check will loop forever.
 */

const INTERVAL_MS = 8000;

const phrases = [
  {
    text: "looking for answers.",
    href: "https://poets.org/poem/revolutionary-letter-2",
  },
  {
    text: "on the run.",
    href: "https://www.youtube.com/watch?v=fzMU2luS7uw",
  },
  {
    text: "committing to the bit.",
    href: "https://jacksonpollock.org/",
  },
  {
    text: "engaging serendipity.",
    href: "https://www.jilliantamaki.com/trash-the-block",
  },
  {
    text: "guessing, and getting it right.",
    href: "https://img.buzzfeed.com/buzzfeed-static/static/2017-09/25/6/asset/buzzfeed-prod-fastlane-03/anigif_sub-buzz-24369-1506334088-1.gif",
  },
  {
    text: "preaching to the choir.",
    href: "https://www.youtube.com/watch?v=ZFq_Ib8BkVI",
  },
  {
    text: "keeping tabs.",
    href: "https://fontsinuse.com/",
  },
  {
    text: "believing the best.",
    href: "https://www.futurefonts.xyz/",
  },
  {
    text: "taking drastic measures.",
    href: "https://pointerpointer.com/",
  },
  {
    text: "trusting her gut.",
    href: "https://www.window-swap.com/",
  },
  {
    text: "catching non sequiturs.",
    href: "https://www.merriam-webster.com/dictionary/non%20sequitur",
  },
  {
    text: "off the grid.",
    href: "https://vienna.earth/plate/~latwyx-mopmep/september%202022",
  },
];

let lastIndex = -1;

function getRandomIndex() {
  let newIndex;

  do {
    newIndex = Math.floor(Math.random() * phrases.length);
  } while (newIndex === lastIndex);

  lastIndex = newIndex;

  return newIndex;
}

function pickRandomPhrase() {
  const container = document.getElementById("phraseChange");

  if (!container) return;

  const phrase = phrases[getRandomIndex()];

  const link = document.createElement("a");

  link.href = phrase.href;
  link.textContent = phrase.text;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.className = "phrase";

  container.innerHTML = "";
  container.appendChild(link);

  setTimeout(pickRandomPhrase, INTERVAL_MS);
}

pickRandomPhrase();
