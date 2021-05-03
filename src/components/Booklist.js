import PropTypes from 'prop-types'

const Booklist = (props) => {
    return (
        <div className='book'>
            <img  
                src={props.img}
                alt=''
            />
            <h1>
                {props.title}
            </h1>
            <h4>
                {props.author}
            </h4>
        </div>
    );
};

export default Booklist
