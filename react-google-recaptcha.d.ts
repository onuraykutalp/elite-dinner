declare module "react-google-recaptcha" {
  import { Component } from "react";

  interface ReCAPTCHAProps {
    sitekey: string;
    size?: "compact" | "normal" | "invisible";
    theme?: "light" | "dark";
    onChange?: (value: string | null) => void;
    onExpired?: () => void;
    onErrored?: () => void;
    hl?: string;
    tabindex?: number;
    badge?: "bottomright" | "bottomleft" | "inline";
  }

  export default class ReCAPTCHA extends Component<ReCAPTCHAProps> {}
}
