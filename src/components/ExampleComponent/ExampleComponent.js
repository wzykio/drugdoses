import React, { useState } from "react"
import style from "./ExampleComponent.module.css"

const mojaZmiennaStylów = {
    color: 'blue',
    borderBottom: '1px solid red'
}

const ExampleComponent = () => {

    // Bardzo prosty state: visible który jest booleanem więc tylko true lub false
    // Przyjmijmy że true to będzie element widoczny a false niewidoczny
    // chociaż jak zobaczymy poniżej, wcale nie musi tak być
    const [visible, setVisibility] = useState(true);

    return <>

        {/* Tutaj mamy inputy nic specjalnego */}

        {/* Pierwszy input zmienia state visible na true */}
        <label><input type="radio" checked={visible} onChange={() => setVisibility(true)} />Show</label>

        {/* A drugi na false */}
        <label><input type="radio" checked={!visible} onChange={() => setVisibility(false)} />Hide</label>


        {/* STYLE INLINE */}

        {/* Style można dodawać też tak: */}
        <div style={{ color: 'red' }}>Hi! ^_^</div>

        {/* Lub tak: */}
        <div style={{ color: 'red', display: 'none' }}>O a mnie nie widać O_o</div>

        {/* Lub tak: (zmienna u góry, poza klasą)*/}
        <div style={ mojaZmiennaStylów }>Hmmmm!</div>
        {/* Zauważ że tutaj są pojedyncze nawiasy.
        dzieje się tak dlatego że w poprzednich przypadkach
        budujemy obiekt niejako 'w miejscu'
        a w tym przypadku 'mojaZmiennaStylów' przechowuje już zbudowany obiekt */}

        {/* Zauważcie też że polskie znaki są dozwolone przy budowaniu nazw zmiennych
        aczkolwiek to raczej zła praktyka :) */}


        {/* SHOW / HIDE */}

        {/* Pokażmy sobie najpierw stan 'visible' */}
        <div>Is visible: {String(visible)}</div>

        {/* Możemy użyć conditional cssa do ukrywania elementu */}
        <div style={{ display: visible ? 'block' : 'none' }} className={style.element}>Hello!</div>
        {/* Składnia: 
            <warunek> ? <coś jeśli true> : <coś jeśli false>
        jest poprostu skróconą wersją:
            if (...) {...} else {...} 
        w tym przypadku testujemy wisible:
            visible ? (jeśli visible == true) : (jeśli visible == false)
        czyli w przypadku visible == true styl będzie wyglądać tak:
            style={{ display: 'block' }}
        a przy visible == false
            style={{ display: 'none' }}
        */}

        {/* To jest chyba najlepszy sposób na pokazywanie i ukrywanie elementów w React*/}
        {visible ? <div className={style.element.element2}>Me too!</div> : null}

        {/* Działa również z komponentami: */}
        {visible ? <PsstKids /> : ''}

        {/* Można też tak :) */}
        {visible && <PsstKids who={'another '}/>}

        {/* No i możemy odwrócić logikę poprzez dodanie '!'
        kiedy visible == true to !visible == false i wice wersa */}
        { !visible ? <PsstKids who={'reaallllyyy '}/> : null}

        {/* Lub tak: */}
        { visible || <PsstKids who={'boring '}/>}


        {/* A teraz bonus do rozkminy co tu się dzieje :)  */}

        <div style={{
            color: visible ? 'white' : 'brown',
            backgroundColor: visible ? 'brown' : 'white',
            fontSize : visible ? '0.9em' : '1.1em'
             }}
        >
            Hello!
        </div>

        {/* I pytanie za 100 punktów

        Czym się różni:
             visible ? 'blue' : 'red'
        od
             !visible ? 'red' : 'blue'

        odpowiedzi piszcie na slacku :) */}

        {/* Bonus tip:
        Ctrl + / 
        komentuje lub odkomentowuje zaznaczenie w VScode */}


    </>
}

const PsstKids = ({who}) => {
    return <>
        Hey! I'm some {who && who}shady component!<br />
    </>
}

export default ExampleComponent