import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface Headlines {
    _id: string;
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
    // console.log(data);

    return (
        <div className='bg-red-700 text-white py-2 md:py-3 px-4 md:px-6'>
            <div className='flex items-center gap-4 md:gap-6 overflow-hidden container mx-auto'>
                <div>সর্বশেষ</div>

                <MarqueeText direction="right" duration={10} className="text-sm md:text-base font-medium text-white">
                    {
                        headlines.map(h => <span key={h._id} className="flex items-center">
                            <span>{h.title}</span>
                            <span className="mx-5">•</span>
                        </span>)
                    }
                </MarqueeText>
            </div>
        </div>
    );
};

export default Marquee;