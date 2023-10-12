import { ReactElement } from "react";
import { Pagehead, PageLayout, Box, Link } from "@primer/react"

type Props = {
  children: ReactElement;
};

export default function Layout({ children }: Props) {
  return (
    <Box sx={{ backgroundColor: "#2b2d2e", minHeight: "100vh" }}>
      <PageLayout sx={{ maxWidth: "50rem", margin: "0 auto", wordWrap: "break-word" }}>
        <PageLayout.Header>
          <Pagehead>
            <Link href="/">ryomits.github.io</Link>
          </Pagehead>
        </PageLayout.Header>
        <PageLayout.Content>
          <main>{children}</main>
        </PageLayout.Content>
      </PageLayout>
    </Box>
  );
}
