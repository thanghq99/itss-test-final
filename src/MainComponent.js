import React,{useState} from 'react';
import useNames from './useNames';
function MainComponent() {
    const nameListFixed = ["Huyen","Hoa","Hung","Long"];

    const [input, setInput] = useState('');
    const [names, addName] = useNames(nameListFixed);

    const handleChange = (e) => {
        setInput(e.target.value);
      };

    const onClickHandler = () => {
        addName(input);
        setInput('');
    }

  return (
    <div style={{margin:20}}>
       <div style={{marginTop:15}}>
       学生一覧: [Huyen,Hoa,Hung,Long]
       </div>
        <div style={{marginTop:15}}>
        追加する名前を入力してください：
        </div>
        <div style={{marginTop:15}}>
            <input type="text" value={input} onChange={handleChange} />
        </div>
        <div style={{marginTop:15}}>
            <button onClick={onClickHandler}>
            確認
            </button>
        </div>
        <div style={{marginTop:15}}>
        追加する名前: {input}
        </div>
        <div style={{marginTop:15}}>
        {/* 新しい一覧：[{names.maps( name => name
            )}] */}
            新しい一覧：{names}
        </div>
    </div>
  );
}

export default MainComponent;
