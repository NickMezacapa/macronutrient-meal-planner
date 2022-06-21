import React, { useState } from 'react';
import './Table.css';

const Table = () => {
    const [fill, isFilled] = useState('See Options');
    const handleClick_Calories = () => {
        isFilled('See Options');
        const calMessageCta = document.querySelector('.Calories-Message');
        const dailyCalValue = document.getElementById('dailyCals').value;
        const mealsPerDay = document.getElementById('mealsPerDay').value;
        let calPerMeal = Math.floor(dailyCalValue / mealsPerDay);
        let message = `You want to maintain ${dailyCalValue} calories, and you want to eat ${mealsPerDay} meals per day. You should try to eat ${calPerMeal} calories per meal.`;
        calMessageCta.innerText = '';
        calMessageCta.append(message);

    };
    return (
        <section className="Table-Calories_wrapper">
            <div className="Calories-Message"></div>
            <h1 className="Opening-Title_h1">
                Macronutrient Meal Planner
            </h1>
            <div className="Table-Calories_innerContainer">
                <div className="Table-Section_caloriesToMaintain">
                    <label htmlFor="caloriesToMaintain">
                        Total Daily Calories:
                    </label>
                    <input type="text" name="caloriesToMaintain" id='dailyCals' />
                </div>
                <div className="Table-Section_mealsPerDay">
                    <label htmlFor="mealsPerDay">Number of meals per day:</label>
                    <input type="text" name="mealsPerDay" id="mealsPerDay" />
                </div>
                <button id='Table-Calories_nextStep_btn' onClick={handleClick_Calories}>{fill}</button>
            </div>
        </section>
    )
}

export default Table