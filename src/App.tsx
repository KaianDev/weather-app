import { FormEvent, useEffect, useState } from "react";
import { LucideSearch } from "lucide-react";

import ErrorMessage from "./components/ErrorMessage";
import ResultFetch from "./components/ResultFetch";
import Loading from "./components/Loading";
import Button from "./components/Button";
import Input from "./components/Input";
import { type City } from "./types/city";
import { getWeatherInfos } from "./data/api";
import PreLoading from "./components/PreLoading";
import Footer from "./components/Footer";

const App = () => {
  const [preLoading, setPreLoading] = useState(true);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState<City | null>();
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  useEffect(() => {
    setTimeout(() => {
      setPreLoading(false);
    }, 2000);
  }, []);

  const handleSearchCity = async (e: FormEvent) => {
    e.preventDefault();
    if (input === "") return;
    setLoading(true);
    setCity(null);
    try {
      const response = await getWeatherInfos(input);
      setTimeout(() => {
        setInput("");
        setCity(response);
        setLoading(false);
      }, 1000);
    } catch (error) {
      setError({ status: true, message: "Nome inválido! Tente novamente." });
      setLoading(false);
      setInput("");
      setTimeout(() => {
        setError({ status: false, message: "" });
      }, 2000);
    }
  };

  if (preLoading) return <PreLoading />;

  if (!preLoading)
    return (
      <div className="min-h-dvh flex flex-col w-full bg-gradient-to-b from-sky-700 via-sky-500 to-sky-50  duration-500">
        <div className="max-w-xl w-full mx-auto px-6 space-y-3 flex-1">
          <h1 className="text-3xl text-center p-6 text-sky-100">
            Previsão do Tempo
          </h1>
          <form className="w-full bg-white p-6 rounded-md shadow-md border border-white flex space-x-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onClick={() => setError({ status: false, message: "" })}
            />
            <Button onClick={handleSearchCity} disabled={input.trim() === ""}>
              <LucideSearch />
            </Button>
          </form>
          {error.status && <ErrorMessage message={error.message} />}
          {loading && <Loading />}
          {city && <ResultFetch city={city} />}
        </div>
        <Footer />
      </div>
    );
};

export default App;
