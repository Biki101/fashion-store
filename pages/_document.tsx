import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/*  Core Style CSS */}
        <link rel="stylesheet" href="css/core-style.css" />
        <link rel="stylesheet" href="style.css" />

        {/* Responsive CSS */}
        <link href="css/responsive.css" rel="stylesheet" />
        {/* <!-- jQuery (Necessary for All JavaScript Plugins) --> */}
        <script src="js/jquery/jquery-2.2.4.min.js"></script>
        {/* <!-- Popper js --> */}
        <script src="js/popper.min.js"></script>
        {/* <!-- Bootstrap js --> */}
        <script src="js/bootstrap.min.js"></script>
        {/* <!-- Plugins js --> */}
        <script src="js/plugins.js"></script>
        {/* <!-- Active js --> */}
        <script src="js/active.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
