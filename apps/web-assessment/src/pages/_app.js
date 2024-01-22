import "@/styles/globals.css";

import QueryProvider from "@/lib/react-query/QueryProvider";

import DefaultTemplate from "@/templates/DefaultTemplate";

export default function App({ Component, pageProps }) {
  return (
    <QueryProvider>
      <DefaultTemplate>
        <Component {...pageProps} />
      </DefaultTemplate>
    </QueryProvider>
  );
}
