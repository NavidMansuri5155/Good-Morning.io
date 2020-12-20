// import React, { Component } from "react";

// class counter extends Component {
//   state = {
//     count: 0,
//     tags : ["tag1","tag2","tag3"]
//   };

//   render() {
    

//     return (
//       <div>
//         <span className={this.colorClasses()}>{this.formatCount()}</span>
//         <button className="btn btn-secondary btn-sm">submit</button>
//         <ul>
//           {this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
//         </ul>
//       </div>
//     );
//   }
//   colorClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.count === 0 ? "warning" : "danger";
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return this.state.count === 0 ? <b>// ZERO // </b> : count;
//   }
// }

// export default counter;
