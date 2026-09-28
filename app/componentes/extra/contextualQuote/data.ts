import type { QuoteData } from "./contextualQuote.types";

export const quotes: QuoteData[] = [
  {
    id: "q-1",
    text: "War is peace. Freedom is slavery. Ignorance is strength.",
    source: "1984 — George Orwell",
    highlights: [
      {
        word: "slavery",
        context:
          "In the novel, this reflects the Party's control over every part of citizens' lives.",
      },
    ],
  },
  //----------------------
  {
    id: "q-2",
    text: `Aboard of this Guiney Man Teach mounted no
Guns, and named her the Queen Ann’s Revenge; and
cruising near the Island of St. Vincent, took a large
Ship, called the Great Allen, Christopher Taylor Commander;
the Pyrates plundered her of what they
though fit, put all the Men ashore upon the Island
above mentioned, and then set Fire to the Ship.
A few Days after, Teach fell in with the Scarborogh
Man of War, of 30 Guns, who engaged
him for some Hours; but she finding the Pyrate
well mann’d, and having tried her strength, gave
over the Engagement, and returned to Barbadoes,
the Place of her Station; and Teach sailed towards
the Spanish America.
In his Way he met with a Pyrate Sloop of ten
Guns, commanded by one Major Bonnet, lately a
Gentleman of good Reputation and Estate in the
Island of Barbadoes, whom he joyned; but in a few
Days after, Teach, finding that Bonnet knew nothing
of a maritime Life, with the Consent of his own
Men, put in another Captain, one Richards, to
Command Bonnet’s Sloop, and took the Major on
aboard his own Ship, telling him, that as he had not
been used to the Fatigues and Care of such a Post, it would
be better for him to decline it, and live easy and at his Pleasure,
in such a Ship as his, where he should not be obliged to
perform Duty, but follow his own Inclinations.`,
source: "Captain Black Beard chapter IV from A general story of pyrates",
highlights: [
  {
    word: "Guiney Man",
    context: "Refers to a slave ship or a merchant vessel that traded along the Guinea coast of West Africa."
  },
  {
    word: "plundered",
    context: "To steal goods from a place or person, typically using force and in a time of war or piracy."
  },
  {
    word: "Man of War",
    context: "A powerful armed naval vessel or warship used by the navy."
  },
  {
    word: "engaged",
    context: "Entered into battle or initiated a fight with the enemy ship."
  },
  {
    word: "Sloop",
    context: "A small, highly maneuverable sailing ship with a single mast."
  },
  {
    word: "Fatigues",
    context: "The extreme physical and mental exhaustion or hard labor associated with a difficult job or post."
  }
],
  }
    //----------------------
];