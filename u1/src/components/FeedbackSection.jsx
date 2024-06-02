import { useState } from 'react';
import Button from './Button/Button';
export default function FeedbackSection() {
    const [form, setForm] = useState({
        name: '',
        reason: 'help',
        hasError: true
    });
    // const [hasError, setHasError] = useState(false);
    // const [name, setName] = useState('');
    // const [reason, setReason] = useState('help');

    function handleNameChange(e) {
        setForm((prev) => ({
            ...prev,
            name: e.target.value,
            hasError: e.target.value.trim().length === 0,
        }))
        // setName(e.target.value);
        // setHasError(e.target.value.trim().length === 0);

    }

    function handleReasonChange(e) {
        setReason(e.target.value);
    }
    
    return (
        <section style = {{ textAlign: 'center', marginTop: '1rem' }}>
            <h3>Обратная связь</h3>
            <p>Ваше мнение очень важно для нас!</p>

            <form>
                <label htmlFor="name">Ваше имя</label>
                <input 
                type="text" 
                className="control"
                style={{
                    border: form.hasError ? '1px solid red' : null
                }} 
                value={form.name} 
                onChange={handleNameChange} />

                <label htmlFor="reason">Причина обратной связи</label>
                <select id="reason" className="control" value={form.reason} onChange={(e) => setForm(...prev => ({...prev, reason: e.target.value}))}>
                    <option value="error">Проблема</option>
                    <option value="help">Помощь</option>
                    <option value="suggest">Предложение</option>
                </select> 

                {/* <pre>
                    {JSON.stringify(form, null, 2)}
                </pre> */}

                <Button disabled={form.hasError} isActive={!form.hasError}>Отправить</Button>
            </form>
        </section>
    );
}