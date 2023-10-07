import React from "react";
import {BsArrowRight} from "react-icons/bs"

const Clientdetails = () => {
    const TableData = [
        {
          srno: "1.",
          service: "IT Return",
          dt: "February 24, 2023, 11:00 AM",
          db: "Anisha Mehta",
          details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            srno: "1.",
            service: "TDS Return",
            dt: "February 24, 2023, 11:00 AM",
            db: "Anisha Mehta",
            details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          },
          ];
    
  return (
    <>
      <div className="pt-2 px-2 bg-[#F0F0F0]">
        <div className="pt-2 flex flex-row px-10">
          <h2 className="text-black text-[16px] font-inter not-italic font-medium leading-[normal]">
            Inquiries
          </h2>
          <div className="flex justify-center items-center px-1">
          <BsArrowRight className="text-black" />
          </div>
          <h2 className="text-black text-[16px] font-inter not-italic font-medium leading-[normal]">
            Client Detail
          </h2>
          <div className="flex justify-center items-center px-1">
          <BsArrowRight className="text-black" />
          </div>
          <h2 className="text-black text-[16px] font-inter not-italic font-medium leading-[normal]">
            kushal Shah
          </h2>
        </div>
        <div className="pt-5 ">
          <div className="flex justify-between bg-white items-center h-12 ">
            <div className="flex flex-row justify-center items-center px-3 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M14.7071 5.29289C15.0976 5.68342 15.0976 6.31658 14.7071 6.70711L9.41421 12L14.7071 17.2929C15.0976 17.6834 15.0976 18.3166 14.7071 18.7071C14.3166 19.0976 13.6834 19.0976 13.2929 18.7071L7.29289 12.7071C6.90237 12.3166 6.90237 11.6834 7.29289 11.2929L13.2929 5.29289C13.6834 4.90237 14.3166 4.90237 14.7071 5.29289Z"
                  fill="#0D0D0D"
                />
              </svg>
              <h2 className="text-[color:var(--01,var(--01,#211F3B))] text-[14px] font-Montserrat not-italic font-bold leading-[normal]">
                Back
              </h2>
            </div>
            <div className="px-5">
              <h2 className="text-[color:var(--01,var(--01,#211F3B))] text-[16px] font-Montserrat not-italic font-medium leading-[normal]">
                Name Of Client with Serial No/CRM no
              </h2>
            </div>
            <div className="px-1">
              <button className="text-white text-[14px] font-inter px-8 py-3 bg-[#12B28C] not-italic font-bold leading-[normal]">
                Give Access to
              </button>
            </div>
          </div>
          <div className="bg-[#F9F7F7]">
            <div className="">
              <div className="flex justify-between pt-3 ">
                <div className="flex flex-row justify-center items-center px-10">
                  <h2 className="text-black text-[16px] font-Montserrat not-italic font-semibold leading-[normal]">
                    Sr No :
                  </h2>
                  <h2 className="text-[color:var(--01,#12B28C)] text-[18px] font-inter px-1 not-italic font-semibold leading-[normal]">
                    1
                  </h2>
                </div>
                <div className="flex flex-row px-20 justify-center items-center ">
                  <h2 className="text-black text-[16px] font-Montserrat not-italic font-semibold leading-[normal]">
                    CRM No :
                  </h2>
                  <h2 className="text-[color:var(--01,#12B28C)] text-[18px] font-inter px-1 not-italic font-semibold leading-[normal]">
                    9019
                  </h2>
                </div>
              </div>
              <div className="flex  pt-3 flex-col px-10 ">
                <div className="flex flex-row py-2">
                  <h2 className="text-black text-[20px] font-inter not-italic font-semibold leading-[normal]">
                    Name :
                  </h2>
                  <h2 className="pl-[15rem] text-[color:var(--01,#12B28C)] font-inter text-[20px] not-italic font-medium leading-[normal]">
                    Kushal Shah
                  </h2>
                </div>
                <div className="flex flex-row py-2">
                  <h2 className="text-black text-[20px] font-inter not-italic font-semibold leading-[normal]">
                    Email :
                  </h2>
                  <h2 className="pl-[15.3rem] text-[color:var(--01,#12B28C)] font-inter text-[20px] not-italic font-medium leading-[normal]">
                    Kushal777@gmail.com
                  </h2>
                </div>
                <div className="flex flex-row py-2">
                  <h2 className="text-black text-[20px] font-inter not-italic font-semibold leading-[normal]">
                    Mobile No :
                  </h2>
                  <h2 className="pl-[12.4rem] text-[color:var(--01,#12B28C)] font-inter text-[20px] not-italic font-medium leading-[normal]">
                    9586388741
                  </h2>
                </div>
                <div className="flex flex-row py-2">
                  <h2 className="text-black text-[20px] font-inter not-italic font-semibold leading-[normal]">
                    Address :
                  </h2>
                  <h2 className="pl-[13.5rem] text-[color:var(--01,#12B28C)] font-inter text-[20px] not-italic font-medium leading-[normal]">
                    Vatva,Ahmedabad
                  </h2>
                </div>
                <div className="flex flex-row py-2">
                  <h2 className="text-black text-[20px] font-inter not-italic font-semibold leading-[normal]">
                    Reference By :
                  </h2>
                  <h2 className="pl-[10.5rem] text-[color:var(--01,#12B28C)] font-inter text-[20px] not-italic font-medium leading-[normal]">
                    Vatsal Sharma
                  </h2>
                </div>
                <div className="flex flex-row py-2">
                  <h2 className="text-black text-[20px] font-inter not-italic font-semibold leading-[normal]">
                    Work Area :
                  </h2>
                  <h2 className="pl-[12.3rem] text-[color:var(--01,#12B28C)] font-inter text-[20px] not-italic font-medium leading-[normal]">
                    Accounting , IT Return , TDS Return
                  </h2>
                </div>
                <div className="flex flex-row py-2">
                  <h2 className="text-black text-[20px] font-inter not-italic font-semibold leading-[normal]">
                    Remarks :
                  </h2>
                  <div className="flex flex-row pl-[13.3rem]">
                    <div className="flex flex-row">
                      <h2 className=" text-black font-inter text-[20px] not-italic font-medium leading-[normal]">
                        Accounting
                      </h2>
                      <h2 className="px-2 text-[color:var(--01,#12B28C)] font-inter text-[20px] not-italic font-medium leading-[normal]">
                        Yearly,
                      </h2>
                    </div>
                    <div className="flex flex-row">
                      <h2 className=" text-black font-inter text-[20px] not-italic font-medium leading-[normal]">
                        IT Return
                      </h2>
                      <h2 className="px-2 text-[color:var(--01,#12B28C)] font-inter text-[20px] not-italic font-medium leading-[normal]">
                        Yearly,
                      </h2>
                    </div>
                    <div className="flex flex-row">
                      <h2 className=" text-black font-inter text-[20px] not-italic font-medium leading-[normal]">
                        TDS Return
                      </h2>
                      <h2 className="px-2 text-[color:var(--01,#12B28C)] font-inter text-[20px] not-italic font-medium leading-[normal]">
                        Quarterly,
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="flex flex-row py-2">
                  <h2 className="text-black text-[20px] font-inter not-italic font-semibold leading-[normal]">
                    Send Message Of Meeting :
                  </h2>
                  <h2 className="pl-[2.8rem] text-[color:var(--01,#12B28C)] font-inter text-[20px] not-italic font-medium leading-[normal]">
                    Yes
                  </h2>
                </div>
              </div>
            </div>
            <div>
            <div className="flex justify-between">
              <div className="flex flex-row px-10 py-4 gap-x-5">
                <div className="px-1">
                  <button className="text-white text-[16px] font-inter px-8 py-3 bg-[#12B28C] not-italic font-bold leading-[normal]">
                    Edit With CRM
                  </button>
                </div>
                <div className="px-2 py-2 bg-[#FF0000] cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="25"
                    height="27"
                    viewBox="0 0 25 27"
                    fill="none"
                  >
                    <path
                      d="M7.38455 4.8919C7.38455 3.69777 8.30294 2.72974 9.43583 2.72974H15.5897C16.7226 2.72974 17.641 3.69777 17.641 4.8919V7.05406H19.6817C19.688 7.054 19.6943 7.054 19.7007 7.05406H21.7435C22.31 7.05406 22.7692 7.53808 22.7692 8.13514C22.7692 8.73221 22.31 9.21622 21.7435 9.21622H20.6472L19.7577 22.3432C19.681 23.4747 18.7878 24.3514 17.7116 24.3514H7.31391C6.23772 24.3514 5.34451 23.4747 5.26784 22.3432L4.37828 9.21622H3.28199C2.71554 9.21622 2.25635 8.73221 2.25635 8.13514C2.25635 7.53808 2.71554 7.05406 3.28199 7.05406H5.3248C5.33117 7.054 5.33752 7.054 5.34386 7.05406H7.38455V4.8919ZM9.43583 7.05406H15.5897V4.8919H9.43583V7.05406ZM6.43478 9.21622L7.31391 22.1892H17.7116L18.5907 9.21622H6.43478ZM10.4615 11.3784C11.0279 11.3784 11.4871 11.8624 11.4871 12.4595V18.946C11.4871 19.543 11.0279 20.027 10.4615 20.027C9.89503 20.027 9.43583 19.543 9.43583 18.946V12.4595C9.43583 11.8624 9.89503 11.3784 10.4615 11.3784ZM14.564 11.3784C15.1305 11.3784 15.5897 11.8624 15.5897 12.4595V18.946C15.5897 19.543 15.1305 20.027 14.564 20.027C13.9976 20.027 13.5384 19.543 13.5384 18.946V12.4595C13.5384 11.8624 13.9976 11.3784 14.564 11.3784Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <div className="flex flex-row px-10 py-4 ">
                <div className="px-1 flex justify-center items-center  flex-row ">
                  <input
                    type="text"
                    name=""
                    id=""
                    placeholder="Search"
                    className="text-[14px] outline-none h-10 w-[12rem] shadow-[0px_0px_7px_0px_#D9D9D9] border  p-3   text-[#AEAEB2]  not-italic font-medium leading-[normal]"
                  />
                  <div className="relative -left-10 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="19"
                      height="19"
                      viewBox="0 0 19 19"
                      fill="none"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M8.53994 0.729858C13.0134 0.729858 16.6399 4.35635 16.6399 8.82986C16.6399 10.7422 15.9773 12.4997 14.869 13.8853L18.1763 17.1935C18.5278 17.5449 18.5278 18.1148 18.1763 18.4663C17.8519 18.7907 17.3414 18.8156 16.9883 18.5411L16.9035 18.4663L13.5954 15.1589C12.2098 16.2672 10.4522 16.9299 8.53994 16.9299C4.06643 16.9299 0.439941 13.3034 0.439941 8.82986C0.439941 4.35635 4.06643 0.729858 8.53994 0.729858ZM8.53975 2.52979C5.06035 2.52979 2.23975 5.3504 2.23975 8.82979C2.23975 12.3092 5.06035 15.1298 8.53975 15.1298C12.0191 15.1298 14.8397 12.3092 14.8397 8.82979C14.8397 5.3504 12.0191 2.52979 8.53975 2.52979Z"
                        fill="#211F3B"
                      />
                    </svg>
                  </div>
                </div>
                <div className="px-2 py-2 bg-white shadow-[0px_0px_7px_0px_#D9D9D9] cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="27"
                    viewBox="0 0 26 27"
                    fill="none"
                  >
                    <path
                      d="M5.03564 8.13516C5.03564 7.53809 5.49484 7.05408 6.06129 7.05408H20.4203C20.9867 7.05408 21.4459 7.53809 21.4459 8.13516C21.4459 8.73222 20.9867 9.21624 20.4203 9.21624H6.06129C5.49484 9.21624 5.03564 8.73222 5.03564 8.13516ZM7.08693 13.5406C7.08693 12.9435 7.54612 12.4595 8.11257 12.4595H18.369C18.9354 12.4595 19.3946 12.9435 19.3946 13.5406C19.3946 14.1376 18.9354 14.6216 18.369 14.6216H8.11257C7.54612 14.6216 7.08693 14.1376 7.08693 13.5406ZM9.13821 18.946C9.13821 18.3489 9.5974 17.8649 10.1639 17.8649H16.3177C16.8841 17.8649 17.3433 18.3489 17.3433 18.946C17.3433 19.543 16.8841 20.027 16.3177 20.027H10.1639C9.5974 20.027 9.13821 19.543 9.13821 18.946Z"
                      fill="#211F3B"
                    />
                  </svg>{" "}
                </div>
              </div>
              </div>

              <div className="px-2 pb-10">
      {/* <div>
        <h2 className=" text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Inquiries</h2>
      </div> */}
      <div className=" flex flex-col md:flex-row  ">
        <div className=" w-full max-h-[650px] h-fit ">
          <table className="table-auto border-spacing-0 border-collapse w-full border-0">
            <thead id="table_fixed">
              <tr className="text-[18px] font-bold font-Montserrat  text-white bg-[#12B28C] px-3 sticky top-0 z-20 max-h-[70px]  h-[10px]">
                <th className="px-[1.9rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Sr No.</p>
                </th>
                <th className="px-[1.1rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Service</p>
                </th>
                <th className="px-[0.6rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Date & Time</p>
                </th>
                <th className="px-[1.9rem] py-4 whitespace-nowrap">
                  <p className="font-semibold text-left">Done by</p>
                </th>
                <th className="px-[2rem] py-4 whitespace-nowrap flex flex-row gap-x-40 ">
                  <p className="font-semibold text-left">Details</p>
                  <p className="font-semibold bg-white  px-2  text-black">Shot By</p>
                </th>
                {/* <th className="text-center  px-[1.1rem] py-4 whitespace-nowrap">
                  <p className="font-semibold bg-white  px-2  text-black">Shot By</p>
                </th> */}
              </tr>
            </thead>
            <tbody id="contain">
              {TableData.map((item, index) => (
                <tr
                  id="table_scroll"
                  className="text-sm bg-[#E7E7E7] h-[72px] rounded-lg py-3 px-3 transition-all duration-300"
                  key={index}
                >
                  <td className="px-[1.9rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.srno}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.4rem] whitespace-nowrap">
                    <div className="">
                      <div className=" font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.service}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.3rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.dt}
                      </div>
                    </div>
                  </td>
                  <td className="px-[1.4rem] whitespace-nowrap">
                    <div className="">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.db}
                      </div>
                    </div>
                  </td>
                  <td className=" ">
                    <div className="w-80">
                      <div className="font-inter text-black text-[16px] not-italic font-medium leading-[normal]">
                        {item.details}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
       
      </div>
    </div>
    </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Clientdetails;
