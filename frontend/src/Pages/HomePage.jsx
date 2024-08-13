import React, { useEffect, useState } from 'react';
import DownloadReportButton from '../Components/DownloadReport';

function HomePage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reportData, setreportData] = useState({
    name: 'ALBERT',
    age: '22/Male',
    doctor: 'SELF',
    sampleCollectedAt: '07-07-2023 09:37:40',
    tests: [
      {
        description: 'FASTING BLOOD SUGAR (FBS)',
        value: '81 mg/dl',
        referenceInterval: '70-110 mg/dl',
      },
    
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await apiInstance.get("/get-report", {
          withCredentials: true,
        });

        if (response.data && Array.isArray(response.data.students)) {
          setreportData(response.data.reportData);
        }
      } catch (error) {
        console.error("Error fetching user-report:", error);
      }
    };

    fetchData();
  }, []);

  const images = [
    'https://graphicsfamily.com/wp-content/uploads/edd/2022/04/Social-Media-Banner-Design-for-Health-and-Medical-Promotion-1180x664.jpg',
    'https://www.asterhospitals.in/sites/default/files/styles/optimize_images/public/2021-01/Aster-MIMS-Kannur-Hospital-1_0.jpg.webp?itok=b_sdID80',
     'https://healthcaresnapshots.com/wp-content/uploads/sites/5/2021/03/banner-university-medical-center-tucson-new-patient-tower-renovation-6-1200x800-compact.jpg',
    'https://img.freepik.com/premium-photo/blurred-hospital-corridor-emphasizing-fastpaced-environment-focus-healthcare-treatment_674594-67800.jpg?w=1060',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <>
      <div id="default-carousel" className="relative w-full mt-16">
        {/* Carousel wrapper */}
        <div className="relative h-[600px] overflow-hidden rounded-lg md:h-screen">
          {images.map((src, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                index === activeIndex ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <img
                src={src}
                className="block w-full h-full object-cover"
                alt={`Slide ${index + 1}`}
              />
            </div>
          ))}
        </div>
        {/* Slider indicators */}
        <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${index === activeIndex ? 'bg-white' : 'bg-gray-400'}`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
        {/* Slider controls */}
        <button
          type="button"
          className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handlePrev}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          onClick={handleNext}
        >
          <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
        
        {/* Download Report Button */}
        <div className="absolute z-50  bg-cyan-200  hover:bg-transparent text-black p-4 rounded-lg top-3/4 right-1/2 ">
          <DownloadReportButton reportData={reportData} />
        </div>
      </div>
    </>
  );
}

export default HomePage;
