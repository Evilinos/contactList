import React, {useEffect, useState} from "react";

const Search = (props) => {

    const [textSearch, setTextSearch] = useState('');

    const searchContacts = (contacts, textSearch) => {
        let matchesItems = [];
        for (let item of contacts) {
            item.name = item.firstName + ' ' + item.secondName;
            if (item.name.toLowerCase().includes(textSearch.toLowerCase())) matchesItems.push(item);
            delete item.name
        }
        return props.setMatchesContacs(matchesItems)

    };

    useEffect(() => {
        searchContacts(props.contacts, textSearch)
    }, [textSearch]);

    const onChange = (value) => {
        setTextSearch(value)
    };


    return <>
        <input autoFocus
               value={textSearch}
               onChange={(e) => onChange(e.target.value)}
               type="text"/>
               <button onClick={() => props.setSearch(false)}>Close</button>
    </>
};


export default Search