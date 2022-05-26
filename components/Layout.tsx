import Link from "next/link";

export default function Layout({ children }) {
  return (
    <>
      <header>
        <nav>
          <Link href="/">ryomits.github.io</Link>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}
