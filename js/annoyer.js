const annoyer = {
  phrases: [
    "Poke Fun At",
    "Cut The Mustard",
    "Short End of the Stick",
    "Under Your Nose",
    "A Few Sandwiches Short of a Picnic",
  ],
  pickPhrase() {
    const { phrases } = this;
    const idx = Math.floor(Math.random() * phrases.length);
    return phrases[idx];
  },
  //timerId: 1,
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },
  stop() {
    clearInterval(this.timerId);
  },
};

