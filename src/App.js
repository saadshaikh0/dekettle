import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/hero";
import About from "./components/about";
import Review from "./Review";
function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <main>
        <section className="bg-amber-200">
          <div className="text-center my-4">
            <h2 class="mb-4 text-4xl font-semibold text-amber-500 dark:text-gray-300">
              Reviews
            </h2>
          </div>
          <div className="px-10 lg:px-40">
            <Review />
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
