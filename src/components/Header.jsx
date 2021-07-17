/* This example requires Tailwind CSS v2.0+ */
import { Link } from 'react-router-dom';
const navigation = [
    { name: 'Solutions', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Company', href: '#' },
  ]
  
  export default function Header() {
    return (
      <header className="bg-indigo-600">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
          <div className="w-full py-3 flex items-center justify-between border-b border-indigo-500 lg:border-none">
            <div className="flex items-center">
              <Link to="/">
                <span className="sr-only">Workflow</span>
                <img
                  className="h-14 w-auto rounded-full"
                  src="https://www.pngfind.com/pngs/m/575-5757627_vector-wolf-wolf-black-and-white-png-transparent.png"
                  alt=""
                />
              </Link>
              <div className="hidden ml-10 space-x-8 lg:block">
                {navigation.map((link) => (
                  <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            <div className="ml-10 space-x-4">
              <Link
                to="/login"
                className="inline-block bg-indigo-500 py-2 px-4 border border-transparent rounded-md text-base font-medium text-white hover:bg-opacity-75"
              >
                Login
              </Link>
              <Link
                to="/signIn"
                className="inline-block bg-white py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-red-600"
              >
                Sign In
              </Link>
              <Link
                to="/signIn"
                className="inline-block bg-black py-2 px-4 border border-transparent rounded-md text-base font-medium text-indigo-600 hover:bg-red-700"
              >
                Log Out
              </Link>
            </div>
          </div>
          <div className="py-4 flex flex-wrap justify-center space-x-6 lg:hidden">
            {navigation.map((link) => (
              <a key={link.name} href={link.href} className="text-base font-medium text-white hover:text-indigo-50">
                {link.name}
              </a>
            ))}
          </div>
        </nav>
      </header>
    )
  }