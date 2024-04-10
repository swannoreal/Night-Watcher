import React, { useState } from 'react';

function new_nightForm() {
  const [alone, setAlone] = useState('');
  const [feelSafe, setFeelSafe] = useState('');
  const [drinks, setDrinks] = useState(1);
  const [drinkType, setDrinkType] = useState('');
  const [drinkingDuration, setDrinkingDuration] = useState(0);
  const [hadFood, setHadFood] = useState('');
  const [hadWater, setHadWater] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can perform validation and further actions, such as submitting the data to a server
    console.log('Form submitted with:', { alone, feelSafe, drinks, drinkType, drinkingDuration, hadFood, hadWater });
  };

  return (
    <div>
      <h1>Im out tonight!</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Are you alone?</label>
          <div>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={alone === "Yes"}
                onChange={(e) => setAlone(e.target.value)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={alone === "No"}
                onChange={(e) => setAlone(e.target.value)}
              />
              No
            </label>
          </div>
        </div>
        <div>
          <label>Do you feel safe?</label>
          <div>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={feelSafe === "Yes"}
                onChange={(e) => setFeelSafe(e.target.value)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={feelSafe === "No"}
                onChange={(e) => setFeelSafe(e.target.value)}
              />
              No
            </label>
          </div>
        </div>
        <div>
          <label>How many drinks have you had?</label>
          <input
            type="range"
            min={1}
            max={11}
            value={drinks}
            onChange={(e) => setDrinks(parseInt(e.target.value))}
          />
          <span>{drinks}</span>
        </div>
        <div>
          <label>What have you been drinking?</label>
          <input
            type="text"
            value={drinkType}
            onChange={(e) => setDrinkType(e.target.value)}
          />
        </div>
        <div>
          <label>How long have you been drinking?</label>
          <input
            type="range"
            min={0}
            max={2}
            value={drinkingDuration}
            onChange={(e) => setDrinkingDuration(parseInt(e.target.value))}
          />
          <span>{drinkingDuration} hours</span>
        </div>
        <div>
          <label>Have you had food?</label>
          <div>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={hadFood === "Yes"}
                onChange={(e) => setHadFood(e.target.value)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={hadFood === "No"}
                onChange={(e) => setHadFood(e.target.value)}
              />
              No
            </label>
          </div>
        </div>
        <div>
          <label>Have you had water?</label>
          <div>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={hadWater === "Yes"}
                onChange={(e) => setHadWater(e.target.value)}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={hadWater === "No"}
                onChange={(e) => setHadWater(e.target.value)}
              />
              No
            </label>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default new_nightForm;