import { ways } from '../data'
import WayToTeach from './WayToTeach';

export default function TeachSection() {
    return (
        <section>
          <h3 style = {{ textAlign: 'center', marginTop: '1rem' }}>Lorem ipsum dolor sit amet </h3>

          <ul>
            {ways.map((way) => (<WayToTeach key={way.title} {...way}/>))}
          </ul>

        </section>
    )
}