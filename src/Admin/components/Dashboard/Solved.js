import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import fireDb from "../../../firebase";
import { toast } from "react-toastify";
// import Navbar from "./Navbar";

const Solved = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const [solvedata, setSolvedata] = useState({});

  useEffect(() => {
    fireDb.child("contact").on("value", (snapshot) => {
      if (snapshot.val() !== null) {
        setSolvedata({ ...snapshot.val() });
      } else {
        setSolvedata({});
      }
    });
    return () => {
      setSolvedata({});
    };
  }, []);
  const onDelete = (id) => {
    if (
      window.confirm("Are you sure that you wanted to delete that contact ?")
    ) {
      fireDb.child(`contact/${id}`).remove((err) => {
        if (err) {
          toast.error(err);
        } else {
          toast.success("Contact Deleted Successfully");
        }
      });
    }
  };

  return (
    <div>
      <div className="">
        {/* <div>
        <h2 className=" text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Inquiries</h2>
      </div> */}
        <div className=" flex flex-col md:flex-row ">
        <div className="  max-h-[650px]  overflow-y-auto h-[35rem]  ">
          <table className="table-auto1 text-[0.9em]  m-auto border-collapse font-Montserrat ">
              <thead id="table_fixed">
                <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                  {" "}
                  <th className="px-[1.9rem] py-4 whitespace-nowrap">
                    <p className="font-semibold text-left">Sr No.</p>
                  </th>
                  <th className="px-[1.2rem] py-4 whitespace-nowrap">
                    <p className="font-semibold text-left">Name Of Client</p>
                  </th>
                  <th className="px-[2rem] py-4 whitespace-nowrap">
                    <p className="font-semibold text-left">Mobile No</p>
                  </th>
                  <th className="px-[5rem] py-4 whitespace-nowrap">
                    <p className="font-s6emibold text-left">Email id</p>
                  </th>
                  <th className="px-[1.4rem] py-4 whitespace-nowrap">
                    <p className="font-semibold text-left">Reference By</p>
                  </th>
                  <th className="text-center  px-[2.8rem] py-4 whitespace-nowrap">
                    <button className="font-semibold bg-white  px-2  text-black">
                      Shot By
                    </button>
                  </th>
                </tr>
              </thead>
              <tbody id="contain">
                {Object.keys(solvedata).map((id, index) => {
                  return (
                    <tr
                      id={id}
                      className="text-sm  h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
                      // key={index}
                    >
                      <td className="px-[2.5rem] whitespace-nowrap">
                        <div className="">
                          <th className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                            {index + 1}
                          </th>
                        </div>
                      </td>
                      <td className="px-[2rem] whitespace-nowrap">
                        <div className="">
                          <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                            {solvedata[id].fullnameclient}
                          </div>
                        </div>
                      </td>
                      <td className="px-[1.9rem] whitespace-nowrap">
                        <div className="">
                          <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                            {solvedata[id].mobilenoclient}
                          </div>
                        </div>
                      </td>
                      <td className="px-[2rem] whitespace-nowrap">
                        <div className="">
                          <div className="font-inter truncate text-black text-[16px] not-italic font-medium leading-[normal]">
                            {solvedata[id].emailidclient}
                          </div>
                        </div>
                      </td>
                      <td className="px-[1.8rem] whitespace-nowrap">
                        <div className="">
                          <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                            {solvedata[id].refclient}
                          </div>
                        </div>
                      </td>
                      <td className="px-[1.8rem] whitespace-nowrap gap-x-4 flex flex-row justify-center items-center py-4 ">
<a href="dashboard/clientdetails">
                          <div className="bg-[#12B28C] px-3 py-2 ">
                            <button className="text-white font-inter text-sm not-italic font-semibold leading-[normal]">
                              View
                            </button>
                          </div>
                          </a>
                        <div className="bg-white px-2 py-1.5 cursor-pointer">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <path
                              d="M16.2929 2.29289C16.6834 1.90237 17.3166 1.90237 17.7071 2.29289L21.7071 6.29289C22.0976 6.68342 22.0976 7.31658 21.7071 7.70711L8.70711 20.7071C8.51957 20.8946 8.26522 21 8 21H4C3.44772 21 3 20.5523 3 20V16C3 15.7348 3.10536 15.4804 3.29289 15.2929L13.2927 5.2931L16.2929 2.29289ZM14 7.41421L5 16.4142V19H7.58579L16.5858 10L14 7.41421ZM18 8.58579L19.5858 7L17 4.41421L15.4142 6L18 8.58579Z"
                              fill="#0D0D0D"
                            />
                          </svg>
                        </div>
                        <div
                          className="bg-black px-2 py-1.5 cursor-pointer"
                          onClick={() => onDelete(id)}
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                          >
                            <path
                              d="M8.33329 3.33329C6.49234 3.33329 4.99996 4.82568 4.99996 6.66663C4.99996 8.50757 6.49234 9.99996 8.33329 9.99996C10.1742 9.99996 11.6666 8.50757 11.6666 6.66663C11.6666 4.82568 10.1742 3.33329 8.33329 3.33329ZM3.33329 6.66663C3.33329 3.9052 5.57187 1.66663 8.33329 1.66663C11.0947 1.66663 13.3333 3.9052 13.3333 6.66663C13.3333 9.42805 11.0947 11.6666 8.33329 11.6666C5.57187 11.6666 3.33329 9.42805 3.33329 6.66663ZM13.3333 11.6666C13.3333 11.2064 13.7064 10.8333 14.1666 10.8333H17.5C17.9602 10.8333 18.3333 11.2064 18.3333 11.6666C18.3333 12.1269 17.9602 12.5 17.5 12.5H14.1666C13.7064 12.5 13.3333 12.1269 13.3333 11.6666ZM5.41663 15C4.36708 15 3.33329 16.0112 3.33329 17.5C3.33329 17.9602 2.9602 18.3333 2.49996 18.3333C2.03972 18.3333 1.66663 17.9602 1.66663 17.5C1.66663 15.3068 3.24451 13.3333 5.41663 13.3333H11.25C13.4221 13.3333 15 15.3068 15 17.5C15 17.9602 14.6269 18.3333 14.1666 18.3333C13.7064 18.3333 13.3333 17.9602 13.3333 17.5C13.3333 16.0112 12.2995 15 11.25 15H5.41663Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solved;
