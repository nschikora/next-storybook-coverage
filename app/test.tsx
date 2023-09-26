import localFont from "next/font/local";

const roboto = localFont({
  src: "./Roboto/Roboto-Regular.ttf",
});

export function Test() {
  return <div className={roboto.className}>Has font</div>;
}
