import { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_TEXT_MUTATION } from './mutations';

function TextForm(props) {
  const [task, setTask] = useState('');
  const [addText, { loading, error }] = useMutation(ADD_TEXT_MUTATION);

  const handleSubmit = (event) => {
    event.preventDefault();
    addText({ variables: { task } });
    if (task === '') {
      return;
    }
    props.onTaskAdded(task);
    setTask('')
    console.log(task);
  };

return (
    <div className='AddContainer'>
        <form onSubmit={handleSubmit} className='AddInput'>
            <input 
            type="text" 
            value={task} 
            placeholder="タスクの追加"
            onChange={(e) => setTask(e.target.value)} />
        <button type="submit" disabled={loading} hidden/>
        {error && <p>{error.message}</p>}
        </form>
    </div>
);
}

export default TextForm;
