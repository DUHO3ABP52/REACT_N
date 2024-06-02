import Button from './Button/Button';
import { differences } from '../data'
import { useState } from 'react';

export default function Tabs() {
    const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }

    return (
        <section>
          <h3>Lorem ipsum dolor</h3>

          <Button isActive={contentType === 'way'} onClick={() =>handleClick('way')}>Подход</Button>
          <Button isActive={contentType === 'easy'} onClick={() =>handleClick('easy')}>Заход</Button>
          <Button isActive={contentType === 'program'} onClick={() =>handleClick('program')}>Расход</Button>
 
          {!contentType && <p>Нажми кнопку</p>}
          {contentType && <p>{differences[contentType]}</p>}

        </section>
    )
}