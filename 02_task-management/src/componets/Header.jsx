import React from 'react'

const Header = () => {
  return (
    <header className="h-16 w-full bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div className="flex flex-col">
        <h1 className="text-lg font-bold text-gray-900">John Doe</h1>
        <p className="text-xs text-gray-500">Acme Corporation</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-indigo-500 text-white flex items-center justify-center text-sm font-bold">
          JD
        </div>
      </div>
    </header>

  )
}

export default Header