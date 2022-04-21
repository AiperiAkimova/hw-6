import './Hello.css'

function Hello(props) {
    return (
    <div className="container">
        <p>Имя: {props.name}</p>
        <p>Студент: {props.student}</p>
    </div>
    );
  }

 

  export default Hello