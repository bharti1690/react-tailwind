import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
} from 'chart.js';
import { Line,Bar } from 'react-chartjs-2';
import { useState } from "react";
import Table from "../Table/Table";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Data | Survey',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const lineLabels = ['Ford', 'Nissan', 'Audi', 'Honda', 'Hyundai', 'Infiniti', 'Bentley'];

export const data = {
  labels,
  datasets: [
   {label: 'My First Dataset',
   data: [300, 50, 100,200,329],
   backgroundColor: [
    '#00308F',
    '#7CB9E8',
     'rgb(255, 205, 86)'
   ],
   hoverOffset: 4,
   borderColor: 'rgb(255, 99, 132)'
   }
  ],
};
export const lineData = {
  labels,
  datasets: [
   {label: 'My First Dataset',
   fill:true,
   data: [300, 50, 100,80,65,70],
   borderColor: 'rgb(53, 162, 235)',
  backgroundColor: 'rgba(53, 162, 235, 0.5)',
   hoverOffset: 4
   }
  ],
};

export function Dashboard(){
  const [dropdownVal,setDropdown] = useState(false);
    
    return(
        <>
             <Navbar/>
             <div className="flex">
                <div className="flex flex-col h-screen p-3 bg-white shadow w-60">
                  <Sidebar/>
                </div>
                <div className="container mx-auto mt-12">
                   <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                  <h2><strong>Analytics</strong></h2>
                  <div></div>
                  <div>Time Period | 
                      <div className="inline-flex bg-white border rounded-md">
                            <a href="#" className="px-4 py-2 text-sm text-gray-600 hover:text-gray-700 hover:bg-gray-50 rounded-l-md" >
                               Day(24Hrs)
                            </a>

                 <div className="relative">
                       <button onClick={()=>setDropdown(!dropdownVal)} type="button"
                        className="inline-flex items-center justify-center h-full px-2 text-gray-600 border-l border-gray-100 hover:text-gray-700 rounded-r-md hover:bg-gray-50"
                          >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>
                {dropdownVal ? <div className="absolute right-0 z-10 w-56 mt-4 origin-top-right bg-white border border-gray-100 rounded-md shadow-lg">
                    <div className="p-2">
                        <a href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >8 Hours </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >10 Hours </a>
                        <a
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-500 rounded-lg hover:bg-gray-50 hover:text-gray-700"
                        >12 hours</a>
                    </div>
                </div> : null}
            </div>
        </div>
                  </div>
                  
                </div>
                <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <Line options={options} data={data} />
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                        <Bar options={options} data={data} />
                    </div>
                    <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                    <Line options={options} data={lineData} />
                </div>  
                </div>
                    <Table />
               </div>
             </div>
        </>
    );
}

export default Dashboard;