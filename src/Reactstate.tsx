import React, {useState} from "react";

const Header = () => {

    const [text, setText] = useState('Hello React');
    setTimeout(() => {setText('Bye, bye, React')},3000);
    return <h2>{text}</h2>
        

};

export default Header