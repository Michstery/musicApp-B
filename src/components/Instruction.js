import React from "react";

const Instruction = () => {
  return (
    <div style={{ paddingTop: "30px" }} className="card">
      <div className="row">
        <div className="col-md-6">
          <div className="card header">
            <h3 style={{ padding: "10px" }}> HOW TO USE THE APP </h3>
          </div>
          <div className="card body">
            <ol style={{ margin: "10px" }}>
              <li style={{ margin: "10px" }}>
                Click On The "Give Command" Button.
              </li>
              <li style={{ margin: "10px" }}>
                You Should See A Red Record Flash On Your Tab.
              </li>
              <li style={{ margin: "10px" }}>
                You Have About 7 Seconds To Say The Mood You Want From The List.
              </li>
              <li style={{ margin: "10px" }}>
                After Stating Your Mood, A Tab Should Appear On The Right.
              </li>
              <li style={{ margin: "10px" }}>
                This Tab Contains The Song Relating To The Mood You Choose.
              </li>
              <li style={{ margin: "10px" }}>
                It Immediately Starts Playing A Song From The List.
              </li>
              <li style={{ margin: "10px" }}>
                You Can Choose Any Song You Want.
              </li>
            </ol>
            <h2 style={{ padding: "10px" }}> Alternative </h2>
            <hr />
            <ul>
              <li>
                Click On A Mood And Play A Song From The Song List That Appears
                On The Right Tab
              </li>
            </ul>
          </div>
          {/* <div style={{ paddingTop: "20px" }} className="footer">
            .
          </div> */}
        </div>
        <div className="col-md-6">
          <div className="card header">
            <h3 style={{ padding: "10px" }}> HOW TO USE THE APP </h3>
          </div>
          <div className="card body">
            <ol style={{ margin: "10px" }}>
              <li style={{ margin: "10px" }}>
                Click On The "Give Command" Button.
              </li>
              <li style={{ margin: "10px" }}>
                You Should See A Red Record Flash On Your Tab.
              </li>
              <li style={{ margin: "10px" }}>
                You Have About 7 Seconds To Say The Mood You Want From The List.
              </li>
              <li style={{ margin: "10px" }}>
                After Stating Your Mood, A Tab Should Appear On The Right.
              </li>
              <li style={{ margin: "10px" }}>
                This Tab Contains The Song Relating To The Mood You Choose.
              </li>
              <li style={{ margin: "10px" }}>
                It Immediately Starts Playing A Song From The List.
              </li>
              <li style={{ margin: "10px" }}>
                You Can Choose Any Song You Want.
              </li>
            </ol>
            <h2 style={{ padding: "10px" }}> Alternative </h2>
            <hr />
            <ul>
              <li>
                Click On A Mood And Play A Song From The Song List That Appears
                On The Right Tab
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Instruction;
