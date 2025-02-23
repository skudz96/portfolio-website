import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed w-full z-50 bg-background">
      <nav className="container mx-auto px-6 py-4">
        <ul className="flex flex-row justify-center items-center space-x-16">
          <li>
            <p className="font-bold">Site under construction!</p>
          </li>
          <li>
            <Link href="#home">Home</Link>
          </li>
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#projects">Projects</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
          <li>
            <Link href="#contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
