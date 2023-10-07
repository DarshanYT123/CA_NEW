import React from "react";
import {BsArrowRight} from "react-icons/bs"

const UserDetails = () => {
  const userDetails = [
    {
      userid: `1`,
      username: `Kushal Shah`,
      useremail: `Kushal777@gmail.com`,
      usermobileno: `9586388741`,
      useraddress: `Vatva, Ahmedabad`,
    },
  ];
  return (
    <>
      <div className="pt-2   bg-[#F0F0F0]">
        <div className="flex items-center justify-center space-x-10 gap-[44rem]  ">
          <h1 className="text-[#000] font-inter text-[16px] not-italic font-medium leading-normal flex flex-row justify-center items-center ">
             User Detail           <div className="flex justify-center items-center px-1">
          <BsArrowRight className="text-black" />
          </div>
 Kushal Shah
          </h1>

          <div className="pt-3">
            <button
              type="button"
              class="cursor-pointer text-[#FFF] font-inter bg-[#211F3B] text-[16px] not-italic font-semibold leading-normal border border-[#211F3B] px-4 p-1  mr-2 mb-3"
            >
              Add New User
            </button>
          </div>
        </div>
        <div className="w-[99.2%] pl-2 ">
        <div className="flex space-x-8 gap-[11rem] items-center  bg-[#fff]  ">
          <a className=" flex">
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
            <h3 className="font-Montserrat pt-0.5 text-[#211F3B] text-[14px] not-italic font-bold leading-normal">
              Back
            </h3>
          </a>

          <div className="pl-[18rem]">
            <h1 className="font-Montserrat text-[#211F3B] text-center text-[16px] not-italic  font-medium leading-normal ">
              Name Of User
            </h1>
          </div>

          {/*===================== Give Acess=========================== */}

          <div className="flex  mr-2 pl-[1.7rem] space-x-2 justify-center items-center p-1 ">
            <button
              type="button"
              class="cursor-pointer text-white font-inter text-[16px]  py-2 not-italic font-semibold leading-normal bg-[#12B28C] px-3 "
            >
              Give Access to
            </button>
            <div className="bg-black  px-2 py-2">
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
          </div>
          </div>
          {/* =====================end Give Acess======================= */}
        </div>

        {/* ========================================view list================== */}

        <div className="flex flex-row gap-[10rem] px-8 pt-5 ">
          <div className=" flex flex-col gap-10 py-2">
            <div>
              <h1 className="font-inter text-[#000] text-[16px] not-italic leading-normal font-semibold ">
                User No :
              </h1>
            </div>
            <div>
              <h1 className="font-inter text-[#000] text-[16px] not-italic leading-normal font-semibold ">
                {" "}
                Name :
              </h1>
            </div>
            <div>
              <h1 className="font-inter text-[#000] text-[16px] not-italic leading-normal font-semibold">
                Email :{" "}
              </h1>
            </div>
            <div>
              <h1 className="font-inter text-[#000] text-[16px] not-italic leading-normal font-semibold ">
                Mobile No :{" "}
              </h1>
            </div>

            <div>
              <h1 className="font-inter text-[#000] text-[16px] not-italic leading-normal font-semibold">
                {" "}
                Address :{" "}
              </h1>
            </div>
          </div>
          {userDetails.map((data, i) => {
            return (
              <div className="flex flex-col gap-10 key={i}  ">
                <div>
                  <h1 className="text-[#12B28C] text-[18px] not-italic leading-normal font-semibold font-inter">
                    {" "}
                    {data.userid}
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#12B28C] text-[18px] not-italic leading-normal font-semibold font-inter">
                    {" "}
                    {data.username}
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#12B28C] text-[18px] not-italic leading-normal font-semibold font-inter">
                    {" "}
                    {data.useremail}
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#12B28C] text-[18px] not-italic leading-normal font-semibold font-inter">
                    {" "}
                    {data.usermobileno}
                  </h1>
                </div>
                <div>
                  <h1 className="text-[#12B28C] text-[18px] not-italic leading-normal font-semibold font-inter">
                    {" "}
                    {data.useraddress}
                  </h1>
                </div>
              </div>
            );
          })}
          
        </div>

        {/* ========================================list view================== */}
        
            {/* Access Settings */}
            <div className="px-8 py-5">
            <div className="bg-[#12B28C]  ">
              <h1 className="text-[#fff]  text-[20px] font-bold not-italic font-inter leading-normal p-3 pt-2.5 px-4 text-center">
                Access Settings 
              </h1>
            </div>
            </div>

            {/* end Access Settings */}
        {/* =======================================cheakbox==================== */}
        <form>
        <div className="flex flex-row gap-[6rem] pt-10 pb-10 px-8">
              <div className="flex flex-col gap-[0.5rem]  bg-[#fff]">
                <div className="bg-[#211F3B]   p-1 px-4 py-5">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    //onChange={(e) => getServices(e)}
                    value=" Accounting"
                    //value={data.services}

                    className="accent-[#12B28C] w-4 h-4  "
                  />

                  <label
                    for="default-checkbox"
                    className=" ml-8 font-inter text-[#fff]  text-center text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    Inquiry Section{" "}
                  </label>
                </div>

                <div className="pl-3.5 px-11">
                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      //onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className="font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Latest Inquiry{" "}
                    </label>
                  </div>

                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      // onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className="font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Solved Inquiry{" "}
                    </label>
                  </div>

                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      // onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className="font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Moved on CRM Inquiry{" "}
                    </label>
                  </div>

                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      // onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className="font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Removed Inquiry{" "}
                    </label>
                  </div>
                </div>
              </div>

              {/*  =============*/}

              <div className="flex flex-col gap-[0.5rem] bg-[#fff]">
                <div className="bg-[#211F3B]   p-1 px-4 py-5">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    //onChange={(e) => getServices(e)}
                    value=" Accounting"
                    //value={data.services}

                    className="accent-[#12B28C] w-4 h-4  "
                  />

                  <label
                    for="default-checkbox"
                    className="font-inter ml-8  text-[#fff]  text-center text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    User Section{" "}
                  </label>
                </div>

                <div className="pl-3.5 px-11">
                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      //onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className="font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Only View Users{" "}
                    </label>
                  </div>

                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      // onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className=" font-Montserrat ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Edit user (only Details){" "}
                    </label>
                  </div>

                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      // onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className="font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Can Edit Full Info With Access{" "}
                    </label>
                  </div>

                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      // onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className="font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Removed users{" "}
                    </label>
                  </div>
                </div>
              </div>

              {/* ========================= */}

              <div className="flex flex-col gap-[0.5rem] bg-[#fff]">
                <div className="bg-[#211F3B]   p-1 px-4 py-5">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    //onChange={(e) => getServices(e)}
                    value=" Accounting"
                    //value={data.services}

                    className="accent-[#12B28C] w-4 h-4  "
                  />

                  <label
                    for="default-checkbox"
                    className=" ml-8 font-inter  text-[#fff]  text-center text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    Form Edit Section{" "}
                  </label>
                </div>

                <div className="pl-3.5 px-11">
                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      //onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className="font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Only View{" "}
                    </label>
                  </div>

                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      // onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className="font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Edit form (only Details){" "}
                    </label>
                  </div>

                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      // onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className="font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Add new Field{" "}
                    </label>
                  </div>

                  <div className="py-2">
                    <input
                      id="default-checkbox"
                      type="checkbox"
                      name="services"
                      // onChange={(e) => getServices(e)}
                      value=" Accounting"
                      //value={data.services}

                      className="accent-[#12B28C] w-4 h-4 "
                    />

                    <label
                      for="default-checkbox"
                      className="font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Remove Field{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Button  */}

            <div className="py-5 px-8">
              <button
                type="submit"
                class="cursor-pointer text-white font-inter text-[15px] not-italic font-bold leading-normal bg-[#FF0000] tracking-[0.45px] px-8 py-2.5 mr-2 mb-2"
              >
                Delete Client
              </button>
             
            </div>
        </form>

        {/*=========================================end cheakbox============ */}
      </div>
    </>
  );
};

export default UserDetails;
