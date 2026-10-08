import Link from "next/link";
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Headlines {
    id: string;
    title: string;
    url: string;
    image: string;
    category: string;
    createdAt: string;
}

const Marquee = async () => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news?limit=10');
    const data = await res.json();
    const headlines: Headlines[] = data.data;
    // console.log("head",headlines);

    return (
        <div className='bg-red-700 text-white py-2 md:py-3 px-4 md:px-6'>
            <div className='flex items-center gap-4 md:gap-6 overflow-hidden container mx-auto'>
                <div>সর্বশেষ</div>

                <MarqueeText direction="right" duration={10} className="text-sm md:text-base font-medium text-white">
                    {
                        headlines.map(h => <Link href={`/news/${h.id}`} key={h.id} className="flex items-center hover:underline">
                            <span>{h.title}</span>
                            <span className="mx-5">•</span>
                        </Link> )
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;