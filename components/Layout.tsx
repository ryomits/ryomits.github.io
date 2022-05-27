import { ReactElement } from "react"
import Link from "next/link";

type Props = {
  children: ReactElement
}

export default function Layout({ children }: Props) {
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
