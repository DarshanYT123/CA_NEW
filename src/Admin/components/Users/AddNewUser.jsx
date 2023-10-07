import React from "react";
import {BsArrowRight} from "react-icons/bs"

const AddNewUser = () => {
  const [values, setValues] = React.useState({
    fullname: '',
    mobileno: '',
    emailid: '',
    address:''

  })

  

  const [validations, setValidations] = React.useState({
    fullname: '',
    mobileno: '',
    emailid: '',
    address:''
  })

  const validateAll = () => {
    const { fullname, mobileno, emailid,address } = values
    const validations = {fullname: '',  mobileno: '', emailid: '' , address:''
  }
    let isValid = true

    if (!fullname) {
      validations.fullname = 'Name is required'
      isValid = false
    }
    
    if (fullname && fullname.length < 3 || fullname.length > 50) {
      validations.fullname = 'Name must contain between 3 and 50 characters'
      isValid = false
    }
    //phone no validation
    const phoneRegex = /^[0-9]{10}$/;
     if (mobileno && !phoneRegex.test(mobileno)) {
       validations.mobileno = 'Please enter a valid phone number'
       isValid = false
   }

    //email valdiation

    if (emailid && !/\S+@\S+\.\S+/.test(emailid)) {
      validations.emailid = 'Email format must be as example@mail.com'
      isValid = false
    }

    //Address validation

    if (!address) {
      validations.address = 'Address is required'
      isValid = false
    }
    
    if (address && address.length < 10 || address.length > 100) {
      validations.address = 'Address must contain between 10 and 100 characters'
      isValid = false
    }

    if (!isValid) {
      setValidations(validations)
    }
    
    return isValid
    
  }

  const validateOne = (e) => {
    const { name } = e.target
    const value = values[name]
    let message = ''
    
    if (!value) {
      message = `${name} is required`
    }
    
    if (value && name === 'fullname' && (value.length < 3 || value.length > 50)) {
      message = 'Name must contain between 3 and 50 characters'
    }
    const phoneRegex = /^[0-9]{10}$/;
    if (value && name === ' mobileno' && !phoneRegex.test(value)){
      message = 'Please enter a valid phone number '
    }

    
    if (value && name === 'emailid' && !/\S+@\S+\.\S+/.test(value)) {
      message = 'Email format must be as example@mail.com'
    }
    if (value && name === 'address' && (value.length < 10 || value.length > 100)) {
      message = 'Address must contain between 10 and 100 characters'
    }

    
    setValidations({...validations, [name]: message })
  }
 
  const handleChange = (e) => {
    const { name, value } = e.target
    setValues({...values, [name]: value })
  }
  const resetForm = () => {
    setValues("")
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
   
   
    const isValid = validateAll()
    
    if (!isValid) {
      return false
    }

    alert(JSON.stringify(values))
  }
  
  const {  fullname, mobileno , emailid, address } = values

  const { 
    fullname: fullnameVal, 
    mobileno: mobilenoVal, 
    emailid: emailidVal ,
    address:addressVal

  } = validations
  
  const textInput = React.useRef();

 
  
  return (
    <>
      <div className="pt-2 bg-[#F0F0F0]">
        <div className="flex items-center justify-center space-x-10 gap-[47rem]  ">
          <h1 className="text-[#000] font-inter text-[16px] not-italic font-medium  leading-normal flex flex-row justify-center items-center">
            User   <div className="flex justify-center items-center px-1">
          <BsArrowRight className="text-black" />
          </div>Add new User
          </h1>

          <div className="pt-3">
            <button
              type="button"
              class="text-[#FFF] font-inter bg-[#211F3B] text-[16px] not-italic font-semibold leading-normal border border-[#211F3B] px-3 py-2 mr-2 mb-2"
            >
              Add New User
            </button>
          </div>
        </div>
        <div className="w-[99.2%] pl-2 ">
        <div className="flex  space-x-80 gap-[6rem] px-2 bg-[#fff] pt-5 py-3">
          <a className=" flex  ">
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

          <div className="text-center">
            <h1 className="cursor-pointer font-Montserrat text-[#211F3B] text-[16px] not-italic  font-medium leading-normal ">
              Add New User
            </h1>
          </div>
        </div>
        </div>

        {/* ============================================Add New User======================= */}

        <div className="px-6 pt-5 ">
          <form  onSubmit={handleSubmit} id="myForm" >
            <div className="flex space-x-10 items-center ">
              <div className="">
                <label
                  for="fullname"
                  className="  block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Full Name{" "}
                </label>
                <div className=" p-0.5 w-[383px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="fullname"
                    name="fullname"
                    value={fullname} 
                    onChange={handleChange}
                    onBlur={validateOne}
                  
                    //value={fullname}
                    //onChange={(e) => setFullname(e.target.value)}
                    tabIndex={1}
                    className="w-[380px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>

                <div className="text-[10px] text-[#FF0000]">{fullnameVal}</div>
                {/* {error && (
                  <div className="text-[10px] text-[#FF0000] ">{error}</div>
                )} */}
                {/* {inputError && <div className="text-[#FF0000]">{inputError}</div>} */}
              </div>

              <div>
                {/* <p>{ formErrors.fullname}</p> */}

                <label
                  for="mobileno"
                  className="block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Mobile No.{" "}
                </label>
                <div className=" p-0.5 w-[383px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="number"
                    id="mobileno"
                    name="mobileno"
                    value={mobileno} 
                    onChange={handleChange}
                    onBlur={validateOne}
                   
                    //value={mobileno}
                    //onChange={(e) => setMobileno(e.target.value)}
                    tabIndex={2}
                    // value={formData.mobileno} onChange={handleChange}
                    className="w-[380px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3 focus:outline-none  "
                    required
                  />
                  
                </div>
                <div className="text-[10px] text-[#FF0000]">{mobilenoVal}</div>
              </div>
            </div>

            <div className="flex space-x-10 items-center  py-10">
              <div>
                <label
                  for="emailid"
                  className="block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Email Id{" "}
                </label>
                <div className=" p-0.5 w-[383px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="emailid"
                    name="emailid"
                    value={emailid} 
                    onChange={handleChange}
                    onBlur={validateOne}
                 
                    //value={emailid}
                    //onChange={(e) => setEmailid(e.target.value)}
                    // value={formData.emailid} onChange={handleChange}
                    tabIndex={3}
                    className="w-[380px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
                <div className="text-[10px] text-[#FF0000]">{emailidVal}</div>
              </div>

              <div>
                <label
                  for="address"
                  className="block font-inter mb-2 text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
                >
                  Address{" "}
                </label>
                <div className=" p-0.5 w-[383px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={address} 
                    onChange={handleChange}
                    onBlur={validateOne}
                    
                    //value={address}
                    //onChange={(e) => setAddress(e.target.value)}
                    //value={formData.address} onChange={handleChange}

                    className="w-[380px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
                <div className="text-[10px] text-[#FF0000]">{addressVal}</div>
              </div>
            </div>

            {/* =========================== */}

            {/* Access Settings */}
            <div className="bg-[#12B28C] px-6 ">
              <h1 className="text-[#fff] font-inter text-[20px] font-bold not-italic  leading-normal p-3 pt-2.5 px-4 text-center">
                Access Settings
              </h1>
            </div>

            {/* end Access Settings */}

            <div className="flex flex-row gap-[6rem] pt-10 pb-10">
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
                      className=" font-Montserrat ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
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
                      className=" font-Montserrat ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
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
                      className=" font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
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
                      className="  font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
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
                    className=" ml-8 font-inter text-[#fff]  text-center text-[16px] not-italic font-semibold capitalize leading-normal "
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
                      className="font-Montserrat ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
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
                      className=" font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
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
                      className=" font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
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
                      className=" font-Montserrat ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
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
                    className=" ml-8 font-inter text-[#fff]  text-center text-[16px] not-italic font-semibold capitalize leading-normal "
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
                      className=" font-Montserrat ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
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
                      className=" font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
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
                      className=" font-Montserrat ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
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
                      className=" font-Montserrat  ml-2 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                    >
                      Remove Field{" "}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            {/* Button  */}

            <div className="flex space-x-5 py-5">
              <button
                type="submit"
                className="cursor-pointer font-Montserrat text-white text-[16px] not-italic font-semibold leading-normal bg-[#12B28C] px-14 py-2.5 mr-2 mb-2"
              >
                Add
              </button>
              <button
               
                type="reset"
                onClick={() => resetForm()}
                className="cursor-pointer font-inter text-[#211F3B] text-[16px] not-italic font-semibold leading-normal border bg-[#F9F7F7] border-[#211F3B] px-14 py-2.5 mr-2 mb-2"
              >
                Cancel
              </button>
             
            </div>
          </form>
          {/* End button */}
        </div>
      </div>
    </>
  );
};

export default AddNewUser;
