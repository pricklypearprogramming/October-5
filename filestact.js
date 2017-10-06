import ReactFilestack, { client } from "filestack-react";
import React from "react";

export default class Test extends React.Component {
  constructor(props) {
    super(props);
  }

  onUpload = () => {
    console.log("Document Uploaded Successfully");
    return <h2>Document Uploaded sccessfully</h2>;
  };

  render() {
    const options = {
      accept: "image/*",
      maxFiles: 5,
      storeTo: {
        location: "s3"
      }
    };

    return (
      <div>
        <ReactFilestack
          apikey={"AM3C7NeXSQVuqffyC7Wbpz"}
          buttonText="Click me"
          buttonClass="classname"
          options={options}
          onSuccess={this.onUpload}
        />
      </div>
    );
  }
}
