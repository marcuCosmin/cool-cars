import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center gap-5 max-w-7xl mx-auto text-center">
      <h1 className="text-primary text-6xl">404</h1>
      <h2 className="text-white text-4xl">
        Looks Like This Page Is In Need Of Some Repairs
      </h2>

      <Link
        href="/"
        className="link-button bg-transparent text-white border-white hover:bg-primary hover:border-primary w-fit"
      >
        Let&apos;s Go Back
      </Link>
    </main>
  )
}
