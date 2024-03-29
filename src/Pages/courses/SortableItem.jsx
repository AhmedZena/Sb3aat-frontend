import React, { useEffect } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { LuMonitorPlay } from "react-icons/lu";
// removeSubItem
export default function SortableItem(props) {
  const [expanded, setExpanded] = React.useState(false);
  const [subItem, setSubItem] = React.useState({
    id: Math.random(),
    type: "video",
    subTitle: "",
    link: "",
  });

  const handleChange = () => {
    setExpanded(!expanded);
  };

  const addInputInSubItem = (e) => {
    e.preventDefault();
    console.log(e.target.name, e.target.value);
    setSubItem({ ...subItem, [e.target.name]: e.target.value });
    if (e.target.name === "type") {
      setSubItem({ ...subItem, type: e.target.value });
    }
  };

  useEffect(() => {
    console.log(subItem);

    setSubItem({
      ...subItem,
      duration: "",
      subTitle: "",
      link: "",
    });
  }, [subItem.type]);

  const handleAddSubItem = () => {
    // change id
    const newId = Math.random();
    setSubItem({ ...subItem, id: newId });

    props.addSubItem(props, subItem);
  };

  return (
    <div className="bg-green-400 rounded-lg m-2 p-4 shadow-md">
      <Accordion expanded={expanded} onChange={handleChange}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
          className="font-bold"
        >
          <p className="text-green-800">{props.title}</p>
        </AccordionSummary>
        <AccordionDetails>
          <>
            <select
              defaultValue={subItem.type}
              name="type"
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
              onChange={(e) => addInputInSubItem(e)}
            >
              <option value="pdf">PDF</option>
              <option value="video">Video</option>
            </select>
            <input
              type="text"
              name="subTitle"
              placeholder="Enter Title "
              value={subItem.subTitle}
              onChange={(e) => addInputInSubItem(e)}
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
            />
            <input
              type="text"
              name="link"
              placeholder="Enter link "
              value={subItem.link}
              onChange={(e) => addInputInSubItem(e)}
              className="border-2 border-gray-300 p-2 rounded-lg w-full"
            />
            {subItem.type === "video" ? (
              <>
                <input
                  type="text"
                  name="duration"
                  placeholder="Enter video duration"
                  value={subItem.duration}
                  onChange={(e) => addInputInSubItem(e)}
                  className="border-2 border-gray-300 p-2 rounded-lg w-full"
                />
              </>
            ) : (
              <></>
            )}

            <button
              className="bg-green-500 text-white p-2 rounded-lg"
              //   onClick={() => {
              //     props.addSubItem(props, subItem);
              //   }}
              onClick={handleAddSubItem}
            >
              Add
            </button>
          </>
          {props.subItems && props.subItems.length > 0 ? (
            <table className=" mx-auto">
              <thead>
                <tr>
                  {/* <th className=" p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    S/N
                  </th> */}
                  <th className=" p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Title
                  </th>
                  <th className=" p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Type
                  </th>
                  <th className=" p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Duration
                  </th>
                  {/* action */}
                  <th className=" p-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {props.subItems.map((subItem, index) => (
                  <tr key={index}>
                    {/* id */}
                    {/* <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {subItem.id}
                      </p>
                    </td> */}
                    <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {subItem.subTitle}
                      </p>
                    </td>
                    <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                      <a
                        href={subItem.link}
                        className="text-blue-500 hover:text-blue-800"
                      >
                        {subItem.type}
                      </a>
                    </td>
                    <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                      <p className="text-gray-900 whitespace-no-wrap">
                        {subItem.duration}
                      </p>
                    </td>

                    {/* remove */}
                    <td className="px-2 py-2 border-b border-gray-200 bg-white text-sm">
                      <button
                        className="bg-red-500 text-white p-2 rounded-lg"
                        onClick={() => {
                          props.removeSubItem(props, subItem);
                        }}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            <p>No items to display.</p>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
