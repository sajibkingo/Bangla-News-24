import Image from 'next/image';
import NavLinks from './NavLinks';

const Header = () => {
    const date = new Date().toLocaleDateString("bn-BD", {
        dateStyle: "full"
    });

    return (
        <header className="w-full border-b border-gray-100">
            <div className="container mx-auto px-4 py-4 flex flex-col md:grid md:grid-cols-3 items-center gap-4">
                <div className="hidden md:block"></div>

                <div className="flex items-center justify-center gap-3">
                    <Image
                        className="w-10 h-10 md:w-12 md:h-12 object-contain"
                        src="/logo.webp"
                        alt="Logo"
                        width={48}
                        height={48}
                    />
                    <div className="text-left">
                        <h2 className="text-lg md:text-2xl font-bold text-red-900 leading-tight">
                            Bangla News 24
                        </h2>
                        <p className="text-xs md:text-sm text-gray-500">
                            {date}
                        </p>
                    </div>
                </div>

                <div className="flex items-center justify-center md:justify-end gap-2 w-full md:w-auto">
                    <button className="px-4 py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-md transition-colors cursor-pointer">
                        সাইন ইন
                    </button>
                    <button className="px-4 py-1.5 text-sm font-medium bg-red-700 hover:bg-red-800 text-white rounded-md transition-colors shadow-sm cursor-pointer">
                        সাইন আপ
                    </button>
                </div>
            </div>

            <NavLinks />

        </header>
    );
};

export default Header;