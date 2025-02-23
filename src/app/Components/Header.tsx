import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full bg-background z-10">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex flex-row justify-center items-center space-x-8">
          <li>
            <Link
              href="#home"
              className="text-text hover:text-accent transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="text-text hover:text-accent transition-colors"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#projects"
              className="text-text hover:text-accent transition-colors"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="#skills"
              className="text-text hover:text-accent transition-colors"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-text hover:text-accent transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
