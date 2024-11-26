const Card = ({ children, className }) => (
    <div className={`rounded-lg border bg-white shadow-sm ${className || ''}`}>
      {children}
    </div>
  )
  
  const CardHeader = ({ children, className }) => (
    <div className={`p-6 ${className || ''}`}>
      {children}
    </div>
  )
  
  const CardTitle = ({ children, className }) => (
    <h3 className={`text-2xl font-semibold ${className || ''}`}>
      {children}
    </h3>
  )
  
  const CardContent = ({ children, className }) => (
    <div className={`p-6 pt-0 ${className || ''}`}>
      {children}
    </div>
  )
  
  export { Card, CardHeader, CardTitle, CardContent }
  
  // src/components/ui/tabs.jsx
  import { useState } from 'react'
  
  const Tabs = ({ children, value, onValueChange }) => {
    return (
      <div className="w-full">
        {children}
      </div>
    )
  }
  
  const TabsList = ({ children, className }) => (
    <div className={`inline-flex w-full rounded-lg bg-gray-100 p-1 ${className || ''}`}>
      {children}
    </div>
  )
  
  const TabsTrigger = ({ children, value, className, onClick }) => (
    <button
      className={`flex-1 rounded-md px-3 py-2 text-sm font-medium transition-all 
        ${className || ''} 
        ${value === window.activeTab ? 'bg-white shadow-sm' : 'text-gray-600 hover:bg-gray-50'}`}
      onClick={() => onClick?.(value)}
    >
      {children}
    </button>
  )
  
  const TabsContent = ({ children, value }) => {
    return value === window.activeTab ? <div className="mt-4">{children}</div> : null
  }
  
  export { Tabs, TabsList, TabsTrigger, TabsContent }