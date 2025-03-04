import React from "react";

const Pdf1 = () => {
  return (
    <div className="    my-3 rounded-lg shadow-lg max-w-4xl mx-auto">
      <div className="text-center border border-black  py-3 -space-y-1">
        <h1 className="text-2xl font-bold text-green-700">Business Name</h1>
        <p className="text-sm ">
          <span className="font-semibold">Mobile:</span> 8881810100
        </p>
      </div>

      <div className="grid grid-cols-2   border-b   text-sm">
        <div className="border border-black p-2">
          <p className="font-semibold">BILL TO:</p>
          <p className="font-bold">SAMPLE PARTY</p>
          <p>
            Address: No. F2, Outer Circle, Connaught Circus, New Delhi, 110001
          </p>
          <p>Mobile: 7400417400</p>
        </div>
        <div>
          <div className="flex p-2 border justify-between border-black">
            <div className="flex items-center -space-y-1 flex-col">
              <div className="font-semibold">Invoice No.:</div>
              <div>AABBCCDD/202</div>
            </div>
            <div className="flex items-center -space-y-1 flex-col">
              <div className="font-semibold">Invoice Date:</div>
              <div>17/01/2023 3:47 PM</div>
            </div>
            <div className="flex items-center -space-y-1 flex-col">
              <div className="font-semibold">Due Date:</div>
              <div>16/02/2023</div>
            </div>
          </div>
          <div className="flex p-2 border justify-between border-black">
            <div className="flex items-center flex-col -space-y-1">
              <div className="font-semibold">Invoice No.:</div>
              <div>AABBCCDD/202</div>
            </div>
            <div className="flex items-center flex-col -space-y-1">
              <div className="font-semibold">PO No.:</div>
              <div>po number</div>
            </div>
            <div className="flex items-center flex-col -space-y-1">
              <div className="font-semibold">E-way Bill No.:</div>
              <div>12345</div>
            </div>
          </div>
          <div className="flex p-2 border justify-between border-black">
            <div className="flex items-center -space-y-1 flex-col">
              <div className="font-semibold">Vehicle No.:</div>
              <div>AABBCCDD/202</div>
            </div>
          </div>
        </div>
      </div>

      <table className="w-full  border-collapse border-l border-black  text-sm">    
        <thead>
          <tr className="bg-green-200  border ">
            <th className=" p-1  border-black border-b border-l border-r">S.NO.</th>
            <th className="  border-b border-r p-1 border-black">ITEMS</th>
            <th className="p-1  border-black border-b border-r">QTY.</th>
            <th className=" p-1 border-black border-b border-r ">RATE</th>
            <th className="border-black border-b border-r p-2 ">AMOUNT</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=" p-1 text-center border-r border-black ">1</td>
            <td className="p-1 border-r -space-y-1 border-black">
              <div>Samsung A30</div>
              <div className="text-xs text-gray-400">Samsung Phone</div>
             
              {/* <span className="text-xs">Samsung Phone</span> */}
            </td>
            <td className=" p-1  border-r border-black">1 PCS</td>
            <td className=" p-1  border-r border-black">11,800</td>
            <td className=" p-1  border-r border-black">11,800</td>
          </tr>
          <tr>
            <td className="p-1 text-center    border-r border-black ">2</td>
            <td className="p-1 border-r -space-y-1 border-black">
              <div>Parle-G</div>
              <div className="text-xs text-gray-400">Best Biscuit</div>
             
              {/* <span className="text-xs">Samsung Phone</span> */}
            </td>
            <td className=" p-1 border-r border-black">1 BOX</td>
            <td className=" p-1  border-r border-black">360</td>
            <td className=" p-1  border-r border-black">360</td>
          </tr>
          <tr>
            <td className="p-1 text-center    border-r border-black ">3</td>
            <td className="p-1  border-r border-black">
              Puma Blue Round Neck T-Shirt
              <br />
              <span className="text-xs"></span>
            </td>
            <td className=" p-1  border-r border-black">2 PCS</td>
            <td className=" p-1  border-r border-black">945</td>
            <td className=" p-1  border-r border-black">1890</td>
          </tr>
          <tr className="">
            <td className="p-2  border-r border-black  "></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
          </tr>
          <tr className="">
            <td className="p-2  border-r border-black  "></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
          </tr>
          <tr className="">
            <td className="p-2  border-r border-black  "></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
          </tr>
          <tr className="">
            <td className="p-2  border-r border-black  "></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
            <td className=" p-2  border-r border-black"></td>
          </tr>
          <tr className="border-t border-black bg-green-200">
            <td className="  border-r border-t border-black "></td>
            <td className=" flex justify-end py-1 px-2  font-semibold border-r border-black">
              Total
              <br />
              <span className="text-xs"></span>
            </td>
            <td className="   border-r border-black"></td>
            <td className="   border-r border-black"></td>
            <td className=" px-2  border-r border-black font-semibold ">
              ₹14050
            </td>
          </tr>

          <tr className="border-t border-black ">
            <td className="   border-r border-t border-black "></td>
            <td className="  flex justify-end py-1 px-2  font-semibold border-r border-black">
              RECEIVED AMOUNT
          
            </td>
            <td className="   border-r border-black"></td>
            <td className="   border-r border-black"></td>
            <td className=" px-2  border-r border-black font-semibold ">
              ₹ 4,453.5
            </td>
          </tr>
          <tr className="border-t border-black ">
            <td className="   border-r border-t border-black "></td>
            <td className="  flex justify-end py-1 px-2 font-semibold border-r border-black">
              BALANCED AMOUNT
              <br />
              <span className="text-xs"></span>
            </td>
            <td className="   border-r border-black"></td>
            <td className="   border-r border-black"></td>
            <td className=" px-2 border-r border-black font-semibold ">
              ₹ 9,596.5
            </td>
          </tr>
          <tr className="border-t border-black ">
            <td className="   border-r border-t border-black "></td>
            <td className=" py-1 px-2 items-center  flex justify-end font-semibold border-r border-black">
              PREVIOUS BALANCE
              <br />
              <span className="text-xs"></span>
            </td>
            <td className="   border-r border-black"></td>
            <td className="   border-r border-black"></td>
            <td className="   border-r px-2 border-black font-semibold ">
              ₹ -1,92,050.15
            </td>
          </tr>
          <tr className="border-t border-black ">
            <td className="  border-r border-t border-b border-black "></td>
            <td className="  flex justify-end py-1 px-2 border-b font-semibold border-r border-black">
              CURRENT BALANCE:
              <br />
              <span className="text-xs"></span>
            </td>
            <td className="  border-r border-b border-black"></td>
            <td className="   border-r border-b border-black"></td>
            <td className=" px-2  border-r border-b border-black font-semibold ">
              {" "}
              ₹ -1,82,453.65
            </td>
          </tr>
        </tbody>
      </table>
      <div className="border border-black mt-2">
        <div className="flex flex-col  px-3 border-b border-black ">
          <div className="mt-4 text-sm font-semibold">
            Total Amount (in words):{" "}
          </div>
          <div className="mb-2 text-xs">Fourteen Thousand Fifty Rupees</div>
        </div>
        <div className="grid grid-cols-3 ">
          <div className="flex border-r px-3 border-black flex-col justify-start">
            <div className="font-semibold text-xs mt-2">Notes</div>
            <div className="text-xs">Sample Note</div>
          </div>
          <div className="flex border-r border-black px-3 flex-col justify-start">
            <div className="font-semibold text-xs mt-2">
              Terms and Condition
            </div>
            <div className="text-xs">
              1. Good once sold will not be taken back or exchanged.
            </div>
            <div className="text-xs">
              2. All disputes are subject to [ENTER_YOUR_NAME] jurisdiction
              only.
            </div>
          </div>
          <div className="flex flex-col justify-end items-center text-xs ">
            <div>Authorised Signature For </div>
            <div>Business Name</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pdf1;
