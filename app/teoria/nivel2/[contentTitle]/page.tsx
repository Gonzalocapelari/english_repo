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
"simplevscontinuous": {
        title: "Present Simple vs. Present Continuous",
        content1: {
            subtitle: "Usage differences",
            text: `We use the [present simple] to talk about habits, daily routines, opinions, facts and general truths.
We use the [present continuous] to talk about things that are happening now or around now.

Example:
- I wear school uniform from Monday to Friday, but TODAY I'm wearing jeans because it's Saturday.
                    +   (present simple)                                             +    (present continous)`
        },
        content2: {
            subtitle: "Time expressions",
            text: `We use the two tenses with different adverbs and time expressions.

Present simple:
- adverbs of frequency (always, never, sometimes, often, etc.)
- once/twice/three times a day/week/month/year
- every morning/day/week/month/summer/year
- on Tuesdays / school days

Present continuous:
- (right) now
- at the moment
- today
- this morning/week/month/year
- these days`
        },
        content3: {
            subtitle: "Dynamic and stative verbs",
            text: `Dynamic verbs describe actions: walk, play, sing, eat, etc. We can use dynamic verbs in the present simple and continuous (e.g., I usually have sandwiches for lunch, but today I'm having pizza).

Stative verbs describe states, opinions, or possession: be, think, want, prefer, like, love, hate, understand, believe, agree, know, have got, need, own, belong, etc. We don't normally use stative verbs in continuous tenses.
- I'm not playing because I don't like this game. (NOT I'm not liking this game)`
        },
        content4: {
            subtitle: "",
            text: ""
        },
        finalNotes: `• Tip for tenses: Always look for "time clues" in the sentence! Words like "every day" or "always" act as red flags for the Present Simple, while "right now" or "at the moment" signal the Present Continuous.
• Tip for verbs: Be careful with verbs that can be both dynamic AND stative depending on their meaning. For example, "have" is stative for possession ("I have a car") but dynamic for actions ("I am having lunch").`
    },
//---------------------------------------------------------------------------------
"comparativesandsuperlatives": {
        title: "Comparative and Superlative Adjectives",
        content1: {
            subtitle: "Comparative adjectives",
            text: `We use comparative adjectives when we compare two or more people, animals or things. We often use 'than' in sentences with comparative adjectives.

Examples:
- Your house is older than ours.
- London is bigger than Manchester.
- Cars are more expensive than bikes.`
        },
        content2: {
            subtitle: "How to form comparatives",
            text: `For short adjectives, we usually add '-er'. For long adjectives, we use 'more' + adjective.

- 1 syllable: add -er (long -> longer)
- 1 syllable ending in -e: add -r (nice -> nicer)
- 1 vowel + 1 consonant: double the consonant + -er (big -> bigger)
- 2 syllables ending in -y: remove -y and add -ier (funny -> funnier)
- 3 or more syllables: put 'more' before the adjective (difficult -> more difficult)

Irregular forms: 
- good -> better 
- bad -> worse 
- far -> further / farther`
        },
        content3: {
            subtitle: "Superlative adjectives",
            text: `We use superlative adjectives to describe one thing in a group of three or more people, animals or things. We always use the definite article 'the' or a possessive pronoun before superlative adjectives.

Examples:
- Alaska is one of the coldest places on earth.
- This is my best selfie.`
        },
        content4: {
            subtitle: "How to form superlatives",
            text: `For short adjectives, we usually add '-est'. For long adjectives, we use 'most' or 'least' + adjective.

- 1 or 2 syllables: add -est (old -> oldest)
- 3 or more syllables: put 'most' or 'least' before the adjective (dangerous -> most dangerous)

Irregular forms: 
- good -> best 
- bad -> worst 
- far -> furthest / farthest

We can form negative superlatives with 'least' (e.g., It's the least expensive phone in the shop).`
        },
        finalNotes: `• The adjective 'far' has two forms: further and farther. We can use both for distance, but only 'further' means 'additional' (e.g., For further information...).
• For some 2-syllable adjectives, we can use -er OR more (clever -> cleverer / more clever), but for adjectives ending in -y, we ALWAYS use -ier (happy -> happier).
• We don't normally use 'least' with short adjectives (e.g., use "least comfortable", NOT "least nice").
• After superlative adjectives, we often use 'in' + a group or a place (e.g., the oldest person IN my family).`
    },
