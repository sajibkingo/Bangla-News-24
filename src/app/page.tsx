import MainNews from "@/components/MainNews";
import Marquee from "@/components/Marquee";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";

interface IOtherSection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string
  }
}

export default async function Home() {
  const res = await fetch('https://news-api-v2.vercel.app/api/news/sections');
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherSections: IOtherSection[] = sections.slice(1);

  return (
    <div>
      <Marquee />

      <div className='grid grid-cols-3 mt-4 container mx-auto gap-8'>
        {/* news section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="grid gap-2">
            {
              otherSections.map(n => <div key={n.curationId} className="">
                <h1 className="font-bold border-b-2 border-red-700 p-2">{n.title}</h1>

                <div className="grid grid-cols-3 gap-4 mt-5">
                  {
                    n.articles.map((news) => <NewsCard key={news.id} news={news} />)
                  }
                </div>
              </div>)
            }
          </div>
        </div>

        {/* most read section */}
        <div className="col-span-1">
          <MostRead />
        </div>

      </div>

    </div>
  );
}
