import "@/styles/globals.css";

import DefaultTemplate from "@/templates/DefaultTemplate";

export default function App({ Component, pageProps }) {
  return (
    <DefaultTemplate>
      <Component {...pageProps} />
    </DefaultTemplate>
  );
}
