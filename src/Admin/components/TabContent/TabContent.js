import React from 'react'

const TabContent = ({ id, activeTab, children }) => {
     return (
          activeTab === id ?
               <div className="py-4 w-full">
                    <div className='flex flex-wrap items-center mx-auto w-full'>
                         {children}
                    </div>
               </div>
               : null
     )
}

export default TabContent