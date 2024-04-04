import ListGroup from 'react-bootstrap/ListGroup';

export default function Display({ name, id, description }) {

    return (
        <ListGroup.Item variant="success">
            {/* <h4>Id :{id} </h4> */}
            <div className="fw-bold">Name :{name} </div><div>Desc :{description}</div>
            {/* <span>Desc :{description}</span> */}
        </ListGroup.Item>
    );
}