import { useState } from "react";

const ProductDescriptionReview = () => {
  const [activeTab, setActiveTab] = useState("Description");

  const tabs = ["Description", "Reviews", "Return Policy"]

  return (
    <div className="container mt-20">
      <nav className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-lg px-4 py-2 focus:outline-none ${activeTab === tab
              ? 'border-b-2 border-blue-500 text-blue-500'
              : 'text-gray-500 hover:text-gray-700'
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </nav>

      <div className="p-4">
        {activeTab === 'Description' && <div>Description</div>}
        {activeTab === 'Reviews' && <div>Reviews</div>}
        {activeTab === 'Return Policy' && <div>Return Policy</div>}
      </div>
    </div>
  )
}

export default ProductDescriptionReview