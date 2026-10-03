import "../../../styles/paginaLink.css";
import Botonatras from "@/app/componentes/botonatras";
import CuadroEjercicio from "@/app/componentes/cuadroEjercicio";

type ContentSection = {
    subtitle: string;
    text: string;
};

type contentTypes = {
    title: string;
    content1: ContentSection;
    content2: ContentSection;
    content3: ContentSection;
    content4: ContentSection;
    finalNotes: string;
};

const dataForEachContent: Record<string, contentTypes> = {
    "presentsimple": {
        title: "Present Simple",
        content1: {
            subtitle: "Present simple: affirmative",
            text: `We use the present simple to talk about habits, daily routines, things that happen regularly, and general facts.
The affirmative form is the infinitive without 'to'. To make the third person singular (he / she / it), we add '-s'.
Exceptions:
- If a verb ends in -o, -sh, -ch, -x or -ss, we add '-es' (e.g., go -> goes, watch -> watches).
- If a verb ends in -y after a consonant, we leave out the -y and add '-ies' (e.g., study -> studies).`
        },
        content2: {
            subtitle: "Present simple: negative",
            text: `We form the present simple negative with 'do not' or 'does not' and the infinitive. In spoken or informal written English, we use the short forms 'don't' or 'doesn't'.
- I / You / We / They don't live in Edinburgh.
- He / She / It doesn't live in Edinburgh.`
        },
        content3: {
            subtitle: "Present simple: yes/no questions & short answers",
            text: `We form present simple yes / no questions with 'do' or 'does' before the subject.
- Do I / you / we / they live in Edinburgh?
- Does he / she / it live in Edinburgh?

We make short answers with 'do' or 'does' in the affirmative and 'don't' or 'doesn't' in the negative.
- Affirmative: Yes, I do. / Yes, he does.
- Negative: No, we don't. / No, she doesn't.`
        },
        content4: {
            subtitle: "Prepositions of time",
            text: `- We use 'on' with dates and days of the week: on 25 June, on Monday.
- We use 'at' with times: at 11 o'clock, at half past two.
- We use 'in' with months, seasons, years and parts of the day: in January, in the summer, in 2015, in the morning.`
        },
        finalNotes: `• The third person singular of the verb have is 'has'.
- For negative and questions, we don't add '-s' to the verb for he / she / it (e.g., Does Luke play the piano?).
- In short answers, we don't use the main verb ('Yes, I do.' NOT 'Yes, I speak.').
- We say 'at the weekend' and 'at night' (NOT in the weekend / in night).`
    },
//---------------------------------------------------------------------------------

"nounsandimperatives": {
        title: "Singular/Plural Nouns & Imperatives",
        content1: {
            subtitle: "Singular and plural nouns",
            text: `We use a / an with singular nouns only. We use 'a' before singular nouns that start with a consonant. If the noun starts with a vowel sound or has an adjective starting with a vowel, we use 'an' (e.g., a book, an apple, an old house).

Plural Rules:
- We add -s to form the plural of most nouns: apple -> apples, book -> books.
- If a noun ends in -s, -ch, -sh or -x, we add -es: bus -> buses, beach -> beaches, box -> boxes.
- If a noun ends in -f, we change f to v and add -es: knife -> knives.
- If a noun ends in -y after a consonant, we change -y to -ies: baby -> babies.
- Some plural nouns are irregular (no -s or -es): man -> men, child -> children.`
        },
        content2: {
            subtitle: "This / that / these / those",
            text: `We use 'this' (singular) and 'these' (plural) for things that are close to us.
We use 'that' (singular) and 'those' (plural) for things that are further away.

Examples:
- This is my book and that is your book over there.
- These apples are good, but those are not.`
        },
        content3: {
            subtitle: "Imperatives",
            text: `We use imperatives to tell someone to do something. We often use them to give directions and instructions (e.g., Close the door, please. Go straight on as far as the traffic lights, then turn left).

- Affirmative: We form the affirmative imperative with the infinitive without 'to' (e.g., Run! Cross the road. Help me! Go left. Be quiet!).
- Negative: We form the negative imperative with "don't" and the infinitive without 'to' (e.g., Don't run! Don't cross the road. Don't be late!). We sometimes use the full form "do not" in writing.`
        },
        content4: {
            subtitle: "",
            text: ""
        },
        finalNotes: `• There is no subject in imperative sentences. Say "Come here!" (NOT "You come here!" or "Come together!").
• We can add the name of the person we are talking to at the beginning or end of the sentence (e.g., "Simon, come here!" or "Come here, Simon!").
• We can also add 'please' to sound more polite ("Please come here." or "Come here, please.").`
    },

    "possessivesandhavegot": {
        title: "Possessives & Have got",
        content1: {
            subtitle: "Possessive 's",
            text: `We add 's to a noun to show possession or a relationship. 
- Example: the girl's rucksack, Nikola's brother.

With plural nouns and nouns ending in -s, we sometimes only add an apostrophe (') but ('s) is more common. 
- Example: my parents' car, James's book.`
        },
        content2: {
            subtitle: "Possessive adjectives",
            text: `We use possessive adjectives to talk about possession.
- I've got a new phone. It's my phone.
- It's John's book. It's his book.

Subject pronouns ➔ Possessive adjectives:  (take notes)
- I ➔ my
- you ➔ your
- he ➔ his
- she ➔ her
- it ➔ its
- we ➔ our
- they ➔ their`
        },
        content3: {
            subtitle: "Have got: Affirmative & Negative",
            text: `We use 'have got' to talk about things that people own or have. The form for the third person singular is 'has got'. 
Short forms: have got = 've got and has got = 's got.

Affirmative:
- I / You / We / They have got a new phone.
- He / She / It has got a new phone.

Negative:
We form the negative by adding 'not' after have got / has got.
- I / You / We / They haven't got a new phone.
- He / She / It hasn't got a new phone.`
        },
        content4: {
            subtitle: "Have got: Questions & Short answers",
            text: `We form questions by placing have / has before the subject.

Questions:
- Have I / you / we / they got a new phone?
- Has he / she / it got a new phone?

Short answers:
- Affirmative: Yes, I / you / we / they have. | Yes, he / she / it has.
- Negative: No, I / you / we / they haven't. | No, he / she / it hasn't.`
        },
        finalNotes: `• When dealing with possessives ending in -s (like James), both James' and James's are grammatically correct, but adding 's is much more common.
• In short answers for "have got", we only use the auxiliary verb (have/has) and omit the word "got" (e.g., "Yes, I have." NOT "Yes, I have got.").`
    },
    //---------------------
    "questionsandfrequency": {
        title: "Question Words & Adverbs of Frequency",
        content1: {
            subtitle: "Question words",
            text: `We use question words to ask for information about:
- people: Who (e.g., Who is she? Who do you like?)
- things: What (e.g., What is this? What does this mean?)
- places: Where (e.g., Where am I? Where do you live?)
- date/time: When / What time (e.g., When is the first lesson? What time does it start?)
- manner/way: How (e.g., How are you?)
- frequency: How often (e.g., How often do you play sport?)
- age: How old (e.g., How old are they?)
- reason: Why (e.g., Why are you here?)
- alternative: Which (e.g., Which classroom are you in?)
- possession: Whose (e.g., Whose bag is this?)`
        },
        content2: {
            subtitle: "Adverbs of frequency",
            text: `We use adverbs of frequency to say how often we do something, or how often something happens.
Scale (0% to 100%): never, hardly ever, sometimes, often, usually, always.

The normal position of an adverb of frequency is:
- immediately after the verb 'be' (e.g., Faisal is often tired in the morning).
- immediately before most other verbs (e.g., Zara always does 60 minutes of exercise).`
        },
        content3: {
            subtitle: "Expressions of frequency & flexible positions",
            text: `The adverbs 'sometimes', 'usually' and 'often' can also go at the beginning or end of a sentence.
- Sometimes, Tom plays football.
- Usually, he plays video games.
- He doesn't play basketball very often.

Expressions of frequency (like every day, once a week, five times a year, etc.) go at the beginning or end of a sentence.
- Every week, we go swimming.
- My friend does karate twice a week.`
        },
        content4: {
            subtitle: "",
            text: ""
        },
        finalNotes: `• The question word always comes at the beginning of the sentence.
• Usually, it is directly followed by the verb, but the question words 'what', 'which' and 'whose' are sometimes followed by a noun (e.g., Whose bag is this?).`
    },
//------------------------------------------------------
    "quantifiersandthereis": {
        title: "There is / There are & Quantifiers",
        content1: {
            subtitle: "There is / There are",
            text: `Affirmative:
- There is an apple on the desk.
- There are some eggs.

Negative:
- There isn't an apple on the desk.
- There aren't any eggs.

Questions & Short answers:
- Is there an apple on the desk? Yes, there is. / No, there isn't.
- Are there any eggs? Yes, there are. / No, there aren't.`
        },
        content2: {
            subtitle: "Some and Any",
            text: `We usually use 'some' in affirmative sentences. We use it with plural countable nouns and uncountable nouns (e.g., There are some crisps in the bowl. There's some butter on the table.).

We usually use 'any' in negative sentences and questions. We use it with plural countable nouns and uncountable nouns (e.g., He doesn't want any milk. Are there any apples? Is there any coffee?).`
        },
        content3: {
            subtitle: "A lot of, much and many",
            text: `We use 'a lot of' in affirmative sentences.
- There's a lot of rice.
- There are a lot of bananas.

We use 'a lot of', 'much' and 'many' in negative sentences. We use 'much' with uncountable nouns, and 'many' with countable nouns.
- Uncountable: There isn't much rice. / There isn't a lot of rice.
- Countable: There aren't many bananas. / There aren't a lot of bananas.`
        },
        content4: {
            subtitle: "How many...? and How much...?",
            text: `We use 'How many...?' with plural countable nouns. The answer is often a number.
- How many tomatoes do you need? Three.

We use 'How much...?' with uncountable nouns. The answer is often a quantity.
- How much sugar have we got? Two kilos. / A lot. / Not much.`
        },
        finalNotes: `• We don't use 'some' or 'any' with singular countable nouns. We use 'a' or 'an' instead (e.g., "Do you want a snack?").`
    },
    //----------------------------------------------
"presentcontinuous": {
        title: "Present Continuous",
        content1: {
            subtitle: "Usage and Affirmative",
            text: `We use the present continuous to talk about things that are happening at the moment of speaking (e.g., I'm watching a video, Ian is talking to his cousin) and things happening around now (e.g., We aren't going to school this week. We're on holiday!).

We form the present continuous affirmative with the correct form of the verb 'be' and the -ing form of the main verb. In spoken or informal written English, we use the short forms 'm, 's or 're.
- I am ('m) talking.
- You / We / They are ('re) talking.
- He / She / It is ('s) talking.`
        },
        content2: {
            subtitle: "Spelling changes for -ing forms",
            text: `In some cases, there are spelling changes when adding -ing:
- If the verb ends in -e, we leave out the -e before we add -ing: write -> writing, dance -> dancing.
- If the verb has only one syllable and ends in one vowel + one consonant (e.g., a, e, o + t, n, p) we double the consonant: run -> running, chat -> chatting.
- If the verb ends in -ie, we change the -ie to -y: lie -> lying, die -> dying.`
        },
        content3: {
            subtitle: "Negative",
            text: `To form the present continuous negative, we add 'not' after the correct form of the verb 'be'. In spoken or informal written English, we use the short forms 'm not, isn't or aren't.
- I am not ('m not) talking.
- You / We / They are not (aren't) talking.
- He / She / It is not (isn't) talking.`
        },
        content4: {
            subtitle: "Questions & Short answers",
            text: `Questions:
- Am I talking?
- Are you / we / the~y talking?
- Is he / she / it talking?

Short answers:
- Affirmative: Yes, I am. | Yes, he/she/it is. | Yes, we/you/they are.
- Negative: No, I'm not. | No, he/she/it isn't. | No, we/you/they aren't.`
        },
        finalNotes: `• In positive short answers, we don't use short forms. 
'Is he having lunch?' 
'Yes, he is.' (NOT Yes, he's)`
    },

};

