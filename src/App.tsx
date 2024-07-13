import { useState } from "react";

import "./index.css";
import { Button, Textarea } from "@nextui-org/react";

function App() {
  const [values, setValues] = useState<any>(0);
  const calci = (value: any) => {
    try {
      if (values === 0 && value === "C" ) {
      } else if (values === 0) {
        setValues(value.toString());
      } else if (value === "C") {
        setValues(0);
      } else if (value === "AC"){
        setValues(0);
      }else if (value === "=") {
        setValues(eval(values));
      }else {
        setValues(values + value.toString());
      }
    } catch {
      setValues("Error");
    }
  };

  const components = [
    "AC",
    "%",
    "C",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    "00",
    0,
    ".",
    "=",
  ];

  return (
    <div className="flex flex-col h-dvh items-center">
      <div className="flex flex-col mt-10 border rounded-xl bg-slate-50 items-end shadow-lg ">
        <div className="flex flex-col p-5">
        <Textarea
            className="flex text-center my-2 overflow-hidden py-5"
            type="number"
            value={values}
            //  isDisabled
            classNames={{input: ["text-xl"],}}
            color="primary"
            ></Textarea>
          <div className=" grid grid-cols-4 gap-5">
            {components?.map((items: any, index:number) => {
              return (
                <div key={items.id}>
                  <Button key={index} isIconOnly className=" shadow-md bg-white hover:shadow-inner px-4 py-2 rounded-lg" onClick={()=> calci(items)}>
                    {items}
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
            <h1 className="text-[10px] pb-1 px-5">STELLAR CALC</h1>
      </div>
    </div>
  );
}

export default App;