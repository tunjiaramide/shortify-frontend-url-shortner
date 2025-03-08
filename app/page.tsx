import ShortenedURL from "./Components/ShortenedURL";
import UrlShortened from "./Components/UrlShortened";


export default function Home() {
  return (
    <div className="w-1/2 h-screen flex flex-col mx-auto items-center justify-center ">
      <h1 className="mb-4 text-4xl text-blue-500 font-bold">Best and Fast URL ShortenedURL</h1>
      <ShortenedURL />
      <UrlShortened />
    </div>
  );
}
