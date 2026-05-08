// Event Bubbling     (target element) child -> parent -> grandparent (parent)
// Event Capturing   (parent) grandparent -> parent -> child (target element)
// StopPropagation (to stop the event from bubbling up or capturing down)
// preventDefault (to prevent the default behavior of an element, e.g., preventing a link from navigating)

function Events() {
  return (
    <div
      onClickCapture={() => console.log("Grandparent Capture")}
      onClick={() => console.log("Grandparent Bubble")}
    
    >
      

      <div
        onClickCapture={() => console.log("Parent Capture")}
        onClick={(e) => console.log("Parent Bubble")}
        
      >
        

        <button
          onClickCapture={() => console.log("Child Capture")}
    
          onClick={(e) => {e.stopPropagation();
          console.log("Child Bubble stopped here")}}
         
        >
          Click Events
        </button>
        <a href="https://www.google.com" onClick={(e) => { e.preventDefault();}}>
          Visit Google
        </a>
      </div>
    </div>
  );
}

export default Events;