import { FormEvent, useState } from "react";
import { LucideSearch } from "lucide-react";
import axios from "axios";

import ErrorMessage from "./components/ErrorMessage";
import ResultFetch from "./components/ResultFetch";
import Loading from "./components/Loading";
import Button from "./components/Button";
import Input from "./components/Input";
import { type City } from "./types/city";

const App = () => {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [city, setCity] = useState<City | null>();
  const [error, setError] = useState({
    status: false,
    message: "",
  });

  const handleSearchCity = async (e: FormEvent) => {
    if (input === "") return;
    e.preventDefault();
    setLoading(true);
    setCity(null);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(
          input
        )}&appid=b63f570375ef3f971314293d60afb0a0&units=metric&lang=pt_br`
      );
      setTimeout(() => {
        setInput("");
        setCity(response.data);
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

  return (
    <main className="flex-1 w-full bg-gradient-to-b from-sky-700 via-sky-500 to-sky-50">
      <div className="max-w-xl mx-auto px-6 space-y-3">
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
    </main>
  );
};

export default App;
