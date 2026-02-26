import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="text-8xl font-bold text-accent mb-2 select-none">404</div>
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Page Not Found</h1>
        <p className="text-gray-500 dark:text-gray-400 mb-8 text-lg">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-colors duration-300"
          >
            <i className="fas fa-home"></i>
            Go Home
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-full hover:bg-accent hover:text-white transition-all duration-300"
          >
            <i className="fas fa-envelope"></i>
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}