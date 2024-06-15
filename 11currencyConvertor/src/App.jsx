import { useState } from "react";
// import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { InputBox } from "./components";



function App() {
  // const [count, setCount] = useState(0);


  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0)

  // calling the custom hook : useCurrencyInfo
  const currencyInfo = useCurrencyInfo(from);

  // fetching all the key from object-currencyInfo
  const options = Object.keys(currencyInfo);

  // console.log(options);

  // working of the swap button
  // i will write it later here

  // console.log(options["inr"]);

  // on click on convert button what will hapen
  const convert = () => {
    // console.log(currencyInfo[to]);
    setConvertedAmount(amount * currencyInfo[to]);
  }

  const swapClick = () => {
    setTo(from)
    setFrom(to)
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://c4.wallpaperflare.com/wallpaper/971/573/106/futuristic-concept-art-city-cityscape-wallpaper-preview.jpg')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)}
                onAmountChnage={(amount) => setAmount(amount)}
                selectCurrency={from}

              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swapClick}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                onAmountChnage={(amount) => setAmount(amount)}
                selectCurrency={to}
                amountDisable

              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
