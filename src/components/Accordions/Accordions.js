import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Accordions = () => {
  return (
    <div className="py-5">
      <h1 className="text-center mb-3 text-4xl font-bold">FAQs</h1>
      {/* Accordion 1 */}
      <div
        tabIndex={0}
        className="w-[700px] mx-auto collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
            <FontAwesomeIcon className="text-gray-600 mr-2" icon={faInfoCircle}/>
          How Does React Work?
        </div>
        <div className="collapse-content">
          <p>
          ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.
          </p>
        </div>
      </div>
      {/* Accordion 2 */}
      <div
        tabIndex={0}
        className="w-[700px] mx-auto mt-2 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
            <FontAwesomeIcon className="text-gray-600 mr-2" icon={faInfoCircle}/>
          Difference Between Props and State
        </div>
        <div className="collapse-content">
          <p>
          Props are used to pass data from one component to another. The state is a local data storage that is local to the component only and cannot be passed to other components. The this. setState property is used to update the state values in the component
          </p>
        </div>
      </div>
      {/* Accordion 3 */}
      <div
        tabIndex={0}
        className="w-[700px] mx-auto mt-2 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box"
      >
        <div className="collapse-title text-xl font-medium">
            <FontAwesomeIcon className="text-gray-600 mr-2" icon={faInfoCircle}/>
            Use of useEffect
        </div>
        <div className="collapse-content">
          <p>
          What does useEffect do? By using this Hook, we tell React that our component needs to do something after render. React will remember the function we passed, and call it later after performing the DOM updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Accordions;
