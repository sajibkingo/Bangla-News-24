import Link from 'next/link';

interface NavLinksProps {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

const NavLinks = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    const navs: NavLinksProps[] = data.data;
    const filteredNavs = navs.filter(n => n.scrapable)

    // console.log(data);

    return (
        <div className="flex justify-center gap-4 py-2 md:py-3 text-sm md:text-base font-medium text-gray-700">

            <Link href="/">হোম</Link>

            {
                filteredNavs.map((n, i) => <Link href={n.slug} key={i}>{n.title}</Link>)
            }
        </div>
    );
};

export default NavLinks;