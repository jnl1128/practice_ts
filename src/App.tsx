import { useState } from "react";

function App() {
    const [value, setValue] = useState("");
    // 타입스크립트에게 어떤 종류의 element가 onChange 이벤트를 발생시키는지 명시하기
    // 아래의 코드에서는 input element에 의해 onChange 이벤트가 발생함
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setValue(value);
    };
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log("hello", value);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input onChange={onChange} value={value} type="text" placeholder="username" />
                <button>Login</button>
            </form>
        </div>
    );
}

export default App;
