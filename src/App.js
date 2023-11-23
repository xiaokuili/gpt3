import "./App.css";
import {
  Nav,
  Header,
  Logo,
  Gpt3,
  Feature,
  Cta,
  Blog,
  Footer,
} from "./container";

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Nav />
        <Header />
      </div>

      <Logo />
      <Gpt3 />
      <Feature />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};
export default App;
