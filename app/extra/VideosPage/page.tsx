import VideoFragment from "@/app/componentes/extra/videoFragment";
import { videoFragments } from "@/app/componentes/extra/videoFragment/data";
import Botonatras from "@/app/componentes/botonatras";
import "../../styles/extra.css"




export default function VideosPage() {
  return (
    <main className="extraBackground">
      <div className="centerer">
      <h1>Videos Page</h1>
      {videoFragments.map((fragment) => (
              <li key={fragment.id}>
                <VideoFragment {...fragment} />
              </li>
            ))}
            <Botonatras />
            </div>
    </main>
  );
}