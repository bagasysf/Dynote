import React from "react";
import ButtonInput from "./ButtonInput";

class FormCreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      desc: "",
    };

    this.onNameChangeEventHandler = this.onNameChangeEventHandler.bind(this);
    this.onDescChangeEventHandler = this.onDescChangeEventHandler.bind(this);
    this.onSubmitChangeEventHandler =
      this.onSubmitChangeEventHandler.bind(this);
  }

  onNameChangeEventHandler(event) {
    this.setState(() => {
      return {
        name: event.target.value,
      };
    });
  }

  onDescChangeEventHandler(event) {
    this.setState(() => {
      return {
        desc: event.target.value,
      };
    });
  }

  onSubmitChangeEventHandler(event) {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState(() => {
      return {
        name: "",
        desc: "",
      };
    });
  }

  render() {
    return (
      <form
        className="flex flex-col py-[60px] px-[20px] md:px-[40px] gap-[20px] font-poppins"
        onSubmit={this.onSubmitChangeEventHandler}
      >
        <input
          type="text"
          className="h-[54px] rounded-[10px] px-[20px] py-[15px] border-dark-blue border-[2px] border-opacity-30 text-[#7E22CE] font-[700] placeholder:text-[#BB6DFF] placeholder:font-[500]"
          placeholder="Type title here .."
          value={this.state.name}
          onChange={this.onNameChangeEventHandler}
        />
        <textarea
          className="rounded-[10px] h-[244px] py-[15px] px-[20px] border-dark-blue border-[2px] border-opacity-30 text-[#7E22CE] font-[700]  placeholder:text-[#BB6DFF] placeholder:font-[500]"
          placeholder="Type description here .."
          value={this.state.desc}
          onChange={this.onDescChangeEventHandler}
        ></textarea>
        <ButtonInput className="w-full" />
      </form>
    );
  }
}

export default FormCreateNote;
