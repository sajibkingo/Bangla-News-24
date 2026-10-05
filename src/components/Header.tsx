import Image from 'next/image';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    })

    return (
        <div className='container mx-auto flex justify-between items-center py-4'>
            <div></div>

            <div className='flex items-center gap-2 '>
                <Image className='w-11 h-11' src={'/logo.webp'} alt="Logo" width={50} height={50}
                />

                <div>
                    <h2 className='text-red-700 text-2xl font-bold'>Bangla News 24</h2>
                    <p className='text-sm font-light'>{date}</p>
                </div>
            </div>

            <div className='flex items-center gap-2'>
                <button className='btn border-none bg-white'>সাইন ইন</button>
                <button className='btn bg-red-700 text-white'>সাইন আপ</button>
            </div>
        </div>
    );
};

export default Header;