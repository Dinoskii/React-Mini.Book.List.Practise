
const Booklist = ({ img, title, author }) => {
    // attribute, eventHandler
    //onClick, onMouseOver
    const clickHandler = (e) => {
        console.log(e);
        console.log(e.target);
        alert('Hello not world');
    }
    const complexExample = (author) => {
        console.log(author);
    }
    return (
        <div className='book' onMouseOver={() => {
            console.log(title);
        }}>
            <img  src={img} alt='' />
            <h1 onClick={() => console.log(title)}>{title}</h1>
            <h4>{author}</h4>
            <button type='button' onClick={clickHandler}>BUTTTTONEE</button>
            <button type='button' onClick={() => complexExample(author)}>More complex example</button>
        </div>
    );
};

export default Booklist
