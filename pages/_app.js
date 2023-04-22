import '@/styles/globals.css'

const Footer = () => {
  return (
    <footer>
      <p>This is my footer</p>
    </footer>
  );
}

export default function App({ Component, pageProps }) {
  return (
  <div>
    <Component {...pageProps} />
    <footer>
      <p>This is my footer</p>
    </footer>
    </div>);
}


