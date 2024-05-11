import './AddClientBox.css';

const AddClientBox = () => {
    return ( 
        <div className="box">
            <div className="name">
                Name: <input type="text" className="textbox" />
            </div>
            <div className="email">
                Email: <input type="text" className="textbox" />
            </div>
            <div className="information">
                Information: <input type="text" className="textbox" />
            </div>
            <button type="button">Upload Files</button>
            <button type="button">Add Content</button>

        </div>
     );
}
 
export default AddClientBox;