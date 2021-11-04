import { TrashIcon } from "@heroicons/react/solid";
import React, { useState } from "react";

export const OrderTable = () => {
  const [edit, setEdit] = useState(false);
  const handleChange = () => {
    setEdit(!edit);
  };
  const people = [
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      department: "Optimization",
      role: "Admin",
      email: "jane.cooper@example.com",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
    },
    // More people...
  ];

  return (
    <tbody className="bg-white divide-y divide-gray-200">
      {people.map((person) => (
        <tr key={person.email}>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src={person.image}
                  alt=""
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {person.name}
                </div>
                <div className="text-sm text-gray-500">{person.email}</div>
              </div>
            </div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <div className="text-sm text-gray-900">{person.title}</div>
            <div className="text-sm text-gray-500">{person.department}</div>
          </td>
          <td className="px-6 py-4 whitespace-nowrap">
            <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
              Active
            </span>
          </td>
          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
            {person.role}
          </td>
          <td className="px-6 w-32 py-4 whitespace-nowrap text-right text-sm font-medium">
            <p className="text-indigo-600 hover:text-indigo-900">
              {edit ? (
                <span className="flex items-center">
                  <TrashIcon className="w-6 text-red-600 h-6 mx-2" />
                  <span onClick={handleChange}>Done</span>
                </span>
              ) : (
                <span onClick={handleChange}>Edit</span>
              )}
            </p>
          </td>
        </tr>
      ))}
    </tbody>
  );
};
