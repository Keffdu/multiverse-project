const { encrypt } = require("./utils/helperFunctions")

module.exports = {
  instruments: [
    {
      name: "Matriarch Semi-Modular Analog Keyboard Synthesizer",
      brand: "Moog",
      price: "e9196d447b0997bca7b38233f74d16c8",
      description: "Moog returns with a synthesizer that takes its place as de facto leader of their familial line of semi modular machines: The Matriarch. The Matriarch explodes onto the scene hosting an all analog signal path built on top of 4 oscillators that can be stacked or split. This results in monophonic, two-note paraphonic, or four note paraphonic behavior. This gives the musician access to everything from earthquaking bass lines, complex layered evolving sequences, and four voice chords that range from baroque to broken.",
      category: "Synth",
      image: "https://www.perfectcircuit.com/media/catalog/product/cache/b2b71989c0b652d08415263d23f3ddf7/M/o/Moog_Matriarch_01.jpg",
    },
    {
      name: "Wave 2 Digital Keyboard Synthesizer",
      brand: "Nord",
      price: "3dfc4e534232251bf6e536daefbdf3f4",
      description: "The Nord Wave 2 is an even more powerful reimagining of the original Wave, providing performing keyboardists access to virtual analog, FM, wavetable, and sample-based synthesis techniques. Keeping all the most critical features of the original Wave and adding the capacity for 4-part multitimbral behavior, complex splits and layers, a fully-featured arpeggiator, and more, the Wave 2 is perhaps Nord's most powerful synthesizer to date.",
      category: "Synth",
      image: "https://www.perfectcircuit.com/media/catalog/product/cache/b2b71989c0b652d08415263d23f3ddf7/n/o/nord_wave-2-2020_01.jpg",
    },
    {
      name: "COLOSSUS AS100 CLASSIC",
      brand: "Analogue Solutions",
      price: "a1607c2b3f3ebe90ca2c683d39ca3df8",
      description: "Analogue Solutions is excited to introduce Colossus, an exciting new mega-synth with a design ethos truly from the dawn of analogue synths. It is more than a powerful analogue ‘workstation’ - it is also art, architecture, exquisite studio furniture.",
      category: "Synth",
      image: "https://images.squarespace-cdn.com/content/v1/5b15641d55b02c03124b073b/62081295-f7f3-4975-9f65-baa6a5eab22f/analogue+solutions+colossus+double+AS200++angle+copy.png?format=2500w",
    },
    {
      name: "Taylor PS52ce Grand Concert 12-Fret 12-String Acoustic-Electric Guitar Shaded Edge Burst",
      brand: "Taylor",
      price: "3119f7b00c661f01caafbc30b45ea2d1",
      description: "The Taylor PS52ce 12-Fret 12-String is an acoustic-electric guitar with a Grand Concert body and a Venetian cutaway. The PS52ce acoustic features a Sinker redwood top and Honduran rosewood back and sides with a V-Class bracing pattern. A Tropical Mahogany neck is topped with an ebony fingerboard. Additional features include a behind-the-saddle transducer with adjustable sensors, an Expression System 2 Professional Audio-Grade preamp and an onboard Phase Switch. A Taylor Deluxe hardshell case is included for secure, portable protection of your PS52ce 12-String acoustic guitar.",
      category: "String",
      image: "https://media.guitarcenter.com/is/image/MMGS7/L85528000001000-00-600x600.jpg",
    },
    {
      name: "Deering Calico Banjo Natural",
      brand: "Deering",
      price: "8529c50d018783e606a8ea430eda430f",
      description: "A premium quality, world class banjo that is known around the world for its crisp tone - The Calico is exceptionally dynamic for both powerful sound and instantaneous response; providing a great tool for all styles of music.",
      category: "String",
      image: "https://media.guitarcenter.com/is/image/MMGS7/518542000010000-00-600x600.jpg",
    },
    {
      name: "NS Design CR5 5-String Electric Violin Amber Stain",
      brand: "NS Design",
      price: "a454560d43b855282d2e112990fdc6ff",
      description: "Capable of producing everything from traditional acoustic tone to full-tilt electric sound, this radically innovative instrument works in virtually any musical context.",
      category: "String",
      image: "https://media.guitarcenter.com/is/image/MMGS7/465013000342000-02-600x600.jpg",
    },
    {
      name: "Zildjian 400th Anniversary Limited-Edition Alloy Snare Drum 14 x 6.5 in.",
      brand: "Zildjian",
      price: "6d339588aedf909416d5d67be4833335",
      description: "To celebrate 400 years since Avedis Zildjian began smithing cymbals in Constantinople, Ottoman Empire in 1623, the fabled brand is releasing a limited quantity of one-of-a-kind bronze alloy snare drums. Inspired by the legendary B20 bronze formula developed by Avedis Zildjian himself, the expert makers at Zildjian have collaborated with boutique metal snare designer Aaron Latos of Latos Drums to create an instrument with a look, feel and sonic signature worthy of any drummer’s envy. Perhaps most impressively, this heirloom-quality 400th Anniversary Alloy 14x6.5 inch snare is endlessly versatile, equally at home in front of a wall of amps as it is behind an orchestra or in a jazz quartet—a righteous testament to a brand that has transcended time and genre.",
      category: "Percussion",
      image: "https://media.guitarcenter.com/is/image/MMGS7/M07866000001000-00-600x600.jpg",
    },
    {
      name: "SABIAN FRX PrePack Cymbal Set With Free Classic Vintage Cymbal Bag",
      brand: "SABIAN",
      price: "c4003547d6dc772da4916834034f1e58",
      description: "Right from the launch of the FRX line, drummers have been asking for an FRX box set, and SABIAN has delivered. With 14 inch hi-hats, 16 and 18 inch crashes and a 21 inch ride, the FRX PrePack Set offers a total solution for drummers who play in situations where traditional cymbals are just too much. The included Classic Vintage cymbal bag makes getting around that much easier.",
      category: "Percussion",
      image: "https://media.guitarcenter.com/is/image/MMGS7/L28781000000000-00-600x600.jpg",
    },
    {
      name: "Pearl Awakening Series Melodic Handpan with Bag, 9 Note D Minor Scale 22 in.",
      brand: "Pearl",
      price: "71f2126b72fcde4af9b2fdfd99bd833f",
      description: "The Pearl Awakening Series melodic handpan is the perfect instrument for your mystical excursions. This 22 inch, nine-note handpan is meticulously tuned to the F Minor Scale and responds to your finger strikes with amazing sonority. Handcrafted from stainless steel sheets, the Awakening Series melodic handpan is ideal for the studio, the stage or anywhere your excursions take you. A sturdy, PVC reinforced backpack-style bag is included to protect the handpan during travel and storage.",
      category: "Percussion",
      image: "https://media.guitarcenter.com/is/image/MMGS7/L95949000001000-00-600x600.jpg",
    },
  ]
};
