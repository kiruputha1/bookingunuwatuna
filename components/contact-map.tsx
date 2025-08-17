"use client"

export default function ContactMap() {
  return (
    <div className="bg-gray-100 rounded-lg overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-tourism-teal/20 to-tourism-navy/20 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-tourism-teal rounded-full flex items-center justify-center mx-auto mb-4">
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          </div>
          <h3 className="font-serif text-lg font-bold text-tourism-navy mb-2">Visit Our Office</h3>
          <p className="text-gray-600 mb-4">123 Galle Road, Colombo 03, Sri Lanka</p>
          <button
            onClick={() => window.open("https://maps.google.com/?q=123+Galle+Road,+Colombo+03,+Sri+Lanka", "_blank")}
            className="inline-flex items-center px-4 py-2 bg-tourism-teal text-white rounded-lg hover:bg-tourism-teal/90 transition-colors"
          >
            <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>
            View on Google Maps
          </button>
        </div>
      </div>
    </div>
  )
}
