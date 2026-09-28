import Botonatras from "@/app/componentes/botonatras";
import "../../styles/extra.css"
const tongueTwisters = [{
    id: 1,
    text: "She sells sea shells by the sea shore. The shells she sells are surely seashells. So if she sells shells on the seashore, I’m sure she sells seashore shells. "
}, {
    id: 2,
    text: "How much wood would a woodchuck chuck if a woodchuck could chuck wood?"
},
{
    id: 3,
    text: "Peter Piper picked a peck of pickled peppers. A peck of pickled peppers Peter Piper picked. If Peter Piper picked a peck of pickled peppers, where’s the peck of pickled peppers Peter Piper picked?"
},
{
    id: 4,
    text: "I scream, you scream, we all scream for ice cream"
},
{
    id: 5,
    text: "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn't very fuzzy, was he?"
},
{
    id: 6,
    text: "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn't very fuzzy, was he?"
},
{
    id: 7,
    text: "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn't very fuzzy, was he?"
},
{
    id: 8,
    text: "Fuzzy Wuzzy was a bear. Fuzzy Wuzzy had no hair. Fuzzy Wuzzy wasn't very fuzzy, was he?"
}];
export default function TongueTwisterPage() {
  return (
    <main className="extraBackground">
      <div className="centerer">
        <h1 className="text-white font-bold">Tongue Twister Page</h1>
        <br />
        <p className="text-white">Here you can find some tongue twisters to practice your pronunciation!</p>
        <div className="h-10" />
<div className="w-82">
        {tongueTwisters.map((twister, index) => (
          <div key={twister.id}>
            <p className="text-white md:text-lg">{index + 1}. {twister.text}</p>
            <br />
          </div>
        ))} </div>
        <Botonatras />
      </div>
    </main>
  );
}