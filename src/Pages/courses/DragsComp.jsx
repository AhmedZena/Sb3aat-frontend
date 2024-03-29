import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "./SortableItem";
import Accordion from "@mui/material/Accordion";
import AccordionActions from "@mui/material/AccordionActions";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import { useState } from "react";
function DragsComp() {
  const [items, setItems] = useState([]);
  let idRandom = Math.random();
  const [newItem, setNewItem] = useState({
    id: idRandom,
    title: "",
    subItems: [],
  });

  // Add item
  const addItem = (item) => {
    let newItem = {
      id: idRandom,
      title: item.title,
      subItems: [],
    };
    setItems([...items, newItem]);
    setNewItem({ title: "", subItems: [] });
  };

  // Add sub-item
  const addSubItem = (item, subItem) => {
    console.log(item, subItem);

    // add subItem to the item
    const newItems = [...items];
    const index = newItems.findIndex((i) => i.id === item.id);
    newItems[index].subItems.push(subItem);
    setItems(newItems);

    console.log(newItems);
  };

  //   remove sub-item
  const removeSubItem = (item, subItem) => {
    console.log(item, subItem);

    // add subItem to the item
    const newItems = [...items];
    const index = newItems.findIndex((i) => i.id === item.id);
    newItems[index].subItems = newItems[index].subItems.filter(
      (i) => i.id !== subItem.id
    );
    setItems(newItems);

    console.log(newItems);
  };

  function handleDragEnd(event) {
    const { active, over } = event;
    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);
        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }
  return (
    <>
      <input
        type="text"
        placeholder="Enter Item Name"
        onChange={(e) => setNewItem({ title: e.target.value, subItems: [] })}
        className="w-full my-1 px-4 py-2 border-2 border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
      />

      <button
        onClick={() => addItem(newItem)}
        className="block px-4 py-2 bg-green-400 text-black font-semibold rounded-md shadow hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
      >
        Add Lecture Name
      </button>

      {/* <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext items={items} strategy={verticalListSortingStrategy}> */}
      {items.map((item, index) => (
        <React.Fragment key={index}>
          <SortableItem
            id={item.id}
            title={item.title}
            subItems={item.subItems}
            addSubItem={addSubItem}
            removeSubItem={removeSubItem}
          />
        </React.Fragment>
      ))}
      {/* </SortableContext>
      </DndContext> */}
    </>
  );
}

export default DragsComp;
