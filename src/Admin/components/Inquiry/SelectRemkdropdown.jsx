import React,{useState} from 'react'

function SelectRemkdropdown({selected , setSelected}) {
    const [isActive , SetIsActive ]=useState(false)
    const option =['Select Remarks']
  return (
    <>
      <label
              for="Remark"
              className="block mb-2 font-inter text-[18px] not-italic  font-semibold text-[#1E1E1E] leading-normal"
            >
              Remark{" "}
            </label>
    <div className='dropdown w-[250px] md:w-[380px]  lg:w-[380px] h-[40px] relative  z-40 ' >
        <div className='  w-[250px] md:w-[380px]  lg:w-[380px] h-[40px] bg-[#E7E7E7] text-[18px] font-medium not-italic leading-normal text-center p-2  dropdown-btn rounded-[12px]' 
        
        onClick={(e)=> SetIsActive(!isActive)}> 
      
      {selected }

      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"  className='absolute bottom-[0.3rem] right-[1rem] h-8 w-10 lg:bottom-[0.3rem] lg:right-[5rem] lg:h-8 lg:w-10 md:bottom-[0.4rem] md:right-[3rem] '>
  <path d="M5.29289 9.29289C5.68342 8.90237 6.31658 8.90237 6.70711 9.29289L12 14.5858L17.2929 9.29289C17.6834 8.90237 18.3166 8.90237 18.7071 9.29289C19.0976 9.68342 19.0976 10.3166 18.7071 10.7071L12.7071 16.7071C12.3166 17.0976 11.6834 17.0976 11.2929 16.7071L5.29289 10.7071C4.90237 10.3166 4.90237 9.68342 5.29289 9.29289Z" fill="#0D0D0D"/>
</svg>
      {/* <svg width="53" height="41" viewBox="0 0 53 41" fill="none" className='absolute bottom-0 right-0 h-8 w-10    ' xmlns="http://www.w3.org/2000/svg">
<path d="M0.898438 0.558594H32.8984C43.9441 0.558594 52.8984 9.5129 52.8984 20.5586C52.8984 31.6043 43.9441 40.5586 32.8984 40.5586H0.898438V0.558594Z" fill="#1A477A"/>
<path d="M24.9259 21.7714C24.9665 21.7166 24.9984 21.6597 25.0428 21.6153C26.8544 19.7994 28.666 17.9837 30.4795 16.17C31.3773 15.2722 32.8108 15.3828 33.534 16.4016C34.0962 17.1938 34.0001 18.2671 33.3 18.9683C31.3245 20.9474 29.348 22.9257 27.3716 24.9043C27.0284 25.2479 26.6852 25.5915 26.3418 25.9354C25.5126 26.7654 24.2905 26.7671 23.4594 25.9359C21.9602 24.437 20.4632 22.9361 18.9651 21.436C18.1409 20.6106 17.3115 19.7898 16.4938 18.9576C15.9411 18.3949 15.7668 17.7153 15.9978 16.963C16.2274 16.2155 16.7509 15.752 17.5185 15.6005C18.1976 15.4664 18.7987 15.6558 19.2917 16.142C20.0609 16.9006 20.8203 17.6693 21.5838 18.4336C22.6584 19.5097 23.7329 20.5858 24.8077 21.6619C24.8363 21.6905 24.8668 21.7169 24.9254 21.7717L24.9259 21.7714Z" fill="#FFA412"/>
</svg> */}
            {/*<span className='fas fa-caret-down  text-[#A8642A]  ml-[8rem] w-[1.5rem] h-[1.5rem]  bg-[#1A477A]  rounded-r-full'></span>*/}
        </div>

                    {isActive && (
                             <div className="absolute top[110px] p-[15px] my-2   bg-[#E7E7E7] shadow-stone-900 left-0 w-[100%] drop-shadow-md  dropdown-contain">

                           

                              
                               
                                {option.map((option) =>(
                                     <div className="dropdown-item p-[10px] cursor-pointer text-center "
                                      onClick={(e)=>{ 
                                        setSelected(option)
                                        SetIsActive(false);
                                      }
                                     }>
                                       {option}
                                     </div>
                                ))}

                            
                             
                         </div>
                    )}

       

    </div>
    </>
  )
}

export default SelectRemkdropdown