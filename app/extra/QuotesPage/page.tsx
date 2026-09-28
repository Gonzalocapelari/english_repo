
import Botonatras from "@/app/componentes/botonatras";
import ContextualQuote from "@/app/componentes/extra/contextualQuote";
import { quotes } from "@/app/componentes/extra/contextualQuote/data";
import "../../styles/extra.css"
export default function QuotesPage() {
    return (<main className="extraBackground">
              <div className="centerer">
        {quotes.map((quote) => (
        <li key={quote.id}>
          <ContextualQuote {...quote} />
        </li>
      ))}

      <li><Botonatras /></li>
      </div>
      </main>)
}