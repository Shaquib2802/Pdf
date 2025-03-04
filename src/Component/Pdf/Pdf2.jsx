import React from "react";

const Pdf2 = () => {
  return (
    <div className="p-6 m-3 bg-white border rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="grid grid-cols-2">
        <div className="">
          <div className="text-green-600 text-xl font-semibold">
            BUSINESS NAME
          </div>
          <div className="text-sm">
            <span className="font-semibold text-sm">Mobile:</span> 8881810100
          </div>
        </div>
        <div className="">
          <div className="flex justify-between">
            <div className="font-semibold text-xl w-[50%] ">TAX INVOICE</div>
            <div className="border-2 border-gray-200 w-[50%] text-center rounded p-1 text-sm ">
              ORIGNAL FOR RECIPIENT
            </div>
          </div>
          <div className="flex justify-between mt-2 ">
            <div className="text-sm  w-[50%] ">Invoice No.</div>
            <div className="flex w-[50%] items-center justify-between">
              <div className="text-gray-500 font-lg ">:</div>
              <div className="text-sm">AABBCCDD/202</div>
            </div>
          </div>
          <div className="flex justify-between -mt-1.5">
            <div className="text-sm  w-[50%] ">Invoice Date.</div>
            <div className="flex w-[50%] items-center justify-between">
              <div className="text-gray-500 font-lg ">:</div>
              <div className="text-sm">17/01/2023 3:47 PM</div>
            </div>
          </div>
          <div className="flex justify-between -mt-1.5">
            <div className="text-sm  w-[50%] ">Due Date</div>
            <div className="flex w-[50%] items-center justify-between">
              <div className="text-gray-500 font-lg ">:</div>
              <div className="text-sm">16/02/2023</div>
            </div>
          </div>
          <div className="flex justify-between -mt-1.5 ">
            <div className="text-sm  w-[50%] ">==</div>
            <div className="flex w-[50%] items-center justify-between">
              <div className="text-gray-500 font-lg ">:</div>
              <div className="text-sm">-</div>
            </div>
          </div>
          <div className="flex justify-between -mt-1.5 ">
            <div className="text-sm  w-[50%] ">PO No.</div>
            <div className="flex w-[50%] items-center justify-between">
              <div className="text-gray-500 font-lg ">:</div>
              <div className="text-sm">po number</div>
            </div>
          </div>
          <div className="flex justify-between -mt-1.5">
            <div className="text-sm  w-[50%] ">E-way Bill No.</div>
            <div className="flex w-[50%] items-center justify-between">
              <div className="text-gray-500 font-lg ">:</div>
              <div className="text-sm">123456</div>
            </div>
          </div>
          <div className="flex justify-between -mt-1.5">
            <div className="text-sm  w-[50%] ">Vehicle No.</div>
            <div className="flex w-[50%] items-center justify-between">
              <div className="text-gray-500 font-lg ">:</div>
              <div className="text-sm">123456</div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="font-semibold text-xl text-green-600 bg-green-100 w-[25%] ">
            BILL TO
          </div>

          <div className="font-semibold mt-1">SAMPLE PARTY</div>
          <div className="text-sm">
            No. F2, Outer Circle, Connaught Circus, New Delhi,
          </div>
          <div className="flex items-center gap-x-2 justify-start -mt-1 ">
            <div className="text-sm   ">IMobile</div>
            <div className="flex  items-center justify-between">
              <div className="text-gray-500 font-lg ">:</div>
              <div className="text-sm"> 5678934567</div>
            </div>
          </div>
          <div className="flex items-center gap-x-2 justify-start -mt-1 ">
            <div className="text-sm   ">GSTIN</div>
            <div className="flex  items-center justify-between">
              <div className="text-gray-500 font-lg ">:</div>
              <div className="text-sm"> 1234567898765</div>
            </div>
          </div>
          <div className="flex items-center gap-x-2 justify-start -mt-1 ">
            <div className="text-sm   ">State</div>
            <div className="flex  items-center justify-between">
              <div className="text-gray-500 font-lg ">:</div>
              <div className="text-sm"> DELHI</div>
            </div>
          </div>
          <div className="flex items-center gap-x-2 justify-start -mt-1 ">
            <div className="text-sm   ">Ok</div>
            <div className="flex  items-center justify-between">
              <div className="text-gray-500 font-lg ">:</div>
              <div className="text-sm">Ok</div>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <div className="font-semibold text-xl text-green-600 bg-green-100 w-[25%] ">
            SHIP TO
          </div>
          <div className="text-sm">23456789876543, Bengaluru</div>
        </div>
      </div>

      <table className="w-full  border-collapse mt-4  text-sm">
        <thead>
          <tr className="bg-green-200">
            <th className=" p-1">ITEMS</th>
            <th className=" p-1">S.NO.</th>
            <th className=" p-1">HSN</th>
            <th className=" p-1">QTY.</th>
            <th className=" p-1">RATE</th>
            <th className=" p-1">TAX</th>
            <th className=" p-1">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" p-1 text-center">1</td>
            <td className=" p-1 text-center">Samsung A30</td>
            <td className=" p-1 text-center">1234</td>
            <td className=" p-1 text-center">1 PCS</td>
            <td className=" p-1 text-center">10,000</td>
            <td className=" p-1 text-center">1,800 (18%)</td>
            <td className=" p-1 text-center">11,800</td>
          </tr>
          <tr>
            <td className=" p-1 text-center">2</td>
            <td className=" p-1 text-center">Parle-G 200g</td>
            <td className=" p-1 text-center">40511209</td>
            <td className=" p-1 text-center">1 BOX</td>
            <td className=" p-1 text-center">342.86</td>
            <td className=" p-1 text-center">17.14 (5%)</td>
            <td className=" p-1 text-center">360</td>
          </tr>
          <tr>
            <td className=" p-1 text-center">3</td>
            <td className=" p-1 text-center">Puma Blue Round Neck T-Shirt</td>
            <td className=" p-1 text-cente1 text-center">2032</td>
            <td className=" p-1 text-center">2 PCS</td>
            <td className=" p-1 text-center">900</td>
            <td className=" p-1 text-center">90 (5%)</td>
            <td className=" p-1 text-center">1,890</td>
          </tr>
          <tr className=" ]">
            <td className=" p-1"></td>
            <td className=" p-1"></td>
            <td className=" p-1"></td>
            <td className=" p-1"></td>
            <td className=" p-1"></td>
            <td className=" p-1"></td>
            <td className=" p-1"></td>
          </tr>
          <tr className="bg-green-200 pt-5">
            <td className=" p-1 text-center"></td>
            <td className=" p-1 text-center font-semibold">SUB TOTAL</td>
            <td className=" p-1 text-center"></td>
            <td className=" p-1 text-center">-</td>
            <td className=" p-1 text-center"></td>
            <td className=" p-1 text-center">₹ 1,907.14</td>
            <td className=" p-1 text-center">₹1,890</td>
          </tr>
        </tbody>
      </table>

      <div className=" text-sm">
        <div className="mt-3 flex justify-between text-sm">
          <div className="w-[60%] ">
            <p className="font-semibold">NOTES:</p>
            <p>Sample Note</p>
            <p className="font-semibold mt-1">TERMS AND CONDITIONS:</p>
            <p>1. Goods once sold will not be taken back or exchanged.</p>
            <p>
              2. All disputes are subject to [ENTER_YOUR_CITY_NAME] jurisdiction
              only.
            </p>
          </div>
          <div className="  w-[40%]  justify-between  ">
            <div className="flex justify-between  w-[100%]">
              <div className="font-semibold">TAXABLE AMOUNT</div>
              <div>₹1,8890.56</div>
            </div>
            <div className="flex justify-between  w-[100%]">
              <div className="font-semibold">CGST @2.5%</div>
              <div>₹1,88</div>
            </div>
            <div className="flex justify-between  w-[100%]">
              <div className="font-semibold">SGST @2.5%</div>
              <div>₹1,868</div>
            </div>
            <div className="flex justify-between  w-[100%]">
              <div className="font-semibold">CGST @9%</div>
              <div>₹1,88</div>
            </div>
            <div className="flex justify-between  w-[100%]">
              <div className="font-semibold">SGST @9%</div>
              <div>₹1,88</div>
            </div>
            <div className="flex justify-between border-t border-black border-b my-1  w-[100%]">
              <div className="font-semibold text-xl ">TOTAL AMOUNT</div>
              <div className="text-lg">₹1,8806</div>
            </div>
            <div className="flex justify-between  w-[100%]">
              <div className="font-semibold">Received Amount</div>
              <div>₹1,454</div>
            </div>
            <div className="flex justify-between border-b  border-black  w-[100%]">
              <div className="font-semibold">Received Amount</div>
              <div>₹1,454</div>
            </div>
            <div className="flex justify-between  w-[100%]">
              <div className="font-semibold">Previous Amount</div>
              <div>₹-1,454</div>
            </div>
            <div className="flex justify-between  border-black  w-[100%]">
              <div className="font-semibold">Current Balance</div>
              <div>₹-1,454</div>
            </div>

            <div className="flex justify-end mt-2">
              <div>
                <div className="text-sm text-center font-semibold">
                  Total Amount (in words)
                </div>
                <div className="text-sm">Fourteen Thousand Fifty Rupee</div>
                <div className="border-2 h-24 rounded-md mt-2 border-black"></div>
                <div className="text-sm font-semibold text-center">Authorised Signature for </div>
                <div className="text-sm font-semibold text-center">Business Name </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdf2;
