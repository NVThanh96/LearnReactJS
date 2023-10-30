import { useState } from "react";

const Content = () => {

  // Thiết lập tên mặt định hiện thị sẽ là Thanh
  const [name, setName] = useState("Thanh");

  const [count, setCount] = useState(0);

    const handleNameChange = () => {
        const names = ['Thành', 'Luyến', 'Chip'];
        const int = Math.floor(Math.random() * 3);
        setName(names[int]); // gắn setName ở trên vào khi click và set onClick={handleNameChange} vào button 
      }

      const handleClickCount = () => {
        setCount(count + 1 );
      }

  return (
    <main>

        <p>
          {/* name sẽ được thay đổi theo const names = ['Thành', 'Luyến', 'Chip']; khi được vào click vào button Change Name*/}
            hello {name}
        </p>
        <button onClick={handleNameChange}>
            Change Name
        </button>
        
        <p>
            Count {count}
        </p>
        <button onClick={handleClickCount}>
            Count Click
        </button>

    </main>
  )
}

export default Content