export default async function PaginaDinamica({ params }: { params: Promise<{ contentTitle: string }> }) {
    const parametros = await params;
    const actualPath: string = parametros.contentTitle;
    
    const content = dataForEachContent[actualPath];

    if (!content) {
        return (
            <main className="">
                <div className="greatContainer">
                    <h1>This title doesn't exist</h1>
                    <Botonatras />
                </div>
            </main>
        );
    }

    return (
        <main>
            <div className="alignLeft">
                <h1 className="titleLeft">Grammar Title: {content.title}</h1>

                {content.content1.text !== "" && (
                    <div className="bloqueSeccion">
                        <div className="teoriaYTexto">
                            <div className="contenidoTexto">
                                <h2 className="subtituloSeccion">{content.content1.subtitle}</h2>
                                <p className="paragraph">{content.content1.text}</p>
                            </div>
                        </div>
                    </div>
                )}

                {content.content2.text !== "" && (
                    <div className="bloqueSeccion">
                        <div className="teoriaYTexto">
                            <div className="contenidoTexto">
                                <h2 className="subtituloSeccion">{content.content2.subtitle}</h2>
                                <p className="paragraph">{content.content2.text}</p>
                            </div>
                        </div>
                    </div>
                )}

                {content.content3.text !== "" && (
                    <div className="bloqueSeccion">
                        <div className="teoriaYTexto">
                            <div className="contenidoTexto">
                                <h2 className="subtituloSeccion">{content.content3.subtitle}</h2>
                                <p className="paragraph">{content.content3.text}</p>
                            </div>
                        </div>
                    </div>
                )}

                {content.content4.text !== "" && (
                    <div className="bloqueSeccion">
                        <div className="teoriaYTexto">
                            <div className="contenidoTexto">
                                <h2 className="subtituloSeccion">{content.content4.subtitle}</h2>
                                <p className="paragraph">{content.content4.text}</p>
                            </div>
                        </div>
                    </div>
                )}

                {/* Final notes */}
                {content.finalNotes !== "" && (
                    <section className="anotaciones">
                        <h3>Tips:</h3>
                        <p>{content.finalNotes}</p>
                    </section>
                )}

                <Botonatras />
            </div>
        </main>
    );
}