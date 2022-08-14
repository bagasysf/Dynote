import React, { useState } from "react";
import Card from "./Card";
import FilterNote from "./FilterNote";
import FooterLarge from "./FooterLarge";
import FormCreateNote from "./FormCreateNote";
import SearchNote from "./SearchNote";

function Main({ onDelete, onArchived, addNote, onSearch, notes }) {
  const [selected] = useState("");

  return (
    <main className="md:grid md:grid-cols-1 lg:grid-cols-5">
      <section className="md:col-span-2">
        <FormCreateNote addNote={addNote} />
        <FooterLarge />
      </section>
      <section className="px-[20px] md:px-[40px] py-[60px] bg-fade-purple col-span-3">
        <div className="flex flex-col gap-[20px]">
          <FilterNote selected={selected} />
          <SearchNote onSearch={onSearch} />
          <div className="grid md:grid-cols-2 gap-[20px] md:flex-row">
            {notes.map((note) => (
              <Card
                key={note.id}
                id={note.id}
                onDelete={onDelete}
                onArchived={onArchived}
                {...note}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;
