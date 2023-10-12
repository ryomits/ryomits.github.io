import { ReactElement } from "react";
import { Pagehead, PageLayout, Box, Link } from "@primer/react"

type Props = {
  children: ReactElement;
};

export default function Layout({ children }: Props) {
  return (
    <Box>
      <PageLayout>
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