//----------------
"pastsimple": {
        title: "Past Simple",
        content1: {
            subtitle: "Past simple: regular verbs & the verb 'be' (Affirmative)",
            text: `We use the past simple to talk about past events, finishED actions and states (e.g., We enjoyED the concert LAST NIGHT. Lucy playED the drums.).
We often use it with past time expressions (yesterday, last night, two months ago, in 1998, etc.) at the beginning or end of the sentence.

Regular verbs: We add -ed to form the affirmative of most regular verbs (e.g., I / You / He / We / They played tennis yesterday).
Spelling changes:         (take note)
- Verbs ending in -e: add -d (live -> lived)
- Verbs ending in a "consonant + y": change to "-ied" (try -> tried)
- One syllable verbs ending in one vowel + one consonant: double the consonant (stop -> stopped)

The verb 'be':
The past forms of the verb be are 'was' (singular) and 'were' (plural).
- I / He / She / It was at home last night.
- We / You / They were at home last night.`
        },
        content2: {
            subtitle: "Past simple: Negative, questions and short answers",
            text: `Questions with the verb 'be':
- Was I / he / she / it at home last night?
- Were we / you / they at home last night?
Short answers: Yes, I was. / No, we weren't.

Negative for other verbs (Regular and Irregular):
We use: Subject + didn't + the infinitive without to. We DO NOT use the past simple form of the main verb (e.g., I didn't see you. NOT I didn't saw you).

Questions for other verbs:
We use: Did + subject + the infinitive without to. (e.g., Did he go to school? NOT Did he went to school?). Time expressions usually go at the end.
We can put a question word before 'did' (e.g., What did you do last weekend?).
Short answers: Yes, I did. / No, I didn't. (The forms are the same for all persons).`
        },
        content3: {
            subtitle: "Past simple: irregular verbs (Affirmative)",
            text: `The affirmative form of the past simple is the same for all persons, singular and plural (I, you, he, we, etc.).
- I took her phone to school.
- We took some great photos.
- The Olympics took place last year.`
        },
        content4: {
            subtitle: "Irregular verbs list   (they don't include -d nor -ed)",
            text: `- be -> was/were
- become -> became
- begin -> began
- break -> broke
- bring -> brought
- build -> built
- buy -> bought
- catch -> caught
- choose -> chose
- come -> came
- cost -> cost
- cut -> cut
- do -> did
- draw -> drew
- drink -> drank
- drive -> drove
- eat -> ate
- fall -> fell
- feel -> felt
- fight -> fought
- find -> found
- fly -> flew
- forget -> forgot
- freeze -> froze
- get -> got
- give -> gave
- go -> went
- grow -> grew
- have -> had
- hear -> heard
- hide -> hid
- hit -> hit
- hurt -> hurt
- keep -> kept
- know -> knew
- leave -> left
- let -> let
- lose -> lost
- make -> made
- meet -> met
- pay -> paid
- put -> put
- read -> read
- ride -> rode
- run -> ran
- say -> said
- see -> saw
- sell -> sold
- send -> sent
- set -> set
- shut -> shut
- sing -> sang
- sleep -> slept
- speak -> spoke
- stand -> stood
- steal -> stole
- swim -> swam
- take -> took
- teach -> taught
- tell -> told
- think -> thought
- throw -> threw
- understand -> understood
- wear -> wore
- win -> won
- write -> wrote`
        },
        finalNotes: `• TIP: We use was/were with 'born' (e.g., I was born in 2003. NOT I'm born in 2003).
• TIP: Remember that the past simple of the verb 'be' is was/were (do not use 'did' or 'didn't' with the verb 'be').`
    },

