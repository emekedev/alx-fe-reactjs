import {useState} from 'react';

const Search = ({onSearch}) =>{
    const [username, setUsername] = useState('');
    const handleSubmit = (e) =>{
        e.preventDefault();
        if(username.trim()){
            onSearch(username.trim());
            setUsername('')
        }
    }

    return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Enter GitHub username"
        style={{ padding: '8px', fontSize: '16px' }}
      />
      <button type="submit" style={{ padding: '8px 12px', marginLeft: '10px' }}>
        Search
      </button>
    </form>
  );

}

export default Search;