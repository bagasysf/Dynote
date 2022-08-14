import React from "react";
import { getData } from "../utilities/data";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

class DynoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getData(),
      search: "",
      selected: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchivedHandler = this.onArchivedHandler.bind(this);
    this.onSearchHandler = this.onSearchHandler.bind(this);
  }

  onAddNoteHandler({ name, desc }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            name,
            category: false,
            date: "Kamis, 07 Februari 2022",
            desc,
          },
        ],
      };
    });
  }

  onSearchHandler({ search }) {
    this.setState(() => {
      return { search: search.toLowerCase() };
    });
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchivedHandler(id) {
    let notes = this.state.notes.map((note) => {
      if (note.id === id) {
        return { ...note, category: !note.category };
      }
      return note;
    });
    this.setState({ notes });
  }

  render() {
    const filteredNotes = !this.state.search
      ? this.state.notes
      : this.state.notes.filter((note) =>
          note.name.toLocaleLowerCase().match(this.state.search)
        );

    return (
      <>
        <Header />
        <Main
          notes={filteredNotes}
          onDelete={this.onDeleteHandler}
          onArchived={this.onArchivedHandler}
          addNote={this.onAddNoteHandler}
          onSearch={this.onSearchHandler}
          onFilter={this.onFilterHandler}
        />
        <Footer />
      </>
    );
  }
}

export default DynoteApp;
