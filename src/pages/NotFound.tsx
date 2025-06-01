import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <h1 className="text-6xl font-bold text-primary">404</h1>
      <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>
      <p className="mt-2 text-muted-foreground">The page you're looking for doesn't exist or has been moved.</p>
      <Link
        to="/"
        className="mt-8 px-6 py-3 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
      >
        Go Home
      </Link>
    </div>
  )
}
