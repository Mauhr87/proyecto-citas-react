import React from 'react'

const Error = ({children}) => {
  return (
    <div>
        <div className="bg-red-800 text-white p-3 uppercase font-bold mb-3 rounded-sm">
            <p>{children}</p>
        </div>
    </div>
  )
}

export default Error