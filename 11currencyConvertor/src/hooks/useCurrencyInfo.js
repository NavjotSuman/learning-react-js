import { useState, useEffect } from "react";

const useCurrencyInfo = (currency) => {

    const [data, setData] = useState({});

    useEffect(() => {
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)

        // upper api is not working
        fetch(`https://open.er-api.com/v6/latest/${currency}`)
            .then((res) => res.json())
            .then((res) => {
                setData(res.rates);
                /*
                // it will print all full object of included keys and values
                   console.log(res.rates)

                // for check the type of rates--  which is OBJECT
                   let a = res.rates
                   console.log(typeof a)

                //    accessing each key and the value of an object
                   for (const key in a) {
                       console.log(key)
                       console.log(a[key])
                   }
                */
            })
    }, [currency])

    // console.log(data);
    // data is in the form of object
    return data;
}

export default useCurrencyInfo;