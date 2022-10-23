import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { requestUsers } from "../../action";
import data from "../../data.json";

export function Table(){
  const usersData:any = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(requestUsers(data));
  }, []);

    return(
      <>
        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-2" > 
        <table className="table-auto min-w-full divide-y divide-gray-200">
                    <thead>
                        <tr>
                        <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Name</th>
                        <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Order Status</th>
                        <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Email</th>
                        <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Advertising</th>
                        <th className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase ">Invoice</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                    <tr>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">David</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Pending</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">david@gmail.com</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Facebook</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">$1200</td>
                        </tr>
                        <tr>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Sean Parker</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">In Transit</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Sean@gmail.com</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Instagram</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">$500</td>
                        </tr>
                        <tr>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">John</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Delivered</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">John@gmail.com</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Facebook</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">$600</td>
                        </tr>
                        <tr>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Michael Smith</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Pending</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Smith@gmail.com</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">Whatsapp</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">$800</td>
                        </tr>
                    {/* {usersData && usersData.map((val:any)=>{
                        <tr>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{val.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{val.email}</td>
                        <td className="px-6 py-4 text-sm text-gray-800 whitespace-nowrap">{val.post}</td>
                        </tr>
                    })} */}
                    </tbody>
            </table>
        </div>
        </>
    );

}

export default Table;