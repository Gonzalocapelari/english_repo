
import Botonatras from "@/app/componentes/botonatras";
import ContextualQuote from "@/app/componentes/extra/contextualQuote";
import { quotes } from "@/app/componentes/extra/contextualQuote/data";
import "../../styles/extra.css"
export default function QuotesPage() {
    return (<main className="extraBackground">


              <div className="centerer">
                      <h3 className="mt-6 border rounded text-xl p-4 text-white font-bold ">SOME FAMOUS AND DIFFICULT QUOTES!</h3>
      <div className="h-10"></div>
        {quotes.map((quote) => (
        <li key={quote.id}>
          <ContextualQuote {...quote} />
        </li>
      ))}

      <li><Botonatras /></li>
      </div>
      </main>)
}