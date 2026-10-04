/**
 * Random Text
 *
 * Shows a random piece of text every time the page is refreshed.
 *
 * Example text by Elizabeth Lin (https://www.elizabethlin.ca/),
 * inspired by the random pun on her portfolio's homepage.
 *
 * To customize:
 * 1. Add or replace text in the texts array.
 * 2. Make sure your HTML contains an element with the ID "randomText".
 */

const texts = [
  "Whale... that's who he is. He's got kriller jokes.",
  "Clones are people two.",
  "Dead batteries should be free of charge.",
  "Did you hear about the graphic designer’s dog? It was a Dobie inDesign.",
  "Most puns make me numb, but math puns make me number.",
  "Bee puns really sting. Yeouch.",
  "Just found out sticks float. They would.",
  "This morning was an eye-opening experience.",
  "I've heard of the new see-through sewing needles, but I just don't see the point.",
  "Is your phone making you fall asleep? I can help – there's a nap for that.",
  "Inspecting mirrors is a job I could really see myself doing.",
  "When the new hive is finished, the bees have a house-swarming party.",
  "A steak pun is a rare medium well done.",
  "Guess who I bumped into on the way to the optometrist? Everyone.",
  "If I was a frog, I'd eat whatever bugs me.",
  "Sorry, my cat ate my coding homework. She took too many bytes.",
  "I don't trust stairs. They're always up to something.",
  "Thanks for explaining the word ‘many’ to me, it means a lot.",
  "A pun a day is very important. Seven days without a pun makes one week!",
  "Shout out to people who don't know what the opposite of in is.",
  "Just burned 2,000 calories. I keep forgetting my brownies in the oven.",
  "I don't trust those trees over there... they look kinda shady.",
  "Writing my name in cursive is my signature move.",
  "Just so everyone’s clear, I’m going to put my glasses on.",
  "Why is it unwise to share secrets with a clock? Only time will tell.",
  "Do you know the benefits of eating dried grapes? I'm all about raisin awareness.",
  "How does music say goodbye? Audios.",
  "Sadly, my photographic memory was never developed.",
  "Just bee yourself. Do your own sting.",
  "Why do programmers like dark mode? Because light attracts bugs.",
  "I got to hold in my sneeze because I've already been blessed.",
];

const textElement = document.getElementById("randomText");

if (textElement) {
  const randomIndex = Math.floor(Math.random() * texts.length);
  textElement.textContent = texts[randomIndex];
}
