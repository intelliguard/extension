async function Buttoncreation(){
    const wait = (amount = 0) => new Promise(resolve => setTimeout(resolve, amount));
    await wait(2000);
    console.log("modifyer started");
    // Get the parent element
    var parent = document.querySelector('.css-1dbjc4n.r-1awozwy.r-6koalj.r-18u37iz');

    // Create a new div element
    var newDiv = document.createElement('div');

    // Add the new div as the first child of the parent element
    parent.insertBefore(newDiv, parent.firstChild);

    // Create a button element
    var button = document.createElement('button');

    // Set button's text content
    button.textContent = 'Analyse';

    // Add button to the new div element
    newDiv.appendChild(button);

    // Add Event Listener
    button.addEventListener('click', function() {
    alert(`send the ID: ${tweetId} to the server`);
    //TODO
    });

    // Give the elements a class
    newDiv.className = 'my-div';
    button.id = 'my-button';
}
Buttoncreation()