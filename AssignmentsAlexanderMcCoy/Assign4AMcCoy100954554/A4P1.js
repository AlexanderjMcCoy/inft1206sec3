document.addEventListener('DOMContentLoaded', function() {
  const customname = document.getElementById('customname');
  const randomize = document.querySelector('.randomize');
  const story = document.querySelector('.story');

  function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];}

  let storyText = "It was 94 fahrenheit outside, so :insertperson: went for a walk. When they got to :insertPlace:, they stared in horror for a few moments, then :insertEnding:. Bob saw the whole thing, but was not surprised :insertperson: weighs 300 pounds, and it was a hot day.";
  let insertPerson = ['John Cena', 'Marshal Mathers', 'Thomas Jefferson'];
  let insertPlace = ['The Beer Store', 'Epstein Island', 'Guantanamo Bay'];
  let insertEnding = ['exploded randomly into a million pieces', 'went BOOM', 'lived happily ever after (not)'];
  randomize.addEventListener('click', result);

  function result() {
    let newStory = storyText;
    const person = randomValueFromArray(insertPerson);
    const place = randomValueFromArray(insertPlace);
    const ending = randomValueFromArray(insertEnding);
    newStory = newStory.replace(/:insertperson:/g, person);
    newStory = newStory.replace(/:insertPlace:/g, place);
    newStory = newStory.replace(/:insertEnding:/g, ending);
    
    if (customname.value !== '') {
      const name = customname.value;
      newStory = newStory.replace('Bob', name);}

    if (document.getElementById("uk").checked) {
      const weight = Math.round(300 * 0.07) + ' stone';
      const temperature = Math.round((94 - 32) * 5 / 9) + ' C';
      newStory = newStory.replace('300 pounds', weight);
      newStory = newStory.replace('94 fahrenheit', temperature);} 
    else {
      newStory = newStory.replace('300 pounds', '300 pounds');
      newStory = newStory.replace('94 fahrenheit', '94 fahrenheit');}
    story.textContent = newStory;
    story.style.visibility = 'visible';}});
