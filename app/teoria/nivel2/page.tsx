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