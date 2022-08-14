import React from "react";

class SearchNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };

    this.onSearchChangeEventHandler =
      this.onSearchChangeEventHandler.bind(this);
    this.onKeyUpChangeEventHandler = this.onKeyUpChangeEventHandler.bind(this);
  }

  onSearchChangeEventHandler(event) {
    this.setState(() => {
      return {
        search: event.target.value,
      };
    });
  }

  onKeyUpChangeEventHandler(event) {
    event.preventDefault();
    this.props.onSearch(this.state);
  }

  render() {
    return (
      <input
        type="text"
        className="font-poppins py-[15px] px-[20px] border-dark-blue border-[2px] border-opacity-30 bg-white font-bold rounded-[10px] cursor-pointer placeholder:text-[#BB6DFF] placeholder:font-[500]"
        placeholder="Search your note here .."
        value={this.state.search}
        onChange={this.onSearchChangeEventHandler}
        onKeyUp={this.onKeyUpChangeEventHandler}
      ></input>
    );
  }
}

export default SearchNote;