"begoingto": {
        title: "Be going to",
        content1: {
            subtitle: "Usage and Affirmative",
            text: `We use 'be going to' to talk about plans and intentions for the future (e.g., "What are you going to do when you leave school?" "I'm going to travel.").

We form affirmative sentences with the correct form of the verb 'be' + going to + the infinitive without to. We usually use short forms of the verb 'be'.
- I'm going to learn to drive.
- You / We / They're going to learn to drive.
- He / She / It's going to learn to drive.`
        },
        content2: {
            subtitle: "Negative",
            text: `To form the negative, we add 'not' after the correct form of the verb 'be'.
- I'm not going to learn to drive.
- You / We / They aren't going to learn to drive.
- He / She / It isn't going to learn to drive.`
        },
        content3: {
            subtitle: "Questions & Short answers",
            text: `We form questions by placing the correct form of the verb 'be' before the subject.
- Am I going to learn to drive?
- Are you / we / they going to learn to drive?
- Is he / she / it going to learn to drive?

Short answers:
- Affirmative: Yes, I am. | Yes, he / she / it is. | Yes, we / you / they are.
- Negative: No, I'm not. | No, he / she / it isn't. | No, we / you / they aren't.`
        },
        content4: {
            subtitle: "Future time expressions",
            text: `When we use 'be going to' to talk about plans, we often use future time expressions:
- tomorrow, the day after tomorrow, tomorrow afternoon
- next week
- in a minute, in half an hour, in a few minutes
- this evening, this afternoon, tonight
- in a month, in a few months, in a year, in two years, in ten days' time

Examples:
- I'm going to make a cake tomorrow.
- She's going to visit her grandparents next week.`
        },
        finalNotes: `• If there is a question word (what, who, when, where, how, why, etc.), it comes at the beginning of the sentence, before the verb 'be'.
Example: When are you going to learn to drive?`
    },

    "will": {
        title: "Will",
        content1: {
            subtitle: "Usage and Affirmative",
            text: `We use 'will' to make predictions and guesses about the future. We often use it with 'I think' or 'I don't think'.
- I don't think it will rain in the afternoon.
- I think the weather will be nice.

We form the affirmative with will + the infinitive of the main verb without 'to'.
- I / You / He / She / It / We / They will be late for school.`
        },
        content2: {
            subtitle: "Negative",
            text: `To form the negative, we add 'not' after will. In spoken or informal written English, we use the short form 'won't'.

- I / You / He / She / It / We / They won't be late for school.`
        },
        content3: {
            subtitle: "Questions & Short answers",
            text: `We form questions by placing 'will' before the subject.
- Will I / you / he / she / it / we / they be late for school?

Short answers:
- Affirmative: Yes, I / you / he / she / it / we / they will.
- Negative: No, I / you / he / she / it / we / they won't.`
        },
        content4: {
            subtitle: "Adverbs of certainty",
            text: `We use the adverbs 'certainly' and 'definitely' to say we are sure about something. We use 'probably' when we aren't 100% sure.`
        },
        finalNotes: `• In spoken English, we often use 'll, the short form of will, after pronouns.
Example: She'll get a good job.`
    },
    "presentperfect": {
        title: "Present Perfect",
        content1: {
            subtitle: "Usage and Affirmative",
            text: `We use the present perfect to talk about life experiences and past events that have a result in the present. We don't say when the event happened (the exact time isn't important).
- I have been to Egypt.
- Gustav has eaten the whole chicken! (= There's no chicken left for me.)

We form the affirmative with have / has + the past participle of the main verb.
- I / You / We / They have climbed the Eiffel Tower.
- He / She / It has climbed the Eiffel Tower.

Past participles:
- Regular: end in -ed (visit -> visited).
- Irregular: do not end in -ed (be -> been, write -> written, have -> had).`
        },
        content2: {
            subtitle: "Negative",
            text: `To form the negative, we add 'not' after have / has. In spoken or informal written English, we use the short forms haven't or hasn't.
- I / You / We / They haven't booked a holiday.
- He / She / It hasn't booked a holiday.`
        },
        content3: {
            subtitle: "Questions & Short answers",
            text: `We form questions by placing have / has before the subject. If there is a question word (what, where, how, etc.), it comes at the beginning, before have / has (e.g., Where have you been?).
- Have I / you / we / they booked a holiday?
- Has he / she / it booked a holiday?

Short answers:
- Affirmative: Yes, I / you / we / they have. | Yes, he / she / it has.
- Negative: No, I / you / we / they haven't. | No, he / she / it hasn't.`
        },
        content4: {
            subtitle: "Ever and never",
            text: `We use the present perfect affirmative + 'ever' to ask questions about life experiences ('at any time in your life').
- Have you ever slept in a tent?

We use the present perfect affirmative + 'never' to talk about life experiences we have not had.
- I have never climbed a mountain.`
        },
        finalNotes: `• In positive short answers, we don't use short forms. (e.g., 'Yes, I have.' NOT 'Yes, I've.')
• We don't use 'not' and 'never' together. (e.g., 'I've never eaten Indian food.' NOT 'I haven't never eaten Indian food.')`
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