import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-image-gallery/styles/css/image-gallery.css'

//import '../styles/reset.css';
//import '../styles/main.css';
import '../styles/global.css'

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />
    </div>
  );
}
