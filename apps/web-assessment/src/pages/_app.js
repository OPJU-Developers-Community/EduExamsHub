import { Provider } from "react-redux";

import store from "@/redux/store";

import DefaultTemplate from "@/templates/DefaultTemplate";
import { Toaster } from "@/components/ui/toaster";

import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <DefaultTemplate>
        <Component {...pageProps} />
      </DefaultTemplate>
      <Toaster />
    </Provider>
  );
}
