import { Avatar, Typography, Button } from "@material-tailwind/react";
import { useState } from "react";

import { Table } from "@/components/Table";
import { Modal } from "@/components/Modal";

import "@/css/sample.css";

import {
  MapPinIcon,
  BriefcaseIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import { Footer } from "@/widgets/layout";

export function InvoiceNew() {
    const [modalOpen, setModalOpen] = useState(false);
  const [rows, setRows] = useState([
    
  ]);
  const [rowToEdit, setRowToEdit] = useState(null);

  const handleDeleteRow = (targetIndex) => {
    setRows(rows.filter((_, idx) => idx !== targetIndex));
  };

  const handleEditRow = (idx) => {
    setRowToEdit(idx);

    setModalOpen(true);
  };

  const handleSubmit = (newRow) => {
    rowToEdit === null
      ? setRows([...rows, newRow])
      : setRows(
          rows.map((currRow, idx) => {
            if (idx !== rowToEdit) return currRow;

            return newRow;
          })
        );
  };
  return (
    <>
      <section className="relative block h-[50vh]">
        <div className="bg-profile-background absolute top-0 h-full w-full bg-[url('/img/background-1.jpg')] bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full bg-black/75 bg-cover bg-center" />
      </section>
      <section className="relative bg-blue-gray-50/50 py-16 px-4 flex flex-col items-center">
        <Table rows={rows} deleteRow={handleDeleteRow} editRow={handleEditRow} />
        <button onClick={() => setModalOpen(true)} className="btn">
            Add
        </button>
        {modalOpen && (
            <Modal
            closeModal={() => {
                setModalOpen(false);
                setRowToEdit(null);
            }}
            onSubmit={handleSubmit}
            defaultValue={rowToEdit !== null && rows[rowToEdit]}
            />
        )}
      </section>
      <div className="bg-blue-gray-50/50">
        <Footer />
      </div>
    </>
  );
}

export default InvoiceNew;
