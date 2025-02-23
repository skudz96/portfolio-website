export default function Footer() {
  return (
    <footer className="bg-highlight py-8">
      <div className="container mx-auto px-6 text-center">
        <p>
          &copy; {new Date().getFullYear()} Sergio Huleani. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
