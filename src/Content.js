import React from 'react'

const Content = () => {
    const handleNameChange = () => {
        const names = ['Thành', 'Luyến', 'Chip'];
        const int = Math.floor(Math.random() * 3);
        return names[int];
      }

      // 
      const handleClick = () => {
        console.log("you click it");
      }
      
      // lấy tên random trong handleNameChange và nối với click it
      const handleClick2 = (name) => {
        console.log(`${name} click it`);
      }
      
      // lấy giá trị của nút và hiện thị 
      const handleClick3 = (e) => {
        console.log(e.target.innerText);
      }

  return (
    <main>
        <p>
            hello {handleNameChange()}
        </p>
        <button onClick={handleClick}>
            Click it
        </button>
        <button onClick={ () => handleClick2(handleNameChange())}>
            Click
        </button>
        <button onClick={ (e) => handleClick3(e)}>
            Click this
        </button>
    </main>
  )
}

export default Content
