import React, { useState  } from "react";
// import SelectRemkdropdown from "../Inquiry/SelectRemkdropdown";
// import { useParams } from "react-router-dom"
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom"
// import { Link } from "react-router-dom";
import fireDb from "../../../firebase"
// import fireDb from "firebase/app"

const initialState = {
  fullnameclient:"",
  emailidclient:"",
  mobilenoclient:"",
  refclient:""
}

const Addtocrm = () => {
//     const [selected, setSelected] = useState("Select Remarks");
//   const [addFormData,setAddFormData]  = useState({})
  // const [fullnameclient, setfullnameclient] = useState()
  // const [emailidclient, setemailidclient] = useState()
  // const [mobilenoclient, setmobilenoclient] = useState()
  const [address, setAddress]=useState()
  const [write, setWrite]= useState()
  const [services, setServices] = useState([])
//   const navigate = useNavigate()
  const [state,setState] = useState(initialState);
//   const [data,setData]= useState({})
  const history = useNavigate()
 //multi cheakbox
 const  getServices = (e) => {


 const { value, checked } = e.target;

//  console.log(`${value} is ${checked}`);
  
 if(checked){
  setServices([...services,value])

 }else{
  setServices(services.filter((e)=>e !==value))
 }
 }
 const {fullnameclient,mobilenoclient,emailidclient,refclient} = state;  
 

 const handleInputChangeclient = (e) => {
  const {name,value} = e.target;
  setState({...state,[name]:value});
 }

  const handlePush = (e) => {
    e.preventDefault();
    if(!fullnameclient || !emailidclient || !mobilenoclient ){
      toast.error("Please provide value in each input field")
    }
    else{
      fireDb.child("contact").push(state,(err) =>{
        if(err) {
          toast.error(err);
        }else {
          toast.success("Contact Added Successfully");
        }
      })
      setTimeout(() => history("/dashboard"))
    }
    //     if(fullnameclient === ""){
//   toast.error("Name Is Required")
// }    
// else if(mobilenoclient === ""){
//   toast.error("mobile no Is Required")
// }    
// else if(emailidclient === ""){
//   toast.error("Email Is Required")
// }
// else if(address === ""){
//   toast.error("Address Is Required")
// }
// else if(write === ""){
//   toast.error("Write Is Required")
// }else if(services === ""){
//   toast.error("Services Is Required")
// }else{
//   localStorage.setItem('name',fullnameclient)
//   localStorage.setItem('mobile no',mobilenoclient)
//   localStorage.setItem('email id',emailidclient)
//   localStorage.setItem('address',address)
//   localStorage.setItem('write',write)
//   localStorage.setItem('services',services)
//   toast.success("User Saved!");
// }    navigate('/inquiryfrom')

    // const data = new FormData()
    // data.append('fullnameclient', fullnameclient)
    // data.append('mobilenoclient', mobilenoclient)
    // data.append('emailidclient', emailidclient)
    // data.append('address', address)
    // data.append('write', write)
    // data.append('services',services)
    
    //   console.log(data.get('fullnameclient'))
    //   console.log(data.get('mobilenoclient'))
    //   console.log(data.get('emailidclient'))
    //   console.log(data.get('address'))
    //   console.log(data.get('write'))
    //   console.log(data.get('services'))
  };


    return(
        <div className="bg-[#F0F0F0]">
      <div>
        <h2 className="py-3 px-7 text-black text-[16px] font-inter not-italic font-medium leading-[normal]">Add New Client</h2>
      </div>
      <div className="px-5 ">
<form onSubmit={handlePush}>
{/* Client Basic Details */}

<div className='bg-white  '>
<div className="px-5 py-2">
<h2 className="text-black text-[22px] not-italic font-semibold leading-[normal] font-inter  px-4 py-2">Add Client Basic Details</h2>
</div>
<div className="flex flex-row space-x-20 px-20 py-2 ">
<div className="">
                <label
                  for="fullnameclient"
                  className="  block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
                >
                  Full Name{" "}
                </label>
                <div className=" p-0.5 w-[403px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="fullnameclient"
                    name="fullnameclient"
                    value={fullnameclient}
                    onChange={handleInputChangeclient}
                    tabIndex={1}
                    className="w-[400px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
               
              </div>
              <div>

<label
  for="mobilenoclient"
  className=" block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
>
  Mobile No.{" "}
</label>
<div className=" p-0.5 w-[403px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
  <input
    type="number"
    id="mobilenoclient"
    name="mobilenoclient"
    value={mobilenoclient}
    onChange={handleInputChangeclient}
    
    tabIndex={2}
    className="w-[400px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3 focus:outline-none  "
    required
  />
</div>
</div>
</div>
<div className="flex flex-row space-x-20 px-20 py-2 ">
<div>
                <label
                  for="emailidclient"
                  className=" block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
                >
                  Email Id{" "}
                </label>
                <div className=" p-0.5 w-[403px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="emailidclient"
                    name="emailidclient"
                    value={emailidclient}
                    onChange={handleInputChangeclient}
                   // value={data.emailidclient}
                   // onChange={handleChange}
                    tabIndex={3}
                    className="w-[400px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  for="address"
                  className=" block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
                >
                  Address{" "}
                </label>
                <div className=" p-0.5 w-[403px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="address"
                    name="address"
                    onChange={(e) => setAddress(e.target.value)}
                   value={address}
                    className="w-[400px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>
</div>
</div>

{/* Client Basic Details End */}

{/* Reference Details */}


<div className='bg-white  '>
<div className="px-5 py-2">
<h2 className="text-black text-[22px] not-italic font-semibold leading-[normal] font-inter  px-4 py-2">Add Reference Details </h2>
</div>
<div className="flex flex-row space-x-20 px-20 py-2 ">
<div className="">
                <label
                  for="refclient"
                  className="  block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
                >
                  Full Name{" "}
                </label>
                <div className=" p-0.5 w-[403px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="refclient"
                    name="refclient"
                    value={refclient}
                    onChange={handleInputChangeclient}
                    tabIndex={1}
                    className="w-[400px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
               
              </div>
              <div>

<label
  for="mobilenoclient"
  className=" block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
>
  Mobile No.{" "}
</label>
<div className=" p-0.5 w-[403px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
  <input
    type="number"
    id="refmobilenoclient"
    name="refmobilenoclient"
    //value={refmobilenoclient}
    onChange={handleInputChangeclient}
    
    tabIndex={2}
    className="w-[400px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3 focus:outline-none  "
    required
  />
</div>
</div>
</div>
<div className="flex flex-row space-x-20 px-20 py-2 ">
<div>
                <label
                  for="emailidclient"
                  className=" block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
                >
                  Email Id{" "}
                </label>
                <div className=" p-0.5 w-[903px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="refemailidclient"
                    name="refemailidclient"
                    //value={refemailidclient}
                    onChange={handleInputChangeclient}
                   // value={data.emailidclient}
                   // onChange={handleChange}
                    tabIndex={3}
                    className="w-[900px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>
             
</div>
</div>

{/* Reference Details End */}

{/* Call Details */}

<div className='bg-white  '>
<div className="px-5 py-2">
<h2 className="text-black text-[22px] not-italic font-semibold leading-[normal] font-inter  px-4 py-2">Add Call Details </h2>
</div>
<div className="flex flex-row space-x-20 px-20 py-2 ">
<div className="">
                <label
                  for="fullnameclient"
                  className="  block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
                >
                  Family Head Name{" "}
                </label>
                <div className=" p-0.5 w-[403px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="familyheadfullname"
                    name="familyheadfullname"
                    //value={familyheadfullname}
                    onChange={handleInputChangeclient}
                    tabIndex={1}
                    className="w-[400px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
               
              </div>
              <div>

<label
  for="mobilenoclient"
  className=" block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
>
  Mobile No.{" "}
</label>
<div className=" p-0.5 w-[403px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
  <input
    type="number"
    id="familyheadmobilenoclient"
    name="familyheadmobilenoclient"
    //value={familyheadmobilenoclient}
    onChange={handleInputChangeclient}
    
    tabIndex={2}
    className="w-[400px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3 focus:outline-none  "
    required
  />
</div>
</div>
</div>
<div className="flex flex-row space-x-20 px-20 py-2 ">
<div>
                <label
                  for="Relation"
                  className=" block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
                >
                  Relation{" "}
                </label>
                <div className=" p-0.5 w-[903px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="familyheaderelation"
                    name="familyheaderelation"
                    //value={familyheaderelation}
                    onChange={handleInputChangeclient}
                   // value={data.emailidclient}
                   // onChange={handleChange}
                    tabIndex={3}
                    className="w-[900px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>
             
</div>
</div>

{/* Call Details End */}

{/* OTP Details */}

<div className='bg-white  '>
<div className="px-5 py-2">
<h2 className="text-black text-[22px] not-italic font-semibold leading-[normal] font-inter  px-4 py-2">Add OTP Details </h2>
</div>
<div className="flex flex-row space-x-20 px-20 py-2 ">
<div className="">
                <label
                  for="fullnameclient"
                  className="  block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
                >
                  Family Head Name{" "}
                </label>
                <div className=" p-0.5 w-[403px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="otpfullnameclient"
                    name="otpfullnameclient"
                   // value={otpfullnameclient}
                    onChange={handleInputChangeclient}
                    tabIndex={1}
                    className="w-[400px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
               
              </div>
              <div>

<label
  for="mobilenoclient"
  className=" block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
>
  Mobile No.{" "}
</label>
<div className=" p-0.5 w-[403px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
  <input
    type="number"
    id="otpmobilenoclient"
    name="otpmobilenoclient"
    //value={otpmobilenoclient}
    onChange={handleInputChangeclient}
    
    tabIndex={2}
    className="w-[400px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3 focus:outline-none  "
    required
  />
</div>
</div>
</div>
<div className="flex flex-row space-x-20 px-20 py-2 ">
<div>
                <label
                  for="Relation"
                  className=" block py-2 text-[18px] not-italic font-inter font-semibold text-[#1E1E1E] leading-normal"
                >
                  Relation{" "}
                </label>
                <div className=" p-0.5 w-[903px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                  <input
                    type="text"
                    id="otprelation"
                    name="otprelation"
                    //value={otprelation}
                    onChange={handleInputChangeclient}
                   // value={data.emailidclient}
                   // onChange={handleChange}
                    tabIndex={3}
                    className="w-[900px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none"
                    required
                  />
                </div>
              </div>
             
</div>
</div>

{/* OTP Details End */}

<div className="bg-white px-20">
<div className="px-5 py-2">
<h2 className="text-black text-[22px] not-italic font-semibold leading-[normal] font-inter  px-4 py-2">Services</h2>
</div>


            <div className="flex flex-row gap-[7.5rem]">
              <div className="flex flex-col gap-2">
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" Accounting"
                    //value={data.services}
                    
                    className="accent-[#12B28C] w-4 h-4 "
                  />

                  <label
                    for="default-checkbox"
                    className="  px-3 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    Accounting{" "}
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" IT Return"
                   
                    chea
                    className="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="px-3 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    IT Return{" "}
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" TDS Return"
                    className="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="px-3 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                     TDS Return
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" GST Return"
                    className="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="px-3 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    GST Return{" "}
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" GST Registration"
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="px-3 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    GST Registration
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" ROC"
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="px-3 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    ROC
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value=" IT Litigations "
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="px-3 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    IT Litigations
                  </label>
                </div>
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="   GST Litigations "
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="px-3 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    GST Litigations
                  </label>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <div>
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="   Management Consultancy Services "
                    class="accent-[#12B28C] w-4 h-4 "
                  />
                  <label
                    for="default-checkbox"
                    className="px-3 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    Management Consultancy Services
                  </label>
                </div>
                <div className="block">
                  <input
                    id="default-checkbox"
                    type="checkbox"
                    name="services"
                    onChange={(e) => getServices(e)}
                    value="    Others : (write Services on below box) "
                    className="accent-[#12B28C] w-4 h-4"
                  />
                  <label
                    for="default-checkbox"
                    className="px-3 text-[#2C2C2E] text-[16px] not-italic font-semibold capitalize leading-normal "
                  >
                    Others : (write Services on below box)
                  </label>
                </div>
                <div className="py-2">
                  <div className="ml-5 p-0.5 w-[314px] h-[48px] hover:bg-gradient-to-r hover:from-[#7FB64E]  hover:to-[#12B28C]">
                    <input
                      id="write"
                      type="text"
                      name="write"
                      onChange={(e) => setWrite(e.target.value)}
                     value={write}
                      placeholder="Write Other Services You want"
                      className=" w-[310px] h-[45px] border border-[#D9D9D9] bg-[#fff]  p-3  focus:outline-none "
                    />
                  </div>
                </div>
              </div>
            </div>

            </div>

<div className="bg-white py-10 px-20 space-x-10">
    <a href="dashboard/solved">
    <button className="px-7 py-2 bg-[#12B28C] text-white "  onClick={handlePush}>Add</button>
    </a>
    <button className="px-7 py-2 border-[#211F3B] border-2 text-black">Cancel</button>
</div>

</form>
</div>
        </div>
    )
}

export default Addtocrm;