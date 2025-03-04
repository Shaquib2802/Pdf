import React from "react";

const Pdf3 = () => {
  return (
    <div className="border-2  border-black m-5 p-4 max-w-4xl mx-auto text-sm">
      <div className="flex items-center gap-x-2">
        <div className="text-sm font-semibold">TAX INVOICE</div>
        <div className="border-2 rounded-sm p-1 font-semibold text-gray-400 border-gray-300">
          ORIGINAL FOR RECIPITEINT
        </div>
      </div>
      <div className="grid grid-cols-2 border mt-5 border-black">
        <div className="flex flex-col justify-center border-b border-black px-2">
          <div className="text-xl font-semibold text-green-600">
            Business Name
          </div>
          <div>
            <span className="font-semibold">Mobile:</span> 456789087654
          </div>
        </div>
        <div className="border-l border-black flex flex-col">
          <div className="flex py-1 justify-between px-2 items-center">
            <div className="flex flex-col items-center">
              <div className="text-sm font-semibold">Invoice No.</div>
              <div className="text-xs  font-semibold">AABBCCDD6789</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-semibold">Invoice Date</div>
              <div className="text-xs  font-semibold">17/01/2023 3:47 PM</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-semibold">Due Date</div>
              <div className="text-xs  font-semibold">10/02/23</div>
            </div>
          </div>
          <div className="flex border-t border-black py-1 justify-between px-10 items-center">
            <div className="flex flex-col items-center">
              <div className="text-sm font-semibold">!(|)!</div>
              <div className="text-xs  font-semibold">=</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-semibold">P.O. No.</div>
              <div className="text-xs  font-semibold">po number</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-sm font-semibold">E-way Bill No.</div>
              <div className="text-xs font-semibold">123456</div>
            </div>
          </div>
          <div className="flex border-t border-b border-black py-1 justify-star px-4 items-center">
            <div className="flex flex-col items-center ">
              <div className="text-sm font-semibold">Vehicle No.</div>
              <div className="text-xs font-semibold">123456</div>
            </div>
          </div>
        </div>
        <div className="px-2 py-2 border-r border-black">
          <div className="text-lg ">BILL TO</div>
          <div className="font-semibold text-lg">SAMPLE PARTY</div>
          <div className="text-xs  font-semibold">
           <span className="text-sm font-bold">Address:</span>  No. F2, Outer Circle, Connaught Circus, New Delhi, 110001
          </div>
          <div className="text-xs  font-semibold"> GSTIN: 07ABBCC702HAZZ</div>
          <div className="text-xs  font-semibold">Mobile: 4567898765</div>
        </div>
        <div className="py-2 px-2">
          <div className="font-semibold text-lg ">SHIP TO</div>
          <div className="text-xs">
            {" "}
            <span className="font-semibold ">Address:</span> 1234567897654,
            Bengaluru
          </div>
        </div>
      </div>
      <table className="w-full border border-black text-left text-sm">
        <thead className="bg-green-100 border">
          <tr>
            <th className="border  border-black p-1">S.NO.</th>
            <th className="border-r border-b  border-black   p-1">ITEMS</th>
            <th className="  border-r border-b  border-black p-1">HSN</th>
            <th className="  border-r border-b  border-black p-1">QTY.</th>
            <th className=" border-r border-b  border-black  p-1">RATE</th>
            <th className=" border-r border-b  border-black  p-1">SGST</th>
            <th className=" border-r border-b  border-black  p-1">CGST</th>
            <th className=" border-r border-b  border-black  p-1">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" p-1 border-r border-black">1</td>
            <td className=" p-1 border-r border-black -space-y-1.5 ">
              <div> Samsung A30</div>
              <div className="text-gray-500 text-xs">samsung phone</div>
              {/*  Samsung A30 <br />
              <span className="text-gray-500 text-xs">samsung phone</span> */}
            </td>
            <td className=" p-1 border-r border-black">1234</td>
            <td className=" p-1 border-r border-black">1 PCS</td>
            <td className=" p-1 border-r border-black">10000</td>
            <td className=" p-1 border-r border-black -space-y-1.5 text-center text-xs  ">
              <div>900</div>
              <div className="text-xs text-gray-400">(9%)</div>
            {/*   900
              <br />
              <span className="text-xs text-gray-400">(9%)</span> */}
            </td>
            <td className=" p-1 border-r border-black -space-y-1.5 text-center mt-1">
            <div>900</div>
            <div className="text-xs text-gray-400">(9%)</div>
              {/* 900
              <br />
              <span className="text-xs text-gray-400">(9%)</span> */}
            </td>
            <td className=" p-1 border-r border-black text-center">11,800</td>
          </tr>
          <tr>
            <td className="border-r border-black p-1">2</td>
            <td className=" p-1 border-r mt-1 border-black  -space-y-1.5">
              <div>Parle-G 200g</div>
              <div className="text-gray-500 text-xs  ">best biscuit</div>
             {/*  Parle-G 200g <br />
              <span className="text-gray-500 text-xs  ">best biscuit</span> */}
            </td>
            <td className=" p-1 border-r border-black">2345678</td>
            <td className=" p-1 border-r border-black">1 BOX</td>
            <td className=" p-1 border-r border-black">342.6</td>
            <td className=" p-1 border-r border-black -space-y-1.5 text-center mt-1">
            <div>8.67</div>
            <div className="text-xs text-gray-400">(2.5%)</div>
              {/* 900
              <br />
              <span className="text-xs text-gray-400">(9%)</span> */}
            </td>
            <td className=" p-1 border-r border-black -space-y-1.5 text-center mt-1">
            <div>8.67</div>
            <div className="text-xs text-gray-400">(2.5%)</div>
              {/* 900
              <br />
              <span className="text-xs text-gray-400">(9%)</span> */}
            </td>
            <td className="border-r border-black text-center">360</td>
          </tr>
          <tr>
            <td className=" p-1 border-r border-black ">3</td>
            <td className=" p-1 border-r border-black ">
              Puma Blue Round Neck T-Shirt
            </td>
            <td className=" p-1 border-r border-black">2032</td>
            <td className=" p-1 border-r border-black">2 PCS</td>
            <td className=" p-1 border-r border-black">900</td>
            <td className=" p-1 border-r border-black -space-y-1.5 text-center mt-1">
            <div>45</div>
            <div className="text-xs text-gray-400">(2.5%)</div>
              {/* 900
              <br />
              <span className="text-xs text-gray-400">(9%)</span> */}
            </td>
            <td className=" p-1 border-r border-black -space-y-1.5 text-center mt-1">
            <div>45</div>
            <div className="text-xs text-gray-400">(2.5%)</div>
              {/* 900
              <br />
              <span className="text-xs text-gray-400">(9%)</span> */}
            </td>
            <td className=" p-1 border-r border-black text-center">1890</td>
          </tr>
          <tr className="border border-black">
            <td className=" p-1 bg-green-100"></td>
            <td className=" px-2 font-semibold text-lg border-r bg-green-100 border-black flex justify-end">
              TOTAL
            </td>
            <td className=" p-1 border-r border-black bg-green-100"></td>
            <td className=" p-1 border-r border-black bg-green-100"></td>
            <td className=" p-1 border-r border-black bg-green-100"></td>
            <td className="font-semibold border-r border-black bg-green-100">
              ₹ 953,67
            </td>
            <td className=" p-1 font-semibold border-r border-black bg-green-100">
              ₹ 953,67
            </td>
            <td className="font-semibold p-1 border-r border-black bg-green-100">
              ₹ 953,67
            </td>
          </tr>
        </tbody>
      </table>

      <div className="grid grid-cols-4 border border-black mt-2 p-2 text-sm">
        <div>
          <strong>Received Amount:</strong> ₹4,453.5
        </div>
        <div>
          <strong>Balance Amount:</strong> ₹9,596.5
        </div>

        <div>
          <strong>Previous Balance:</strong> ₹-1,92,050.15
        </div>

        <div>
          <strong>Current Balance:</strong> ₹-1,82,453.65
        </div>
      </div>

      <p className=" px-2 border text-sm border-black py-1">
        {" "}
        <span className="font-bold">Notes:</span> Sample Notes
      </p>
      <div className=" border-r border-l border-b flex border-black">
        <div className="border-r px-2 py-2 border-black">
          <div className="font-semibold text-lg">Terms and Conditions</div>
          <div className="text-sm ">1. Goods once sold will not be taken back or exchanged</div>
          <div>
            2. All disputes are subject to [ENTER_YOUR_CITY_NAME] jurisdiction
            only
          </div>
        </div>
        <div className="flex flex-col justify-end items-center mx-auto">
          <div>Authorised Signatory For</div>
          <div>Business Name</div>
        </div>
      </div>
    </div>
  );
};

export default Pdf3;
