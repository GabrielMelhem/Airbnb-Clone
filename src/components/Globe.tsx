import React from "react";

interface globeProp {
  setGlobe: any
  setCurrency: any
}
const Globe = (props: globeProp) => {
  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-stone-700 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4 flex">
              <h1
                onClick={() => props.setGlobe(false)}
                className="cursor-pointer"
              >
                X
              </h1>
              <h3
                className=" ml-4 text-xl font-semibold leading-6 text-gray-900"
                id="modal-title"
              >
                Currency
              </h3>
            </div>
            <hr />
            <div className="grid grid-cols-4 p-8 text-gray-500">
              <div
                onClick={() => props.setCurrency("EUR - €")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Euro</h1>
                <h1>EUR - €</h1>
              </div>
              <div
                onClick={() => props.setCurrency("USD - $")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>US-Dollar</h1>
                <h1>USD - $</h1>
              </div>
              <div
                onClick={() => props.setCurrency("AUD - $")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Australian Dollar</h1>
                <h1>AUD - $</h1>
              </div>
              <div
                onClick={() => props.setCurrency("BRL - R$")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Brazilian real</h1>
                <h1>BRL - R$</h1>
              </div>
              <div
                onClick={() => props.setCurrency("SAR - SR")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Saudi Arabian riyal</h1>
                <h1>SAR - SR</h1>
              </div>
              <div
                onClick={() => props.setCurrency("CHF")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Swiss franc</h1>
                <h1>CHF</h1>
              </div>
              <div
                onClick={() => props.setCurrency("MXN - $")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Mexican peso</h1>
                <h1>MXN - $</h1>
              </div>
              <div
                onClick={() => props.setCurrency("CAD - $")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Canadian dollar</h1>
                <h1>CAD - $</h1>
              </div>

              <div
                onClick={() => props.setCurrency("BGN - B")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Bulgarian lev</h1>
                <h1>BGN - B</h1>
              </div>
              <div
                onClick={() => props.setCurrency("HKD - $")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Hong Kong dollar</h1>
                <h1>HKD - $</h1>
              </div>
              <div
                onClick={() => props.setCurrency("NZD - $")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>New Zealand Dollar</h1>
                <h1>NZD - $</h1>
              </div>
              <div
                onClick={() => props.setCurrency("SEK - Kr")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Swedish Krona</h1>
                <h1>SEK - Kr</h1>
              </div>
              <div
                onClick={() => props.setCurrency("MAD")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Moroccan dirham</h1>
                <h1>MAD</h1>
              </div>
              <div
                onClick={() => props.setCurrency("DKK - Kr")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Danish Krone</h1>
                <h1>DKK - Kr</h1>
              </div>
              <div
                onClick={() => props.setCurrency("CLP - $")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Chilean peso</h1>
                <h1>CLP - $</h1>
              </div>
              <div
                onClick={() => props.setCurrency("SGD - $")}
                className="mt-3 ml-3 cursor-pointer"
              >
                <h1>Singapore dollar</h1>
                <h1>SGD - $</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Globe;
