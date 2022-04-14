import React, { useState, createContext } from 'react';


export const Context = createContext();

export const ContextProvider = props => {
    const [globalState, setGlobalState] = useState({
        companyName: "",
        name: "",
        phone: "",
        email: "",
        selectedCountry: "",
        isSubmitted: false,
    });

    const setCompanyName = (companyName) => {
        setGlobalState({ ...globalState, companyName: companyName });
    };

    const setName = (name) => {
        setGlobalState({ ...globalState, name: name });
    };

    const setPhone = (phone) => {
        setGlobalState({ ...globalState, phone: phone });
    };

    const setEmail = (email) => {
        setGlobalState({ ...globalState, email: email });
    };

    const setSelectedCountry = (selectedCountry) => {
        setGlobalState({ ...globalState, selectedCountry: selectedCountry });
    };

    const setIsSubmitted = (isSubmitted) => {
        setGlobalState({ ...globalState, isSubmitted: isSubmitted });
    };

    const setAll = (values) => {
        setGlobalState({ ...values });

    }

    return (
        <Context.Provider value={{ globalState, setCompanyName, setName, setPhone, setEmail, setSelectedCountry, setIsSubmitted, setAll }}>
            {props.children}
        </Context.Provider>
    );
}