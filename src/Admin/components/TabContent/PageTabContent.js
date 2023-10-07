import React from 'react'

const BrandPageTabContent = ({ id, activeTab, children }) => {
     return (
          activeTab === id ?
               <div className="py-0.5 w-full">
                    <div className='flex flex-wrap items-center mx-auto w-full'>
                         {children}
                    </div>
               </div>
               : null
     )
}

export default BrandPageTabContent