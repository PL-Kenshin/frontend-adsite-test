import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="flex px-4 justify-between bg-neutral-800 text-white border-t border-white py-6 sm:px-10">
            <div className='font-semibold sm:px-10'>Cars Spot</div>
            <Link href="/" className='underline sm:px-10 hover:no-underline'>Polityka prywatności</Link>
        </footer>
    )
}

export default Footer;