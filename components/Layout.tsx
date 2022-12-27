import { ReactElement } from "react";
import Link from "next/link";
import "zenn-content-css";

type Props = {
  children: ReactElement;
};

export default function Layout({ children }: Props) {
  return (
    <div className="znc">
      <header>
        <nav>
          <Link href="/">ryomits.github.io</Link>
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
}
