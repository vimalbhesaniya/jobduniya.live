import { City, State } from "country-state-city";
import React, { useMemo, useState } from "react";

const FormSelectBox = ({
    warning,
    className,
    arrayKey,
    stateValue,
    city,
    selectedState,
    selectedCity,
    state
}) => {

    const allStates = State.getStatesOfCountry("IN");
    const allCities = City.getCitiesOfState("IN", selectedState);

    const handleChange = (e) => {
        const value = e.target.value;
        const name = e.target.selectedOptions[0];
        
        if (arrayKey === "states") {
            stateValue(value);
            state(name.id);
            city("");
        } else if (arrayKey === "cities") {
            city(value);
        }
    };

    const renderOptions = useMemo(() => {
        if (arrayKey === "states") {
            return allStates.map((state) => (
                <option key={state.isoCode} value={state.isoCode} id={state.name}>
                    {state.name}
                </option>
            ));
        } else if (arrayKey === "cities") {
            return allCities.map((city) => (
                <option key={city.isoCode} value={city.isoCode}>
                    {city.name}
                </option>
            ));
        }
    }, [allStates, stateValue, city, selectedState]);

    return (
        <div className="--allinput">
            <select
                className={className}
                onChange={handleChange}
                value={arrayKey === "states" ? selectedState : selectedCity}
            >
                <option value="">{arrayKey}</option>
                {renderOptions}
            </select>
            <span>{warning}</span>
        </div>
    );
};

export default FormSelectBox;
