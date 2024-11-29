import { format } from "date-fns"
import Link from "next/link"

const Footer = () => {
    return (
        <footer className="py-4 text-center text-gray-500 text-sm bg-gray-800">
        © {format(new Date(), 'yyyy')} Anonymous Chat | MAK Writing House | All rights reserved  | {' '}
        <Link href="/about">
            <span className="text-blue-400 hover:underline">
                About Us
            </span>
        </Link>
    </footer>
    )
}

export default Footer
