import React from 'react';
import LanguageCard from './LanguageCard'


const langs = [{name: "Go", detail: "Static typed Lang"}, 
{name:"Java", detail: "Enterprise Language" }]

export default function LanguageList() {
    return (
        <div>
            {langs.map((l) => <LanguageCard language={l} />  )}
        </div>
    )
}
