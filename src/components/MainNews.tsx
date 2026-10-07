import Image from 'next/image';

interface News{
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string
}

const MainNews = ({ news }: {news: News[]}) => {
    const [firstNews, ...otherNews] = news;
    return (
        <div className='flex gap-4'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <figure>
                    <Image
                        height={300}
                        width={400}
                        src={firstNews.imageUrl}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p className='text-red-600 font-semibold'>{firstNews.category}</p>
                    <h2 className="card-title">{firstNews.title}</h2>
                    <p>{firstNews.description}</p>
                </div>
            </div>

            <div className='grid gap-3'>
                {
                    otherNews.slice(0, 4).map(n => <div className='card bg-base-100 border border-gray-300 p-5' key={n.id}>
                        <p className='text-red-600 font-semibold'>{firstNews.category}</p>
                        <div>{n.title}</div>
                    </div>)
                }
            </div>

        </div>
    );
};

export default MainNews;